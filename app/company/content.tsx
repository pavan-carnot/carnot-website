"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  ShieldCheck,
  BadgeCheck,
  Building,
  Trophy,
  Briefcase,
  GraduationCap,
  Cpu,
  Target,
  Users,
} from "lucide-react"
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

const stats = [
  { value: "120+", label: "Years Combined Experience" },
  { value: "15+", label: "Patents & Publications" },
  { value: "9+", label: "Clients & Partners" },
  { value: "L3", label: "CMMI Maturity Level" },
]

const founders = [
  { name: "Prof. Brejesh Lall", affiliation: "IIT Delhi", initials: "BL" },
  { name: "Dr. Amit Oberoi", affiliation: "IIT Delhi", initials: "AO" },
]

const certifications = [
  {
    icon: Award,
    title: "CMMI Maturity Level 3",
    detail: "Certificate No: ECI/2411/0710",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    hoverBorder: "hover:border-amber-200",
  },
  {
    icon: ShieldCheck,
    title: "ISO/IEC 27001:2022",
    detail: "Certificate No: IN241123021",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverBorder: "hover:border-blue-200",
  },
  {
    icon: BadgeCheck,
    title: "DPIIT Certificate",
    detail: "Certificate No: DIPP162658",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    hoverBorder: "hover:border-pink-200",
  },
  {
    icon: Building,
    title: "MSME Certificate",
    detail: "Certificate No: UDYAM-DL-08-0069895",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    hoverBorder: "hover:border-green-200",
  },
]

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

export function CompanyContent() {
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
                Company
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                Building trustworthy AI{" "}
                <span className="text-primary">from India</span>
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                A deep-tech AI company founded by professors, scientists, and
                engineers from top IITs — bridging cutting-edge research with
                real-world deployment.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-secondary/20 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 80}>
                <div className="text-center">
                  <p className="text-4xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we are / What we do ───────────────────────────────── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Who we are */}
            <FadeUp delay={0} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/25">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/70 to-primary/0" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-transform duration-300 group-hover:scale-110">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Who we are
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We are Carnot Research, a deep-tech AI company founded by
                  professors, scientists, and engineers from top IITs. Our team
                  brings together over 120 years of collective experience in AI,
                  NLP, and systems engineering, backed by multiple patents and
                  top-tier publications.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  We specialize in building trustworthy, secure, and high-impact
                  AI systems — particularly for high-stakes sectors such as
                  government, enterprise, and regulated industries.
                </p>
              </div>
            </FadeUp>

            {/* What we do */}
            <FadeUp delay={150} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/25">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent via-accent/70 to-accent/0" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 transition-transform duration-300 group-hover:scale-110">
                  <Cpu className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">
                  What we do
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  At Carnot, we build and deploy secure, on-premise GenAI
                  systems with a strong focus on multimodal data ingestion,
                  LLM-based RAG with verifiable citations, conversational AI
                  with agentic workflows, and LLM + VLM integration for visual
                  reasoning.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Our ability to conduct managed, deployable research sets us
                  apart — converting deep-tech research into scalable tools,
                  applications, and IP that directly serve strategic needs.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────── */}
      <section className="bg-secondary/30 py-24 lg:py-32">
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
            </div>
          </FadeUp>

          {/* Founders */}
          <div className="mx-auto mt-20 max-w-2xl">
            <FadeUp>
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
                Founded by
              </p>
            </FadeUp>
            <div className="grid gap-4 sm:grid-cols-2">
              {founders.map((founder, i) => (
                <FadeUp key={founder.name} delay={i * 120}>
                  <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/25">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-sm font-bold text-primary transition-transform duration-300 group-hover:scale-105">
                      {founder.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {founder.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {founder.affiliation}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Award ────────────────────────────────────────────────── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl">
              <div className="relative overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/70 via-card to-card p-8 text-center shadow-sm">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-300/0 via-amber-400 to-amber-300/0" />
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <Trophy className="h-8 w-8 text-amber-600" />
                </div>
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 mb-4">
                  Award Winner &middot; 2025
                </span>
                <h3 className="text-xl font-semibold text-foreground">
                  Transport Stack Open Innovation Challenge
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  JICA &middot; Boston Consulting Group &middot; FITT IIT Delhi
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Carnot Research won the Transport Stack Open Innovation
                  Challenge for project SAATHI — a hyper-personalized
                  multilingual AI agent for conversational travel assistance.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Certifications ───────────────────────────────────────── */}
      <section id="certifications" className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                Certifications
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                Globally recognized standards
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Quality, security, and reliability backed by globally recognised
                certifications for mission-critical deployments.
              </p>
            </div>
          </FadeUp>

          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, i) => (
              <FadeUp key={cert.title} delay={i * 90}>
                <div
                  className={`group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${cert.hoverBorder}`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${cert.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <cert.icon className={`h-7 w-7 ${cert.iconColor}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients & Partners ───────────────────────────────────── */}
      <section id="partners" className="bg-background py-24 lg:py-32">
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
                Working alongside leading public-sector institutions and global
                organizations to accelerate AI-driven governance.
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

      {/* ── Careers ──────────────────────────────────────────────── */}
      <section id="careers" className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                Careers
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                Work with us
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Join our team of AI researchers and engineers. Contribute to
                cutting-edge projects while advancing your career.
              </p>
            </div>
          </FadeUp>

          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            <FadeUp delay={0}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/25">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/70 to-primary/0" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-transform duration-300 group-hover:scale-110">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Full-Time Positions
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  If you have the drive to make a difference leveraging Deep
                  Tech and want to be part of a fine team, we want to hear from
                  you.
                </p>
                <Button className="mt-6" variant="outline" size="sm" asChild>
                  <Link href="/contact">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/25">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent via-accent/70 to-accent/0" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 transition-transform duration-300 group-hover:scale-110">
                  <GraduationCap className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Internships
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Passionate student eager to dive into Deep Tech? Gain
                  hands-on experience with cutting-edge AI research on our
                  team.
                </p>
                <Button className="mt-6" variant="outline" size="sm" asChild>
                  <Link href="/contact">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  )
}
