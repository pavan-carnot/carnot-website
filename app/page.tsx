import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { CredibilityStrip } from "@/components/home/credibility-strip"
import { IcarKnoShowcase } from "@/components/home/icarkno-showcase"
import { SolutionsSection } from "@/components/home/solutions-section"
import { AboutSection } from "@/components/home/about-section"
import { WhyCarnotSection } from "@/components/home/why-carnot-section"
import { TrustSection } from "@/components/home/trust-section"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Carnot Research | Secure On-Premise AI for Government & Enterprise",
  description:
    "Carnot Research builds secure, on-premise AI for India's government, defense, and enterprise — from knowledge management and NLP to computer vision, sports analytics, and transit AI. Founded at IIT Delhi.",
  keywords: [
    "on-premise AI India",
    "enterprise AI solutions",
    "government AI India",
    "secure NLP platform",
    "computer vision India",
    "IIT Delhi AI company",
    "sports AI biomechanics",
    "icarKno knowledge AI",
    "BharGati AI",
    "local LLM deployment",
  ],
  openGraph: {
    title: "Carnot Research | On-Premise AI for Government & Enterprise",
    description: "Secure, on-premise AI spanning knowledge management, computer vision, sports analytics, and NLP — deployed inside your own infrastructure.",
    url: "https://carnotresearch.com",
    type: "website",
    images: [{ url: "https://carnotresearch.com/og-home.png", width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — who we are & what we do */}
      <HeroSection />
      {/* 2. Proof — numbers that establish credibility */}
      <CredibilityStrip />
      {/* 3. Products — flagship products showcase */}
      <IcarKnoShowcase />
      {/* 4. What we do — full capability breadth (not just GenAI) */}
      <SolutionsSection />
      {/* 5. Company story — IIT Delhi origins + team images */}
      <AboutSection />
      {/* 6. Why Carnot — 3 differentiators */}
      <WhyCarnotSection />
      {/* 7. Trust — clients + certifications */}
      <TrustSection />
      {/* 8. CTA */}
      <CtaSection />
    </>
  )
}
