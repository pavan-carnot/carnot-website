import type { Metadata } from "next"
import { OnPremAIContent } from "./content"

export const metadata: Metadata = {
  title: "On-Premise & Offline AI Deployment | Carnot Research",
  description:
    "Secure AI systems designed for data-sensitive, regulated, and mission-critical environments. Fully on-premise and offline AI deployment for data sovereignty, control, and compliance.",
  openGraph: {
    title: "On-Premise & Offline AI Deployment",
    description:
      "Secure AI systems for regulated, data-sensitive, and mission-critical environments.",
    url: "https://carnotresearch.com/solutions/on-prem-ai",
  },
}

export default function OnPremAiPage() {
  return <OnPremAIContent />
}
