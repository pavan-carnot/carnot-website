"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  ArrowRight, ArrowUpRight, Brain, FileText, Shield,
  Layers, MessageSquare, Route, Trophy,
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

// ─── Animated RAG chat preview ────────────────────────────────────────────────
const messages = [
  {
    role: "user" as const,
    text: "Summarise the procurement compliance requirements for Q3",
  },
  {
    role: "ai" as const,
    text: "Based on the uploaded documents, Q3 procurement mandates a three-tier approval workflow with digital signatures at each stage. Vendor onboarding requires GST verification and...",
    sources: ["Procurement Circular 2024", "Policy Manual v8.2"],
  },
]

function ChatPreview() {
  const [shown, setShown] = useState(0)
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShown(1), 800)
    const t2 = setTimeout(() => setTyping(true), 1400)
    const t3 = setTimeout(() => { setShown(2); setTyping(false) }, 3000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#0f0a2e] shadow-2xl ring-1 ring-white/8">
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-white/8 px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-1">
          <Brain className="h-3 w-3 text-[#a78bfa]" />
          <span className="text-xs font-medium text-white/60">icarKno Enterprise</span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        {/* User message */}
        {shown >= 1 && (
          <div className="flex justify-end" style={{ animation: "fadeUpIn 0.4s ease both" }}>
            <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-[#7c3aed] px-4 py-2.5 text-sm text-white">
              {messages[0].text}
            </div>
          </div>
        )}

        {/* Typing indicator */}
        {typing && (
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/20">
              <Brain className="h-3.5 w-3.5 text-[#a78bfa]" />
            </div>
            <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-white/6 px-4 py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40" style={{ animationDelay: "0ms" }} />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40" style={{ animationDelay: "150ms" }} />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}

        {/* AI response */}
        {shown >= 2 && (
          <div className="flex gap-3" style={{ animation: "fadeUpIn 0.5s ease both" }}>
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/20">
              <Brain className="h-3.5 w-3.5 text-[#a78bfa]" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="rounded-2xl rounded-tl-sm bg-white/6 px-4 py-3 text-sm leading-relaxed text-white/85">
                {messages[1].text}
              </div>
              {/* Source citations */}
              <div className="flex flex-wrap gap-2">
                {messages[1].sources!.map((src) => (
                  <span key={src}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#7c3aed]/12 px-2.5 py-1 text-xs font-medium text-[#a78bfa] ring-1 ring-[#7c3aed]/20">
                    <FileText className="h-3 w-3" />
                    {src}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input bar */}
        <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <span className="flex-1 text-sm text-white/25">Ask icarKno anything about your documents…</span>
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#7c3aed]">
            <ArrowRight className="h-3.5 w-3.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── icarKno feature list ─────────────────────────────────────────────────────
const features = [
  { icon: Layers, text: "Multimodal ingestion — PDF, audio, video, tables" },
  { icon: FileText, text: "RAG with verifiable source citations" },
  { icon: Shield, text: "Fully on-premise — zero cloud dependency" },
  { icon: MessageSquare, text: "Agentic workflows & conversational AI" },
]

// ─── Other products ───────────────────────────────────────────────────────────
const otherProducts = [
  {
    name: "BharGati AI",
    tagline: "Transport Analytics Platform",
    desc: "Computer vision + NLP for intelligent transportation systems and movement analytics.",
    icon: Route,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accent: "#059669",
    href: "/products#bhargati",
  },
  {
    name: "SAATHI",
    tagline: "Conversational AI Assistant",
    desc: "Multilingual AI agent — winner of the Transport Stack Open Innovation Challenge.",
    icon: MessageSquare,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    accent: "#c11574",
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
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(139,92,246,0.07) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft ambient glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/6 blur-3xl" style={{ animation: "float 12s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#06b6d4]/5 blur-3xl" style={{ animation: "float 14s ease-in-out infinite 3s" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── icarKno spotlight ── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left — text */}
          <FadeUp>
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7c3aed]" />
                Featured Product · icarKno
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Enterprise knowledge AI,{" "}
                <span className="text-[#7c3aed]">deployed on your terms</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                icarKno turns your institutional documents into a secure, conversational
                AI — answering questions with cited sources, running entirely on-premise
                with no data leaving your environment.
              </p>

              {/* Feature list */}
              <ul className="mt-7 space-y-3">
                {features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ede9fe]">
                      <f.icon className="h-3 w-3 text-[#7c3aed]" />
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  size="default"
                  asChild
                  className="bg-[#7c3aed] text-white shadow-sm hover:bg-[#7c3aed]/90"
                >
                  <Link href="/products#icarkno">
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

          {/* Right — dark chat preview with glow halo */}
          <FadeUp delay={180}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#7c3aed]/10 via-[#06b6d4]/4 to-transparent blur-2xl" />
              <ChatPreview />
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
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 ring-1 ring-amber-200">
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
