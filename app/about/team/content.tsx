"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import { Linkedin, Mail, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

// ─── Scroll-triggered fade-up ────────────────────────────────────────────────
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
      { threshold: 0.08 }
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const pageStats = [
  { value: "120+", label: "Years Combined Experience" },
  { value: "47+", label: "Funded R&D Projects" },
  { value: "13", label: "PhD Scholars Guided" },
  { value: "₹70Cr+", label: "Total Research Funding" },
]

const founders = [
  {
    name: "Prof. Brejesh Lall",
    role: "Co-Founder & Chief Technology Officer",
    affiliation: "Senior Professor · IIT Delhi",
    initials: "BL",
    headerFrom: "#0b2149",
    headerVia: "#1a3a6e",
    headerTo: "#1a57eb",
    avatarFrom: "#3a7bd5",
    avatarTo: "#0b2149",
    credentials: ["PhD, IIT Delhi", "47+ Funded Projects", "₹70 Cr+ Research", "13 PhD Scholars"],
    bio: [
      "Senior Professor at IIT Delhi and a leading specialist in Signal Processing and Intelligent Systems. Completed PhD from IIT Delhi in Multirate Signal Processing with decades of experience spanning academia, advanced communications, and real-world technology deployment.",
      "Has guided 13 PhD scholars and served as Principal Investigator in nearly 47 sponsored research and consultancy projects with total funding exceeding ₹70 crores. Core research areas include object tracking, depth mapping, multimodal signal processing, and next-generation communications.",
      "Former Head, Bharti School of Telecommunication Technology and Management, IIT Delhi. At Carnot Research, Prof. Lall shapes core research direction, ensuring technical rigor, architectural excellence, and long-term innovation across all initiatives.",
    ],
    tags: ["Signal Processing", "Deep Learning", "NLP", "IoT", "Systems AI"],
    linkedin: "#",
    email: "#",
  },
  {
    name: "Col. (Dr.) Amit Oberoi",
    role: "Co-Founder & Chief Executive Officer",
    affiliation: "Former Senior Officer · Indian Army",
    initials: "AO",
    headerFrom: "#0d1b2a",
    headerVia: "#1b2a3b",
    headerTo: "#1e3a5f",
    avatarFrom: "#2c5282",
    avatarTo: "#0d1b2a",
    credentials: ["25+ Yrs Army Leadership", "ITU Study Group 12", "5G AI Research", "Cybersecurity Expert"],
    bio: [
      "Over 25 years of distinguished leadership in the Indian Army, serving as Commanding Officer, Senior Director, Head of IT & Cyber Security, and Program Manager. Deep expertise in computer networks, cybersecurity, data analytics, and machine learning.",
      "Research focused on Natural Language Processing, knowledge representation, multimodal analytics, and AI-driven threat intelligence. Contributed to international AI standardisation through ITU Study Group 12, shaping AI and ML standards for 5G networks.",
      "At Carnot Research, Dr. Oberoi leads strategic execution and deployment of secure, mission-critical AI systems — translating deep research into real-world institutional impact across government, defense, and enterprise.",
    ],
    tags: ["NLP", "Cybersecurity", "AI Strategy", "Defense Tech", "5G AI"],
    linkedin: "#",
    email: "#",
  },
]

const coreTeam = [
  {
    name: "Dr. Kanica Sachdev",
    role: "Head R&D & Chief Operating Officer",
    initials: "KS",
    from: "#0d3b2e",
    to: "#1a7a5e",
    bio: "Deep-tech strategist driving AI, data, and cybersecurity innovation across government, defense, and large-scale digital transformation programs. Bridges research and execution to deliver high-impact, mission-ready systems.",
    tags: ["AI Strategy", "Cybersecurity", "Digital Transformation"],
    linkedin: "#",
    email: "#",
  },
  {
    name: "Pranav Kanire",
    role: "Product Manager",
    initials: "PK",
    from: "#2d1a4e",
    to: "#6b46c1",
    bio: "Leads core architecture and system design powering advanced on-premise AI and data platforms. Ensures reliability, performance, and seamless deployment across mission-critical operational environments.",
    tags: ["Product Strategy", "AI Systems", "Architecture"],
    linkedin: "#",
    email: "#",
  },
]

