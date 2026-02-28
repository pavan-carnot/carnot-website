"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Target, Eye, Compass } from "lucide-react"

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={
        visible
          ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` }
          : { opacity: 0, transform: "translateY(20px)" }
      }
    >
      {children}
    </div>
  )
}

export function MissionVisionContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background py-24 lg:py-32">
        <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Mission & Vision
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                Why We Exist & Where We're Headed
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Building trustworthy AI infrastructure that serves institutions,
                governments, and enterprises across India and beyond.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────── */}
      <section className="bg-secondary/20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Our Mission
              </h2>
              <blockquote className="mt-6 border-l-0 text-xl italic leading-relaxed text-muted-foreground">
                &ldquo;To enable responsible, domain-specific AI adoption across
                industries and governments — delivering AI that works on-ground,
                at-scale, and in-context.&rdquo;
              </blockquote>
              <div className="mt-8 space-y-4 text-left text-base leading-relaxed text-muted-foreground">
                <p>
                  We exist to bridge the gap between cutting-edge AI research and
                  real-world deployment in high-stakes environments. Our mission is
                  to build AI systems that are secure, contextual, and dependable —
                  designed specifically for institutions that cannot compromise on
                  data sovereignty, reliability, or operational control.
                </p>
                <p>
                  Every system we build is architected to strengthen institutional
                  capability, enhance decision-making, and deliver measurable
                  impact across government, defense, and enterprise sectors.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Vision ───────────────────────────────────────────────── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Our Vision
              </h2>
              <div className="mt-6 space-y-4 text-left text-base leading-relaxed text-muted-foreground">
                <p>
                  We envision a future where AI serves as trusted institutional
                  infrastructure — not as experimental tools, but as foundational
                  systems that governments and enterprises can depend on for
                  mission-critical operations.
                </p>
                <p>
                  Our vision is to establish Carnot Research as India's leading
                  applied AI company — recognized for building secure, sovereign,
                  and scalable AI systems that empower institutions to operate with
                  intelligence, autonomy, and confidence.
                </p>
                <p className="font-medium text-foreground">
                  We are building AI infrastructure that will define the next
                  generation of institutional intelligence.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────── */}
      <section className="bg-secondary/20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                <Compass className="h-7 w-7 text-blue-600" />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Our Core Values
              </h2>
            </div>
          </FadeUp>

          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
            {[
              {
                title: "Security First",
                description:
                  "Every system we build prioritizes data sovereignty, on-premise deployment, and zero external dependencies.",
              },
              {
                title: "Research-Driven",
                description:
                  "We translate advanced AI research into production-grade systems — bridging academia and real-world impact.",
              },
              {
                title: "Mission-Critical Reliability",
                description:
                  "Our AI systems are designed for high-stakes environments where failure is not an option.",
              },
              {
                title: "Long-Term Thinking",
                description:
                  "We build infrastructure, not features — systems designed to serve institutions for years, not months.",
              },
            ].map((value, i) => (
              <FadeUp key={value.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/25">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/70 to-primary/0" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
