import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  Scale,
  WifiOff,
  Zap,
  SlidersHorizontal,
  Cpu,
  Layers,
  Boxes,
  Wrench,
  Building2,
  Landmark,
  Shield,
  PiggyBank,
  HeartPulse,
  Factory,
  FileText,
  MessagesSquare,
  Workflow,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "On-Premise & Offline AI Deployment | Carnot Research",
  description:
    "Secure AI systems designed for data-sensitive, regulated, and mission-critical environments. Fully on-premise and offline AI deployment for data sovereignty, control, and compliance.",
  openGraph: {
    title: "On-Premise & Offline AI Deployment",
    description:
      "Secure AI systems for regulated, data-sensitive, and mission-critical environments.",
    url: "https://carnotresearch.com/solutions/on-prem-ai",
  },
}

const drivers = [
  {
    icon: ShieldCheck,
    title: "Data Sovereignty Requirements",
    description: "Sensitive information must stay within controlled infrastructure.",
  },
  {
    icon: Scale,
    title: "Regulatory & Compliance Mandates",
    description:
      "Industries like defense, finance, and government need strict access rules and audit trails.",
  },
  {
    icon: WifiOff,
    title: "Air-Gapped Operational Environments",
    description:
      "Some deployments cannot depend on internet connectivity because of security issues.",
  },
  {
    icon: Zap,
    title: "Latency & Operational Reliability",
    description:
      "Real-time systems need low-latency AI inference without relying on the cloud.",
  },
  {
    icon: SlidersHorizontal,
    title: "Infrastructure Control",
    description:
      "Organizations need complete control over model updates, access policies, and system setups.",
  },
]

const capabilities = [
  {
    icon: Cpu,
    title: "Offline Large Language Model Deployment",
    description:
      "Deploy and run LLMs completely within internal systems, without internet access.",
  },
  {
    icon: Layers,
    title: "Multimodal AI Systems",
    description: "Process text, voice, and visual input in secure settings.",
  },
  {
    icon: Boxes,
    title: "Containerized and Isolated Architecture",
    description:
      "Secure deployment with containerization frameworks for isolation and portability.",
  },
  {
    icon: Wrench,
    title: "Custom Model Fine-Tuning",
    description: "AI models tailored to fit specific operational workflows.",
  },
  {
    icon: Workflow,
    title: "Scalable Infrastructure Design",
    description:
      "Support from edge devices to enterprise servers and clustered environments.",
  },
]

const deploymentEnvironments = [
  {
    icon: Landmark,
    title: "Government",
    text: "Government ministries and public sector agencies.",
  },
  {
    icon: Shield,
    title: "Defense",
    text: "Defense and strategic organizations.",
  },
  {
    icon: PiggyBank,
    title: "Finance",
    text: "Financial institutions handling regulated data.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    text: "Healthcare systems managing sensitive records.",
  },
  {
    icon: Factory,
    title: "Critical Infrastructure",
    text: "Critical infrastructure operators.",
  },
]

const infraModels = [
  {
    title: "Fully Air-Gapped Deployment",
    description: "AI systems work completely offline in isolated networks.",
  },
  {
    title: "Private Data Center Deployment",
    description: "Deployed as part of the existing enterprise setup.",
  },
  {
    title: "Edge AI Deployment",
    description: "Localized AI processing for real-time settings.",
  },
]

const applications = [
  { icon: FileText, text: "Secure document intelligence" },
  { icon: Search, text: "Sensitive data analysis" },
  { icon: MessagesSquare, text: "Offline conversational AI systems" },
  { icon: Workflow, text: "Mission-critical workflow automation" },
  { icon: ShieldCheck, text: "Internal decision-support systems" },
]

const faqs = [
  {
    q: "Can AI function completely without internet connectivity?",
    a: "Yes. With the right setup, large language models and multimodal AI systems can operate entirely offline. By hosting models, data pipelines, and retrieval systems in controlled environments, organizations can enable full AI functionality without external network access. This makes it suitable for high-security and air-gapped deployments.",
  },
  {
    q: "What hardware is needed for on-prem AI deployment?",
    a: "Hardware needs depend on the model size, inference load, and operational complexity. Deployments can range from high-performance GPU servers in enterprise data centers to optimized edge devices for local processing. Infrastructure is often customized to achieve a balance of performance, scalability, and cost efficiency.",
  },
  {
    q: "Is on-prem AI more secure than cloud AI?",
    a: "On-premise AI offers more control over infrastructure, access policies, and data management frameworks. By keeping data within internal networks and implementing strict role-based access controls, organizations can lower exposure risks and better meet regulatory or national security requirements.",
  },
  {
    q: "Can on-prem AI scale across multiple departments?",
    a: "Yes. On-prem AI systems can be set up for distributed deployment across departments, facilities, or regional offices. With proper planning and management, organizations can scale workloads while keeping centralized governance and security standards in place.",
  },
  {
    q: "How does on-prem AI ensure compliance?",
    a: "Compliance is upheld through structured management processes such as role-based access control, detailed audit logging, encrypted data pipelines, and network isolation. These measures help organizations meet regulatory requirements while maintaining transparency and accountability in AI operations.",
  },
]

export default function OnPremAiPage() {
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
              On-Premise &amp; Offline AI Deployment
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Secure AI systems designed for data-sensitive, regulated, and
              mission-critical environments.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              We build and implement fully on-premise and offline artificial
              intelligence systems that guarantee data sovereignty, operational
              control, and compliance with strict security requirements.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Discuss This Solution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Request an assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Organizations Are Moving */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Why Organizations Are Moving to On-Premise AI
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              As AI adoption grows, many organizations struggle with cloud-based
              systems.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {drivers.map((d) => (
              <div
                key={d.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dbeafe]">
                  <d.icon className="h-5 w-5 text-[#2563eb]" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-base font-medium text-foreground">
            On-premise AI deployment keeps intelligence within your perimeter.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our On-Premise AI Capabilities
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              We design secure, modular AI infrastructure that works reliably
              without outside support.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
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
        </div>
      </section>

      {/* Deployment Environments */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Deployment Environments
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our on-premise AI solutions are suited for:
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Each deployment is customized to meet regulatory requirements
                and fit operational needs.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {deploymentEnvironments.map((e) => (
                <div
                  key={e.title}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dbeafe]">
                      <e.icon className="h-5 w-5 text-[#2563eb]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {e.title}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {e.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Deployment Models */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Infrastructure &amp; Deployment Models
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              We support flexible infrastructure configurations:
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {infraModels.map((m) => (
              <div
                key={m.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-world applications */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Real-World Applications
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                On-premise AI systems can support:
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <ul className="flex flex-col gap-4">
                {applications.map((a) => (
                  <li key={a.text} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#dbeafe]">
                      <a.icon className="h-4 w-4 text-[#2563eb]" />
                    </div>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {a.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
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
    </>
  )
}

