import Link from "next/link"
import { ArrowUpRight, Brain, Route, MessageCircle } from "lucide-react"

const products = [
  {
    name: "icarKno",
    tagline: "Enterprise Knowledge GenAI Platform",
    description:
      "Context-aware conversational AI with multimodal data ingestion, LLM-based RAG with verifiable citations, and multi-domain expertise integration for enterprise knowledge management.",
    icon: Brain,
    href: "/products#icarkno",
    iconBg: "bg-[#e0f2fe]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    name: "BharGati AI",
    tagline: "Multimodal Transport Analytics AI",
    description:
      "AI-driven movement analysis and transport analytics platform combining computer vision, NLP, and multimodal data fusion for intelligent transportation systems.",
    icon: Route,
    href: "/products#bhargati",
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
  },
  {
    name: "SAATHI",
    tagline: "Conversational AI Assistant",
    description:
      "Hyper-personalized multilingual AI agent for conversational experiences. Winner of the Transport Stack Open Innovation Challenge by JICA, BCG, and FITT IIT Delhi.",
    icon: MessageCircle,
    href: "/products#saathi",
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
  },
]

export function ProductsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-accent uppercase">
            Engineered Intelligence Platforms
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Products built for production
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Enterprise-grade AI systems powering intelligent decision-making
            across industries and government organizations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-lg ${product.iconBg}`}
                >
                  <product.icon className={`h-5 w-5 ${product.iconColor}`} />
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#1a57eb] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {product.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {product.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
