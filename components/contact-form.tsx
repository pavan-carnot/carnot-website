"use client"

import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
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
      company         ? `Organization: ${company}`        : "",
      services.length ? `Services: ${services.join(", ")}` : "",
      products.length ? `Products: ${products.join(", ")}` : "",
      "",
      message,
    ].filter(Boolean).join("\n")

    const params = new URLSearchParams()
    params.set("template-contactform-name",     name)
    params.set("template-contactform-email",    email)
    params.set("template-contactform-phone",    "")
    params.set("template-contactform-subject",  subject)
    params.set("template-contactform-message",  fullMessage)
    params.set("template-contactform-botcheck", "")
    params.set("g-recaptcha-response",          recaptchaResponse)
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
      <div className="flex h-full flex-col items-center justify-center text-center py-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 ring-4 ring-green-100">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">Message sent!</h3>
        <p className="mt-1 text-sm text-gray-500 max-w-xs">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"

  const chipClass =
    "flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs text-gray-600 transition-colors hover:border-blue-300 hover:bg-blue-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 h-full">

      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="name" className="mb-1 block text-xs font-medium text-gray-600">
            Name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="name" name="name" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-medium text-gray-600">
            Email <span className="text-red-500">*</span>
          </label>
          <input type="email" id="email" name="email" required placeholder="you@company.com" className={inputClass} />
        </div>
      </div>

      {/* Row 2: Organization */}
      <div>
        <label htmlFor="company" className="mb-1 block text-xs font-medium text-gray-600">
          Organization
        </label>
        <input type="text" id="company" name="company" placeholder="Your organization" className={inputClass} />
      </div>

      {/* Row 3: Services */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-600">Services of Interest</label>
        <div className="flex flex-wrap gap-1.5">
          {serviceOptions.map((option) => (
            <label key={option} className={chipClass}>
              <input type="checkbox" name="services" value={option} className="sr-only" />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Row 4: Products */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-600">Products of Interest</label>
        <div className="flex flex-wrap gap-1.5">
          {productOptions.map((option) => (
            <label key={option} className={chipClass}>
              <input type="checkbox" name="products" value={option} className="sr-only" />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Row 5: Message */}
      <div className="flex-1">
        <label htmlFor="message" className="mb-1 block text-xs font-medium text-gray-600">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          placeholder="Tell us about your project or requirements..."
          className={`${inputClass} resize-none`}
          style={{ height: "72px" }}
        />
      </div>

      {/* Row 6: reCAPTCHA + Submit */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} size="compact" />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60 transition-colors shadow-sm"
        >
          {status === "sending" ? (
            <><Loader2 className="h-4 w-4 animate-spin" />Sending…</>
          ) : (
            <>Send Message<ArrowRight className="h-4 w-4" /></>
          )}
        </button>
      </div>

      {(status === "error" || errorMsg) && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">
          {errorMsg}
        </p>
      )}
    </form>
  )
}
