"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FlaskConical, ShieldCheck, Building2, ArrowRight } from "lucide-react"

const pillars = [
  {
    icon: FlaskConical,
    eyebrow: "47+ Research Projects",
    title: "Born in IIT Delhi research labs",
    description:
      "Our founders are active IIT Delhi professors. Every product starts as peer-reviewed research, then ships as production-grade software used by real organizations — not just papers on a shelf.",
    accent: "rgba(34, 211, 238, 0.6)",
    accentBg: "rgba(34, 211, 238, 0.08)",
  },
  {
    icon: ShieldCheck,
    eyebrow: "100% On-Premise",
    title: "Your data never leaves your walls",
    description:
      "Every system runs entirely inside your own infrastructure — no cloud routing, no external API calls, no third-party access. Air-gap capable for classified and defense environments.",
    accent: "rgba(96, 165, 250, 0.6)",
    accentBg: "rgba(96, 165, 250, 0.08)",
  },
  {
    icon: Building2,
    eyebrow: "CMMI L3 · ISO 27001",
    title: "Built where AI is hardest to deploy",
    description:
      "Government ministries, defense agencies, and enterprise teams face strict compliance and classified networks. We've shipped in all of these environments — certifications prove it.",
    accent: "rgba(167, 139, 250, 0.6)",
    accentBg: "rgba(167, 139, 250, 0.08)",
  },
]

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative flex flex-col rounded-2xl border border-white/8 p-7 transition-colors duration-300 hover:border-white/16"
      style={{ background: pillar.accentBg }}
    >
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-[1.5px] rounded-t-2xl opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${pillar.accent}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10"
        style={{ background: pillar.accentBg }}
      >
        <pillar.icon className="h-5 w-5 text-white/70" />
      </div>

      {/* Eyebrow badge */}
      <span className="mb-4 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50">
        {pillar.eyebrow}
      </span>

      {/* Title */}
      <h3 className="mb-3 text-lg font-semibold leading-snug text-white">
        {pillar.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-white/50">
        {pillar.description}
      </p>
    </motion.div>
  )
}

export function WhyCarnotSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "#080d1a" }}
    >
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/3 h-80 w-80 rounded-full blur-[120px] opacity-20"
        style={{ background: "radial-gradient(circle, #22d3ee, transparent)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full blur-[120px] opacity-15"
        style={{ background: "radial-gradient(circle, #818cf8, transparent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/8 px-4 py-1.5 text-xs font-medium text-cyan-400">
            Why Carnot Research
          </span>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Enterprise AI,{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              built differently
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/45">
            Three things that separate Carnot from generic cloud AI providers — and why
            government and defense organizations choose us specifically.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Bottom link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 transition-all hover:border-cyan-500/25 hover:bg-white/8 hover:text-white"
          >
            Learn more about our approach
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
