"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Award, ShieldCheck, BadgeCheck, Building } from "lucide-react"

function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } },
      { threshold: 0.08 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}
      style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

// Row 1 — forward
const row1 = [
  "FITT IIT Delhi",
  "Ministry of MSME",
  "Rashtriya Raksha University",
  "OPPO",
  "NSG",
  "IIT Delhi",
  "Boston Consulting Group",
  "JICA",
]

// Row 2 — reverse (reordered for visual variety)
const row2 = [
  "Boston Consulting Group",
  "JICA",
  "NSG",
  "FITT IIT Delhi",
  "IIT Delhi",
  "Rashtriya Raksha University",
  "OPPO",
  "Ministry of MSME",
]

// Duplicate each for seamless infinite scroll
const marqueeRow1 = [...row1, ...row1]
const marqueeRow2 = [...row2, ...row2]

const certifications = [
  {
    icon: Award,
    title: "CMMI Level 3",
    detail: "Cert No. ECI/2411/0710",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "border-amber-100 hover:border-amber-300",
    glow: "hover:shadow-amber-100/60",
  },
  {
    icon: ShieldCheck,
    title: "ISO/IEC 27001:2022",
    detail: "Cert No. IN241123021",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    border: "border-blue-100 hover:border-blue-300",
    glow: "hover:shadow-blue-100/60",
  },
  {
    icon: BadgeCheck,
    title: "DPIIT Certified",
    detail: "Cert No. DIPP162658",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    border: "border-blue-100 hover:border-blue-300",
    glow: "hover:shadow-blue-100/60",
  },
  {
    icon: Building,
    title: "MSME Certified",
    detail: "UDYAM-DL-08-0069895",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    border: "border-cyan-100 hover:border-cyan-300",
    glow: "hover:shadow-cyan-100/60",
  },
]

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">

      {/* Very light dot pattern for texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.04) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563eb] mb-2">
              Trusted By
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Organizations across India
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              From government agencies to global consultancies
            </p>
          </div>
        </FadeUp>
      </div>

      {/* ── Marquee row 1 — left → right ── */}
      <div className="relative mb-4">
        <div
          className="flex gap-3"
          style={{ animation: "marquee 32s linear infinite" }}
        >
          {marqueeRow1.map((client, i) => (
            <div
              key={i}
              className="flex-none rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground/60 whitespace-nowrap hover:border-[#2563eb]/30 hover:text-foreground transition-colors duration-200"
            >
              {client}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* ── Marquee row 2 — right → left ── */}
      <div className="relative">
        <div
          className="flex gap-3"
          style={{ animation: "marqueeReverse 26s linear infinite" }}
        >
          {marqueeRow2.map((client, i) => (
            <div
              key={i}
              className="flex-none rounded-full border border-[#2563eb]/12 bg-[#2563eb]/4 px-5 py-2 text-sm font-medium text-[#2563eb]/70 whitespace-nowrap hover:border-[#2563eb]/30 hover:text-[#2563eb] transition-colors duration-200"
            >
              {client}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* ── Certifications ── */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp delay={130}>
          <div className="mt-16 border-t border-border pt-10">
            <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
              Certifications &amp; Recognition
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={cert.title}
                  className={`group flex items-center gap-3 rounded-xl border ${cert.border} bg-card px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${cert.glow}`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${cert.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    <cert.icon className={`h-4 w-4 ${cert.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{cert.title}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{cert.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>

    </section>
  )
}
