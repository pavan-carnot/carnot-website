import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { VantaGlobeBackground } from "./vanta-globe-background"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden flex items-center" style={{ background: "#f8fafc" }}>
      <VantaGlobeBackground />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl text-left">

          {/* Overline */}
          <p className="mb-4 text-xs font-semibold tracking-widest text-blue-600 uppercase">
            Enterprise AI Infrastructure
          </p>

          {/* Heading — gray-900 matches navbar "Get Started" button bg */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Deploy Secure On-Premise Generative AI for{" "}
            <span className="text-blue-600">Enterprise &amp; Government</span>
          </h1>

          {/* Body */}
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-gray-500">
            Carnot Research builds production-grade Generative AI, NLP, and
            Computer Vision systems designed for regulated and
            privacy-sensitive environments in India.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            {/* Primary — same style as navbar "Get Started" */}
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition-colors shadow-sm"
            >
              Explore Products
              <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-white/15">
                <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </Link>

            {/* Secondary — teal outlined */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
            >
              Book a Demo
            </Link>
          </div>

          {/* Footnote */}
          <p className="mt-6 text-xs text-gray-400">
            Trusted by government agencies and enterprise clients across India
          </p>
        </div>
      </div>
    </section>
  )
}
