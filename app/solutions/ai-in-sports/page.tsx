import type { Metadata } from "next"
import { AiInSportsContent } from "./content"

export const metadata: Metadata = {
  title: "Applied AI in Sports Performance & Biomechanics | Carnot Research",
  description:
    "Data-driven intelligence for improving performance, analyzing movement, and preventing injuries. AI systems for biomechanics modeling, video analysis, and predictive analytics.",
  openGraph: {
    title: "Applied AI in Sports Performance & Biomechanics",
    description:
      "Data-driven intelligence for improving performance, analyzing movement, and preventing injuries.",
    url: "https://carnotresearch.com/solutions/ai-in-sports",
  },
}

export default function AiInSportsPage() {
  return <AiInSportsContent />
}
