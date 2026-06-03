import type { Metadata } from "next"
import { ClientsPartnersContent } from "./content"

export const metadata: Metadata = {
  title: "Clients & Partners: icarKno™",
  description:
    "Organizations we collaborate and build with, including leading public-sector institutions and global organizations accelerating AI-driven governance.",
  openGraph: {
    title: "Clients & Partners: icarKno™",
    description:
      "Working alongside leading institutions to accelerate AI-driven governance.",
    url: "https://carnotresearch.com/about/clients-partners",
    type: "website",
  },
  alternates: { canonical: "https://carnotresearch.com/about/clients-partners" },
}

export default function ClientsPartnersPage() {
  return <ClientsPartnersContent />
}
