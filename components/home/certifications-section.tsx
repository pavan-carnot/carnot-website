import { Award, ShieldCheck, BadgeCheck, Building } from "lucide-react"

const certifications = [
  {
    icon: Award,
    title: "CMMI Maturity Level 3",
    detail: "Certificate No: ECI/2411/0710",
    iconBg: "bg-[#fff3c6]",
    iconColor: "text-[#b54708]",
  },
  {
    icon: ShieldCheck,
    title: "ISO/IEC 27001:2022",
    detail: "Certificate No: IN241123021",
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    icon: BadgeCheck,
    title: "DPIIT Certificate",
    detail: "Certificate No: DIPP162658",
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
  },
  {
    icon: Building,
    title: "MSME Certificate",
    detail: "Certificate No: UDYAM-DL-08-0069895",
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
  },
]

export function CertificationsSection() {
  return (
    <section className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-accent uppercase">
            Certifications
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Globally recognized standards
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Quality, security, and reliability backed by globally recognised
            certifications for mission-critical deployments.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${cert.iconBg}`}
              >
                <cert.icon className={`h-6 w-6 ${cert.iconColor}`} />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground">{cert.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
