"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { FlaskConical, ShieldCheck, Building2, ArrowRight } from "lucide-react"

const pillars = [
  {
    icon: FlaskConical,
    title: "Research-driven AI engineering",
    description:
      "Founded by IIT professors and scientists with 120+ years of collective expertise in AI, NLP, and signal processing.",
    stats: "47+ Research Projects",
  },
  {
    icon: ShieldCheck,
    title: "Complete data sovereignty",
    description:
      "Deploy LLMs, RAG, and GenAI systems entirely within your own environment. No cloud routing, no external API calls.",
    stats: "100% On-Premise",
  },
  {
    icon: Building2,
    title: "Built for regulated industries",
    description:
      "Purpose-built for government, defense, and enterprise sectors where compliance and security are requirements.",
    stats: "9+ Enterprise Clients",
  },
]

// Stripe-style moving gradient mesh
function MovingGradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(96, 165, 250, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)
          `,
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}

// Clerk-style subtle grid
function SubtleGrid() {
  return (
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    />
  )
}

// Professional feature card
function FeatureCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]">
        
        {/* Subtle top gradient on hover */}
        <motion.div
          className="absolute inset-x-0 top-0 h-px"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), transparent)",
          }}
        />

        {/* Icon */}
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
          <pillar.icon className="h-6 w-6 text-cyan-400" />
        </div>

        {/* Stats badge */}
        <div className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60">
          {pillar.stats}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-white">
          {pillar.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white/50">
          {pillar.description}
        </p>

        {/* Hover arrow */}
        <motion.div
          className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-400"
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -10
          }}
          transition={{ duration: 0.2 }}
        >
          Learn more
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </div>
    </motion.div>
  )
}

// Floating code snippets (Stripe-style)
function FloatingCodeBlock({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute rounded-lg border border-white/10 bg-black/40 p-4 backdrop-blur-xl font-mono text-xs"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0, 0.6, 0.6, 0],
        y: [20, -100],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="h-2 w-2 rounded-full bg-green-400" />
        <span className="text-white/40">Secure Deployment</span>
      </div>
      <code className="text-cyan-400">
        <span className="text-purple-400">const</span> ai = <span className="text-yellow-400">deploy</span>(<span className="text-green-400">"on-premise"</span>)
      </code>
    </motion.div>
  )
}

const CHAMFER = 80

export function WhyCarnotSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const notchPath = `polygon(
    ${CHAMFER}px 0, 
    calc(100% - ${CHAMFER}px) 0, 
    100% ${CHAMFER}px, 
    100% calc(100% - ${CHAMFER}px), 
    calc(100% - ${CHAMFER}px) 100%, 
    ${CHAMFER}px 100%, 
    0 calc(100% - ${CHAMFER}px), 
    0 ${CHAMFER}px
  )`

  return (
    <div className="relative bg-background" ref={sectionRef}>
      {/* Glowing border */}
      <div
        style={{
          clipPath: notchPath,
          background: "linear-gradient(135deg, rgba(34,211,238,0.4) 0%, rgba(96,165,250,0.3) 50%, rgba(34,211,238,0.2) 100%)",
          padding: "1px",
        }}
      >
        {/* Main section */}
        <section
          className="relative overflow-hidden"
          style={{
            clipPath: notchPath,
            background: "#0a0e1a",
          }}
        >
          {/* Subtle grid */}
          <SubtleGrid />

          {/* Moving gradient mesh */}
          <MovingGradientMesh />

          {/* Floating code blocks */}
          <div className="absolute left-[10%] top-[20%] hidden lg:block">
            <FloatingCodeBlock delay={0} />
          </div>
          <div className="absolute right-[15%] top-[40%] hidden lg:block">
            <FloatingCodeBlock delay={3} />
          </div>

          {/* Content */}
          <motion.div 
            className="relative py-24 lg:py-32"
            style={{ y, opacity }}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              
              {/* Header */}
              <motion.div
                className="mx-auto mb-20 max-w-3xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                {/* Overline */}
                <motion.div
                  className="mb-4 inline-block"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400">
                    Why Carnot Research
                  </span>
                </motion.div>

                {/* Title */}
                <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Enterprise AI,
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    built differently
                  </span>
                </h2>

                {/* Description */}
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
                  Production-grade AI systems for organizations where security, accountability, 
                  and verifiable performance are non-negotiable.
                </p>
              </motion.div>

              {/* Feature cards */}
              <div className="grid gap-6 md:grid-cols-3">
                {pillars.map((pillar, index) => (
                  <FeatureCard key={pillar.title} pillar={pillar} index={index} />
                ))}
              </div>

              {/* Bottom CTA */}
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-cyan-500/30 hover:bg-white/10"
                >
                  Learn more about our approach
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
