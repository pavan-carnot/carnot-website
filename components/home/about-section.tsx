"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const images = [
  { src: `${B}/assets/clients/Opening_Image_1.jpeg`, alt: "Carnot Research team at IIT Delhi" },
  { src: `${B}/assets/clients/Opening_Image_2.jpg`,  alt: "Carnot Research lab and research work" },
  { src: `${B}/assets/clients/Opening_Image_3.jpg`,  alt: "Carnot Research team and office" },
]

const highlights = [
  { stat: "IIT Delhi", label: "Founded by professors & scientists" },
  { stat: "9+",        label: "Government & enterprise clients" },
  { stat: "2015",      label: "Over a decade of AI research" },
]

const tags = ["CMMI Level 3", "ISO 27001 Certified", "DPIIT Recognised", "MSME Certified"]

export function AboutSection() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % images.length), 4200)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } },
      { threshold: 0.1 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-secondary/30 py-20 lg:py-28"
      style={visible ? { animation: "fadeUpIn 0.65s ease both" } : { opacity: 0, transform: "translateY(20px)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* Left — text */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">Who We Are</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From IIT Delhi labs to{" "}
              <span className="text-blue-600">real-world deployment</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Carnot Research was founded by IIT Delhi professors and scientists who identified a critical
              gap: India's government agencies, defense organizations, and enterprises needed AI that worked
              entirely inside their own walls — secure, offline, and fully under their control.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We don't just advise — we build and ship. Our products are operational today: icarKno™ powers
              knowledge management inside government networks, BharGati™ AI coaches athletes using only
              standard video, and SAATHI guides millions of Delhi commuters in 22+ languages.
            </p>

            {/* Inline stats */}
            <div className="mt-7 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
              {highlights.map((h) => (
                <div key={h.label}>
                  <p className="text-xl font-bold text-gray-900">{h.stat}</p>
                  <p className="mt-0.5 text-xs leading-snug text-gray-500">{h.label}</p>
                </div>
              ))}
            </div>

            {/* Cert tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Meet the team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — image slideshow */}
          <div className="relative">
            {/* Decorative glow behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-blue-50/60 blur-2xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              {images.map((img, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                  style={{ opacity: i === current ? 1 : 0 }}
                />
              ))}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {/* Dot indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      height: 6,
                      width: i === current ? 20 : 6,
                      background: i === current ? "white" : "rgba(255,255,255,0.45)",
                    }}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
