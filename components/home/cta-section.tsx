import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to deploy enterprise AI?
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Talk to our AI experts and discover how Carnot Research can
            transform your organization with secure, on-premise generative AI.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">
                Talk to AI Experts
                <ArrowRight className="ml-2 h-4 w-4 text-[#1a57eb]" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Book Enterprise Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
