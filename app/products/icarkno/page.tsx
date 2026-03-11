import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  X,
  Server,
  Languages,
  FileText,
  Layers,
  Workflow,
  Shield,
  Megaphone,
  Plane,
  Scale,
  Building2,
  Database,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IcarKnoClientContent } from "./icarkno-client"

export const metadata: Metadata = {
  title: "icarKno™ | Secure Offline Mission-Ready AI | Carnot Research",
  description:
    "A fully on-premise, multimodal AI knowledge system engineered for high-stakes environments. Secure, offline, mission-ready AI for government, defense, and enterprise.",
  keywords: [
    "icarKno",
    "on-premise AI",
    "offline AI",
    "mission-ready AI",
    "enterprise knowledge AI",
    "air-gapped AI",
    "government AI",
    "defense AI",
  ],
  openGraph: {
    title: "icarKno™ - Secure. Offline. Mission-Ready AI",
    description: "Transform any operational setup into an intelligent, self-contained knowledge engine.",
    url: "https://carnotresearch.com/products/icarkno",
  },
}

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

// Core Capabilities data
const capabilities = [
  {
    icon: Server,
    title: "100% Offline Operation",
    description:
      "Fully air-gapped AI inference with no external connectivity required.",
  },
  {
    icon: Languages,
    title: "Multilingual Intelligence",
    description:
      "Supports over 22 Indian languages with voice-first interaction capability.",
  },
  {
    icon: FileText,
    title: "Deep Document Intelligence",
    description:
      "Understands both structured and unstructured documents, including SOPs, scanned PDFs, policy documents, forms, and manuals.",
  },
  {
    icon: Layers,
    title: "Multimodal Processing",
    description:
      "Integrates voice, text, documents, and visual inputs into a unified reasoning framework.",
  },
  {
    icon: Workflow,
    title: "Agentic Workflow Execution",
    description:
      "Goes beyond Q&A to provide structured responses, action recommendations, and workflow assistance.",
  },
  {
    icon: Shield,
    title: "Secure Architecture",
    description:
      "Government and defense-grade architecture designed for sensitive deployments.",
  },
]

// Problem checklist (with X instead of numbers)
const problems = [
  "Dependence on the internet disrupts operations in field and rural areas.",
  "Sensitive data can leave secure locations.",
  "Generic AI lacks specific reasoning for various fields.",
  "Important documents are unstructured and not fully used.",
  "There is no ability for secure, isolated deployment.",
  "There is limited understanding of context or situation.",
]

// Use cases
const useCases = [
  {
    title: "Disaster Management",
    description:
      "Provides offline multilingual access to emergency protocols, district plans, hazard manuals, and field documentation. It helps responders with structured guidance even when networks fail.",
    icon: Megaphone,
  },
  {
    title: "Defense & Field Intelligence",
    description:
      "Enables secure analysis of classified documents, operational logs, and intelligence reports in air-gapped environments. Supports rapid retrieval and contextual reasoning in mission scenarios.",
    icon: Shield,
  },
  {
    title: "Aviation & Flight Operations",
    description:
      "Offers real-time reasoning over technical manuals, checklists, and operational documentation to lessen cognitive load during critical situations.",
    icon: Plane,
  },
  {
    title: "Legal & Policy Analysis",
    description:
      "Processes acts, judgments, contracts, and government orders to provide structured comparisons, detect contradictions, and offer cited insights.",
    icon: Scale,
  },
  {
    title: "Government Field Operations",
    description:
      "Helps officers access policies, forms, and regulatory documents in local languages instantly, improving administrative efficiency and public service delivery.",
    icon: Building2,
  },
  {
    title: "Enterprise Knowledge Systems",
    description:
      "Converts internal documents, SOPs, and operational data into structured, searchable intelligence while keeping data secure.",
    icon: Database,
  },
]

// Comparison table
const comparisonRows = [
  {
    cloud: "Requires internet connectivity",
    icarkno: "Fully offline, air-gapped capable",
  },
  {
    cloud: "Data processed externally",
    icarkno: "Complete on-premise control",
  },
  {
    cloud: "Generic responses",
    icarkno: "Domain-tuned intelligence",
  },
  {
    cloud: "Surface-level Q&A",
    icarkno: "Structured, cited reasoning",
  },
  {
    cloud: "Limited document parsing",
    icarkno: "Deep multimodal document understanding",
  },
  {
    cloud: "Consumer-grade security",
    icarkno: "Government & defense-grade architecture",
  },
]

