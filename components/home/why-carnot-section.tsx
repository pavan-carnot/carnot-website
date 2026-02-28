import { FlaskConical, ShieldCheck, Building2, Cpu } from "lucide-react"

const reasons = [
  {
    icon: FlaskConical,
    title: "Research-driven AI Engineering",
    description:
      "Founded by professors and scientists from top IITs with 120+ years of collective experience in AI, NLP, and systems engineering.",
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
  },
  {
    icon: ShieldCheck,
    title: "Secure On-Premise Deployment",
    description:
      "Complete data sovereignty. Deploy LLMs and AI systems within your infrastructure with no external data exposure.",
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    icon: Building2,
    title: "Built for Regulated Industries",
    description:
      "Purpose-built for government, defense, and enterprise sectors where compliance, security, and auditability are non-negotiable.",
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
  },
  {
    icon: Cpu,
    title: "Production-grade GenAI Systems",
    description:
      "Not prototypes. Fully deployable, scalable AI systems with RAG, agentic workflows, and verifiable citations.",
    iconBg: "bg-[#fff3c6]",
    iconColor: "text-[#b54708]",
  },
]

export function WhyCarnotSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-accent uppercase">
            Why Carnot
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The Carnot difference
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${reason.iconBg}`}
              >
                <reason.icon className={`h-5 w-5 ${reason.iconColor}`} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
