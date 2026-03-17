import type { Metadata } from "next"
import { CareersContent } from "./content"

export const metadata: Metadata = {
  title: "Careers | Carnot Research",
  description:
    "Join our team of AI researchers and engineers at Carnot Research, IIT Delhi.",
}

export default function CareersPage() {
  return <CareersContent />
}
