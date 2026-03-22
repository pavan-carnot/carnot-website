import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { VantaGlobeBackground } from "./vanta-globe-background"

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ background: "#f8fafc", minHeight: "calc(100vh - 3.75rem)" }}
    >
      <VantaGlobeBackground />

      {/* Mobile-only decorative background (Vanta is hidden on mobile) */}
      <div className="absolute inset-0 sm:hidden" aria-hidden>
        {/* Radial gradient blobs */}
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute top-1/3 -left-20 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-blue-300/15 blur-3xl" />
        {/* Subtle dot mesh grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.18) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-0">
        <div className="max-w-2xl text-left">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold text-blue-700 tracking-wide">
              Applied AI Research · IIT Delhi
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-bold tracking-tight text-gray-900">
            <span className="block text-2xl sm:text-3xl text-gray-900 mb-1">icarKno™</span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-blue-600">I Carry Knowledge.</span>
          </h1>

          {/* Attribute tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Secure", "Portable", "On-Premise", "Agentic"].map((attr) => (
              <span
                key={attr}
                className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
              >
                {attr}
              </span>
            ))}
          </div>

          {/* Sub */}
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Knowledge Agent for Standalone Applications , no cloud, no internet required.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span><span className="font-semibold text-gray-800">icarKno™:</span> on-premise knowledge AI that runs 100% inside your network</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span>Production-grade <span className="font-semibold text-gray-800">Generative AI, NLP, and Computer Vision</span> for privacy-sensitive environments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span>Complete data control, no cloud dependency, air-gap capable</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
            <Link
              href="/products/icarkno"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              Explore icarKno™
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
            >
              Book a Demo
            </Link>
          </div>

          {/* Trust */}
          <div className="mt-8">
            <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
              Trusted by
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              {["NSG", "IIT Delhi", "BCG", "JICA", "MSME", "Rashtriya Raksha University"].map((name) => (
                <span
                  key={name}
                  className="rounded-md border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-500"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
