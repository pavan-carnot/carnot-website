"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } }, { threshold: 0.1 })
    ob.observe(el)
    return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "linear-gradient(-45deg, #4c1d95, #6d28d9, #1e3a8a, #5b21b6)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 10s ease infinite",
      }}
    >
      {/* Dot-grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.30) 0%, transparent 70%)", animation: "float 9s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)", animation: "float 12s ease-in-out infinite 3s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/70" />
              Get Started Today
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to deploy secure{" "}
              <span className="text-[#c4b5fd]">enterprise AI?</span>
            </h2>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
              Talk to our AI experts and discover how Carnot Research can transform
              your organisation with secure, on-premise generative AI — built for
              government, defense, and enterprise.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {/* White primary button — pops beautifully on the vibrant gradient */}
              <Button
                size="lg"
                asChild
                className="bg-white text-[#4c1d95] font-semibold shadow-xl hover:bg-white/90 hover:shadow-2xl transition-all"
              >
                <Link href="/contact">
                  Talk to AI Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/30 text-white bg-white/8 hover:bg-white/15 hover:border-white/50 backdrop-blur-sm"
              >
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Book Enterprise Demo
                </Link>
              </Button>
            </div>

            <p className="mt-8 text-xs text-white/40">
              Deployed across government agencies and enterprise organisations across India
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
