import type { Metadata } from "next"
import { AboutContent } from "./content"

export const metadata: Metadata = {
  title: "About: Secure Enterprise AI Infrastructure",
  description:
    "icarKno™ is an applied AI company building secure, domain-aligned enterprise AI infrastructure for government, defense, and enterprise environments in India.",
  keywords: [
    "enterprise AI",
    "secure AI systems",
    "AI infrastructure India",
    "government AI solutions",
    "enterprise artificial intelligence India",
    "institutional AI platforms",
    "secure AI deployment",
  ],
  openGraph: {
    title: "About icarKno™: Secure Enterprise AI Infrastructure",
    description:
      "Applied AI company building secure, domain-aligned AI infrastructure for government, defense, and enterprise.",
    url: "https://carnotresearch.com/about",
    type: "website",
  },
}

export default function AboutPage() {
  return <AboutContent />
}
