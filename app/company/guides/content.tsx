"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Cpu,
  Eye,
  Zap,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// ─── FadeUp ───────────────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.06 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={
        visible
          ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` }
          : { opacity: 0, transform: "translateY(20px)" }
      }
    >
      {children}
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const guides = [
  {
    id: "start-ai-project",
    number: "01",
    icon: Cpu,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    accentFrom: "#7c3aed",
    title: "How to Start an AI Project from Scratch",
    summary:
      "A methodical nine-step approach covering problem definition, feasibility, data, model selection, training, testing, and deployment.",
    steps: 9,
    steps_content: [
      {
        n: "01",
        title: "Define the Problem",
        body: "Clearly define the problem you want to solve. Figure out the expected outcome, success criteria, and practical limits. A clear objective is the basis for a successful AI project.",
      },
      {
        n: "02",
        title: "Assess Feasibility",
        body: "Evaluate if AI is the right solution. Think about data availability, technical complexity, infrastructure needs, and resource requirements. Not every problem needs machine learning.",
      },
      {
        n: "03",
        title: "Data Collection",
        body: "Gather relevant and high-quality data. This may include images, text, sensor data, or structured records. Ensure the dataset represents real-world conditions and edge cases.",
      },
      {
        n: "04",
        title: "Data Preparation",
        body: "Clean, organize, and label the data. Good preprocessing improves model performance and cuts down on errors during training.",
      },
      {
        n: "05",
        title: "Model Selection",
        body: "Choose the right model type based on the problem. Classification, prediction, detection, and generation tasks each require different approaches.",
      },
      {
        n: "06",
        title: "Model Training",
        body: "Train the model with the prepared data. Monitor performance closely and adjust parameters to enhance accuracy and reliability.",
      },
      {
        n: "07",
        title: "Evaluation and Testing",
        body: "Test the model on new data to make sure it works well in real-life situations. Check for reliability, consistency, and scalability.",
      },
      {
        n: "08",
        title: "Deployment",
        body: "Deploy the model in a production environment. Connect it with existing systems and set up monitoring to track live performance.",
      },
      {
        n: "09",
        title: "Continuous Improvement",
        body: "AI systems need regular updates. Monitor performance, retrain with new data, and improve the model as conditions change.",
      },
    ],
  },
  {
    id: "computer-vision-workflow",
    number: "02",
    icon: Eye,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    accentFrom: "#06b6d4",
    title: "Building a Computer Vision System: Complete Workflow",
    summary:
      "From use-case definition and annotation through training, optimization, and production integration: a complete nine-step workflow.",
    steps: 9,
    steps_content: [
      {
        n: "01",
        title: "Define the Use Case",
        body: "Identify the goal: what the system needs to detect, classify, track, or analyze. Clearly define success criteria and operational limits.",
      },
      {
        n: "02",
        title: "Data Collection",
        body: "Collect image or video data that reflects real-world conditions. Include varied lighting, angles, backgrounds, and environments to ensure robustness.",
      },
      {
        n: "03",
        title: "Data Annotation",
        body: "Label the collected data carefully, including bounding boxes, keypoints, and scene categories. Good annotation directly determines model performance.",
      },
      {
        n: "04",
        title: "Model Selection",
        body: "Choose a suitable computer vision architecture based on the task. Different models excel at detection, segmentation, tracking, or pose estimation.",
      },
      {
        n: "05",
        title: "Model Training",
        body: "Train the model with the prepared dataset. Monitor metrics during training and adjust parameters to improve accuracy and generalization.",
      },
      {
        n: "06",
        title: "Evaluation and Validation",
        body: "Test with held-out data across diverse scenarios. Evaluate stability and reliability before moving toward production.",
      },
      {
        n: "07",
        title: "Optimization",
        body: "Optimize the model for speed and efficiency, which is critical for real-time processing or edge-based execution where compute is constrained.",
      },
      {
        n: "08",
        title: "Deployment and Integration",
        body: "Integrate into production environments, including cameras, embedded devices, or cloud platforms, with proper monitoring and performance tracking.",
      },
      {
        n: "09",
        title: "Maintenance and Updates",
        body: "Continuously monitor the system. Collect new data and retrain as needed to maintain accuracy as real-world conditions evolve.",
      },
    ],
  },
  {
    id: "real-time-deployment",
    number: "03",
    icon: Zap,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    accentFrom: "#f59e0b",
    title: "Deploying AI Models in Real-Time Applications",
    summary:
      "Six focused steps to achieve low latency, stability, and consistent performance when taking AI into live production systems.",
    steps: 6,
    steps_content: [
      {
        n: "01",
        title: "Prepare the Trained Model",
        body: "Ensure the model is thoroughly tested and optimized for speed and efficiency before any deployment begins.",
      },
      {
        n: "02",
        title: "Optimize for Low Latency",
        body: "Reduce model size and improve processing speed through quantization, pruning, or distillation for faster response times.",
      },
      {
        n: "03",
        title: "Select the Right Infrastructure",
        body: "Choose between cloud, on-premise, or edge deployment based on your performance and scalability requirements.",
      },
      {
        n: "04",
        title: "Build a Real-Time Data Pipeline",
        body: "Design efficient input and output processing to prevent queuing delays or bottlenecks at high throughput.",
      },
      {
        n: "05",
        title: "Integrate with Existing Systems",
        body: "Connect the AI model with the applications, devices, or platforms where it will operate in production.",
      },
      {
        n: "06",
        title: "Monitor Performance Continuously",
        body: "Track latency, accuracy, and system stability. Update the model as needed to keep it reliable under live conditions.",
      },
    ],
  },
  {
    id: "common-mistakes",
    number: "04",
    icon: AlertTriangle,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    accentFrom: "#ef4444",
    title: "Common Mistakes in AI Development and How to Avoid Them",
    summary:
      "Five critical failure patterns, from vague objectives and poor data to over-engineering and missing monitoring, with clear solutions.",
    steps: 5,
    steps_content: [
      {
        n: "01",
        title: "Unclear Problem Definition",
        body: "Starting without a clear objective wastes time and resources. Define measurable goals and real-world use cases before writing a single line of model code.",
      },
      {
        n: "02",
        title: "Poor Data Quality",
        body: "Low-quality or biased datasets directly reduce model accuracy. Use clean, representative, and well-validated data. Invest in this before investing in models.",
      },
      {
        n: "03",
        title: "Overly Complex Models",
        body: "Complex models raise costs and introduce instability. Start with the simplest effective approach and scale complexity only when performance requires it.",
      },
      {
        n: "04",
        title: "Ignoring Real-World Deployment",
        body: "Models that perform well in testing often fail in production. Test in realistic conditions and monitor performance in the live environment consistently.",
      },
      {
        n: "05",
        title: "No Ongoing Monitoring",
        body: "AI systems degrade over time as data distributions shift. Implement continuous monitoring and a regular retraining cadence from day one.",
      },
    ],
  },
  {
    id: "choosing-ai-solution",
    number: "05",
    icon: Lightbulb,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accentFrom: "#10b981",
    title: "Choosing the Right AI Solution for Your Application",
    summary:
      "A structured five-step framework, from business goal and data analysis to technology matching, infrastructure, and long-term scalability.",
    steps: 5,
    steps_content: [
      {
        n: "01",
        title: "Define the Business Goal",
        body: "Identify the result you want to achieve, whether automation, prediction, visual analysis, or decision support. Your goal shapes every technology choice that follows.",
      },
      {
        n: "02",
        title: "Analyze Your Data Landscape",
        body: "Evaluate the type, quality, and volume of available data. Structured datasets work well for classical ML; image and video data require computer vision architectures.",
      },
      {
        n: "03",
        title: "Match Technology to the Use Case",
        body: "Use machine learning for forecasting and pattern detection. Use computer vision for image or video analysis. Use generative AI for content creation, summarization, and conversational systems.",
      },
      {
        n: "04",
        title: "Consider Performance and Deployment",
        body: "Assess whether your application needs real-time processing, cloud scalability, or edge execution. Infrastructure choices directly affect latency and cost.",
      },
      {
        n: "05",
        title: "Plan for Long-Term Scalability",
        body: "Choose an AI approach that integrates with current systems and allows for ongoing monitoring, model updates, and future growth as requirements evolve.",
      },
    ],
  },
]

// ─── Step card ────────────────────────────────────────────────────────────────
function StepCard({
  n,
  title,
  body,
  accent,
}: {
  n: string
  title: string
  body: string
  accent: string
}) {
  return (
    <div className="group relative flex gap-5 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Number badge */}
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white shadow-sm"
        style={{ background: accent }}
      >
        {n}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-foreground leading-snug">{title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function GuidesContent() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0b1929] py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-primary/18 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-accent/12 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Carnot Research
              </div>
            </FadeUp>
            <FadeUp delay={80}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Practical{" "}
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent">
                  AI Guides
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-300">
                Practical insights from actual development, research, and
                engineering workflows used at Carnot Research. These guides help
                teams plan, build, and deploy AI systems effectively, without
                unnecessary complexity.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Guide Index Cards ─────────────────────────────────────────────── */}
      <section className="bg-background py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12 text-center">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                All Guides
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Jump to a guide
              </h2>
            </div>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g, i) => (
              <FadeUp key={g.id} delay={i * 80}>
                <a
                  href={`#${g.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  {/* Accent top stripe */}
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${g.accentFrom}, transparent)`,
                    }}
                  />

                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${g.iconBg}`}
                    >
                      <g.icon className={`h-5 w-5 ${g.iconColor}`} />
                    </div>
                    <span className="text-3xl font-black text-border">
                      {g.number}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {g.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {g.summary}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {g.steps} steps
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Read guide <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Individual Guide Sections ─────────────────────────────────────── */}
      {guides.map((guide, gi) => (
        <section
          key={guide.id}
          id={guide.id}
          className={`py-20 lg:py-28 ${gi % 2 === 0 ? "bg-secondary/25" : "bg-background"}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Guide header */}
            <FadeUp>
              <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${guide.iconBg}`}
                  >
                    <guide.icon className={`h-6 w-6 ${guide.iconColor}`} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: guide.accentFrom }}
                    >
                      Guide {guide.number}
                    </p>
                    <h2 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">
                      {guide.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-2xl">
                      {guide.summary}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground self-start">
                  {guide.steps} steps
                </span>
              </div>
            </FadeUp>

            {/* Steps */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {guide.steps_content.map((step, si) => (
                <FadeUp key={step.n} delay={si * 70}>
                  <StepCard
                    n={step.n}
                    title={step.title}
                    body={step.body}
                    accent={guide.accentFrom}
                  />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-[#0b1929] px-8 py-14 text-center shadow-xl">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />

              <div className="relative mx-auto max-w-xl">
                <div className="mb-4 flex justify-center">
                  <CheckCircle2 className="h-10 w-10 text-accent/70" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Ready to put these guides into practice?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  Our team can help you apply these frameworks to your specific
                  infrastructure, data environment, and use case.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary text-white hover:bg-primary/90"
                  >
                    <Link href="/contact">
                      Talk to our team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
                  >
                    <Link href="/solutions">Explore solutions</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
