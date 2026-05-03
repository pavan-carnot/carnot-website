import type { Metadata } from "next"
import { HeroSection }                    from "@/components/home/hero-section"
import { WeAreSection }                   from "@/components/home/we-are-section"
import { IcarKnoShowcase, MoreProducts }  from "@/components/home/icarkno-showcase"
import { ProblemSection }                 from "@/components/home/problem-section"
import { SolutionsSection }               from "@/components/home/solutions-section"
import { AboutSection }                   from "@/components/home/about-section"
import { TrustSection }                   from "@/components/home/trust-section"

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
    "icarKno™ knowledge AI",
    "BharGati™ sports AI",
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
      {/* 1. Who we are & first impression */}
      <HeroSection />

      {/* 2. We are Carnot Research */}
      <WeAreSection />

      {/* 3. icarKno™ — flagship product spotlight */}
      <IcarKnoShowcase />

      {/* 4. Why edge AI matters — the problem icarKno solves */}
      <ProblemSection />

      {/* 5. More from Carnot — BharGati & SAATHI */}
      <MoreProducts />

      {/* 6. All capabilities across 6 domains */}
      <SolutionsSection />

      {/* 7. Company story — IIT Delhi origins */}
      <AboutSection />

      {/* 8. Clients + certifications */}
      <TrustSection />

    </>
  )
}
