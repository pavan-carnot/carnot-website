import type { Metadata } from "next"
import { EnterpriseRAGContent } from "./content"

export const metadata: Metadata = {
  title: "Enterprise RAG Solutions | Carnot Research",
  description:
    "Enterprise Retrieval-Augmented Generation (RAG) systems that eliminate AI hallucinations, improve knowledge access, and ensure compliance-ready AI use in secure environments.",
}

export default function EnterpriseRAGPage() {
  return <EnterpriseRAGContent />
}
