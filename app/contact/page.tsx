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
    <>
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-wider text-accent uppercase">
              Contact
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {"Let's start a conversation"}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Have a question about our research, products, or services? We
              are here to help and answer any questions you might have.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Visit Us
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      2-B-4A, Research and Innovation Park
                      <br />
                      IIT Delhi, Hauz Khas
                      <br />
                      New Delhi, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Email Us
                    </h3>
                    <a
                      href="mailto:contact@carnotresearch.com"
                      className="mt-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      contact@carnotresearch.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Call Us
                    </h3>
                    <a
                      href="tel:+918449710411"
                      className="mt-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      +91 8449710411
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
