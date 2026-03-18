"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const points = [
  {
    n: "01",
    title: "We own the research.",
    body: "Not a wrapper. Not a reseller. Our founding team holds 120+ years of combined expertise in AI, NLP, and signal processing — and publishes. Every system is built on what we understand deeply.",
  },
  {
    n: "02",
    title: "Your data stays yours.",
    body: "For sensitive deployments, everything runs on-premise. No data touches external servers, cloud APIs, or third-party infrastructure. This isn't a toggle — it's the architecture.",
  },
  {
    n: "03",
    title: "We meet the compliance bar.",
    body: "CMMI Maturity Level 3. ISO/IEC 27001:2022. DPIIT and MSME certified. These aren't checkbox certifications — they reflect the process discipline we bring to every engagement.",
  },
  {
    n: "04",
    title: "We deploy, then support.",
    body: "We research, engineer, deploy, and own the outcome. When something breaks in the field, we fix it. Our 9+ enterprise clients include organizations where failure is not an option.",
  },
]

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

export function WhyCarnotSection() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "#030711" }}
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: "40%",
          background: "radial-gradient(ellipse 60% 40% at 80% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr]">

          {/* Left */}
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/30">
                Why Carnot
              </p>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                What makes us
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #60a5fa, #a78bfa)" }}
                >
                  worth choosing.
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/40">
                The AI market is crowded. Here&apos;s what separates us from vendors who can&apos;t afford to get it wrong.
              </p>
              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white"
              >
                Our full approach
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeUp>

          {/* Right — points */}
          <div className="space-y-0 divide-y divide-white/6">
            {points.map((p, i) => (
              <FadeUp key={p.n} delay={i * 80}>
                <div className="group py-7 transition-colors hover:bg-white/[0.015] px-2 -mx-2 rounded-xl">
                  <div className="flex items-start gap-5">
                    <span
                      className="mt-0.5 text-sm font-black tabular-nums"
                      style={{ color: "rgba(255,255,255,0.12)" }}
                    >
                      {p.n}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/45">{p.body}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
