import Link from "next/link"
import {
  Landmark, BookOpen, Server, Eye, MessageSquareText, Activity, ArrowRight,
} from "lucide-react"

const capabilities = [
  {
    icon: Landmark,
    title: "Government & Defense AI",
    desc: "Secure, sovereign AI systems for policy document intelligence, e-governance chatbots, and classified environments. Deployed fully inside your own network.",
    href: "/solutions",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
  },
  {
    icon: BookOpen,
    title: "Enterprise Knowledge Management",
    desc: "Turn your document library into a searchable, conversational AI. RAG-powered system ingests PDFs, videos, web, audio, and scanned documents, and answers with cited sources.",
    href: "/solutions",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
  },
  {
    icon: Server,
    title: "On-Premise LLM Deployment",
    desc: "Deploy large language models entirely within your own infrastructure. Full data sovereignty with no cloud routing, no third-party access, and air-gap capability for sensitive environments.",
    href: "/solutions/on-prem-ai",
    iconBg: "bg-green-50",
    iconColor: "text-green-700",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "Object detection, pose estimation, face recognition, and video analytics built for real operational environments across sports, security, healthcare, and manufacturing.",
    href: "/solutions",
    iconBg: "bg-red-50",
    iconColor: "text-red-700",
  },
  {
    icon: MessageSquareText,
    title: "Multilingual NLP & Chatbots",
    desc: "Conversational AI, document intelligence, summarization, and named entity recognition across 22+ languages including Indic languages for India-specific deployments.",
    href: "/solutions",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-700",
  },
  {
    icon: Activity,
    title: "Sports & Performance AI",
    desc: "Biomechanical movement analysis from standard video. No wearables needed. Real-time insights on posture, gait, and joint mechanics for coaches and athletes.",
    href: "/products/bhargati",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            What We Build
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Beyond products: a full AI research team
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our products are just three examples of what we build. Carnot Research takes
            on custom AI projects across six domains, for organizations that need something
            built from the ground up.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-md"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${c.iconBg}`}>
                <c.icon className={`h-5 w-5 ${c.iconColor}`} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
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
