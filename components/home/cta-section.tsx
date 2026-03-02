"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } }, { threshold: 0.1 })
    ob.observe(el)
    return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

// ── Hyperspace tunnel canvas ──────────────────────────────────────────────────
// Colorful rectangles spawn near the center and fly outward radially,
// accelerating as they go — creates the "warp speed" tunnel illusion.
function HyperspaceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafId     = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Palette: blue, purple, cyan, magenta, white accents
    const PALETTE: [number, number, number][] = [
      [80,  140, 255],   // electric blue
      [140,  80, 255],   // vivid purple
      [60,  220, 240],   // cyan
      [240,  80, 200],   // magenta
      [160, 120, 255],   // lavender
      [80,  200, 255],   // sky
      [255, 255, 255],   // white (rare bright streak)
    ]
    const WEIGHTS = [4, 4, 3, 3, 3, 3, 1]  // relative spawn frequency

    interface Streak {
      angle:     number
      d:         number   // current distance from center
      baseSpeed: number   // fixed per streak; progress scales it up
      w:         number   // width (across travel axis)
      h:         number   // height (along travel axis, grows with distance)
      color:     [number, number, number]
      maxD:      number   // distance at which it expires
    }

    let W = 0, H = 0
    const streaks: Streak[] = []

    // Pick a color respecting weights
    const pickColor = (): [number, number, number] => {
      const total = WEIGHTS.reduce((a, b) => a + b, 0)
      let r = Math.random() * total
      for (let i = 0; i < PALETTE.length; i++) {
        r -= WEIGHTS[i]
        if (r <= 0) return PALETTE[i]
      }
      return PALETTE[0]
    }

    const spawnAt = (d: number): Streak => ({
      angle:     Math.random() * Math.PI * 2,
      d,
      baseSpeed: 0.5 + Math.random() * 1.2,
      w:         1.5 + Math.random() * 4,
      h:         6   + Math.random() * 18,
      color:     pickColor(),
      maxD:      Math.hypot(W / 2, H / 2) * (0.85 + Math.random() * 0.20),
    })

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width  = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    // ── Warp cycle: long slow drift → sudden fast burst → instant reset ──────
    // No ramp-up: the switch is immediate for a jarring warp effect.
    const CYCLE_MS = 3000   // 7 s total
    const SLOW_MS  = 1000   // 4 s slow
    const FAST_MS  = 2000   // 3 s fast
    const SLOW_LVL = 0.06   // very slow drift
    const FAST_LVL = 15    // sudden warp
    const startTime = performance.now()

    const getWarpLevel = (now: number): number => {
      const t = (now - startTime) % CYCLE_MS
      return t < SLOW_MS ? SLOW_LVL : FAST_LVL
    }

    const draw = (timestamp: number) => {
      const warpLevel = getWarpLevel(timestamp)

      // ── Background ──────────────────────────────────────────────────────
      const bg = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.hypot(W, H) * 0.6)
      bg.addColorStop(0,   "#0e1540")
      bg.addColorStop(0.5, "#07103080")
      bg.addColorStop(1,   "#030818")
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      const cx = W / 2, cy = H / 2

      // ── Spawn ────────────────────────────────────────────────────────────
      // Add a few new streaks each frame (cap at 150)
      const toSpawn = streaks.length < 150 ? 3 : 1
      for (let i = 0; i < toSpawn; i++) streaks.push(spawnAt(0))

      // ── Update + Draw ────────────────────────────────────────────────────
      for (let i = streaks.length - 1; i >= 0; i--) {
        const s = streaks[i]

        const progress = s.d / s.maxD   // 0 → 1

        // Speed grows with distance (perspective illusion), gated by warp cycle.
        // baseSpeed is fixed per streak — no compounding, clean warp control.
        s.d += s.baseSpeed * (1 + progress * 3) * warpLevel

        if (progress >= 1) { streaks.splice(i, 1); continue }

        // Opacity: fade in near center (0–12%), full, fade out near edge (75–100%)
        let alpha = 1
        if      (progress < 0.12) alpha = progress / 0.12
        else if (progress > 0.75) alpha = 1 - (progress - 0.75) / 0.25
        alpha = Math.max(0, Math.min(1, alpha)) * 0.90

        // Scale grows with distance — perspective effect
        const scale = 0.12 + progress * 1.6

        const x = cx + Math.cos(s.angle) * s.d
        const y = cy + Math.sin(s.angle) * s.d

        // Rect dimensions: thin across, long along travel direction
        const rw = s.w * (0.4 + progress * 0.9)
        const rh = s.h * scale

        const [r, g, b] = s.color

        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(s.angle + Math.PI / 2)   // orient rect along travel axis
        ctx.globalAlpha = alpha

        // Soft glow behind the rect
        ctx.shadowColor  = `rgba(${r},${g},${b},0.9)`
        ctx.shadowBlur   = 10
        ctx.fillStyle    = `rgba(${r},${g},${b},1)`
        ctx.fillRect(-rw / 2, -rh / 2, rw, rh)

        ctx.restore()
      }

      rafId.current = requestAnimationFrame(draw)
    }

    resize()

    // Pre-populate so animation is full immediately (no ramp-up delay)
    for (let i = 0; i < 100; i++) {
      const maxD = Math.hypot(W / 2, H / 2) * 0.9
      streaks.push(spawnAt(Math.random() * maxD * 0.85))
    }

    rafId.current = requestAnimationFrame(draw)

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  )
}

// ── CTA Section ───────────────────────────────────────────────────────────────
export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "#040c20" }}   // fallback while canvas loads
    >
      <HyperspaceCanvas />

      {/* Subtle vignette so text edges stay readable */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(4,12,32,0.55) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/70" />
              Get Started Today
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to deploy secure{" "}
              <span className="text-[#93c5fd]">enterprise AI?</span>
            </h2>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
              Talk to our AI experts and discover how Carnot Research can transform
              your organisation with secure, on-premise generative AI — built for
              government, defense, and enterprise.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-[#1e3a8a] font-semibold shadow-xl hover:bg-white/90 hover:shadow-2xl transition-all"
              >
                <Link href="/contact">
                  Talk to AI Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/30 text-white bg-white/8 hover:bg-white/15 hover:border-white/50 backdrop-blur-sm"
              >
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Book Enterprise Demo
                </Link>
              </Button>
            </div>

            <p className="mt-8 text-xs text-white/40">
              Deployed across government agencies and enterprise organisations across India
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
