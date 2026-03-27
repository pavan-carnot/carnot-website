"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react"
import {
  ArrowRight, ArrowUpRight, Shield, Layers, FileText,
  MessageSquare, Trophy, Lock, Cpu, Zap, Check,
} from "lucide-react"
import { IcarKnoSlideshow } from "@/components/icarkno-slideshow"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.unobserve(el) } }, { threshold })
    ob.observe(el); return () => ob.disconnect()
  }, [threshold])
  return { ref, vis }
}

function Reveal({ children, delay = 0, className = "", style = {} }: {
  children: ReactNode; delay?: number; className?: string; style?: CSSProperties
}) {
  const { ref, vis } = useReveal()
  return (
    <div ref={ref} className={className}
      style={{ ...style, ...(vis ? { animation: `revealUp 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms both` } : { opacity: 0, transform: "translateY(28px)" }) }}>
      {children}
    </div>
  )
}

// ── icarKno SHOWCASE — split editorial layout ─────────────────────────────────
export function IcarKnoShowcase() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#f8fafc" }}>

      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(20,184,166,0.3),transparent)" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">

        {/* ── Section label ── */}
        <Reveal className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-teal-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-600">
              Enterprise Knowledge Platform
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-[1.05] max-w-2xl">
            Your institutional knowledge,<br />
            <span className="text-teal-600">always within reach.</span>
          </h2>
        </Reveal>

        {/* ── FEATURE 01 — Text left, Visual right ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">

          {/* Left: text */}
          <Reveal delay={80}>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 block">01</span>
            <h3 className="text-3xl sm:text-4xl font-black text-zinc-900 leading-tight mb-5">
              Ask your entire document library in plain language.
            </h3>
            <p className="text-base leading-relaxed text-zinc-600 mb-8">
              Deploy conversational AI that knows every policy, report, manual, and scanned document
              across your organisation. Instant, cited answers — no searching, no guessing.
            </p>
            <ul className="space-y-3.5 mb-8">
              {[
                { icon: FileText,      c: "#0d9488", text: "Every answer comes with exact page-level source citations" },
                { icon: Layers,        c: "#ea580c", text: "Ingests PDF, Word, Excel, video, audio, and scanned images" },
                { icon: MessageSquare, c: "#2563eb", text: "Multi-turn conversational interface for complex queries" },
              ].map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  <div
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: `${f.c}18` }}
                  >
                    <f.icon className="h-3 w-3" style={{ color: f.c }} />
                  </div>
                  <span className="text-[13px] text-zinc-600 leading-relaxed">{f.text}</span>
                </li>
              ))}
            </ul>
            <Link href="/products/icarkno"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors group">
              Learn about icarKno™
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          {/* Right: slideshow */}
          <Reveal delay={160} className="relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "#111",
                border: "1px solid rgba(0,0,0,0.1)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.12)",
                aspectRatio: "4/3",
              }}
            >
              <IcarKnoSlideshow className="absolute inset-0 h-full w-full" interval={3500} />
              {/* Teal glow edge */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{ boxShadow: "inset 0 0 0 1px rgba(20,184,166,0.1)" }} />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl px-4 py-2.5"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(20,184,166,0.3)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              <div className="h-2 w-2 rounded-full bg-teal-500" style={{ animation: "borderGlow 2s infinite" }} />
              <span className="text-[12px] font-semibold text-teal-600">Live Product Screenshots</span>
            </div>
          </Reveal>
        </div>

        {/* ── FEATURE 02 — Visual left, Text right ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">

          {/* Left: capability grid visual */}
          <Reveal delay={80} className="order-2 lg:order-1">
            <div
              className="grid grid-cols-2 gap-3 p-6 rounded-2xl"
              style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
            >
              {[
                { icon: Lock,    c: "#14b8a6", bg: "rgba(20,184,166,0.08)",  bdr: "rgba(20,184,166,0.18)",  num: "100%", label: "Local Processing"     },
                { icon: Shield,  c: "#4ade80", bg: "rgba(74,222,128,0.08)",  bdr: "rgba(74,222,128,0.18)",  num: "0",    label: "Cloud Deps"           },
                { icon: Zap,     c: "#f59e0b", bg: "rgba(245,158,11,0.08)",  bdr: "rgba(245,158,11,0.18)",  num: "4+",   label: "Agent Types"          },
                { icon: Cpu,     c: "#60a5fa", bg: "rgba(96,165,250,0.08)",  bdr: "rgba(96,165,250,0.18)",  num: "100+", label: "Document Formats"     },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col p-4 rounded-xl"
                  style={{ background: m.bg, border: `1px solid ${m.bdr}` }}
                >
                  <m.icon className="h-5 w-5 mb-3" style={{ color: m.c }} />
                  <span className="text-3xl font-black" style={{ color: m.c }}>{m.num}</span>
                  <span className="text-[11px] font-medium text-zinc-500 mt-1">{m.label}</span>
                </div>
              ))}

              {/* Air-gap card - full width */}
              <div
                className="col-span-2 flex items-center gap-4 p-4 rounded-xl mt-1"
                style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}>
                  <Shield className="h-4 w-4 text-violet-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-800">Air-Gap Capable</p>
                  <p className="text-[12px] text-zinc-500 mt-0.5">Fully isolated — zero network required</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  <span className="text-[10px] text-zinc-500">Active</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: text */}
          <Reveal delay={160} className="order-1 lg:order-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 block">02</span>
            <h3 className="text-3xl sm:text-4xl font-black text-zinc-900 leading-tight mb-5">
              Deploy in the most secure environments on Earth.
            </h3>
            <p className="text-base leading-relaxed text-zinc-600 mb-8">
              icarKno™ runs 100% on your own infrastructure. No API calls. No subscriptions.
              No data ever leaves your network. Designed for air-gapped, defence-grade environments.
            </p>
            <ul className="space-y-3.5">
              {[
                "All AI inference runs on your own hardware — no external calls",
                "Air-gap deployments with zero internet dependency",
                "CMMI Level 3 & ISO 27001:2022 certified processes",
                "Compatible with government procurement via GeM",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                  <span className="text-[13px] text-zinc-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ── Bottom CTA band ── */}
        <Reveal delay={200}>
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl px-8 py-6"
            style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
          >
            <div>
              <p className="text-xl font-black text-zinc-900">See icarKno™ in action.</p>
              <p className="mt-1 text-sm text-zinc-500">
                A live demo inside your infrastructure in under 2 hours.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/products/icarkno"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-black transition-all hover:-translate-y-0.5"
                style={{ background: "#14b8a6", boxShadow: "0 4px 20px rgba(20,184,166,0.2)" }}>
                Full Product Overview <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-zinc-700 hover:text-zinc-900 transition-all hover:-translate-y-0.5"
                style={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                Request Demo <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

// ── More Products ─────────────────────────────────────────────────────────────
const imageProducts = [
  {
    name: "SAATHI", tagline: "Delhi Public Transit AI",
    desc: "Award-winning multilingual AI for Delhi commuters. Metro & bus journey planning, fare checks, and emergency help in 22+ languages.",
    bullets: ["Metro, bus & multi-modal journey planning","22+ Indian languages","JICA–BCG–FITT award winner 2025"],
    accentFrom: "#dc2626", accentTo: "#f87171", nameColor: "#f87171",
    image: "/assets/products/homepage/homepage_Saathi.png", href: "/products/saathi", award: true,
  },
  {
    name: "BharGati™ AI", tagline: "Sports & Performance AI",
    desc: "AI-powered biomechanical movement analysis from standard video. Joint angles, gait, posture metrics — no wearables needed.",
    bullets: ["Vision-based pose & gait analysis","Biomechanical metrics & coaching insights","Sports, rehab & elite training"],
    accentFrom: "#16a34a", accentTo: "#4ade80", nameColor: "#4ade80",
    image: "/assets/products/homepage/homepage_Bhargati.png", href: "/products/bhargati", award: false,
  },
]

export function MoreProducts() {
  return (
    <section className="relative overflow-hidden pb-24" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">

        <Reveal className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px flex-1 bg-white/5" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-700">
              More from Carnot Research
            </p>
            <div className="h-px flex-1 bg-white/5" />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {imageProducts.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} className="flex">
              <Link href={p.href}
                className="group flex flex-col w-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)" }}>

                <div className="relative h-52 overflow-hidden"
                  style={{ background: `linear-gradient(135deg,${p.accentFrom}10,${p.accentTo}06)` }}>
                  <div className="absolute inset-x-0 top-0 h-[2px]"
                    style={{ background: `linear-gradient(90deg,${p.accentFrom},${p.accentTo})` }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${B}${p.image}`} alt={p.name} className="h-full w-full object-cover" />
                  {p.award && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-amber-400"
                      style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
                      <Trophy className="h-3 w-3" /> Award Winner
                    </span>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="text-2xl font-extrabold" style={{ color: p.nameColor }}>{p.name}</p>
                      <p className="text-[11px] font-bold uppercase tracking-wider mt-0.5" style={{ color: p.accentFrom }}>{p.tagline}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 mt-1 text-zinc-700 transition-all group-hover:text-zinc-400" />
                  </div>
                  <p className="text-[13px] leading-relaxed text-zinc-600">{p.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {p.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2 text-[13px] text-zinc-500">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: p.accentFrom }} />{b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 flex items-center justify-between"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <span className="text-[11px] text-zinc-700">Explore product</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: p.accentFrom }} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* GeM note */}
        <Reveal delay={200} className="mt-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl px-5 py-4"
            style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.15)" }}>
                <Shield className="h-4 w-4 text-teal-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-300">Listed on GeM — Government e-Marketplace</p>
                <p className="text-[12px] mt-0.5 text-zinc-600">Meeting Summarizer · On-Premise Knowledge Agent · Multilingual Chatbot</p>
              </div>
            </div>
            <Link href="/products" className="shrink-0 inline-flex items-center gap-1 text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors">
              View all <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
