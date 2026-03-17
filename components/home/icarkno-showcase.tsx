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
  { icon: Layers, text: "Multimodal ingestion" },
  { icon: FileText, text: "RAG with verifiable source citations" },
  { icon: Shield, text: "Fully on-premise, zero cloud dependency" },
  { icon: MessageSquare, text: "Agentic workflows & conversational AI" },
]

// ─── Other products ───────────────────────────────────────────────────────────
const otherProducts = [
  {
    name: "BharGati™ AI",
    tagline: "Movement & Performance Intelligence",
    desc: "AI-powered biomechanics analytics using computer vision. Analyze human movement, posture, and performance from standard video — no wearables or lab setup required.",
    bullets: ["Vision-based pose & gait analysis", "Biomechanical metrics & insights", "Sports, rehab & coaching ready"],
    icon: Route,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    gradientFrom: "#0891b2",
    gradientTo: "#06b6d4",
    image: "/assets/clients/homepage_Bhargati.png" as string | null,
    href: "/products/bhargati",
    award: false,
  },
  {
    name: "SAATHI",
    tagline: "Delhi Public Transport Assistant",
    desc: "Award-winning multilingual AI for Delhi commuters. Plan metro & bus journeys, check fares, timings, and get emergency help — by voice or text in any language.",
    bullets: ["Journey planning: metro, bus & multi-modal", "22+ languages, voice & text input", "Award-winning: JICA–BCG–FITT IIT Delhi"],
    icon: MessageSquare,
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#2563eb]",
    gradientFrom: "#2563eb",
    gradientTo: "#60a5fa",
    image: "/assets/clients/homepage_Saathi.png" as string | null,
    href: "/products/saathi",
    award: true,
  },
]

// ─── Main section ─────────────────────────────────────────────────────────────
export function IcarKnoShowcase() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
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
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-lg bg-[#2563eb] px-4 py-2 shadow-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white/70" />
                <span className="text-sm font-bold tracking-tight text-white">Featured Product · icarKno™</span>
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Enterprise knowledge AI,{" "}
                <span className="text-[#2563eb]">deployed on your terms</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                icarKno™ turns your institutional documents into a secure, conversational
                AI running entirely on-premise with no data leaving your environment.
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
                    Explore icarKno™
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

        {/* ── Other products ── */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 items-stretch">
          {otherProducts.map((p, i) => (
            <FadeUp key={p.name} delay={300 + i * 100} className="flex">
              <Link href={p.href} className="group flex flex-col w-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                {/* Image / placeholder area */}
                <div
                  className="relative flex h-52 items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${p.gradientFrom}18 0%, ${p.gradientTo}10 100%)` }}
                >
                  {/* Gradient top stripe */}
                  <div className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})` }} />
                  {p.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={`${B}${p.image}`} alt={p.name} className="h-full w-full object-cover" />
                  ) : (
                    /* Placeholder */
                    <div className="flex flex-col items-center gap-3 opacity-60">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${p.iconBg} shadow-md`}>
                        <p.icon className={`h-8 w-8 ${p.iconColor}`} />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">Image coming soon</span>
                    </div>
                  )}
                  {/* Award badge overlay */}
                  {p.award && (
                    <span className="absolute right-4 top-5 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200 shadow-sm">
                      <Trophy className="h-3 w-3" /> Award Winner
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-6 py-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-lg font-bold text-foreground">{p.name}</p>
                      <p className="text-xs font-semibold uppercase tracking-wider mt-0.5"
                        style={{ color: p.gradientFrom }}>{p.tagline}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground/30 mt-0.5 transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: p.gradientFrom }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">Explore product</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: p.gradientFrom }} />
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