// ─── Components ───────────────────────────────────────────────────────────────
function SocialBtn({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-[#1a57eb] hover:text-[#1a57eb] hover:shadow-sm"
    >
      {children}
    </a>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function TeamContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background py-24 lg:py-32">
        <div className="pointer-events-none absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-primary/6 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-accent/6 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Leadership Team
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                The Minds Behind{" "}
                <span className="text-primary">Carnot Research</span>
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Founded and led by professors, military scientists, and
                engineers from India&apos;s premier institutions — united by a
                mission to build secure, mission-critical AI infrastructure.
              </p>
            </FadeUp>
          </div>

          {/* Stats row */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-y-10 gap-x-8 lg:grid-cols-4">
            {pageStats.map((stat, i) => (
              <FadeUp key={stat.label} delay={300 + i * 70}>
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

      {/* ── Founding Leadership ───────────────────────────────────────────── */}
      <section className="bg-secondary/20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Founding Leadership
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The founders shaping enterprise AI
              </h2>
            </div>
          </FadeUp>

          <div className="grid gap-8 lg:grid-cols-2">
            {founders.map((founder, i) => (
              <FadeUp key={founder.name} delay={i * 150} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* ── Gradient header ── */}
                  <div
                    className="relative px-8 pt-8 pb-10"
                    style={{
                      background: `linear-gradient(135deg, ${founder.headerFrom}, ${founder.headerVia}, ${founder.headerTo})`,
                    }}
                  >
                    {/* Dot-grid overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
                        backgroundSize: "22px 22px",
                      }}
                    />

                    <div className="relative flex gap-5">
                      {/* Avatar */}
                      <div
                        className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-xl text-2xl font-bold text-white shadow-lg ring-2 ring-white/20"
                        style={{
                          background: `linear-gradient(135deg, ${founder.avatarFrom}, ${founder.avatarTo})`,
                        }}
                      >
                        {founder.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-bold leading-tight text-white">
                          {founder.name}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-white/80">
                          {founder.role}
                        </p>
                        <p className="mt-0.5 text-xs text-white/55">
                          {founder.affiliation}
                        </p>
                        {/* Credential chips */}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {founder.credentials.map((c) => (
                            <span
                              key={c}
                              className="inline-flex items-center rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur-sm"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Body ── */}
                  <div className="flex flex-1 flex-col px-8 py-7">
                    <div className="flex-1 space-y-3">
                      {founder.bio.map((para, idx) => (
                        <p
                          key={idx}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Expertise tags */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {founder.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Social */}
                    <div className="mt-5 flex gap-2">
                      <SocialBtn
                        href={founder.linkedin}
                        label={`${founder.name} on LinkedIn`}
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                      </SocialBtn>
                      <SocialBtn
                        href={founder.email}
                        label={`Email ${founder.name}`}
                      >
                        <Mail className="h-3.5 w-3.5" />
                      </SocialBtn>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull quote ────────────────────────────────────────────────────── */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeUp>
            <div className="relative rounded-2xl border border-border bg-secondary/30 px-8 py-10 text-center">
              <Quote className="mx-auto mb-4 h-8 w-8 text-primary/30" />
              <blockquote className="text-xl font-medium italic leading-relaxed text-foreground sm:text-2xl">
                &ldquo;We are building AI not as a feature layer — but as
                foundational infrastructure for institutions that demand
                security, control, and long-term reliability.&rdquo;
              </blockquote>
              <p className="mt-5 text-sm font-semibold text-foreground">
                Prof. Brejesh Lall &amp; Col. (Dr.) Amit Oberoi
              </p>
              <p className="text-xs text-muted-foreground">
                Co-Founders, Carnot Research
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Core Team ─────────────────────────────────────────────────────── */}
      <section className="bg-secondary/20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Core Team
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Experts driving our mission
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Researchers, strategists, and engineers building the future of
                enterprise AI.
              </p>
            </div>
          </FadeUp>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {coreTeam.map((member, i) => (
              <FadeUp key={member.name} delay={i * 120}>
                <article className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                  {/* Top accent stripe */}
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${member.from}, ${member.to}, transparent)`,
                    }}
                  />

                  <div className="p-6">
                    {/* Header row */}
                    <div className="mb-4 flex items-center gap-4">
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${member.from}, ${member.to})`,
                        }}
                      >
                        {member.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-foreground">
                          {member.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                      <div className="flex shrink-0 gap-1.5">
                        <a
                          href={member.linkedin}
                          aria-label={`${member.name} on LinkedIn`}
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-[#1a57eb] hover:text-[#1a57eb]"
                        >
                          <Linkedin className="h-3 w-3" />
                        </a>
                        <a
                          href={member.email}
                          aria-label={`Email ${member.name}`}
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          <Mail className="h-3 w-3" />
                        </a>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#0b2149] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#5b8ceb]">
                Join the Team
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Build the future of institutional AI
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300">
                We are growing our team of AI researchers, engineers, and
                domain experts. If you are passionate about building secure,
                high-impact AI systems for government and enterprise, we want
                to hear from you.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-[#1a57eb] text-white shadow-lg hover:bg-[#1a57eb]/90"
                >
                  <Link href="/contact">
                    Explore Opportunities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white/20 text-white hover:bg-white/10 hover:border-white/30"
                >
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
