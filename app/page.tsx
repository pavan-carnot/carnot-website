import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { CredibilityStrip } from "@/components/home/credibility-strip"
import { IcarKnoShowcase } from "@/components/home/icarkno-showcase"
import { ProductsSection } from "@/components/home/products-section"
import { SolutionsSection } from "@/components/home/solutions-section"
import { WhyCarnotSection } from "@/components/home/why-carnot-section"
import { ServicesSection } from "@/components/home/services-section"
import { ClientsSection } from "@/components/home/clients-section"
import { CertificationsSection } from "@/components/home/certifications-section"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Enterprise AI & On-Premise GenAI Solutions for India",
  description:
    "Carnot Research delivers secure, production-grade generative AI, NLP, and computer vision solutions built for government and enterprise. IIT Delhi researchers powering Indian AI innovation.",
  keywords: [
    "on-premise AI India",
    "enterprise generative AI",
    "government AI solutions",
    "secure NLP platform",
    "computer vision India",
    "local LLM deployment",
    "edge AI",
  ],
  openGraph: {
    title: "Carnot Research | Enterprise AI Solutions",
    description: "Secure on-premise generative AI for government and enterprise",
    url: "https://carnotresearch.com",
    type: "website",
    images: [
      {
        url: "https://carnotresearch.com/og-home.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityStrip />
      <IcarKnoShowcase />
      <ProductsSection />
      <SolutionsSection />
      <WhyCarnotSection />
      <ServicesSection />
      <ClientsSection />
      <CertificationsSection />
      <CtaSection />
    </>
  )
}
