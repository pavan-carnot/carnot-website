import { FlaskConical, GraduationCap, Shield, Server } from "lucide-react"

const items = [
  {
    icon: FlaskConical,
    label: "Deep-tech AI Research",
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
  },
  {
    icon: GraduationCap,
    label: "IIT Ecosystem",
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
  },
  {
    icon: Shield,
    label: "Government-ready Deployment",
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    icon: Server,
    label: "On-premise AI Expertise",
    iconBg: "bg-[#fff3c6]",
    iconColor: "text-[#b54708]",
  },
]

export function CredibilityStrip() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconBg}`}
              >
                <item.icon className={`h-5 w-5 ${item.iconColor}`} />
              </div>
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
