import {
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

const services = [
  {
    icon: Search,
    name: "AI Research Consulting",
    iconBg: "bg-[#fee4e2]",
    iconColor: "text-[#b42318]",
  },
  {
    icon: Lightbulb,
    name: "Managed Innovation-as-a-Service",
    iconBg: "bg-[#fff3c6]",
    iconColor: "text-[#b54708]",
  },
  {
    icon: Bot,
    name: "Custom LLM & GenAI Development",
    iconBg: "bg-[#e0f2fe]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    icon: FileStack,
    name: "Multimodal Data Processing",
    iconBg: "bg-[#e0f4ff]",
    iconColor: "text-[#026aa2]",
  },
  {
    icon: MessageSquare,
    name: "Conversational AI & Agentic Systems",
    iconBg: "bg-[#f3e8ff]",
    iconColor: "text-[#7e22ce]",
  },
  {
    icon: Eye,
    name: "Computer Vision Solutions",
    iconBg: "bg-[#e0fdf4]",
    iconColor: "text-[#027a48]",
  },
  {
    icon: FileText,
    name: "NLP & Document Intelligence",
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
  },
  {
    icon: Wifi,
    name: "Edge AI & IoT Integration",
    iconBg: "bg-[#f1f5f9]",
    iconColor: "text-[#0f172a]",
  },
  {
    icon: GraduationCap,
    name: "Tech Skilling & Capability Building",
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
  },
  {
    icon: Landmark,
    name: "R&D for Public Sector & e-Governance",
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#1d4ed8]",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-accent uppercase">
            Services
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Research consultancy, industry skilling & IP development
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            We provide end-to-end AI services from research to deployment
            across industries.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${service.iconBg}`}
              >
                <service.icon className={`h-5 w-5 ${service.iconColor}`} />
              </div>
              <span className="text-xs font-medium leading-tight text-foreground">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
