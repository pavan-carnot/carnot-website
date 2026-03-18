import type { Metadata } from "next"
import { HeroSection }      from "@/components/home/hero-section"
import { IcarKnoShowcase }  from "@/components/home/icarkno-showcase"
import { SolutionsSection } from "@/components/home/solutions-section"
import { AboutSection }     from "@/components/home/about-section"
import { WhyCarnotSection } from "@/components/home/why-carnot-section"
import { TrustSection }     from "@/components/home/trust-section"
import { CtaSection }       from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Carnot Research — AI Systems Built for India's Institutions",
  description:
    "Carnot Research builds production-grade AI for government, defense, and enterprise. Founded at IIT Delhi. CMMI Level 3 & ISO/IEC 27001:2022 certified. icarKno™, BharGati™, SAATHI.",
  keywords: [
    "applied AI India",
    "on-premise AI government",
    "enterprise language models",
    "IIT Delhi AI research",
    "secure AI deployment",
    "computer vision India",
    "defense AI systems",
    "NLP enterprise India",
    "sports biomechanics AI",
    "SAATHI Delhi transit AI",
  ],
  openGraph: {
    title: "Carnot Research — AI Systems for India's Institutions",
    description:
      "Production-grade AI for government, defense, and enterprise. Founded at IIT Delhi.",
    url: "https://carnotresearch.com",
    type: "website",
    images: [{ url: "https://carnotresearch.com/og-home.png", width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IcarKnoShowcase />
      <SolutionsSection />
      <AboutSection />
      <WhyCarnotSection />
      <TrustSection />
      <CtaSection />
    </>
  )
}
