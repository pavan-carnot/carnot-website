import type { Metadata } from "next"
import { CompanyContent } from "./content"

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn about Carnot Research — a deep-tech AI company founded by IIT professors and scientists building trustworthy AI for government and enterprise.",
}

export default function CompanyPage() {
  return <CompanyContent />
}
