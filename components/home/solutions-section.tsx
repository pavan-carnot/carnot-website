"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { Server, Landmark, BookOpen, Eye, MessageSquareText, Activity, ArrowRight } from "lucide-react"

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
      style={visible ? { animation: `fadeUpIn 0.6s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

const domains = [
  {
    icon: Server,
    title: "On-Premise AI Deployment",
    body: "LLMs, RAG, and GenAI systems running inside your own infrastructure. No cloud routing, no third-party APIs.",
    href: "/solutions/on-prem-ai",
    color: "#1d4ed8",
  },
  {
    icon: Landmark,
    title: "Government & Defense",
    body: "Secure AI for governance workflows, intelligence analysis, and field operations — built to India's compliance standards.",
    href: "/solutions#government",
    color: "#0369a1",
  },
  {
    icon: BookOpen,
    title: "Enterprise Knowledge",
    body: "RAG-powered knowledge bases that ingest your documents and answer with cited, verifiable sources.",
    href: "/solutions#enterprise",
    color: "#7c3aed",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    body: "Object detection, pose estimation, video analytics, and semantic segmentation for real environments.",
    href: "/solutions#cv",
    color: "#b45309",
  },
  {
    icon: MessageSquareText,
    title: "NLP & Document Intelligence",
    body: "Multilingual text understanding, entity recognition, summarization, and structured extraction at scale.",
    href: "/solutions#nlp",
    color: "#be185d",
  },
  {
    icon: Activity,
    title: "Sports & Biomechanics AI",
    body: "Vision-based movement and performance analysis — no wearables, no lab, just video.",
    href: "/products/bhargati",
    color: "#15803d",
  },
]

export function SolutionsSection() {
  return (
    <section style={{ background: "#f9fafb" }} className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">

          {/* Left — sticky heading */}
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                Capabilities
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What we
                <br />build.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-500">
                Six domains. Each backed by funded research and live deployments.
              </p>
              <Link
                href="/solutions"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1d4ed8] hover:text-blue-800"
              >
                Explore all solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeUp>

          {/* Right — domain grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {domains.map((d, i) => (
              <FadeUp key={d.title} delay={i * 50}>
                <Link
                  href={d.href}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
                >
                  <div
                    className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ background: `${d.color}12`, border: `1px solid ${d.color}25` }}
                  >
                    <d.icon className="h-4 w-4" style={{ color: d.color }} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{d.body}</p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
