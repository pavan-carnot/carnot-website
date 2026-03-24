"use client"

import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Loader2 } from "lucide-react"

const API_ENDPOINT =
  "https://izwz05lqn1.execute-api.ap-south-1.amazonaws.com/default/sendMail"

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "6Lehn-cpAAAAAJ4E59tN-ihLUUDt3zpEykVAMRPI"

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
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg("")

    const recaptchaResponse = recaptchaRef.current?.getValue()
    if (!recaptchaResponse) {
      setErrorMsg("Please complete the reCAPTCHA verification.")
      return
    }

    setStatus("sending")

    const form = e.currentTarget
    const formData = new FormData(form)

    const name     = (formData.get("name")    as string) ?? ""
    const email    = (formData.get("email")   as string) ?? ""
    const company  = (formData.get("company") as string) ?? ""
    const message  = (formData.get("message") as string) ?? ""
    const services = formData.getAll("services") as string[]
    const products = formData.getAll("products") as string[]

    const subject = `Contact from ${name}${company ? ` (${company})` : ""}`

    const fullMessage = [
      `Name: ${name}`,
      company         ? `Organization: ${company}`               : "",
      services.length ? `Services: ${services.join(", ")}`        : "",
      products.length ? `Products: ${products.join(", ")}`        : "",
      "",
      message,
    ].filter(Boolean).join("\n")

    const params = new URLSearchParams()
    params.set("template-contactform-name",    name)
    params.set("template-contactform-email",   email)
    params.set("template-contactform-phone",   "")
    params.set("template-contactform-subject", subject)
    params.set("template-contactform-message", fullMessage)
    params.set("template-contactform-botcheck", "")
    params.set("g-recaptcha-response",         recaptchaResponse)
    services.forEach((s) => params.append("template-contactform-service[]", s))

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      })

      if (response.ok) {
        setStatus("success")
        recaptchaRef.current?.reset()
      } else {
        let errMsg = `Server error (${response.status}). Please try again or email us directly.`
        try {
          const body = await response.text()
          const json = JSON.parse(body)
          if (json?.message) errMsg = json.message
          else if (json?.error) errMsg = json.error
        } catch { /* non-JSON body */ }
        setErrorMsg(errMsg)
        setStatus("error")
        recaptchaRef.current?.reset()
      }
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Network error. Please try again.")
      setStatus("error")
      recaptchaRef.current?.reset()
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-10 text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ecfdf3]">
          <Check className="h-5 w-5 text-[#15803d]" />
        </div>
        <h3 className="mt-3 text-base font-semibold text-foreground">Message sent</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {"Thank you for reaching out. We'll get back to you within 24 hours."}
        </p>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"

  const chipClass =
    "flex cursor-pointer items-center rounded-md border border-input bg-background px-2.5 py-1 text-xs text-foreground transition-colors hover:bg-secondary has-[:checked]:border-ring has-[:checked]:bg-secondary"

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-5">
      <h3 className="text-base font-semibold text-foreground">Send us a message</h3>

      <div className="mt-4 flex flex-col gap-3">
        {/* Name + Email */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-xs font-medium text-foreground">
              Name <span className="text-destructive">*</span>
            </label>
            <input type="text" id="name" name="name" required placeholder="Your name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-medium text-foreground">
              Email <span className="text-destructive">*</span>
            </label>
            <input type="email" id="email" name="email" required placeholder="you@company.com" className={inputClass} />
          </div>
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="company" className="mb-1 block text-xs font-medium text-foreground">
            Organization
          </label>
          <input type="text" id="company" name="company" placeholder="Your organization" className={inputClass} />
        </div>

        {/* Services */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground">Services of Interest</label>
          <div className="flex flex-wrap gap-1.5">
            {serviceOptions.map((option) => (
              <label key={option} className={chipClass}>
                <input type="checkbox" name="services" value={option} className="sr-only" />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground">Products of Interest</label>
          <div className="flex flex-wrap gap-1.5">
            {productOptions.map((option) => (
              <label key={option} className={chipClass}>
                <input type="checkbox" name="products" value={option} className="sr-only" />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-1 block text-xs font-medium text-foreground">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            required
            placeholder="Tell us about your project or requirements..."
            className={inputClass}
          />
        </div>

        <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} size="normal" />

        {(status === "error" || errorMsg) && (
          <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
            {errorMsg}
          </p>
        )}

        <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
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
