import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VantaGlobeBackground } from "./vanta-globe-background"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#faf5ff]">
      <VantaGlobeBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="mb-4 text-xs font-semibold tracking-widest text-[#7c3aed] uppercase"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
          >
            Enterprise AI Infrastructure
          </p>
          <h1
            className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={{
              color: "#2e1065",
              textShadow: "0 2px 8px rgba(255,255,255,0.8)",
            }}
          >
            Deploy Secure On-Premise Generative AI for Enterprise & Government
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600"
            style={{ textShadow: "0 1px 3px rgba(255,255,255,0.8)" }}
          >
            Carnot Research builds production-grade Generative AI, NLP, and
            Computer Vision systems designed for regulated and
            privacy-sensitive environments in India.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="shadow-lg hover:shadow-xl transition-shadow bg-[#7c3aed] text-white hover:bg-[#7c3aed]/90"
            >
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-[#7c3aed] bg-white/60 text-[#7c3aed] hover:bg-[#7c3aed]/8 hover:border-[#7c3aed] backdrop-blur-sm"
            >
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>
          <p
            className="mt-6 text-xs text-slate-500"
            style={{ textShadow: "0 1px 2px rgba(255,255,255,0.7)" }}
          >
            Trusted by government agencies and enterprise clients across India
          </p>
        </div>
      </div>
    </section>
  )
}
