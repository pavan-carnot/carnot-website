"use client"

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, ShieldCheck, BadgeCheck, Building, ChevronLeft, ChevronRight } from "lucide-react"

// basePath-aware static assets (next/image unoptimized skips basePath in export mode)
const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

// ── Card geometry ──────────────────────────────────────────────────────────────
const CARD_W    = 180   // px
const CARD_H    = 210   // px
const STEP_X    = 200   // px per slot — wide spread so outer cards bleed off edges
const ROTATE_Y  = 28    // degrees per slot
const SCALE_D   = 0.04  // scale loss per slot

// ── Data ───────────────────────────────────────────────────────────────────────
const clients = [
  { id: 3, name: "NSG",                         src: `${B}/assets/clients-logos/3.webp` },
  { id: 4, name: "IIT Delhi",                   src: `${B}/assets/clients-logos/4.webp` },
  { id: 5, name: "BCG",                         src: `${B}/assets/clients-logos/5.png`  },
  { id: 6, name: "JICA",                        src: `${B}/assets/clients-logos/6.webp` },
  { id: 7, name: "FITT",                        src: `${B}/assets/clients-logos/7.png`  },
  { id: 8, name: "MSME",                        src: `${B}/assets/clients-logos/8.webp` },
  { id: 9, name: "Rashtriya Raksha University", src: `${B}/assets/clients-logos/9.png`  },
]

const certifications = [
  { icon: Award,       title: "CMMI Level 3",      detail: "Cert No. ECI/2411/0710", iconBg: "bg-amber-50", iconColor: "text-amber-600", border: "border-amber-100 hover:border-amber-300" },
  { icon: ShieldCheck, title: "ISO/IEC 27001:2022", detail: "Cert No. IN241123021",  iconBg: "bg-blue-50",  iconColor: "text-blue-600",  border: "border-blue-100 hover:border-blue-300"  },
  { icon: BadgeCheck,  title: "DPIIT Certified",    detail: "Cert No. DIPP162658",   iconBg: "bg-blue-50",  iconColor: "text-blue-600",  border: "border-blue-100 hover:border-blue-300"  },
  { icon: Building,    title: "MSME Certified",     detail: "UDYAM-DL-08-0069895",   iconBg: "bg-cyan-50",  iconColor: "text-cyan-600",  border: "border-cyan-100 hover:border-cyan-300"  },
]

// ── Helpers ────────────────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } },
      { threshold: 0.08 }
    )
    ob.observe(el); return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}
      style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

