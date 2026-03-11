"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  ArrowRight, ArrowUpRight, Shield,
  Layers, FileText, MessageSquare, Route, Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// ─── Shared scroll animation ──────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } }, { threshold: 0.08 })
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

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

// ─── icarKno feature list ─────────────────────────────────────────────────────
const features = [
  { icon: Layers, text: "Multimodal ingestion: PDF, audio, video, tables" },
  { icon: FileText, text: "RAG with verifiable source citations" },
  { icon: Shield, text: "Fully on-premise, zero cloud dependency" },
  { icon: MessageSquare, text: "Agentic workflows & conversational AI" },
]

// ─── Other products ───────────────────────────────────────────────────────────
const otherProducts = [
  {
    name: "BharGati AI",
    tagline: "Transport Analytics Platform",
    desc: "Computer vision + NLP for intelligent transportation systems and movement analytics.",
    icon: Route,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    accent: "#0891b2",
    href: "/products#bhargati",
  },
  {
    name: "SAATHI",
    tagline: "Conversational AI Assistant",
    desc: "Multilingual AI agent, winner of the Transport Stack Open Innovation Challenge.",
    icon: MessageSquare,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    accent: "#2563eb",
    href: "/products#saathi",
    award: true,
  },
]

// ─── Main section ─────────────────────────────────────────────────────────────
export function IcarKnoShowcase() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Subtle dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.07) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft ambient glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#3b82f6]/6 blur-3xl" style={{ animation: "float 12s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#06b6d4]/5 blur-3xl" style={{ animation: "float 14s ease-in-out infinite 3s" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── icarKno spotlight ── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left — text */}
          <FadeUp>
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2563eb]" />
                Featured Product · icarKno
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Enterprise knowledge AI,{" "}
                <span className="text-[#2563eb]">deployed on your terms</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                icarKno turns your institutional documents into a secure, conversational
                AI that answers questions with cited sources, running entirely on-premise
                with no data leaving your environment.
              </p>

              {/* Feature list */}
              <ul className="mt-7 space-y-3">
                {features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dbeafe]">
                      <f.icon className="h-3 w-3 text-[#2563eb]" />
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  size="default"
                  asChild
                  className="bg-[#2563eb] text-white shadow-sm hover:bg-[#2563eb]/90"
                >
                  <Link href="/products/icarkno">
                    Explore icarKno
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  View all products
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* Right — product demo video */}
          <FadeUp delay={180}>
            <div className="relative flex justify-center">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#2563eb]/10 via-[#06b6d4]/4 to-transparent blur-2xl" />
              <video
                src={`${B}/assets/clients/Final_video.mp4`}
                autoPlay
                muted
                loop
                playsInline
                className="relative block h-auto max-h-[min(480px,55vh)] w-auto max-w-full rounded-2xl"
              />
            </div>
          </FadeUp>
        </div>

        {/* ── Other products strip ── */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {otherProducts.map((p, i) => (
            <FadeUp key={p.name} delay={300 + i * 100}>
              <Link
                href={p.href}
                className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ ["--accent" as string]: p.accent }}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${p.iconBg} transition-transform duration-300 group-hover:scale-105`}>
                  <p.icon className={`h-6 w-6 ${p.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">{p.name}</p>
                    {p.award && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 ring-1 ring-blue-200">
                        <Trophy className="h-2.5 w-2.5" /> Award
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-muted-foreground">{p.tagline}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
