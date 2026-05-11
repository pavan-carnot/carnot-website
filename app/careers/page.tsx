import type { Metadata } from "next"
import { CareersContent } from "./content"

export const metadata: Metadata = {
  title: "Careers | icarKno™",
  description:
    "Join our team of AI researchers and engineers at icarKno™, IIT Delhi.",
}

export default function CareersPage() {
  return <CareersContent />
}
