"use client"

import Image from "next/image"
import { useEffect, useRef, useState, useCallback, type ReactNode } from "react"
import { Building2, Handshake, Award, ChevronLeft, ChevronRight } from "lucide-react"

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={className}
      style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}
    >
      {children}
    </div>
  )
}

// ── Client data ────────────────────────────────────────────────────────────────
const clientImages = [
  { id: 1, name: "FITT IIT Delhi",           src: "/assets/clients/1.webp" },
  { id: 2, name: "MSME",                      src: "/assets/clients/2.webp" },
  { id: 3, name: "Rashtriya Raksha Univ.",    src: "/assets/clients/3.webp" },
  { id: 4, name: "Enhanced Communications",  src: "/assets/clients/4.webp" },
  { id: 5, name: "OPPO",                      src: "/assets/clients/5.png"  },
  { id: 6, name: "NSG",                       src: "/assets/clients/6.webp" },
  { id: 7, name: "IIT Delhi",                 src: "/assets/clients/7.png"  },
  { id: 8, name: "Boston Consulting Group",  src: "/assets/clients/8.webp" },
  { id: 9, name: "JICA",                      src: "/assets/clients/9.png"  },
]

// ── 3D Curved Carousel ─────────────────────────────────────────────────────────
function CurvedCarousel() {
  const [active, setActive] = useState(0)
  const total = clientImages.length

  const prev = useCallback(() => setActive(a => (a - 1 + total) % total), [total])
  const next = useCallback(() => setActive(a => (a + 1) % total), [total])

  // Auto-advance every 3 s, pause on hover
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 3000)
    return () => clearInterval(t)
  }, [next, paused])

  const getStyle = (index: number): React.CSSProperties => {
    let diff = index - active
    // wrap around
    if (diff > total / 2)  diff -= total
    if (diff < -total / 2) diff += total

    const abs = Math.abs(diff)
    if (abs > 2) return { opacity: 0, pointerEvents: "none", position: "absolute" }

    const translateX = diff * 190
    const rotateY    = diff * 42
    const translateZ = -abs * 110
    const scale      = 1 - abs * 0.17
    const opacity    = 1 - abs * 0.28

    return {
      position:   "absolute",
      left:       "50%",
      top:        "50%",
      transform:  `translate(-50%, -50%) translateX(${translateX}px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
      opacity,
      zIndex:     10 - abs,
      transition: "all 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      cursor:     diff === 0 ? "default" : "pointer",
    }
  }

  return (
    <div
      className="select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 3-D stage */}
      <div
        className="relative mx-auto h-60"
        style={{ perspective: "1100px", maxWidth: 720 }}
      >
        {clientImages.map((client, i) => {
          let diff = i - active
          if (diff > total / 2)  diff -= total
          if (diff < -total / 2) diff += total
          const isCenter = diff === 0

          return (
            <div key={client.id} style={getStyle(i)} onClick={() => !isCenter && setActive(i)}>
              <div
                className={`
                  flex h-40 w-40 flex-col items-center justify-center rounded-2xl border bg-white p-5
                  transition-shadow duration-300
                  ${isCenter
                    ? "border-blue-200 shadow-[0_8px_40px_rgba(37,99,235,0.15)]"
                    : "border-gray-100 shadow-md"}
                `}
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={96}
                  height={96}
                  className="h-20 w-auto object-contain"
                  unoptimized
                />
              </div>
              {/* Name label only on centre card */}
              {isCenter && (
                <p className="mt-2.5 text-center text-xs font-semibold text-gray-600">
                  {client.name}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-center gap-5">
        <button
          onClick={prev}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-700"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {clientImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-5 bg-blue-600" : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-700"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

// ── Sectors ────────────────────────────────────────────────────────────────────
const sectors = [
  {
    icon: Building2,
    title: "Government & Defense",
    description:
      "Secure AI systems for ministries, defense organizations, and public-sector institutions requiring data sovereignty and mission-critical reliability.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Handshake,
    title: "Enterprise & Industry",
    description:
      "On-premise AI infrastructure for large enterprises, regulated industries, and organizations with strict compliance requirements.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Award,
    title: "Research & Academia",
    description:
      "Collaborative research partnerships with leading academic institutions, translating cutting-edge research into deployable systems.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
]

// ── Page ───────────────────────────────────────────────────────────────────────
export function ClientsPartnersContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-50 blur-3xl opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                Clients &amp; Partners
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Organizations We Work With
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-500">
                Working alongside leading public-sector institutions and global
                organizations to accelerate AI-driven governance and enterprise
                intelligence.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3D Carousel */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-xl text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                Our Clients
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Trusted by Leading Institutions
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                From government agencies to global consultancies
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <CurvedCarousel />
          </FadeUp>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
                Sectors We Serve
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Building AI Across Critical Sectors
              </h2>
            </div>
          </FadeUp>
          <div className="grid gap-8 sm:grid-cols-3">
            {sectors.map((sector, i) => (
              <FadeUp key={sector.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-100">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-100" />
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${sector.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    <sector.icon className={`h-6 w-6 ${sector.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{sector.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{sector.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Our Partnership Approach
              </h2>
              <div className="mt-8 space-y-4 text-left text-base leading-relaxed text-gray-500">
                <p>
                  We work closely with our clients to understand their unique
                  operational requirements, security constraints, and strategic
                  objectives. Every partnership is built on trust, transparency,
                  and a shared commitment to delivering measurable impact.
                </p>
                <p>
                  Our approach combines deep technical expertise with institutional
                  understanding — ensuring that AI systems are not just deployed,
                  but integrated seamlessly into existing workflows and
                  decision-making processes.
                </p>
                <p className="font-semibold text-gray-900">
                  We don&apos;t just build AI systems — we build long-term partnerships
                  that strengthen institutional capability.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
