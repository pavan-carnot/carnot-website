const clients = [
  "FITT IIT Delhi",
  "MSME",
  "Rashtriya Raksha University",
  "OPPO",
  "NSG",
  "IIT Delhi",
  "Boston Consulting Group",
  "JICA",
]

export function ClientsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-accent uppercase">
            Trusted By
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our clients & partnerships
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            We work alongside leading public-sector institutions and global
            organizations to accelerate AI-driven governance.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-20 items-center justify-center rounded-xl border border-border bg-card px-6"
            >
              <span className="text-center text-sm font-medium text-muted-foreground">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
