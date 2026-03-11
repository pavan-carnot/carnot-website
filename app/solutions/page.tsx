import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Boxes,
  Brain,
  Check,
  FileSearch,
  Lock,
  Plug,
  Settings,
  ShieldAlert,
  WifiOff,
  Workflow,
  Search,
  Lightbulb,
  Bot,
  FileStack,
  MessageSquare,
  Eye,
  FileText,
  Wifi,
  GraduationCap,
  Landmark,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Enterprise AI Solutions | Carnot Research",
  description:
    "Enterprise AI solutions for secure, scalable, real-world impact. From governed RAG and on-premise AI to applied AI systems, we turn complex data into reliable, actionable insights.",
}

const challenges = [
  {
    icon: Boxes,
    title: "Fragmented Knowledge and Data Silos",
    description:
      "Important information is often spread across documents, systems, and departments. This makes decision-making slow and inconsistent.",
  },
  {
    icon: ShieldAlert,
    title: "AI Hallucinations and Trust Gaps",
    description:
      "Generic AI models produce responses without backing from verified data. This creates risk in high-stakes environments.",
  },
  {
    icon: Lock,
    title: "Data Security and Compliance Constraints",
    description:
      "Strict regulations and internal policies limit the use of cloud-based AI.",
  },
  {
    icon: WifiOff,
    title: "Cloud Dependency Risks",
    description:
      "Internet-reliant systems are vulnerable to outages, delays, and security issues.",
  },
  {
    icon: Workflow,
    title: "Operational Inefficiencies",
    description:
      "Manual workflows and slow information retrieval reduce productivity and strategic flexibility.",
  },
]

const solutionCards = [
  {
    icon: FileSearch,
    title: "Enterprise Retrieval-Augmented Generation (RAG)",
    description:
      "Accurate, governed AI responses grounded in your organization’s verified data sources.",
    bullets: [
      "Reduces hallucinations through contextual retrieval",
      "Enables citation-backed AI outputs",
      "Supports role-based knowledge access",
    ],
    href: "/solutions/enterprise-rag",
    cta: "Explore Enterprise RAG Solutions",
  },
  {
    icon: Lock,
    title: "On-Premise and Offline AI Deployment",
    description:
      "Secure AI systems for data-sensitive and regulated environments.",
    bullets: [
      "Fully offline large language model deployment",
      "Support for air-gapped infrastructure",
      "Improved data sovereignty and compliance",
    ],
    href: "/solutions/on-prem-ai",
    cta: "Explore On-Prem AI Solutions",
  },
  {
    icon: Brain,
    title: "Applied AI in Sports",
    description:
      "AI systems for biomechanics analysis, performance improvement, and injury risk modeling.",
    bullets: [
      "Motion and video intelligence",
      "Predictive performance analysis",
      "Data-driven training improvement",
    ],
    href: "/solutions/ai-in-sports",
    cta: "Explore AI in Sports",
  },
]

const services = [
  {
    icon: Search,
    name: "AI Research Consulting",
    desc: "Deep-tech research strategy and advisory for government and enterprise AI initiatives.",
    iconBg: "bg-[#fee4e2]",
    iconColor: "text-[#b42318]",
  },
  {
    icon: Lightbulb,
    name: "Managed Innovation-as-a-Service",
    desc: "End-to-end innovation lifecycle management, from ideation to IP development.",
    iconBg: "bg-[#fff3c6]",
    iconColor: "text-[#b54708]",
  },
  {
    icon: Bot,
    name: "Custom LLM & GenAI Development",
    desc: "Tailored large language models and generative AI systems for specialized domains.",
    iconBg: "bg-[#e0f2fe]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    icon: FileStack,
    name: "Multimodal Data Processing",
    desc: "Ingestion and analysis pipelines for text, audio, video, images, and structured data.",
    iconBg: "bg-[#e0f4ff]",
    iconColor: "text-[#026aa2]",
  },
  {
    icon: MessageSquare,
    name: "Conversational AI & Agentic Systems",
    desc: "Intelligent chatbots and autonomous AI agents for enterprise workflows.",
    iconBg: "bg-[#f3e8ff]",
    iconColor: "text-[#7e22ce]",
  },
  {
    icon: Eye,
    name: "Computer Vision Solutions",
    desc: "Object detection, tracking, and visual analysis systems for real-world deployments.",
    iconBg: "bg-[#e0fdf4]",
    iconColor: "text-[#027a48]",
  },
  {
    icon: FileText,
    name: "NLP & Document Intelligence",
    desc: "Automated document understanding, extraction, and classification at scale.",
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
  },
  {
    icon: Wifi,
    name: "Edge AI & IoT Integration",
    desc: "AI inference at the edge: low-latency, low-power, and fully offline-capable.",
    iconBg: "bg-[#f1f5f9]",
    iconColor: "text-[#334155]",
  },
  {
    icon: GraduationCap,
    name: "Tech Skilling & Capability Building",
    desc: "Training programmes to upskill institutional teams on AI tools and workflows.",
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
  },
  {
    icon: Landmark,
    name: "R&D for Public Sector & e-Governance",
    desc: "Applied AI research for government modernisation, public services, and policy.",
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#1d4ed8]",
  },
]

