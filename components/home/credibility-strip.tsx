"use client"

import { useEffect, useRef, useState } from "react"

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger || target === 0) return
    let raf: number
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(Math.floor(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [trigger, target, duration])
  return val
}

const stats = [
  {
    num: 120,
    format: (n: number) => `${n}+`,
    label: "Years Combined Expertise",
    sub: "IIT Faculty & Domain Scientists",
  },
  {
    num: 47,
    format: (n: number) => `${n}+`,
    label: "Research Projects",
    sub: "Government & Industry Sponsored",
  },
  {
    num: 70,
    format: (n: number) => `₹${n} Cr+`,
    label: "Funded Research",
    sub: "Across AI, NLP & CV Programs",
  },
  {
    num: 9,
    format: (n: number) => `${n}+`,
    label: "Enterprise Clients",
    sub: "Government, Defense & Private",
  },
]

function StatItem({
  stat,
  delay,
  trigger,
}: {
  stat: (typeof stats)[number]
  delay: number
  trigger: boolean
}) {
  const count = useCountUp(stat.num, 1800, trigger)
  const display = stat.num > 0 ? stat.format(count) : stat.format(0)

  return (
    <div
      className="text-center px-4"
      style={
        trigger
          ? { animation: `fadeUpIn 0.55s ease ${delay}ms both` }
          : { opacity: 0 }
      }
    >
      <p className="text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
        {display}
      </p>
      <p className="mt-1.5 text-sm font-semibold text-gray-200">{stat.label}</p>
      <p className="mt-0.5 text-xs text-gray-500">{stat.sub}</p>
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
      ([e]) => {
        if (e.isIntersecting) {
          setTriggered(true)
          ob.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-gray-800 py-10"
      style={{ background: "#0b1120" }}
    >
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-gray-800">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} delay={i * 80} trigger={triggered} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    </section>
  )
}
