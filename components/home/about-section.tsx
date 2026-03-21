"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const images = [
  { src: `${B}/assets/company/opening/Opening_Image_2.jpg`, alt: "Carnot Research lab work" },
  { src: `${B}/assets/company/opening/Opening_Image_3.jpg`, alt: "Carnot Research team" },
]

const certs = ["CMMI Level 3", "ISO 27001:2022", "DPIIT Recognised", "MSME Certified"]

export function AboutSection() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % images.length), 4000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); ob.unobserve(el) }
      },
      { threshold: 0.1 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-background py-20 lg:py-28"
      style={
        visible
          ? { animation: "fadeUpIn 0.65s ease both" }
          : { opacity: 0, transform: "translateY(20px)" }
      }
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* Left — image slideshow */}
          <div className="relative order-2 lg:order-1">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-blue-50/50 blur-2xl" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Who We Are
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From IIT Delhi labs to{" "}
              <span className="text-blue-600">real-world AI deployment</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-gray-600">
              Carnot Research was founded by IIT Delhi professors and scientists who saw a critical
              gap: India&apos;s government, defense, and enterprise organizations needed AI that
              worked entirely inside their own walls: secure, offline, and fully under their control.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We don&apos;t just advise. We build and ship. Our products are operational
              today: icarKno™ runs inside government networks, BharGati™ AI coaches
              elite athletes, and SAATHI guides Delhi commuters in 22+ languages.
            </p>

            {/* Cert tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {certs.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                >
                  {c}
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

        </div>
      </div>
    </section>
  )
}