const frameworkSteps = [
  {
    title: "Problem & Data Assessment",
    description:
      "We look at operational challenges, workflows, and data environments to set clear AI goals.",
    icon: Search,
  },
  {
    title: "AI Architecture & Model Design",
    description:
      "We create custom AI frameworks that fit domain needs, security requirements, and scalability targets.",
    icon: Settings,
  },
  {
    title: "Secure Deployment & Integration",
    description:
      "We deploy systems on-premise, in hybrid setups, or on private infrastructure, ensuring compliance and integration support.",
    icon: Plug,
  },
  {
    title: "Monitoring, Governance & Optimization",
    description:
      "Ongoing evaluation keeps performance up, maintains transparency, and ensures long-term reliability.",
    icon: Check,
  },
]

const industries = [
  {
    title: "Government and Public Sector",
    description:
      "Policy analysis, document intelligence, and citizen service systems.",
  },
  {
    title: "Defense and Strategic Agencies",
    description:
      "Secure AI deployment in controlled and air-gapped environments.",
  },
  {
    title: "Enterprise and Corporate Organizations",
    description:
      "Knowledge management, workflow automation, and decision support.",
  },
  {
    title: "Sports and Performance Institutions",
    description:
      "Biomechanics analysis and predictive performance systems.",
  },
  {
    title: "Research and Academic Bodies",
    description:
      "Data-driven experimentation and AI-assisted analysis.",
  },
]

const faqs = [
  {
    q: "What industries benefit from enterprise AI solutions?",
    a: "Enterprise AI solutions are useful in government, defense, corporate settings, research institutions, and sports organizations. They are especially valuable where large amounts of data need structured analysis and secure processing.",
  },
  {
    q: "How is secure AI deployment different from cloud-based AI?",
    a: "Secure AI deployment focuses on data sovereignty, on-site infrastructure, and controlled access environments. This approach decreases reliance on outside cloud providers.",
  },
  {
    q: "Can AI systems operate fully offline?",
    a: "Yes. With the right infrastructure, AI models can be set up on-site and work without internet access. This allows for secure and isolated operations.",
  },
  {
    q: "What is Retrieval-Augmented Generation (RAG)?",
    a: "Retrieval-Augmented Generation combines semantic search with language models to produce responses based on verified data sources. This reduces inaccuracies and improves reliability.",
  },
  {
    q: "How do AI solutions improve operational efficiency?",
    a: "AI systems make information retrieval quicker, automate repetitive tasks, support better decision-making, and allow for faster, more informed actions across departments.",
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
              Enterprise AI Solutions for Secure, Scalable, Real-World Impact
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              We design and implement artificial intelligence solutions tailored
              for businesses, government organizations, and high-performance
              settings. Our solutions range from secure knowledge systems to
              specific AI applications. We turn complex data into reliable,
              actionable insights.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Talk to our team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#our-solutions">Explore solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Challenges */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              AI Challenges Across Industries
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Modern organizations face growing pressure to adopt AI. However,
              implementation is rarely straightforward.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dbeafe]">
                  <c.icon className="h-5 w-5 text-[#2563eb]" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base font-medium text-foreground">
            Our AI solutions are designed specifically to tackle these
            structural challenges.
          </p>
        </div>
      </section>

      {/* Our AI Solutions */}
      <section id="our-solutions" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our AI Solutions
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Solution-led deployments designed for security, reliability, and
              measurable outcomes.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {solutionCards.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-xl border border-border bg-card p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dbeafe]">
                  <s.icon className="h-5 w-5 text-[#2563eb]" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dbeafe]">
                        <Check className="h-3.5 w-3.5 text-[#2563eb]" />
                      </div>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a57eb] hover:underline"
                  >
                    {s.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities & Specialized Services */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              AI Capabilities &amp; Specialized Services
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              In addition to our solution-led deployments, we provide
              specialized AI services that support research, customization,
              integration, and domain-specific intelligence development.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${service.iconBg}`}
                >
                  <service.icon className={`h-5 w-5 ${service.iconColor}`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {service.name}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation framework */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our AI Implementation Framework
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Delivering AI successfully requires more than models; it also
              needs structure and governance.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {frameworkSteps.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dbeafe]">
                    <step.icon className="h-5 w-5 text-[#2563eb]" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            This structured approach makes sure AI is not just implemented but
            also used effectively.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Industries &amp; Sectors We Support
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Our AI solutions are made for sectors where reliability and
              security are crucial.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-center">
            FAQ
          </h2>
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, idx) => (
              <AccordionItem key={faq.q} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 flex justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Talk to our team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to move from pilots to production?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Tell us about your data, constraints, and outcomes. We’ll propose the
            right architecture, deployment model, and implementation plan.
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
