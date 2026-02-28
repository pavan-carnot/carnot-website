"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Calendar, Trophy, Newspaper, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

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

const newsItems = [
  {
    type: "Award",
    icon: Trophy,
    date: "February 2025",
    title: "Transport Stack Open Innovation Challenge Winner",
    description:
      "Carnot Research won the Transport Stack Open Innovation Challenge for project SAATHI — a hyper-personalized multilingual AI agent for conversational travel assistance.",
    organization: "JICA · Boston Consulting Group · FITT IIT Delhi",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    type: "News",
    icon: Newspaper,
    date: "January 2025",
    title: "CMMI Level 3 Certification Achieved",
    description:
      "Carnot Research achieves CMMI Maturity Level 3 certification, demonstrating commitment to process excellence and quality in AI system development.",
    organization: "Certificate No: ECI/2411/0710",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    type: "News",
    icon: Newspaper,
    date: "December 2024",
    title: "ISO/IEC 27001:2022 Certification",
    description:
      "Successfully certified for ISO/IEC 27001:2022 Information Security Management System, reinforcing our commitment to data security and privacy.",
    organization: "Certificate No: IN241123021",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
]

export function NewsContent() {
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
                News & Updates
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                Latest News & Updates
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Stay updated with the latest events, announcements, and press
                coverage from Carnot Research.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── News Timeline ────────────────────────────────────────── */}
      <section className="bg-secondary/20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                Timeline
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                Recent Highlights
              </h2>
            </div>
          </FadeUp>

          <div className="mx-auto max-w-3xl space-y-8">
            {newsItems.map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/25">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/70 to-primary/0" />
                  
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.iconBg} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {item.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                        {item.description}
                      </p>

                      <p className="text-xs font-medium text-muted-foreground">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press & Media ────────────────────────────────────────── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Press & Media Inquiries
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                For press inquiries, interviews, or media requests, please contact
                our communications team.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href="/contact">
                    Contact Us
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