// FAQ items
const faqs = [
  {
    q: "What is icarKno and what problem does it solve?",
    a: "icarKno is an intelligent knowledge management system that helps organizations make better use of their existing data. Instead of manually searching through files, reports, or repositories, users can quickly find the information they need through a secure, AI-powered search and chat interface.",
  },
  {
    q: "How does icarKno convert organizational data into a searchable knowledge base?",
    a: "icarKno allows you to upload documents or connect existing storage sources, after which the system processes the content and organizes it into a structured knowledge base. Once indexed, the information can be searched using simple questions, making it much easier to access important data.",
  },
  {
    q: "What security features does icarKno provide for sensitive data?",
    a: "Security is a core part of icarKno. Your data stays private and is not shared outside your environment. For organizations that require full control, the system can be deployed on-premise so all processing happens within your own infrastructure.",
  },
  {
    q: "Does icarKno support on-premise deployment for enterprise environments?",
    a: "Yes, icarKno can be deployed on-premise, which means it runs entirely on your organization's servers. This is especially useful for enterprises, research institutions, and government organizations that need high levels of privacy and control.",
  },
  {
    q: "Which document formats and data sources are supported by icarKno?",
    a: "icarKno works with common document formats such as PDFs, text files, reports, and manuals. It can also connect to internal storage, network drives, or cloud services, allowing you to build a knowledge base from your existing data without changing your workflow.",
  },
  {
    q: "How does natural language querying work in icarKno?",
    a: "Instead of using complex search filters, you can simply ask questions in normal language. icarKno understands the query, looks through the stored knowledge, and returns the most relevant information in a clear and accurate way.",
  },
  {
    q: "Does icarKno support multilingual interaction and voice-based access?",
    a: "Yes, icarKno supports multiple languages, so users can ask questions in one language and receive answers in another. It also includes voice support, allowing hands-free interaction when needed.",
  },
  {
    q: "Is it possible to evaluate icarKno through a demo before full deployment?",
    a: "Yes, you can try icarKno through a demo by uploading your own documents and creating a knowledge container. This allows you to see how the system works before deciding on a full deployment for your organization.",
  },
]

export default function IcarKnoPage() {
  return (
    <>
      {/* ─── Hero (Full-width) ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.06) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#3b82f6]/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left: Logo + Headline + Copy + CTAs */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5">
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  icarKno™
                </span>
              </div>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-[2.75rem]">
                Secure. Offline. Mission-Ready AI.
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                A fully on-premise, multimodal AI knowledge system engineered for
                high-stakes environments where security, reliability, and
                contextual intelligence are non-negotiable.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Transform any operational setup into an intelligent,
                self-contained knowledge engine, without cloud dependency.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Dashboard / system mockup (video) */}
            <div className="relative flex justify-center">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#2563eb]/10 via-[#06b6d4]/5 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                <IcarKnoClientContent />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What is icarKno ─────────────────────────────────────────────────── */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What is icarKno™?
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                icarKno™ is a secure, offline AI knowledge and reasoning system
                designed for mission-critical environments. It is built for use
                in government, defense, enterprise, and field operations. It
                allows for real-time understanding of complex documents,
                supports multilingual voice interaction, and extracts structured
                intelligence all on-premise.
              </p>
              <p>
                Unlike generic cloud-based AI tools, icarKno™ works within
                controlled environments. It combines domain-specific reasoning,
                multimodal processing, and contextual awareness into a single
                system that can be deployed.
              </p>
              <p className="font-medium text-foreground">
                It is not just a chatbot; it is an operational intelligence
                platform.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "On-Premise Deployment",
                "Multimodal Reasoning",
                "Multilingual Voice Interface",
                "Structured Intelligence Extraction",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#dbeafe]">
                    <Check className="h-4 w-4 text-[#2563eb]" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Problem icarKno Solves ──────────────────────────────────────── */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The Problem icarKno™ Solves
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            Modern AI systems rely heavily on the cloud and are made for general
            use. In sensitive and high-stakes situations, this leads to serious
            limitations:
          </p>
          <ul className="mx-auto mt-10 max-w-2xl space-y-3">
            {problems.map((problem) => (
              <li
                key={problem}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                  <X className="h-3 w-3 text-destructive" />
                </span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            Organizations in defense, government, disaster response, aviation,
            and critical infrastructure need AI systems that work reliably under
            these constraints.
          </p>
          <p className="mx-auto mt-4 text-center text-lg font-semibold text-foreground">
            icarKno™ is designed to bridge this gap.
          </p>
        </div>
      </section>

      {/* ─── Core Capabilities (2x3 Grid) ────────────────────────────────────── */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Core Capabilities
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dbeafe]">
                  <cap.icon className="h-5 w-5 text-[#2563eb]" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Use Cases (Alternating Blocks) ──────────────────────────────────── */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Use Cases
          </h2>
          <div className="mt-12 space-y-16">
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div
                  className={
                    i % 2 === 1 ? "lg:col-start-2" : ""
                  }
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#dbeafe]">
                    <uc.icon className="h-6 w-6 text-[#2563eb]" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {uc.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {uc.description}
                  </p>
                </div>
                <div
                  className={`flex items-center justify-center rounded-xl border border-border bg-secondary/50 p-8 lg:p-12 ${
                    i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#eff6ff]">
                    <uc.icon className="h-12 w-12 text-[#2563eb]/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The icarKno Difference (Comparison Table) ───────────────────────── */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The icarKno™ Difference
          </h2>
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="bg-muted/50 px-6 py-4 text-center">
                <h3 className="font-semibold text-foreground">
                  Traditional Cloud AI
                </h3>
              </div>
              <div className="bg-[#eff6ff] px-6 py-4 text-center">
                <h3 className="font-semibold text-[#1d4ed8]">icarKno™</h3>
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 divide-x divide-border border-t border-border"
              >
                <div className="px-6 py-4 text-sm text-muted-foreground">
                  {row.cloud}
                </div>
                <div className="bg-card/50 px-6 py-4 text-sm text-foreground">
                  {row.icarkno}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ────────────────────────────────────────────────────── */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Ready to deploy icarKno™?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Talk to our team about deploying secure, offline AI in your
            organization.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
