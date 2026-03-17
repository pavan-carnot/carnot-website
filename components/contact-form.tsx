"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Loader2 } from "lucide-react"

const API_ENDPOINT =
  "https://izwz05lqn1.execute-api.ap-south-1.amazonaws.com/default/sendMail"

const serviceOptions = [
  "Product Development",
  "Research Consulting",
  "Industry Skilling",
  "Custom LLM Development",
  "On-Premise Deployment",
]

const productOptions = ["icarKno™", "BharGati™ AI", "SAATHI", "Other"]

type Status = "idle" | "sending" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const name     = (formData.get("name")    as string) ?? ""
    const email    = (formData.get("email")   as string) ?? ""
    const company  = (formData.get("company") as string) ?? ""
    const message  = (formData.get("message") as string) ?? ""
    const services = formData.getAll("services") as string[]
    const products = formData.getAll("products") as string[]

    // Build a readable subject line
    const subject = `Contact from ${name}${company ? ` (${company})` : ""}`

    // Bundle everything into the message body
    const fullMessage = [
      `Name: ${name}`,
      company  ? `Organization: ${company}`               : "",
      services.length ? `Services: ${services.join(", ")}` : "",
      products.length ? `Products: ${products.join(", ")}` : "",
      "",
      message,
    ].filter(Boolean).join("\n")

    // Map to Lambda-expected field names
    const params = new URLSearchParams()
    params.set("template-contactform-name",    name)
    params.set("template-contactform-email",   email)
    params.set("template-contactform-phone",   "")
    params.set("template-contactform-subject", subject)
    params.set("template-contactform-message", fullMessage)
    services.forEach((s) => params.append("template-contactform-service[]", s))

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      })

      if (response.ok) {
        setStatus("success")
      } else {
        const err = await response.json().catch(() => ({ message: "Something went wrong." }))
        setErrorMsg(err.message ?? "Failed to send message.")
        setStatus("error")
      }
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Network error. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ecfdf3]">
          <Check className="h-6 w-6 text-[#15803d]" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">Message sent</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {"Thank you for reaching out. We'll get back to you within 24 hours."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-8">
      <h3 className="text-lg font-semibold text-foreground">Send us a message</h3>

      <div className="mt-6 flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
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
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
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
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-foreground">
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
                <input type="checkbox" name="services" value={option} className="sr-only" />
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
                <input type="checkbox" name="products" value={option} className="sr-only" />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
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

        {status === "error" && (
          <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-sm text-destructive">
            {errorMsg}
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={status === "sending"}
          className="w-full sm:w-auto"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
