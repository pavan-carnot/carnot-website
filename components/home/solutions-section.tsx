import Link from "next/link"
import {
  Landmark,
  BookOpen,
  Server,
  Eye,
  MessageSquareText,
  Activity,
  ArrowRight,
} from "lucide-react"

const solutions = [
  {
    icon: Landmark,
    title: "AI for Government & Defense",
    description:
      "Secure AI deployed inside classified networks — policy document intelligence, e-governance chatbots, and sovereign knowledge systems.",
    href: "/solutions#government",
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    icon: BookOpen,
    title: "Enterprise Knowledge AI",
    description:
      "Ask your entire document library anything. RAG-powered knowledge management that works on PDFs, videos, web, audio, and scanned documents.",
    href: "/solutions#enterprise",
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
  },
  {
    icon: Server,
    title: "On-Premise LLM Deployment",
    description:
      "Run large language models entirely within your own infrastructure — no cloud, no data leaving your network, air-gap capable.",
    href: "/solutions/on-prem-ai",
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Object detection, face recognition, pose estimation, and video analytics built for real-world operational environments.",
    href: "/solutions#cv",
    iconBg: "bg-[#fee4e2]",
    iconColor: "text-[#b42318]",
  },
  {
    icon: MessageSquareText,
    title: "Multilingual NLP & Chatbots",
    description:
      "Document intelligence, summarization, named entity recognition, and multilingual conversational AI across 22+ languages.",
    href: "/solutions#nlp",
    iconBg: "bg-[#f3e8ff]",
    iconColor: "text-[#7e22ce]",
  },
  {
    icon: Activity,
    title: "Sports & Performance AI",
    description:
      "Biomechanical movement analysis from standard video — no wearables needed. Joint angles, gait, posture, and injury risk for coaches and athletes.",
    href: "/products/bhargati",
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#0891b2]",
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-blue-600 uppercase">
            What We Do
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Deep-tech AI across six domains
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            We're not a single-product company. Carnot Research builds across AI, computer vision,
            NLP, and sports science — wherever intelligence needs to be secure and on-premise.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md"
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

        <div className="mt-10 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View all solutions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
