"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { ArrowRight, ArrowUpRight, Trophy } from "lucide-react"

function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } }, { threshold: 0.05 })
    ob.observe(el); return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}
      style={visible ? { animation: `fadeUpIn 0.6s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(28px)" }}>
      {children}
    </div>
  )
}

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const products = [
  {
    slug: "icarkno",
    name: "icarKno™",
    category: "Enterprise Knowledge AI",
    headline: "Your institutional documents, turned into a secure conversational AI.",
    description:
      "Runs entirely on-premise. Ingests PDFs, audio, video, and scanned files. Answers questions with cited sources. No data leaves your network — ever.",
    tags: ["On-Premise", "RAG", "Agentic Workflows", "Multimodal"],
    cta: "/products/icarkno",
    media: { type: "video" as const, src: `${B}/assets/clients/Final_video.mp4` },
    accent: "#2563eb",
    dark: true,
  },
]

const secondaryProducts = [
  {
    slug: "bhargati",
    name: "BharGati™ AI",
    category: "Computer Vision",
    tagline: "Sports & Biomechanics Intelligence",
    headline: "Analyze human movement from standard video — no wearables required.",
    tags: ["Pose Analysis", "Gait Detection", "Sports", "Rehabilitation"],
    cta: "/products/bhargati",
    image: `${B}/assets/clients/homepage_Bhargati.png`,
    accent: "#16a34a",
    award: false,
  },
  {
    slug: "saathi",
    name: "SAATHI",
    category: "Public Transit AI",
    tagline: "Delhi's Multilingual Transit Assistant",
    headline: "Plan metro and bus journeys in 22+ languages — by voice or text.",
    tags: ["NLP", "22+ Languages", "Metro & Bus", "Voice Input"],
    cta: "/products/saathi",
    image: `${B}/assets/clients/homepage_Saathi.png`,
    accent: "#dc2626",
    award: true,
  },
]

export function IcarKnoShowcase() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section label */}
        <FadeUp>
          <div className="mb-14">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Products</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Three platforms.
              <br />
              <span className="text-gray-400">Three distinct problems solved.</span>
            </h2>
          </div>
        </FadeUp>

        {/* icarKno — featured */}
        {products.map((p) => (
          <FadeUp key={p.slug} delay={60}>
            <div
              className="mb-8 overflow-hidden rounded-2xl"
              style={{ background: "#080f1f", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="grid lg:grid-cols-[1fr_1.1fr]">

                {/* Left: info */}
                <div className="flex flex-col justify-center px-8 py-10 sm:px-12 lg:py-14">
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className="rounded-md px-3 py-1 text-xs font-bold text-white"
                      style={{ background: p.accent }}
                    >
                      {p.name}
                    </span>
                    <span className="text-xs font-medium text-white/30">{p.category}</span>
                  </div>

                  <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl lg:text-3xl">
                    {p.headline}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/45">
                    {p.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={p.cta}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: p.accent }}
                  >
                    Explore {p.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Right: media */}
                <div
                  className="relative flex items-center justify-center overflow-hidden border-t border-white/5 bg-[#040810] lg:border-t-0 lg:border-l"
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)",
                    }}
                  />
                  <video
                    src={p.media.src}
                    autoPlay muted loop playsInline
                    className="relative z-10 h-full max-h-[440px] w-full object-contain p-6"
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        ))}

        {/* BharGati + SAATHI */}
        <div className="grid gap-6 sm:grid-cols-2">
          {secondaryProducts.map((p, i) => (
            <FadeUp key={p.slug} delay={120 + i * 80} className="flex">
              <Link
                href={p.cta}
                className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gray-50">
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{ background: p.accent }}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" />

                  <span
                    className="absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-bold text-white"
                    style={{ background: p.accent }}
                  >
                    {p.category}
                  </span>

                  {p.award && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-700 ring-1 ring-amber-200">
                      <Trophy className="h-3 w-3" /> Award Winner
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-base font-bold text-gray-900">{p.name}</p>
                      <p className="mt-0.5 text-xs font-semibold" style={{ color: p.accent }}>
                        {p.tagline}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:text-gray-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{p.headline}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-gray-100 bg-gray-50 px-2.5 py-0.5 text-[11px] font-medium text-gray-500"
                      >
                        {t}
                      </span>
                    ))}
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
