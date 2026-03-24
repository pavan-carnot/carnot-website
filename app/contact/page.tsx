import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Carnot Research. Book an enterprise demo, discuss AI solutions, or explore partnership opportunities.",
}

export default function ContactPage() {
  return (
    <div className="flex h-[calc(100vh-3.75rem)] overflow-hidden">

      {/* ── Left panel ── */}
      <div className="hidden lg:flex lg:w-[42%] flex-col justify-between bg-[#0b1929] px-10 py-10">

        {/* Top content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">Contact</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white">
            {"Let's start a"}<br />
            <span className="text-blue-300">conversation</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
            Have a question about our research, products, or services?
            Our team of IIT Delhi researchers is here to help.
          </p>

          {/* Contact details */}
          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <MapPin className="h-4 w-4 text-blue-300" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider">Visit</p>
                <p className="mt-0.5 text-sm text-white/80 leading-relaxed">
                  2-A-2B, Research and Innovation Park<br />
                  IIT Delhi, Hauz Khas, New Delhi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Mail className="h-4 w-4 text-blue-300" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider">Email</p>
                <a href="mailto:contact@carnotresearch.com" className="mt-0.5 block text-sm text-white/80 hover:text-white transition-colors">
                  contact@carnotresearch.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Phone className="h-4 w-4 text-blue-300" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider">Call</p>
                <a href="tel:+918449710411" className="mt-0.5 block text-sm text-white/80 hover:text-white transition-colors">
                  +91 8449710411
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: certifications */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-3">Certified & Trusted</p>
          <div className="flex flex-wrap gap-2">
            {["CMMI Level 3", "ISO 27001:2022", "DPIIT", "MSME"].map((cert) => (
              <span key={cert} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/50">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right panel: form ── */}
      <div className="flex flex-1 flex-col justify-center bg-gray-50 px-8 py-8 lg:px-12 overflow-y-auto">
        <div className="w-full max-w-xl mx-auto">

          {/* Mobile header */}
          <div className="mb-5 lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Contact</p>
            <h1 className="mt-1 text-2xl font-bold text-gray-900">{"Let's start a conversation"}</h1>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-gray-200 bg-white px-7 py-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-900">Send us a message</h2>
              <Link href="mailto:contact@carnotresearch.com" className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700">
                Email directly <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
            <ContactForm />
          </div>

          <p className="mt-3 text-center text-xs text-gray-400">
            We typically respond within 24 hours on business days
          </p>
        </div>
      </div>

    </div>
  )
}
