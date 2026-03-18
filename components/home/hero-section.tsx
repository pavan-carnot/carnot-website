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
          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            AI Systems Built for{" "}
            <span className="text-blue-600">India&apos;s Real Problems</span>
          </h1>

          {/* Sub */}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
            Carnot Research builds intelligent AI systems across enterprise knowledge
            management, elite sports analytics, and public transit intelligence —
            with specialized on-premise solutions for government and defense.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              Explore Products
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
              {["NSG", "IIT Delhi", "OPPO", "BCG", "JICA", "MSME"].map((name) => (
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
