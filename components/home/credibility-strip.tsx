"use client"

import { useEffect, useRef, useState } from "react"

// ─── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration: number, trigger: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger || target === 0) return
    let raf: number
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3) // cubic ease-out
      setVal(Math.floor(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [trigger, target, duration])
  return val
}

const stats = [
  { num: 120, format: (n: number) => `${n}+`,    label: "Years Combined Experience", sub: "IIT Faculty & Army Scientists",     glowColor: "rgba(139,92,246,0.30)" },
  { num: 47,  format: (n: number) => `${n}+`,    label: "Funded R&D Projects",       sub: "Govt & Industry Sponsored",        glowColor: "rgba(34,211,238,0.28)" },
  { num: 70,  format: (n: number) => `₹${n}Cr+`, label: "Research Funding",          sub: "Principal Investigator Projects",   glowColor: "rgba(236,72,153,0.24)" },
  { num: 0,   format: () => "CMMI L3",           label: "Process Maturity",           sub: "Globally Certified Quality",       glowColor: "rgba(52,211,153,0.24)" },
]

function StatItem({ stat, delay, trigger }: { stat: typeof stats[number]; delay: number; trigger: boolean }) {
  const count = useCountUp(stat.num, 2000, trigger)
  const display = stat.num > 0 ? stat.format(count) : stat.format(0)

  return (
    <div
      className="group relative text-center px-6"
      style={trigger ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0 }}
    >
      {/* Pulsing glow behind number */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-16 w-36 -translate-x-1/2 rounded-full blur-2xl"
        style={{ background: stat.glowColor, animation: "borderGlow 3s ease-in-out infinite" }}
      />
      <p className="relative text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {display}
      </p>
      <p className="mt-1.5 text-sm font-semibold text-white/70">{stat.label}</p>
      <p className="mt-0.5 text-xs text-white/35">{stat.sub}</p>
    </div>
  )
}

export function CredibilityStrip() {
  const sectionRef = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); ob.unobserve(el) } },
      { threshold: 0.2 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-white/10 py-16"
      style={{
        background: "linear-gradient(-45deg, #3b0764, #4338ca, #1e1b4b, #312e81)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 14s ease infinite",
      }}
    >

      {/* Animated mesh grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating glow orbs */}
      <div
        className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)", animation: "float 9s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 right-1/3 h-56 w-56 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)", animation: "float 11s ease-in-out infinite 2s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-12 gap-x-4 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} delay={i * 90} trigger={triggered} />
          ))}
        </div>
      </div>

    </section>
  )
}
