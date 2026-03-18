"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { ArrowRight } from "lucide-react"

function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } }, { threshold: 0.1 })
    ob.observe(el); return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref}
      style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

export function CtaSection() {
  return (
    <section style={{ background: "#030711" }} className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeUp>
          <div className="text-center">

            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-white/25">
              Get started
            </p>

            <h2
              className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Have a hard AI problem?
              <br />
              <span className="text-white/35">We&apos;ve solved ones like it.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-white/45">
              Talk to our team. Whether it&apos;s an on-premise LLM, a computer vision system,
              or an AI assistant for millions — we ship things that work in the real world.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-[#030711] transition-all hover:bg-gray-100"
                style={{ boxShadow: "0 0 40px rgba(255,255,255,0.1)" }}
              >
                Talk to our AI team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-8 py-3.5 text-sm font-semibold text-white/70 transition-all hover:border-white/30 hover:text-white"
              >
                See our products
              </Link>
            </div>

            {/* Social proof */}
            <p className="mt-10 text-xs text-white/20">
              NSG · IIT Delhi · BCG · JICA · MSME · Rashtriya Raksha University · OPPO · FITT · Enhanced Communications
            </p>

          </div>
        </FadeUp>
      </div>
    </section>
  )
}
