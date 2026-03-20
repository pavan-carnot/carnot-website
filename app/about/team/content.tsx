"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import { Linkedin, Mail, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

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

const founders = [
  {
    name: "Prof. Brejesh Lall",
    role: "Co-Founder & Chief Technology Officer",
    affiliation: "Senior Professor · IIT Delhi",
    photo: "brejesh lal.jpg",
    imgPos: "object-top",
    credentials: ["PhD, IIT Delhi", "47+ Funded Projects", "₹70 Cr+ Research"],
    credColor: "bg-blue-50 text-blue-700",
    bio: [
      "Senior Professor at IIT Delhi and a leading specialist in Signal Processing and Intelligent Systems. Completed PhD from IIT Delhi in Multirate Signal Processing with decades of experience spanning academia, advanced communications, and real-world technology deployment.",
      "Has guided 13 PhD scholars across 47 sponsored research and consultancy projects with total funding exceeding ₹70 crores. Core research areas include object tracking, depth mapping, multimodal signal processing, and next-generation communications.",
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
    photo: "Col. (Dr.) Amit Oberoi.jpg",
    imgPos: "object-top",
    credentials: ["25+ Yrs Army Leadership", "ITU Study Group 12", "5G AI Research", "Cybersecurity Expert"],
    credColor: "bg-slate-100 text-slate-700",
    bio: [
      "Over 25 years of distinguished leadership in the Indian Army, serving as Commanding Officer, Senior Director, Head of IT & Cyber Security, and Program Manager. Deep expertise in computer networks, cybersecurity, data analytics, and machine learning.",
      "Research focused on Natural Language Processing, knowledge representation, multimodal analytics, and AI-driven threat intelligence. Contributed to international AI standardisation through ITU Study Group 12, shaping AI and ML standards for 5G networks.",
      "At Carnot Research, Dr. Oberoi leads strategic execution and deployment of secure, mission-critical AI systems, translating deep research into real-world institutional impact across government, defense, and enterprise.",
    ],
    tags: ["NLP", "Cybersecurity", "AI Strategy", "Defense Tech", "5G AI"],
    linkedin: "#",
    email: "#",
  },
]

const coreTeam = [
  {
    name: "Dr. Kanica Sachdeva",
    role: "Head R&D & Chief Operating Officer",
    photo: "Dr. Kanica Sachdeva.jpg",
    imgPos: "object-top",
    bio: "Deep-tech strategist driving AI, data, and cybersecurity innovation across government, defense, and large-scale digital transformation programs. Bridges research and execution to deliver high-impact, mission-ready systems.",
    tags: ["AI Strategy", "Cybersecurity", "Digital Transformation"],
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-700",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Pranav Kanire",
    role: "Product Manager",
    photo: null,
    imgPos: "object-top",
    initials: "PK",
    avatarGradient: "linear-gradient(135deg, #2d1a4e, #6b46c1)",
    bio: "Leads core architecture and system design powering advanced on-premise AI and data platforms. Ensures reliability, performance, and seamless deployment across mission-critical operational environments.",
    tags: ["Product Strategy", "AI Systems", "Architecture"],
    accentBg: "bg-violet-50",
    accentText: "text-violet-700",
    linkedin: "#",
    email: "#",
  },
]

const advisor = {
  name: "Brig N. Hari",
  role: "Strategic Advisor",
  affiliation: "DIG Command · NSG",
  photo: "Brig N. Hari, DIG Command, NSG .png",
  imgPos: "object-top",
  bio: "Former DIG Command at the National Security Guard (NSG), bringing deep expertise in high-stakes operational intelligence, counter-terrorism, and national security systems. Advises Carnot on defense AI applications and mission-critical deployments.",
  tags: ["Defense Intelligence", "National Security", "AI Advisory"],
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function TeamContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
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
              <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                The Minds Behind{" "}
                <span className="text-primary">Carnot Research</span>
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Founded and led by professors, military scientists, and
                engineers from India&apos;s premier institutions, united by a
                mission to build secure, mission-critical AI infrastructure.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Founding Leadership ───────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Founding Leadership
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                The founders shaping enterprise AI
              </h2>
            </div>
          </FadeUp>

          <div className="grid gap-8 lg:grid-cols-2">
            {founders.map((founder, i) => (
              <FadeUp key={founder.name} delay={i * 150} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                  {/* ── Full-bleed photo panel ── */}
                  <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${B}/assets/team/${encodeURIComponent(founder.photo)}`}
                      alt={founder.name}
                      className={`absolute inset-0 h-full w-full object-cover ${founder.imgPos} transition-transform duration-500 group-hover:scale-105`}
                    />
                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900/75 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-6">
                      <h3 className="text-xl font-bold text-white leading-tight">{founder.name}</h3>
                      <p className="mt-0.5 text-sm font-medium text-white/85">{founder.role}</p>
                      <p className="mt-0.5 text-xs text-white/60">{founder.affiliation}</p>
                    </div>
                  </div>

                  {/* ── Body ── */}
                  <div className="flex flex-1 flex-col px-7 py-6">
                    {/* Credential chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {founder.credentials.map((c) => (
                        <span
                          key={c}
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${founder.credColor}`}
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <div className="flex-1 space-y-3">
                      {founder.bio.map((para, idx) => (
                        <p key={idx} className="text-sm leading-relaxed text-gray-600">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Expertise tags */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {founder.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Social */}
                    <div className="mt-5 flex gap-2">
                      <a
                        href={founder.linkedin}
                        aria-label={`${founder.name} on LinkedIn`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-all hover:border-blue-400 hover:text-blue-600 hover:shadow-sm"
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={founder.email}
                        aria-label={`Email ${founder.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-all hover:border-blue-400 hover:text-blue-600 hover:shadow-sm"
                      >
                        <Mail className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull quote ────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeUp>
            <div className="relative rounded-2xl border border-gray-100 bg-slate-50 px-8 py-10 text-center">
              <Quote className="mx-auto mb-4 h-8 w-8 text-primary/30" />
              <blockquote className="text-xl font-medium italic leading-relaxed text-gray-800 sm:text-2xl">
                &ldquo;We are building AI not as a feature layer, but as
                foundational infrastructure for institutions that demand
                security, control, and long-term reliability.&rdquo;
              </blockquote>
              <p className="mt-5 text-sm font-semibold text-gray-900">
                Prof. Brejesh Lall &amp; Col. (Dr.) Amit Oberoi
              </p>
              <p className="text-xs text-gray-500">
                Co-Founders, Carnot Research
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Core Team ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Core Team
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Experts driving our mission
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Researchers, strategists, and engineers building the future of
                enterprise AI.
              </p>
            </div>
          </FadeUp>

          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
            {coreTeam.map((member, i) => (
              <FadeUp key={member.name} delay={i * 120}>
                <article className="group flex overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ minHeight: 200 }}>

                  {/* Left: photo or initials */}
                  <div className="relative w-36 shrink-0 overflow-hidden bg-gray-100">
                    {member.photo ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`${B}/assets/team/${encodeURIComponent(member.photo)}`}
                          alt={member.name}
                          className={`absolute inset-0 h-full w-full object-cover ${member.imgPos} transition-transform duration-500 group-hover:scale-105`}
                        />
                      </>
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white"
                        style={{ background: member.avatarGradient }}
                      >
                        {member.initials}
                      </div>
                    )}
                    {/* Bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-3">
                      <span className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-bold bg-white/90 ${member.accentText}`}>
                        {member.role.split(" ").slice(0, 2).join(" ")}
                      </span>
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="flex flex-col justify-between p-5">
                    <div>
                      <h3 className="font-semibold text-gray-900">{member.name}</h3>
                      <p className="mt-0.5 text-xs text-gray-500">{member.role}</p>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">{member.bio}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${member.accentBg} ${member.accentText}`}
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

      {/* ── Strategic Advisor ─────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Strategic Advisor
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
                Guiding mission-critical AI deployment
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="mx-auto max-w-2xl">
              <article className="group flex overflow-hidden rounded-2xl border border-gray-100 bg-slate-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ minHeight: 200 }}>
                <div className="relative w-44 shrink-0 overflow-hidden bg-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${B}/assets/team/${encodeURIComponent(advisor.photo)}`}
                    alt={advisor.name}
                    className={`absolute inset-0 h-full w-full object-cover ${advisor.imgPos} transition-transform duration-500 group-hover:scale-105`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-900/65 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-3">
                    <p className="text-xs font-semibold text-white leading-tight">{advisor.name}</p>
                    <p className="text-[10px] text-white/70">{advisor.affiliation}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <h3 className="font-semibold text-gray-900">{advisor.name}</h3>
                    <p className="mt-0.5 text-xs text-gray-500">{advisor.role} &middot; {advisor.affiliation}</p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{advisor.bio}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {advisor.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </FadeUp>
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
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30"
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
