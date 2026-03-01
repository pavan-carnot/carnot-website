"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { FlaskConical, ShieldCheck, Building2, ChevronRight } from "lucide-react"

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

const pillars = [
  {
    icon: FlaskConical,
    eyebrow: "47+ funded research projects",
    title: "Research-grade AI engineering",
    description:
      "Founded by IIT professors and scientists with 120+ years of collective expertise in AI, NLP, and signal processing. Academic rigor, productionized.",
    color: "#22d3ee",
    glowRgb: "34,211,238",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Zero data leaves your infrastructure",
    title: "Complete data sovereignty",
    description:
      "Deploy LLMs, RAG, and GenAI systems entirely within your own environment. No cloud routing, no external API calls, no vendor lock-in.",
    color: "#60a5fa",
    glowRgb: "96,165,250",
  },
  {
    icon: Building2,
    eyebrow: "Deployed in production across India",
    title: "Built for regulated industries",
    description:
      "Purpose-built for government, defense, and enterprise sectors where compliance, security clearance, and auditability are requirements — not options.",
    color: "#4ade80",
    glowRgb: "74,222,128",
  },
]

// Circuit-board node squares — scattered across the top of the section
const circuitNodes = [
  { top: 28, left: "8%",  w: 14, h: 14 },
  { top: 48, left: "14%", w:  8, h:  8 },
  { top: 18, left: "20%", w: 18, h: 18 },
  { top: 60, left: "22%", w:  6, h:  6 },
  { top: 36, left: "32%", w: 12, h: 12 },
  { top: 22, left: "42%", w:  9, h:  9 },
  { top: 52, left: "48%", w:  7, h:  7 },
  { top: 16, left: "58%", w: 16, h: 16 },
  { top: 44, left: "65%", w:  8, h:  8 },
  { top: 30, left: "74%", w: 13, h: 13 },
  { top: 20, left: "83%", w: 10, h: 10 },
  { top: 55, left: "88%", w:  6, h:  6 },
  { top: 38, left: "94%", w: 11, h: 11 },
]

// Chamfer size in px — matches the angled cut depth visible in the Clerk reference
const CHAMFER = 80

export function WhyCarnotSection() {
  // Clerk-style stepped notch: top-left and top-right corners cut at 45° angle
  const notchPath = `polygon(
    ${CHAMFER}px 0, 
    calc(100% - ${CHAMFER}px) 0, 
    100% ${CHAMFER}px, 
    100% calc(100% - ${CHAMFER}px), 
    calc(100% - ${CHAMFER}px) 100%, 
    ${CHAMFER}px 100%, 
    0 calc(100% - ${CHAMFER}px), 
    0 ${CHAMFER}px
  )`

  return (
    // Outer wrapper — page bg shows behind the notched corners
    <div className="bg-background px-0 py-0">

      {/* ── Glowing notched border (2px gradient "border") ── */}
      <div
        style={{
          clipPath: notchPath,
          background: "linear-gradient(135deg, rgba(34,211,238,0.7) 0%, rgba(96,165,250,0.6) 50%, rgba(34,211,238,0.4) 100%)",
          padding: "2px",
        }}
      >
        {/* ── Inner section with animated gradient background ── */}
        <section
          className="relative overflow-hidden py-24 lg:py-32"
          style={{
            clipPath: notchPath,
            // Deep midnight — clearly NOT purple/brinjal, NOT flat navy
            background: "linear-gradient(-45deg, #080e1a, #0d1a2e, #091522, #060c16)",
            backgroundSize: "400% 400%",
            animation: "gradientShift 20s ease infinite",
          }}
        >

          {/* Mesh grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Circuit-board node squares */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {circuitNodes.map((node, i) => (
              <div
                key={i}
                className="absolute border border-white/12 bg-white/5"
                style={{ top: node.top, left: node.left, width: node.w, height: node.h }}
              />
            ))}
            {/* Connector lines between some nodes (horizontal + vertical accents) */}
            <div className="absolute top-[34px] left-[8%] h-px w-[6%] bg-white/8" />
            <div className="absolute top-[34px] left-[20%] h-px w-[12%] bg-white/6" />
            <div className="absolute top-[34px] left-[42%] h-px w-[16%] bg-white/6" />
            <div className="absolute top-[34px] left-[66%] h-px w-[8%] bg-white/7" />
            <div className="absolute top-[22px] left-[20%] h-[46px] w-px bg-white/7" />
            <div className="absolute top-[22px] left-[58%] h-[38px] w-px bg-white/7" />
          </div>

          {/* Subtle floating cyan orb */}
          <div
            className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)", animation: "float 11s ease-in-out infinite" }}
          />
          <div
            className="pointer-events-none absolute -left-24 bottom-1/3 h-64 w-64 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 70%)", animation: "float 14s ease-in-out infinite 3s" }}
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            {/* Section header */}
            <FadeUp>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#67e8f9] mb-3">
                  Why Carnot Research
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Enterprise AI, built differently
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/45">
                  We engineer production-grade AI for organizations where security,
                  accountability, and verifiable performance are non-negotiable.
                </p>
              </div>
            </FadeUp>

            {/* Glowing glass cards */}
            <div className="grid gap-6 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <FadeUp key={p.title} delay={i * 130}>
                  <div
                    className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {/* Hover border glow */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ boxShadow: `inset 0 0 0 1px rgba(${p.glowRgb},0.45)` }}
                    />
                    {/* Hover top-radial glow */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-28 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(${p.glowRgb},0.16) 0%, transparent 70%)` }}
                    />
                    {/* Beam sweep */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100">
                      <div
                        className="absolute inset-y-0 w-16"
                        style={{
                          background: `linear-gradient(90deg, transparent, rgba(${p.glowRgb},0.07), transparent)`,
                          animation: "beamSlide 1.4s ease forwards",
                        }}
                      />
                    </div>

                    {/* Icon */}
                    <div className="relative mb-6 inline-block">
                      <div
                        className="absolute inset-0 rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                        style={{ background: p.color }}
                      />
                      <div
                        className="relative flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{
                          background: `rgba(${p.glowRgb},0.14)`,
                          border: `1px solid rgba(${p.glowRgb},0.35)`,
                        }}
                      >
                        <p.icon className="h-6 w-6" style={{ color: p.color }} />
                      </div>
                    </div>

                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">{p.eyebrow}</p>
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/45">{p.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Link */}
            <FadeUp delay={430}>
              <div className="mt-14 text-center">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#67e8f9] hover:text-white transition-colors duration-200"
                >
                  Learn more about our approach
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeUp>

          </div>
        </section>
      </div>
    </div>
  )
}
