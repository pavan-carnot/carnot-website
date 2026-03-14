"use client"

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Handshake, Award, ChevronLeft, ChevronRight } from "lucide-react"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

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

// ── Card geometry (matches homepage TrustSection) ──────────────────────────────
const CARD_W   = 180
const CARD_H   = 210
const STEP_X   = 200
const ROTATE_Y = 28
const SCALE_D  = 0.04

// ── Client data ────────────────────────────────────────────────────────────────
const clientImages = [
  { id: 1, name: "Enhance Communications",   src: `${B}/assets/clients/1.webp` },
  { id: 2, name: "OPPO",                     src: `${B}/assets/clients/2.webp` },
  { id: 3, name: "NSG",                      src: `${B}/assets/clients/3.webp` },
  { id: 4, name: "IIT Delhi",                src: `${B}/assets/clients/4.webp` },
  { id: 5, name: "JICA",                     src: `${B}/assets/clients/5.png`  },
  { id: 6, name: "BCG",                      src: `${B}/assets/clients/6.webp` },
  { id: 7, name: "FITT",                     src: `${B}/assets/clients/7.png`  },
  { id: 8, name: "MSME",                     src: `${B}/assets/clients/8.webp` },
  { id: 9, name: "Rashtriya Raksha University", src: `${B}/assets/clients/9.png` },
]

// ── Curved Fan Carousel (same as homepage TrustSection) ───────────────────────
function CurvedCarousel() {
  const [active, setActive] = useState(0)
  const total = clientImages.length
  const [paused, setPaused] = useState(false)

  const prev = useCallback(() => setActive(a => (a - 1 + total) % total), [total])
  const next = useCallback(() => setActive(a => (a + 1) % total), [total])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3200)
    return () => clearInterval(id)
  }, [next, paused])

  return (
    <div
      className="select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 3D stage — overflow visible so cards bleed off edges (section clips them) */}
      <div
        className="relative w-full"
        style={{ perspective: "1200px", height: CARD_H + 44 }}
      >
        {clientImages.map((client, i) => {
          let d = i - active
          if (d > total / 2)  d -= total
          if (d < -total / 2) d += total
          const abs      = Math.abs(d)
          const isActive = d === 0

          if (abs > 3) return null

          return (
            <motion.div
              key={client.id}
              style={{
                position:   "absolute",
                left:       "50%",
                top:        "50%",
                marginLeft: -CARD_W / 2,
                marginTop:  -(CARD_H + 16) / 2,
                zIndex:     10 - abs,
                cursor:     isActive ? "default" : "pointer",
              }}
              animate={{
                x:       d * STEP_X,
                rotateY: d * ROTATE_Y,
                scale:   1 - abs * SCALE_D,
                opacity: abs === 3 ? 0.5 : 1,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 38 }}
              onClick={() => !isActive && setActive(i)}
            >
              {/* Portrait card */}
              <div
                className="relative flex flex-col overflow-hidden rounded-2xl bg-white"
                style={{
                  width:     CARD_W,
                  height:    CARD_H,
                  border:    isActive ? "1.5px solid #93c5fd" : "1.5px solid #f1f5f9",
                  boxShadow: isActive
                    ? "0 20px 60px rgba(37,99,235,0.18), 0 4px 20px rgba(0,0,0,0.06)"
                    : "0 4px 20px rgba(0,0,0,0.07)",
                }}
              >
                <div className="flex flex-1 items-center justify-center px-6 pt-5 pb-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.src}
                    alt={client.name}
                    style={{ maxHeight: 90, maxWidth: 120, objectFit: "contain" }}
                  />
                </div>
                <div className="flex items-center justify-center border-t border-gray-50 px-3 py-2.5">
                  <p className="text-center text-xs font-medium leading-tight text-gray-500">
                    {client.name}
                  </p>
                </div>
              </div>

              {/* Active indicator pill */}
              {isActive && (
                <motion.div
                  layoutId="activePillClients"
                  className="mx-auto mt-2.5 h-1 w-8 rounded-full bg-blue-500"
                />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="mt-9 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-blue-300 hover:text-blue-500"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {clientImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{ height: 6, width: i === active ? 20 : 6, background: i === active ? "#2563eb" : "#d1d5db" }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-blue-300 hover:text-blue-500"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Active client name crossfade */}
      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="mt-3 text-center text-xs font-medium text-gray-400"
        >
          {clientImages[active].name}
        </motion.p>
      </AnimatePresence>
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
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        {/* Radial spotlight glow — matches homepage TrustSection */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 900px 480px at 50% 48%, #eff6ff 0%, transparent 68%)" }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.05) 1px, transparent 0)", backgroundSize: "28px 28px" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
        </div>

        {/* Full-width carousel — section's overflow-hidden clips edge cards */}
        <FadeUp delay={150}>
          <CurvedCarousel />
        </FadeUp>
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
                  understanding, ensuring that AI systems are not just deployed,
                  but integrated seamlessly into existing workflows and
                  decision-making processes.
                </p>
                <p className="font-semibold text-gray-900">
                  We don&apos;t just build AI systems. We build long-term partnerships
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
