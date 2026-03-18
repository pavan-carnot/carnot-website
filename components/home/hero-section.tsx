import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { VantaGlobeBackground } from "./vanta-globe-background"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden flex items-center" style={{ background: "#f8fafc", minHeight: "calc(100vh - 3.75rem)" }}>
      <VantaGlobeBackground />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-0">
        <div className="max-w-2xl text-left">

          {/* Overline */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold text-blue-600">IIT Delhi · Applied AI Research</span>
          </div>

          {/* Heading */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Secure On-Premise AI for{" "}
            <span className="text-blue-600">Government, Defense &amp; Enterprise</span>
          </h1>

          {/* Body */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
            Carnot Research builds secure, on-premise AI systems for India's government,
            defense, and enterprise. Knowledge management, computer vision, sports analytics,
            multilingual NLP — all deployed entirely on your own servers.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition-colors shadow-sm"
            >
              Explore Products
              <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-white/15">
                <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
            >
              Book a Demo
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {["IIT Delhi", "CMMI Level 3", "ISO 27001:2022", "DPIIT Recognised"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-[11px] font-medium text-gray-500"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
