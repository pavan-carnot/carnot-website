import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Activity,
  Video,
  Gauge,
  ShieldAlert,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Applied AI in Sports Performance & Biomechanics | Carnot Research",
  description:
    "Data-driven intelligence for improving performance, analyzing movement, and preventing injuries. AI systems for biomechanics modeling, video analysis, and predictive analytics.",
  openGraph: {
    title: "Applied AI in Sports Performance & Biomechanics",
    description:
      "Data-driven intelligence for improving performance, analyzing movement, and preventing injuries.",
    url: "https://carnotresearch.com/solutions/ai-in-sports",
  },
}

const transformPoints = [
  "Real-time motion analysis",
  "Objective performance assessment",
  "Predictive injury risk modeling",
  "Tactical and gameplay insights",
  "Training improvement based on measurable indicators",
]

const capabilities = [
  {
    icon: Activity,
    title: "Biomechanics and Motion Analysis",
    description:
      "AI-based analysis of movement patterns to improve technique, balance, and efficiency.",
  },
  {
    icon: Video,
    title: "Computer Vision-Based Video Intelligence",
    description:
      "Automated breakdown of gameplay and training sessions with video analytics.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization Modeling",
    description:
      "Data-driven insights into endurance, strength metrics, and recovery cycles.",
  },
  {
    icon: ShieldAlert,
    title: "Injury Risk Prediction",
    description:
      "Predictive modeling using workload, fatigue indicators, and biomechanical stress markers.",
  },
]

const beneficiaries = [
  "Professional sports teams",
  "High-performance training academies",
  "Sports science research institutions",
  "Athletic performance labs",
  "Individual elite athletes",
]

const impactPoints = [
  "Reduced injury downtime through early risk detection.",
  "Improved training efficiency with objective metrics.",
  "Better technique refinement.",
  "Data-driven decision-making for competition strategy.",
  "Enhanced athlete workload management.",
]

const faqs = [
  {
    q: "How is AI used in sports training?",
    a: "AI analyzes video footage, biomechanical data, and performance metrics to offer clear insights into movement patterns, fatigue levels, and tactical decisions. This helps coaches improve training programs and increase efficiency.",
  },
  {
    q: "Can AI predict sports injuries?",
    a: "AI systems can spot patterns in workload, biomechanics, and fatigue indicators that relate to injury risk. While these systems are not a substitute for medical expertise, they support proactive injury prevention strategies through predictive modeling.",
  },
  {
    q: "Is computer vision accurate for motion tracking in sports?",
    a: "Modern computer vision models can estimate body pose and movement paths accurately, especially when using sport-specific datasets and controlled settings.",
  },
  {
    q: "What sports can benefit from AI performance analytics?",
    a: "AI applications can be used in team sports, individual athletics, racquet sports, endurance events, and strength training environments.",
  },
  {
    q: "Does AI replace coaches or sports analysts?",
    a: "AI does not replace coaches or analysts. Instead, it improves their decision-making by providing data-driven insights that enhance human expertise. Coaches keep strategic control while using AI to improve technique, manage workloads, and prepare tactics.",
  },
  {
    q: "What type of data is required for AI in sports performance analysis?",
    a: "AI systems can use video footage, wearable sensor data, GPS tracking metrics, physiological measurements, and organized performance statistics. Better quality and consistency in data input lead to more accurate and useful AI insights. Notably, Bhargati needs only video footage of the athlete to work. This allows for performance and biomechanics analysis without needing extra wearable sensors or tracking devices.",
  },
  {
    q: "Can AI provide real-time feedback during training sessions?",
    a: "Yes. With the right infrastructure and optimized models, AI systems can analyze motion or performance data almost in real-time, allowing for immediate corrective feedback during practice sessions.",
  },
]

export default function AiInSportsPage() {
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
              Applied AI in Sports Performance &amp; Biomechanics
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Data-driven intelligence for improving performance, analyzing
              movement, and preventing injuries.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              We create and implement artificial intelligence systems that
              assist athletes, coaches, and sports organizations in making
              better training and performance choices through biomechanics
              modeling, video analysis, and predictive analytics.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Discuss This Solution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How AI is Transforming Sports Performance */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                How AI is Transforming Sports Performance
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Modern sports demand precision. Small performance improvements,
                injury prevention, and better recovery depend more on data.
                Artificial intelligence enables:
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                By combining computer vision and machine learning, AI systems
                provide useful insights beyond traditional analytics.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                What AI enables
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {transformPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dbeafe]">
                      <Check className="h-3.5 w-3.5 text-[#2563eb]" />
                    </div>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our Core Capabilities in Sports AI
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              We build AI systems designed for sports performance settings.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dbeafe]">
                  <cap.icon className="h-5 w-5 text-[#2563eb]" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Who Benefits from AI in Sports
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our solutions are made for:
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {beneficiaries.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Impact on athlete performance
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                AI in sports delivers real performance improvements.
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {impactPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {p}
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

