import Link from "next/link"
import { ArrowRight } from "lucide-react"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const clientNames = [
  { name: "NSG",        src: `${B}/assets/clients/3.webp`  },
  { name: "IIT Delhi",  src: `${B}/assets/clients/4.webp`  },
  { name: "BCG",        src: `${B}/assets/clients/6.webp`  },
  { name: "JICA",       src: `${B}/assets/clients/5.png`   },
  { name: "MSME",       src: `${B}/assets/clients/8.webp`  },
  { name: "RRU",        src: `${B}/assets/clients/9.png`   },
]

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden text-center"
      style={{
        background: "#030711",
        minHeight: "calc(100vh - 3.75rem)",
      }}
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: "55%",
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{ background: "linear-gradient(to top, #030711, transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 lg:px-8">

        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          Applied AI Research · IIT Delhi · Est. 2017
        </div>

        {/* Headline */}
        <h1 className="text-balance text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
          Research-grade AI.
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #60a5fa 100%)",
              backgroundSize: "200% auto",
            }}
          >
            Deployed in the field.
          </span>
        </h1>

        {/* Sub */}
        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/50">
          Carnot Research builds production AI for government, defense, and enterprise —
          grounded in IIT Delhi research, certified for the most demanding environments.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1d4ed8]"
            style={{ boxShadow: "0 0 32px rgba(37,99,235,0.35)" }}
          >
            See what we build
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
          >
            Talk to our team
          </Link>
        </div>

        {/* Client logos */}
        <div className="mt-16 border-t border-white/8 pt-10">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-widest text-white/25">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {clientNames.map((c) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={c.name}
                src={c.src}
                alt={c.name}
                className="h-7 max-w-[90px] object-contain opacity-30 brightness-200 grayscale transition-all duration-300 hover:opacity-70"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
