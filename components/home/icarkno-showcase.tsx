"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  ArrowRight, ArrowUpRight, Shield,
  Layers, FileText, MessageSquare, Trophy, Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { IcarKnoSlideshow } from "@/components/icarkno-slideshow"

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
  { icon: Layers,        text: "Multimodal ingestion",                    bg: "#fef3c7", color: "#d97706" }, // amber
  { icon: FileText,      text: "RAG with verifiable source citations",    bg: "#ede9fe", color: "#7c3aed" }, // violet
  { icon: Shield,        text: "Fully on-premise, zero cloud dependency", bg: "#dcfce7", color: "#16a34a" }, // green
  { icon: MessageSquare, text: "Agentic workflows & conversational AI",   bg: "#fee2e2", color: "#dc2626" }, // red
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
          <h2 className="inline-flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <Sparkles className="h-7 w-7 text-blue-600" />
              Meet icarKno™
            </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            icarKno™ turns your institutional documents into a secure, conversational AI running
            entirely on-premise, with no data leaving your environment.
          </p>
        </FadeUp>

        <FadeUp delay={80}>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[1fr_400px] lg:min-h-[500px]">

              {/* Left: content */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                {/* Tag row */}
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    On-Premise
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                    Knowledge AI
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                    Zero Cloud
                  </span>
                </div>

                <h3 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  icarKno™
                </h3>
                <p className="mt-2 text-base font-semibold text-gray-500">
                  Your institutional knowledge: searchable, citable, secure
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  Deploy a conversational AI that knows everything in your organization — policies,
                  reports, manuals, scanned documents. Ask in plain language, get cited answers.
                  Runs 100% on your own servers. No internet. No data leaves your environment.
                </p>

                {/* Feature chips — 2-col grid, Notion style */}
                <div className="mt-6 grid grid-cols-2 gap-2.5">
                  {icarKnoFeatures.map((f) => (
                    <div key={f.text} className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ background: f.bg }}>
                        <f.icon className="h-3.5 w-3.5" style={{ color: f.color }} />
                      </span>
                      <span className="text-xs font-medium leading-tight text-gray-700">{f.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button size="default" asChild className="bg-gray-900 text-white hover:bg-gray-700">
                    <Link href="/products/icarkno">
                      Explore icarKno™ <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Link href="/products" className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-gray-700">
                    View all products <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right: image panel — full height */}
              <div className="relative hidden lg:block border-l border-gray-100">
                <IcarKnoSlideshow className="absolute inset-0 h-full w-full" interval={3500} />
              </div>

              {/* Mobile image */}
              <div className="relative block h-64 lg:hidden border-t border-gray-100">
                <IcarKnoSlideshow className="absolute inset-0 h-full w-full" interval={3500} />
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
