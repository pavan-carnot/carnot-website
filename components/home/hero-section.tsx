"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { ChevronRight } from "lucide-react"

// ─── Antigravity Canvas ────────────────────────────────────────────────────────
// Faithful port of davidpelayo/antigravity-animation (the effect used on
// antigravity.google).  Physics constants taken verbatim from source:
//   • gravity = -0.05  → upward anti-gravity per frame
//   • friction = 0.98  → velocity damping
//   • interactionRadius = 150 px, push = force × 4
//   • shapes: circle / square / triangle  (randomly mixed)
//   • depth 0.5–1.5: scales both movement and visual size (parallax)
//   • subtle drop-shadow per particle for depth
// ──────────────────────────────────────────────────────────────────────────────

// Exact palette from the source (includes the light accent colours)
const PALETTE = [
  "#EA4335", "#FBBC05", "#34A853", "#4285F4",
  "#E8F0FE", "#DADCE0",
]

type ShapeType = 0 | 1 | 2   // circle | square | triangle

interface Particle {
  x: number; y: number
  vx: number; vy: number
  size: number          // base size (5–20 px)
  color: string
  rotation: number
  rotationSpeed: number
  type: ShapeType
  depth: number         // 0.5–1.5
}

function createParticle(W: number, H: number, randomY = false): Particle {
  const depth = 0.5 + Math.random()
  return {
    x: Math.random() * W,
    y: randomY ? Math.random() * H : H + 50,
    vx: (Math.random() - 0.5) * 2 * 0.8,
    vy: (Math.random() - 0.5) * 2 * 0.8,
    size: Math.random() * 15 + 5,          // 5–20 px
    color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.05,
    type: Math.floor(Math.random() * 3) as ShapeType,
    depth,
  }
}

function drawShape(ctx: CanvasRenderingContext2D, p: Particle) {
  const s = p.size * p.depth   // depth-scaled visual size

  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate(p.rotation)
  ctx.fillStyle = p.color
  ctx.shadowColor = "rgba(0,0,0,0.07)"
  ctx.shadowBlur  = 10 * p.depth
  ctx.shadowOffsetX = 5
  ctx.shadowOffsetY = 5
  ctx.beginPath()

  if (p.type === 0) {
    // Circle
    ctx.arc(0, 0, s / 2, 0, Math.PI * 2)
  } else if (p.type === 1) {
    // Square
    ctx.rect(-s / 2, -s / 2, s, s)
  } else {
    // Triangle
    ctx.moveTo(0, -s / 2)
    ctx.lineTo(s / 2,  s / 2)
    ctx.lineTo(-s / 2, s / 2)
    ctx.closePath()
  }

  ctx.fill()
  ctx.restore()
}

function AntigravityCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    let W = window.innerWidth
    let H = window.innerHeight

    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)
    }
    resize()

    // 45 particles — exact default from source
    const PARTICLE_COUNT = 45
    const particles: Particle[] = Array.from(
      { length: PARTICLE_COUNT },
      () => createParticle(W, H, true)   // randomY on init
    )

    const mouse = { x: -1000, y: -1000 }
    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onTouchMove = (e: TouchEvent) => {
      mouse.x = e.touches[0].clientX
      mouse.y = e.touches[0].clientY
    }
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("touchmove",  onTouchMove)

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // Physics constants — verbatim from source
    const GRAVITY  = -0.05
    const FRICTION =  0.98
    const RADIUS   =  150
    const PUSH     =  4

    let raf: number

    const animate = () => {
      ctx.clearRect(0, 0, W, H)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Anti-gravity (upward)
        p.vy += GRAVITY * 0.05 * p.depth

        // Position update (depth-scaled)
        p.x += p.vx * p.depth
        p.y += p.vy * p.depth

        // Rotation
        p.rotation += p.rotationSpeed

        // Cursor repulsion
        const dx   = p.x - mouse.x
        const dy   = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < RADIUS) {
          const force = (RADIUS - dist) / RADIUS
          const angle = Math.atan2(dy, dx)
          p.vx += Math.cos(angle) * force * PUSH
          p.vy += Math.sin(angle) * force * PUSH
        }

        // Friction
        p.vx *= FRICTION
        p.vy *= FRICTION

        // Wrap sides
        if (p.x < -50)     p.x = W + 50
        if (p.x > W + 50)  p.x = -50

        // Recycle when particle exits top
        if (p.y < -60) {
          particles[i] = createParticle(W, H, false)  // respawn at bottom
        }

        drawShape(ctx, p)
      }

      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("touchmove",  onTouchMove)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}

