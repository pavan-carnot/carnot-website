import type { Metadata } from "next"
import { HeroSection }       from "@/components/home/hero-section"
import { CredibilityStrip }  from "@/components/home/credibility-strip"
import { IcarKnoShowcase }   from "@/components/home/icarkno-showcase"
import { SolutionsSection }  from "@/components/home/solutions-section"
import { AboutSection }      from "@/components/home/about-section"
import { WhyCarnotSection }  from "@/components/home/why-carnot-section"
import { TrustSection }      from "@/components/home/trust-section"
import { CtaSection }        from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Carnot Research | On-Premise AI for Government, Defense & Enterprise",
  description:
    "Carnot Research builds secure, on-premise AI for India's government, defense, and enterprise — knowledge management, computer vision, sports analytics, and NLP. Founded at IIT Delhi. CMMI Level 3 certified.",
  keywords: [
    "on-premise AI India",
    "enterprise AI solutions",
    "government AI India",
    "secure NLP platform",
    "computer vision India",
    "IIT Delhi AI company",
    "icarKno knowledge AI",
    "BharGati sports AI",
    "SAATHI transit AI",
    "local LLM deployment",
    "air-gap AI deployment",
  ],
  openGraph: {
    title: "Carnot Research | On-Premise AI for Government & Enterprise",
    description:
      "Secure AI that runs 100% on your own servers — knowledge management, computer vision, sports analytics, and NLP. Built at IIT Delhi.",
    url: "https://carnotresearch.com",
    type: "website",
    images: [{ url: "https://carnotresearch.com/og-home.png", width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Who we are & what we do — first impression */}
      <HeroSection />

      {/* 2. Numbers — establish credibility instantly */}
      <CredibilityStrip />

      {/* 3. Products — 3 flagship products + icarKno™ spotlight + GeM */}
      <IcarKnoShowcase />

      {/* 4. Capabilities — show we're not just GenAI */}
      <SolutionsSection />

      {/* 5. Company story — IIT Delhi origins + team images */}
      <AboutSection />

      {/* 6. Why us — 3 differentiators over generic cloud AI */}
      <WhyCarnotSection />

      {/* 7. Trust — clients + certifications */}
      <TrustSection />

      {/* 8. CTA — convert */}
      <CtaSection />
    </>
  )
}
