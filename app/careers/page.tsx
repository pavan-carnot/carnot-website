import type { Metadata } from "next"
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Careers | Carnot Research",
  description:
    "Join our team of AI researchers and engineers at Carnot Research, IIT Delhi.",
}

export default function CareersPage() {
  return (
    <section className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium tracking-wider text-accent uppercase">
            Careers
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Work with us
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Join our team of AI researchers and engineers. Contribute to
            cutting-edge projects while advancing your career.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/25">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/70 to-primary/0" />
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-transform duration-300 group-hover:scale-110">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Full-Time Positions
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              If you have the drive to make a difference leveraging Deep
              Tech and want to be part of a fine team, we want to hear from
              you.
            </p>
            <Button className="mt-6" variant="outline" size="sm" asChild>
              <Link href="/contact">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/25">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent via-accent/70 to-accent/0" />
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 transition-transform duration-300 group-hover:scale-110">
              <GraduationCap className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Internships
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Passionate student eager to dive into Deep Tech? Gain
              hands-on experience with cutting-edge AI research on our
              team.
            </p>
            <Button className="mt-6" variant="outline" size="sm" asChild>
              <Link href="/contact">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