// ─── Word-by-word animated heading ────────────────────────────────────────────
// Splits text into words and staggers them in with wordReveal keyframe
function AnimatedWords({
  text,
  color,
  startIndex = 0,
  className = "",
}: {
  text: string
  color?: string
  startIndex?: number
  className?: string
}) {
  const words = text.split(" ")
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            color: color,
            marginRight: "0.28em",
            opacity: 0,
            animation: `wordReveal 0.55s cubic-bezier(0.22,1,0.36,1) both`,
            animationDelay: `${(startIndex + i) * 0.09}s`,
          }}
          className={className}
        >
          {word}
        </span>
      ))}
    </>
  )
}

// ─── Hero Section ──────────────────────────────────────────────────────────────
export function HeroSection() {
  // word counts for delay chaining:
  //   badge label: 4 words  → headline line 1 starts at 4
  //   "Knowledge AI built for": 4 words → line 2 starts at 8
  //   "India's toughest": 2 words, "environments.": 1 → sub starts at 11
  //   sub: 12 words → buttons start at 23
  const badgeWords  = 0          // badge fades in as block, no per-word split
  const line1Start  = 2          // after badge (~0.4s)
  const line1Words  = "Knowledge AI built for".split(" ").length        // 4
  const line2Start  = line1Start + line1Words                           // 6
  const line2Words  = "India's toughest".split(" ").length              // 2
  const line2Accent = line2Start + line2Words                           // 8 → "environments."
  const subStart    = line2Accent + 1                                   // 9
  const subWords    = "100% on-premise AI for Government, Defense & Enterprise. Zero cloud dependency. Full data sovereignty.".split(" ").length
  const btnStart    = subStart + subWords                               // ~21

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#ffffff", height: "calc(100vh - 3.75rem)" }}
    >
      <AntigravityCanvas />

      {/* ── Centred content ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ maxWidth: 780, padding: "0 1.5rem" }}
      >

        {/* ── Brand badge — slides in first ── */}
        <div
          className="mb-8 flex items-center gap-2.5"
          style={{
            opacity: 0,
            animation: "wordReveal 0.5s cubic-bezier(0.22,1,0.36,1) 0.1s both",
          }}
        >
          {/* Black + teal stacked triangles */}
          <svg width="26" height="26" viewBox="0 0 30 30" fill="none">
            <polygon points="15,2 28,26 2,26"  fill="#0f172a" opacity="0.85" />
            <polygon points="15,8 24,23 6,23"  fill="#0d9488" opacity="0.9"  />
            <polygon points="15,14 21,22 9,22" fill="#14b8a6" opacity="0.95" />
          </svg>
          <span style={{ fontSize: 15, fontWeight: 500, color: "#0f172a", letterSpacing: "-0.01em" }}>
            Carnot Research
          </span>
        </div>

        {/* ── Headline — word by word ── */}
        <h1
          style={{
            fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: "#0f172a",
            marginBottom: "1.2rem",
            wordSpacing: 0,
          }}
        >
          <span className="block">
            <AnimatedWords text="Knowledge AI built for" startIndex={line1Start} />
          </span>
          <span className="block">
            <AnimatedWords text="India's toughest" startIndex={line2Start} />
            <AnimatedWords
              text="environments."
              color="#0d9488"
              startIndex={line2Accent}
            />
          </span>
        </h1>

        {/* ── Sub-copy — word by word ── */}
        <p
          style={{
            fontSize: "clamp(0.92rem, 1.6vw, 1.05rem)",
            fontWeight: 400,
            color: "#475569",
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: "2.6rem",
            wordSpacing: 0,
          }}
        >
          <AnimatedWords
            text="100% on-premise AI for Government, Defense & Enterprise. Zero cloud dependency. Full data sovereignty."
            startIndex={subStart}
          />
        </p>

        {/* ── CTA buttons — fade up together after words ── */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3"
          style={{
            opacity: 0,
            animation: `wordReveal 0.55s cubic-bezier(0.22,1,0.36,1) ${(btnStart * 0.09 + 0.05).toFixed(2)}s both`,
          }}
        >
          <Link
            href="/products/icarkno"
            className="inline-flex items-center gap-2 transition-all duration-150 hover:opacity-90 active:scale-[.97]"
            style={{
              background: "#0f172a",
              color: "#fff",
              borderRadius: 9999,
              padding: "13px 28px",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 14px rgba(15,23,42,0.20)",
            }}
          >
            Explore icarKno™
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 transition-all duration-150 active:scale-[.97]"
            style={{
              background: "transparent",
              color: "#0d9488",
              borderRadius: 9999,
              padding: "13px 28px",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.01em",
              border: "1.5px solid #0d9488",
              whiteSpace: "nowrap",
            }}
          >
            Book a Demo <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
        style={{ zIndex: 10, opacity: 0.22 }}
      >
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
          <rect x="1" y="1" width="12" height="20" rx="6" stroke="#9aa0a6" strokeWidth="1.4" />
          <circle cx="7" cy="6" r="2" fill="#9aa0a6">
            <animate attributeName="cy" values="6;14;6" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  )
}
