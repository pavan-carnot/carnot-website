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
  { num: 120, format: (n: number) => `${n}+`,    label: "Years Combined Experience", sub: "IIT Faculty & Defense Experts" },
  { num: 17,  format: (n: number) => `${n}+`,    label: "Projects",                   sub: "Govt & Industry Sponsored" },
  { num: 13,  format: (n: number) => `${n}`,     label: "PhD Scholars Guided",        sub: "Principal Investigator Projects" },
  { num: 20,  format: (n: number) => `${n}+`,   label: "Elite Team Members, Core Developers And Researchers", sub: ""},
]

function StatItem({ stat, delay, trigger }: { stat: typeof stats[number]; delay: number; trigger: boolean }) {
  const count = useCountUp(stat.num, 2000, trigger)
  const display = stat.num > 0 ? stat.format(count) : stat.format(0)

  return (
    <div
      className="text-center px-4"
      style={trigger ? { animation: `fadeUpIn 0.55s ease ${delay}ms both` } : { opacity: 0 }}
    >
      <p className="text-2xl font-bold tracking-tight text-white lg:text-3xl">{display}</p>
      <p className="mt-1 text-xs font-semibold text-gray-300">{stat.label}</p>
      <p className="mt-0.5 text-[11px] text-gray-500">{stat.sub}</p>
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
      className="relative border-y border-gray-800 py-8"
      style={{ background: "#111827" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-gray-700">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} delay={i * 80} trigger={triggered} />
          ))}
        </div>
      </div>
    </section>
  )
}
