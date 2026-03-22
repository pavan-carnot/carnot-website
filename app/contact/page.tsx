import type { Metadata } from "next"
import { MapPin, Mail, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Carnot Research. Book an enterprise demo, discuss AI solutions, or explore partnership opportunities.",
}

export default function ContactPage() {
  return (
    <section className="bg-background min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-16 pb-[7.5rem]">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16 lg:items-center">

          {/* ── Left: title + contact details ─────────────────────────── */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                Contact
              </p>
              <h1 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {"Let's start a conversation"}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Have a question about our research, products, or services?
                We&apos;re here to help.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <MapPin className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Visit Us</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    2-A-2B, Research and Innovation Park
                    <br />IIT Delhi, Hauz Khas, New Delhi
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Mail className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Email Us</h3>
                  <a
                    href="mailto:contact@carnotresearch.com"
                    className="mt-0.5 block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    contact@carnotresearch.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Phone className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Call Us</h3>
                  <a
                    href="tel:+918449710411"
                    className="mt-0.5 block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    +91 8449710411
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: form ───────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
