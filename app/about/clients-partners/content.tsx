"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Building2, Handshake, Award } from "lucide-react"

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

const clients = [
  "FITT IIT Delhi",
  "MSME",
  "Rashtriya Raksha University",
  "Enhanced Communications",
  "OPPO",
  "NSG",
  "IIT Delhi",
  "Boston Consulting Group",
  "JICA",
]

const sectors = [
  {
    icon: Building2,
    title: "Government & Defense",
    description:
      "Secure AI systems for ministries, defense organizations, and public-sector institutions requiring data sovereignty and mission-critical reliability.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Handshake,
    title: "Enterprise & Industry",
    description:
      "On-premise AI infrastructure for large enterprises, regulated industries, and organizations with strict compliance requirements.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Award,
    title: "Research & Academia",
    description:
      "Collaborative research partnerships with leading academic institutions, translating cutting-edge research into deployable systems.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
]

export function ClientsPartnersContent() {
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
                Clients & Partners
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                Organizations We Work With
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Working alongside leading public-sector institutions and global
                organizations to accelerate AI-driven governance and enterprise
                intelligence.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Sectors ──────────────────────────────────────────────── */}
      <section className="bg-secondary/20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                Sectors We Serve
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                Building AI Across Critical Sectors
              </h2>
            </div>
          </FadeUp>

          <div className="grid gap-8 sm:grid-cols-3">
            {sectors.map((sector, i) => (
              <FadeUp key={sector.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/25">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/70 to-primary/0" />
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${sector.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <sector.icon className={`h-6 w-6 ${sector.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {sector.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {sector.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients & Partners ───────────────────────────────────── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                Partners
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                Our Clients & Partners
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Trusted by leading institutions across government, defense, and
                enterprise sectors.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
              {clients.map((client) => (
                <div
                  key={client}
                  className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-primary/25 hover:bg-secondary/50 hover:text-foreground cursor-default"
                >
                  {client}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Partnership Approach ─────────────────────────────────── */}
      <section className="bg-secondary/20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Our Partnership Approach
              </h2>
              <div className="mt-8 space-y-4 text-left text-base leading-relaxed text-muted-foreground">
                <p>
                  We work closely with our clients to understand their unique
                  operational requirements, security constraints, and strategic
                  objectives. Every partnership is built on trust, transparency,
                  and a shared commitment to delivering measurable impact.
                </p>
                <p>
                  Our approach combines deep technical expertise with institutional
                  understanding — ensuring that AI systems are not just deployed,
                  but integrated seamlessly into existing workflows and
                  decision-making processes.
                </p>
                <p className="font-medium text-foreground">
                  We don't just build AI systems — we build long-term partnerships
                  that strengthen institutional capability.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
