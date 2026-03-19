"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  ArrowRight, ArrowUpRight, Shield,
  Layers, FileText, MessageSquare, Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"

function FadeUp({
  children, delay = 0, className = "",
}: {
  children: ReactNode; delay?: number; className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } },
      { threshold: 0.06 }
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

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const icarKnoFeatures = [
  { icon: Layers,        text: "Multimodal ingestion" },
  { icon: FileText,      text: "RAG with verifiable source citations" },
  { icon: Shield,        text: "Fully on-premise, zero cloud dependency" },
  { icon: MessageSquare, text: "Agentic workflows & conversational AI" },
]

// ── icarKno spotlight ─────────────────────────────────────────────────────────
export function IcarKnoShowcase() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.055) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl"
        style={{ animation: "float 12s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/4 blur-3xl"
        style={{ animation: "float 14s ease-in-out infinite 3s" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <FadeUp className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Meet icarKno™</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            icarKno™ turns your institutional documents into a secure, conversational AI running
            entirely on-premise, with no data leaving your environment.
          </p>
        </FadeUp>

        <FadeUp delay={80}>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg, #0891b2, #06b6d4, #22d3ee)" }} />
            <div className="grid gap-10 p-8 lg:grid-cols-2 lg:items-center lg:p-12">

              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
                  Featured · On-Premise Knowledge AI
                </div>
                <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: "#0891b2" }}>
                  icarKno™
                </h3>
                <p className="mt-2 text-lg font-semibold text-gray-700">
                  Your institutional knowledge: searchable, citable, secure
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Deploy a conversational AI that knows everything in your organization: policies,
                  reports, manuals, training videos, scanned documents. Ask in plain language,
                  get answers with exact source citations. Runs 100% on your own servers.
                  No internet required. No data ever leaves your environment.
                </p>
                <ul className="mt-6 space-y-3">
                  {icarKnoFeatures.map((f) => (
                    <li key={f.text} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-100 bg-cyan-50">
                        <f.icon className="h-3.5 w-3.5 text-[#0891b2]" />
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button size="default" asChild className="bg-[#0891b2] text-white hover:bg-[#0891b2]/90">
                    <Link href="/products/icarkno">
                      Explore icarKno™ <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Link href="/products" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                    View all products <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-cyan-500/8 via-blue-500/4 to-transparent blur-2xl" />
                <video
                  src={`${B}/assets/clients/Final_video.mp4`}
                  autoPlay muted loop playsInline
                  className="relative block h-auto max-h-[min(460px,52vh)] w-auto max-w-full rounded-xl shadow-lg"
                />
              </div>

            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}

// ── More from Carnot Research (BharGati + SAATHI) ─────────────────────────────
const imageProducts = [
  {
    name: "BharGati™ AI",
    nameColor: "#16a34a",
    tagline: "Sports & Performance AI",
    desc: "AI-powered biomechanical movement analysis from standard video. No wearables or lab setup needed. Measures joint angles, gait, posture, and performance metrics for coaches, athletes, and rehabilitation teams.",
    bullets: [
      "Vision-based pose & gait analysis",
      "Biomechanical metrics & coaching insights",
      "Sports, rehabilitation & elite training",
    ],
    accentFrom: "#16a34a",
    accentTo: "#4ade80",
    image: "/assets/clients/homepage_Bhargati.png",
    href: "/products/bhargati",
    award: false,
  },
  {
    name: "SAATHI",
    nameColor: "#dc2626",
    tagline: "Delhi Public Transit AI",
    desc: "Award-winning multilingual AI assistant for Delhi commuters. Plan metro and bus journeys, check fares and timings, and get emergency help by voice or text in 22+ languages.",
    bullets: [
      "Metro, bus & multi-modal journey planning",
      "22+ languages including Indic languages",
      "JICA–BCG–FITT award winner 2025",
    ],
    accentFrom: "#dc2626",
    accentTo: "#f87171",
    image: "/assets/clients/homepage_Saathi.png",
    href: "/products/saathi",
    award: true,
  },
]

export function MoreProducts() {
  return (
    <section className="bg-background pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Divider header */}
        <FadeUp>
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                More from Carnot Research
              </p>
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
        </FadeUp>

        {/* Product cards */}
        <div className="grid gap-6 sm:grid-cols-2 items-stretch">
          {imageProducts.map((p, i) => (
            <FadeUp key={p.name} delay={i * 100} className="flex">
              <Link
                href={p.href}
                className="group flex flex-col w-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div
                  className="relative flex h-52 items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${p.accentFrom}15 0%, ${p.accentTo}0a 100%)` }}
                >
                  <div className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: `linear-gradient(90deg, ${p.accentFrom}, ${p.accentTo})` }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${B}${p.image}`} alt={p.name} className="h-full w-full object-cover" />
                  {p.award && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200 shadow-sm">
                      <Trophy className="h-3 w-3" /> Award Winner
                    </span>
                  )}
                </div>

                <div className="flex flex-col flex-1 px-6 py-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-2xl font-extrabold tracking-tight" style={{ color: p.nameColor }}>{p.name}</p>
                      <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider" style={{ color: p.accentFrom }}>{p.tagline}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground/30 mt-1 transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: p.accentFrom }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">Explore product</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: p.accentFrom }} />
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* GeM callout */}
        <FadeUp delay={220}>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-secondary/40 px-5 py-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <Shield className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Also listed on GeM (Government e-Marketplace)</p>
                <p className="text-xs text-muted-foreground">
                  Meeting Summarizer · On-Premise Knowledge Agent · Multilingual Chatbot · GenAI Conversational Agent
                </p>
              </div>
            </div>
            <Link href="/products" className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 hover:underline">
              View all <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