// ── Curved Fan Carousel ────────────────────────────────────────────────────────
// 7 portrait cards arranged in a 3D fan arc across the full viewport width.
// Framer Motion spring physics drives smooth position transitions.
// No overflow-hidden on the stage — cards naturally bleed off viewport edges.
function CurvedCarousel() {
  const [active, setActive] = useState(0)
  const total   = clients.length
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
      {/* ── 3D stage ──
          perspective on the parent establishes the shared 3D context.
          overflow: visible so outer cards spill to viewport edges (clipped by section). */}
      <div
        className="relative w-full"
        style={{ perspective: "1200px", height: CARD_H + 44 }}
      >
        {clients.map((client, i) => {
          // Shortest-path diff for seamless loop
          let d = i - active
          if (d > total / 2)  d -= total
          if (d < -total / 2) d += total
          const abs     = Math.abs(d)
          const isActive = d === 0

          if (abs > 3) return null   // hide cards 4+ slots away

          return (
            <motion.div
              key={client.id}
              // Static position — centered in stage, zIndex instant-updates
              style={{
                position:  "absolute",
                left:      "50%",
                top:       "50%",
                marginLeft: -CARD_W / 2,
                marginTop:  -(CARD_H + 16) / 2,
                zIndex:     10 - abs,
                cursor:     isActive ? "default" : "pointer",
              }}
              // Spring-animated transforms — this is what creates the arc effect
              animate={{
                x:       d * STEP_X,
                rotateY: d * ROTATE_Y,
                scale:   1 - abs * SCALE_D,
                opacity: abs === 3 ? 0.5 : 1,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 38 }}
              onClick={() => !isActive && setActive(i)}
            >
              {/* ── Portrait Card ── */}
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
                {/* Logo */}
                <div className="flex flex-1 items-center justify-center px-6 pt-5 pb-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.src}
                    alt={client.name}
                    style={{ maxHeight: 90, maxWidth: 120, objectFit: "contain" }}
                  />
                </div>

                {/* Name strip */}
                <div className="flex items-center justify-center border-t border-gray-50 px-3 py-2.5">
                  <p className="text-center text-xs font-medium leading-tight text-gray-500">
                    {client.name}
                  </p>
                </div>
              </div>

              {/* Active indicator pill */}
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="mx-auto mt-2.5 h-1 w-8 rounded-full bg-blue-500"
                />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* ── Navigation ── */}
      <div className="mt-9 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-blue-300 hover:text-blue-500"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {clients.map((_, i) => (
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

      {/* Active client name with crossfade */}
      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="mt-3 text-center text-xs font-medium text-gray-400"
        >
          {clients[active].name}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

// ── Section ────────────────────────────────────────────────────────────────────
export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">

      {/* Blue spotlight — gives carousel area a premium glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 900px 480px at 50% 48%, #eff6ff 0%, transparent 68%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.05) 1px, transparent 0)", backgroundSize: "28px 28px" }}
      />

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">Trusted By</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Organizations across India trust our work
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              From national security agencies and IIT Delhi to global consultancies and enterprise teams
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Full-width carousel — section's overflow-hidden clips the edge cards */}
      <FadeUp delay={120}>
        <CurvedCarousel />
      </FadeUp>

      {/* Certifications */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp delay={220}>
          <div className="mt-16 border-t border-gray-100 pt-10">
            <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-widest text-gray-400">
              Certifications &amp; Compliance
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className={`group flex items-center gap-3 rounded-xl border ${cert.border} bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${cert.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    <cert.icon className={`h-4 w-4 ${cert.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight text-gray-900">{cert.title}</p>
                    <p className="mt-0.5 text-[10px] text-gray-400">{cert.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Stay connected */}
        <FadeUp delay={320}>
          <div className="mt-12 border-t border-gray-100 pt-10 text-center">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
              Stay Connected
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* YouTube — red */}
              <a
                href="https://www.youtube.com/@CarnotResearch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-100 hover:shadow-md"
              >
                <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M21.6 10.4C21.4 9.6 20.7 9 19.9 8.8C18.5 8.5 14 8.5 14 8.5C14 8.5 9.5 8.5 8.1 8.8C7.3 9 6.6 9.6 6.4 10.4C6.1 11.8 6.1 14 6.1 14C6.1 14 6.1 16.2 6.4 17.6C6.6 18.4 7.3 19 8.1 19.2C9.5 19.5 14 19.5 14 19.5C14 19.5 18.5 19.5 19.9 19.2C20.7 19 21.4 18.4 21.6 17.6C21.9 16.2 21.9 14 21.9 14C21.9 14 21.9 11.8 21.6 10.4ZM12.2 16.5V11.5L16.6 14L12.2 16.5Z" fill="#FF0000"/>
                </svg>
                <span>Watch demos on YouTube</span>
              </a>

              {/* LinkedIn — blue */}
              <a
                href="https://www.linkedin.com/company/carnot-research-pvt-ltd/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-[#c8dff5] bg-[#e8f1fb] px-4 py-2 text-sm font-medium text-[#0A66C2] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4e8f7] hover:shadow-md"
              >
                <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M9.5 11.5H7V21H9.5V11.5ZM8.25 10.5C9.08 10.5 9.75 9.83 9.75 9C9.75 8.17 9.08 7.5 8.25 7.5C7.42 7.5 6.75 8.17 6.75 9C6.75 9.83 7.42 10.5 8.25 10.5ZM21 21H18.5V16.3C18.5 14.3 16 14.45 16 16.3V21H13.5V11.5H16V12.97C17.06 11.06 21 10.92 21 14.97V21Z" fill="#0A66C2"/>
                </svg>
                <span>Follow us on LinkedIn</span>
              </a>

              {/* Medium — black */}
              <a
                href="https://carnotresearch.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-md"
              >
                <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M7 9.5L5.3 7.8V7.5H10.4L14.4 16.2L17.9 7.5H22.8V7.8L21.3 9.3C21.2 9.4 21.1 9.6 21.15 9.75V18.25C21.1 18.4 21.2 18.6 21.3 18.7L22.75 20.2V20.5H15.35V20.2L16.85 18.65C17 18.5 17 18.45 17 18.2V12.5L13 20.45H12.55L7.85 12.5V17.7C7.8 18.05 7.95 18.4 8.2 18.6L10.15 21.05V21.35H4.5V21.05L6.45 18.6C6.7 18.4 6.85 18.05 6.8 17.7V11C6.85 10.75 6.75 10.5 6.6 10.3L7 9.5Z" fill="#1a1a1a"/>
                </svg>
                <span>Read our research on Medium</span>
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
