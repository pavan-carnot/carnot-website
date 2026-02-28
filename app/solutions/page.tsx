import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Landmark,
  BookOpen,
  Server,
  Eye,
  MessageSquareText,
  ShieldCheck,
  Globe,
  Cpu,
  FileText,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI solutions for government, enterprise, and regulated industries. On-premise LLM deployment, computer vision, NLP, and knowledge AI platforms.",
}

const solutions = [
  {
    id: "government",
    icon: Landmark,
    title: "AI for Government",
    subtitle: "Secure, sovereign AI infrastructure for public sector",
    description:
      "Government organizations require AI systems that meet the highest standards of security, auditability, and data sovereignty. Carnot Research builds AI infrastructure purpose-built for governance — from citizen-facing chatbots to policy document intelligence systems.",
    capabilities: [
      "Citizen-facing governance chatbots in multiple Indian languages",
      "Policy document RAG systems with verifiable citations",
      "On-premise deployment with zero external data exposure",
      "e-Governance automation and workflow optimization",
      "Compliance with government security standards",
      "Listed on Government e-Marketplace (GeM)",
    ],
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    id: "enterprise",
    icon: BookOpen,
    title: "Enterprise Knowledge AI",
    subtitle: "RAG-powered knowledge management at scale",
    description:
      "Transform your organization's unstructured data — contracts, reports, policies, feedback, support tickets — into an intelligent, searchable knowledge system powered by Retrieval-Augmented Generation with citations.",
    capabilities: [
      "Multimodal data ingestion (PDFs, web, audio, video, scanned docs)",
      "LLM-based RAG with verifiable citations",
      "Question answering from domain-specific documents",
      "Document classification and automatic routing",
      "Named entity recognition and structured extraction",
      "Summarization and briefing from long reports",
    ],
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
  },
  {
    id: "on-premise",
    icon: Server,
    title: "On-Premise LLM Deployment",
    subtitle: "Complete data sovereignty with no cloud dependency",
    description:
      "What is On-Premise Generative AI? It is the deployment of large language models entirely within your own infrastructure. Your data never leaves your network. Carnot Research specializes in secure LLM deployment architecture for organizations that demand complete control over their AI systems.",
    capabilities: [
      "Full LLM deployment within your data center",
      "No external API calls or cloud dependency",
      "Custom fine-tuning on proprietary data",
      "Enterprise RAG systems with private knowledge bases",
      "Air-gapped deployment options for defense and security",
      "Ongoing maintenance and model updates",
    ],
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
  },
  {
    id: "cv",
    icon: Eye,
    title: "Computer Vision Systems",
    subtitle: "Extract intelligence from images and video",
    description:
      "State-of-the-art computer vision and deep learning solutions that help organizations extract, analyze, and understand information from images and videos. Automate visual processes, reduce operational costs, and enable real-time decision-making.",
    capabilities: [
      "Object detection and counting",
      "Face recognition and biometrics",
      "Video analytics and surveillance",
      "Activity and emotion recognition",
      "Pose estimation and gait analysis",
      "Semantic segmentation and depth estimation",
    ],
    iconBg: "bg-[#fee4e2]",
    iconColor: "text-[#b42318]",
  },
  {
    id: "nlp",
    icon: MessageSquareText,
    title: "NLP Platforms",
    subtitle: "Deployable, domain-specific language models",
    description:
      "Our NLP platforms extract intelligence from unstructured, multilingual, and multimodal data. From regulatory documents to citizen queries, we make machines truly understand, reason with, and generate human language in contextually grounded ways.",
    capabilities: [
      "Question answering with domain-specific citations",
      "Speech-to-text and multilingual transcription",
      "OCR and visual reasoning with VLMs",
      "Intent detection for conversational routing",
      "Sentiment and feedback analysis",
      "Multimodal data fusion (text, image, speech, video)",
    ],
    iconBg: "bg-[#e0f2fe]",
    iconColor: "text-[#1d4ed8]",
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-wider text-accent uppercase">
              Solutions
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              AI solutions built for real-world deployment
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              From government to enterprise, we deliver AI that works
              on-ground, at-scale, and in-context. Every solution is designed
              for secure, on-premise deployment in regulated environments.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Detail */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-20 lg:py-28 ${index % 2 === 0 ? "bg-secondary/30" : "bg-background"}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${solution.iconBg}`}
                >
                  <solution.icon className={`h-6 w-6 ${solution.iconColor}`} />
                </div>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
                  {solution.title}
                </h2>
                <p className="mt-1 text-base font-medium text-accent">
                  {solution.subtitle}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/contact">
                      Discuss This Solution
                      <ArrowRight className="ml-2 h-4 w-4 text-[#1a57eb]" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Capabilities
                </h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {solution.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Need a custom AI solution?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            We partner with organizations to convert deep-tech research into
            scalable tools, applications, and IP.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                Talk to Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
