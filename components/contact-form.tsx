"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const serviceOptions = [
  "Product Development",
  "Research Consulting",
  "Industry Skilling",
  "Custom LLM Development",
  "On-Premise Deployment",
]

const productOptions = ["icarKno", "BharGati AI", "SAATHI", "Other"]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ecfdf3]">
          <Check className="h-6 w-6 text-[#15803d]" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {"Thank you for reaching out. We'll get back to you within 24 hours."}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="rounded-xl border border-border bg-card p-8"
    >
      <h3 className="text-lg font-semibold text-foreground">
        Send us a message
      </h3>
      <div className="mt-6 flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Your organization"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Services of Interest
          </label>
          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary has-[:checked]:border-ring has-[:checked]:bg-secondary"
              >
                <input
                  type="checkbox"
                  name="services"
                  value={option}
                  className="sr-only"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Products of Interest
          </label>
          <div className="flex flex-wrap gap-2">
            {productOptions.map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary has-[:checked]:border-ring has-[:checked]:bg-secondary"
              >
                <input
                  type="checkbox"
                  name="products"
                  value={option}
                  className="sr-only"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Tell us about your project or requirements..."
          />
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send Message
          <ArrowRight className="ml-2 h-4 w-4 text-[#1a57eb]" />
        </Button>
      </div>
    </form>
  )
}
