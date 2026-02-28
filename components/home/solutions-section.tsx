import Link from "next/link"
import {
  Landmark,
  BookOpen,
  Server,
  Eye,
  MessageSquareText,
} from "lucide-react"

const solutions = [
  {
    icon: Landmark,
    title: "AI for Government",
    description:
      "Secure, sovereign AI systems for governance, e-governance chatbots, and policy document intelligence.",
    href: "/solutions#government",
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    icon: BookOpen,
    title: "Enterprise Knowledge AI",
    description:
      "RAG-powered knowledge management with multimodal ingestion from PDFs, web, audio, video, and scanned documents.",
    href: "/solutions#enterprise",
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
  },
  {
    icon: Server,
    title: "On-Premise LLM Deployment",
    description:
      "Deploy large language models within your infrastructure. Complete data sovereignty with no cloud dependency.",
    href: "/solutions#on-premise",
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
  },
  {
    icon: Eye,
    title: "Computer Vision Systems",
    description:
      "Object detection, face recognition, video analytics, and semantic segmentation for real-world applications.",
    href: "/solutions#cv",
    iconBg: "bg-[#fee4e2]",
    iconColor: "text-[#b42318]",
  },
  {
    icon: MessageSquareText,
    title: "NLP Platforms",
    description:
      "Document intelligence, named entity recognition, summarization, sentiment analysis, and multilingual processing.",
    href: "/solutions#nlp",
    iconBg: "bg-[#f3e8ff]",
    iconColor: "text-[#7e22ce]",
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-accent uppercase">
            Solutions
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            AI solutions for every sector
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            From government to enterprise, we deploy AI systems that work
            on-ground, at-scale, and in-context.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${solution.iconBg}`}
              >
                <solution.icon className={`h-5 w-5 ${solution.iconColor}`} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {solution.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
