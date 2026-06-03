import type { Metadata } from "next"
import { CareersContent } from "./content"

export const metadata: Metadata = {
  title: "Careers | icarKno™",
  description:
    "Join our team of AI researchers and engineers at icarKno™, IIT Delhi. Work on enterprise AI, NLP, and computer vision at IIT Delhi's Research and Innovation Park.",
  openGraph: {
    title: "Careers at icarKno™ | AI Research & Engineering",
    description: "Join our team of AI researchers and engineers at IIT Delhi. Work on enterprise AI, NLP, and computer vision.",
    url: "https://carnotresearch.com/careers",
  },
  alternates: { canonical: "https://carnotresearch.com/careers" },
}

export default function CareersPage() {
  return <CareersContent />
}
