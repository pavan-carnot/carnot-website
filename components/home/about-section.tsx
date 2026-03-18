"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const slides = [
  { src: `${B}/assets/clients/Opening_Image_1.jpeg`, label: "Research Lab" },
  { src: `${B}/assets/clients/Opening_Image_2.jpg`,  label: "Field Deployment" },
  { src: `${B}/assets/clients/Opening_Image_3.jpg`,  label: "Team at Work" },
]

const facts = [
  { label: "Founded", value: "2017 at IIT Delhi" },
  { label: "Founders", value: "Prof. Brejesh Lall & Dr. Amit Oberoi" },
  { label: "Certifications", value: "CMMI L3 · ISO/IEC 27001:2022 · DPIIT · MSME" },
  { label: "Research funding", value: "₹70 Cr+ across 47+ projects" },
  { label: "Clients", value: "NSG · IIT Delhi · BCG · JICA · MSME · RRU" },
]

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } }, { threshold: 0.05 })
    ob.observe(el); return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}
      style={visible ? { animation: `fadeUpIn 0.6s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

function Slideshow() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % slides.length), 4200)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="relative h-full overflow-hidden rounded-2xl">
      {slides.map((s, i) => (
        <div key={s.src} className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src} alt={s.label} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)" }} />
          <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {s.label}
          </span>
        </div>
      ))}
      {/* Dots */}
      <div className="absolute bottom-5 right-5 flex gap-1.5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{ height: 5, width: i === active ? 20 : 5, background: i === active ? "white" : "rgba(255,255,255,0.35)" }} />
        ))}
      </div>
    </div>
  )
}

export function AboutSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Images */}
          <FadeUp className="h-[460px] sm:h-[520px]">
            <Slideshow />
          </FadeUp>

          {/* Story */}
          <FadeUp delay={140}>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">Company</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Born in a research lab.
              <br />
              <span className="text-gray-400">Proven in the field.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Two IIT Delhi professors saw a gap: AI research was advancing, but institutional deployment wasn&apos;t. Most enterprise AI was cloud-dependent, opaque, or untested at scale — unacceptable for India&apos;s government and defense sectors.
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              So they built Carnot Research — a lab that takes AI from peer-reviewed research to operational systems inside your own infrastructure. No shortcuts. No cloud dependency. No compromise on accountability.
            </p>

            {/* Fact table */}
            <dl className="mt-8 divide-y divide-gray-100 border-y border-gray-100">
              {facts.map((f) => (
                <div key={f.label} className="flex items-baseline gap-4 py-3">
                  <dt className="w-32 shrink-0 text-xs font-semibold text-gray-400">{f.label}</dt>
                  <dd className="text-sm text-gray-700">{f.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/company"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8]"
            >
              Our full story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
