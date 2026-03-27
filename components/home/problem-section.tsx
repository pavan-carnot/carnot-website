"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { Wifi, Clock, ShieldCheck, Layers, X, Check, ArrowRight } from "lucide-react"

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.unobserve(el) } }, { threshold: 0.05 })
    ob.observe(el); return () => ob.disconnect()
  }, [])
  return { ref, vis }
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, vis } = useReveal()
  return (
    <div ref={ref} className={className}
      style={vis ? { animation: `revealUp 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms both` } : { opacity: 0, transform: "translateY(24px)" }}>
      {children}
    </div>
  )
}

const problems = [
  { icon: Wifi,        label: "Connectivity",  text: "Stops working the moment internet is unavailable — field deployments left without AI support." },
  { icon: Clock,       label: "Latency",        text: "Every query round-trips to a data center. Real-time decisions wait for network latency." },
  { icon: ShieldCheck, label: "Security",       text: "Your most sensitive documents leave your perimeter every time someone asks a question." },
  { icon: Layers,      label: "Complexity",     text: "Vast document stores can't be processed on-site — critical knowledge stays locked away." },
]

const solutions = [
  { icon: Wifi,        label: "Offline First",  text: "Runs 100% inside your network. No internet. No cloud. Fully operational in the most remote environments." },
  { icon: Clock,       label: "Instant Local",  text: "Every query processed on your own hardware — sub-second responses with zero round-trip latency." },
  { icon: ShieldCheck, label: "Data Stays Put", text: "Your data never leaves your perimeter. Air-gap capable. Designed for defence-grade environments." },
  { icon: Layers,      label: "Full Ingestion", text: "PDF, Word, Excel, video, audio, scanned images — every format, fully searchable, on-premise." },
]

export function ProblemSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Top line */}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(0,0,0,0.08),transparent)" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">

        {/* ── Header ── */}
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-zinc-300" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              The Edge AI Advantage
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-[1.05] max-w-2xl">
            AI built for where
            <br />
            <span className="text-teal-600">decisions actually happen.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base text-zinc-600 leading-relaxed">
            Cloud AI was built for offices with reliable internet. icarKno™ was built for the
            field, the defence base, and the air-gapped server room.
          </p>
        </Reveal>

        {/* ── LARGE SPLIT PANELS ── */}
        <Reveal delay={120}>
          <div
            className="grid lg:grid-cols-2 overflow-hidden rounded-2xl"
            style={{ border: "1px solid rgba(0,0,0,0.10)" }}
          >
            {/* ── LEFT: WITHOUT ── */}
            <div
              className="relative p-8 lg:p-10"
              style={{ background: "#fffbfb", borderRight: "1px solid rgba(0,0,0,0.08)" }}
            >
              {/* Red top bar */}
              <div className="absolute inset-x-0 top-0 h-0.5"
                style={{ background: "linear-gradient(90deg,#991b1b,#dc2626,transparent)" }} />

              <div className="flex items-center gap-2.5 mb-8">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg"
                  style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
                  <X className="h-3.5 w-3.5 text-red-500" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-red-500">
                  Cloud AI
                </span>
              </div>

              <div className="space-y-6">
                {problems.map((p) => (
                  <div key={p.label} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl mt-0.5"
                      style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.1)" }}>
                      <p.icon className="h-4.5 w-4.5 text-red-800" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-700 mb-1">{p.label}</p>
                      <p className="text-[13px] leading-relaxed text-zinc-500">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: WITH icarKno ── */}
            <div
              className="relative p-8 lg:p-10"
              style={{ background: "#f0fdfa" }}
            >
              {/* Teal top bar */}
              <div className="absolute inset-x-0 top-0 h-0.5"
                style={{ background: "linear-gradient(90deg,#0d9488,#14b8a6,transparent)" }} />

              <div className="flex items-center gap-2.5 mb-8">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg"
                  style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.25)" }}>
                  <Check className="h-3.5 w-3.5 text-teal-400" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-teal-400">
                  icarKno™ Edge AI
                </span>
              </div>

              <div className="space-y-6">
                {solutions.map((s) => (
                  <div key={s.label} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl mt-0.5"
                      style={{ background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.18)" }}>
                      <s.icon className="h-4.5 w-4.5 text-teal-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-900 mb-1">{s.label}</p>
                      <p className="text-[13px] leading-relaxed text-zinc-600">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Numbered feature reveal ── */}
        <div className="mt-20 lg:mt-28 grid lg:grid-cols-2 gap-y-16 gap-x-24">
          {[
            {
              n: "01", icon: ShieldCheck, color: "#14b8a6",
              title: "Built for classified environments",
              body: "Deployed across NSG, Rashtriya Raksha University, IIT Delhi, and more. icarKno™ meets the security requirements of India's most sensitive organisations.",
              tags: ["CMMI Level 3", "ISO 27001:2022", "DPIIT Certified"],
            },
            {
              n: "02", icon: Layers, color: "#f59e0b",
              title: "Every document format, fully indexed",
              body: "Scanned PDFs, Word docs, Excel sheets, PowerPoint presentations, meeting recordings, audio briefings — every format ingested and made searchable.",
              tags: ["50+ formats", "OCR included", "Multilingual"],
            },
          ].map((item, i) => (
            <Reveal key={item.n} delay={i * 120}>
              <div className="flex gap-5">
                <div>
                  <span className="block text-[11px] font-black text-zinc-400 mb-3">{item.n}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}22` }}>
                    <item.icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-black text-zinc-900 mb-3">{item.title}</h4>
                  <p className="text-[13px] leading-relaxed text-zinc-600 mb-4">{item.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(t => (
                      <span key={t} className="text-[11px] font-semibold rounded-full px-2.5 py-1"
                        style={{ background: `${item.color}0d`, border: `1px solid ${item.color}22`, color: item.color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Final CTA ── */}
        <Reveal delay={160} className="mt-20">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl px-8 py-7"
            style={{
              background: "rgba(20,184,166,0.04)",
              border: "1px solid rgba(20,184,166,0.15)",
            }}
          >
            <div>
              <p className="text-xl font-black text-zinc-900">
                Ready to take AI fully on-premise?
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                Deployed inside your network. Your data. Your control.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-black transition-all hover:-translate-y-0.5"
              style={{ background: "#14b8a6", boxShadow: "0 4px 20px rgba(20,184,166,0.2)" }}
            >
              Request a Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
