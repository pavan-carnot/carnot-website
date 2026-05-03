export function WeAreSection() {
  return (
    <section className="bg-slate-50/70 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
            We are Carnot Research
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything About Us
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            We build practical AI systems for mission-critical environments where reliability,
            adaptability, and data control are non-negotiable.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl border-t border-slate-200">
          <article className="grid gap-5 border-b border-slate-200 py-8 md:grid-cols-[220px_1fr] md:gap-8">
            <h3 className="text-xl font-semibold text-slate-900">Accuracy &amp; Trust</h3>
            <p className="text-base leading-8 text-slate-600">
              We build AI systems that prioritize correctness over convenience. Our solutions are
              designed with guardrails, domain adaptation, and verifiable outputs, ensuring
              reliability in high-stakes environments.
            </p>
          </article>

          <article className="grid gap-5 border-b border-slate-200 py-8 md:grid-cols-[220px_1fr] md:gap-8">
            <h3 className="text-xl font-semibold text-slate-900">
              Adaptive &amp; Customizable Systems
            </h3>
            <p className="text-base leading-8 text-slate-600">
              Every organization is different. Your AI should be too. We design highly
              customizable, domain-specific systems that evolve with your needs across industries
              and use cases.
            </p>
          </article>

          <article className="grid gap-5 py-8 md:grid-cols-[220px_1fr] md:gap-8">
            <h3 className="text-xl font-semibold text-slate-900">
              Secure &amp; Real-World Ready Systems
            </h3>
            <p className="text-base leading-8 text-slate-600">
              Real-world environments are unpredictable. Your AI should be designed for them. We
              build secure, on-premise systems that ensure full data control and perform reliably
              even in low-connectivity and high-risk conditions.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
