"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageSquare, FileSearch, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: MessageSquare,
    title: "Q&A agents",
    description: "Answers questions instantly using knowledge you already have.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: FileSearch,
    title: "Document intelligence",
    description: "Extract insights from documents with AI-powered analysis.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Shield,
    title: "Secure & on-premise",
    description: "Deploy on your infrastructure with complete data sovereignty.",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: Zap,
    title: "Create your own",
    description: "Build custom AI agents tailored to your specific workflows.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
]

const useCases = [
  {
    user: "Legal Team",
    question: "How do I submit an expense?",
    badge: "1 reply",
  },
  {
    user: "HR Department",
    question: "When is open enrollment?",
    badge: "1 reply",
  },
  {
    user: "Engineering",
    question: "Where's the company calendar?",
    badge: "1 reply",
  },
  {
    user: "Operations",
    question: "What is the travel policy?",
    badge: "1 reply",
  },
]

export function IcarKnoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % useCases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Featured Product
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Meet your new 24/7 AI teammates.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            icarKno automates repetitive work for your team with intelligent AI
            agents that understand your organization's knowledge.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left: Features */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                Custom Agents
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px]">
                  New
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Automate repetitive work for your team.
              </h3>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/20 hover:shadow-sm cursor-pointer"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${feature.color} transition-transform group-hover:scale-110`}
                  >
                    <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" asChild>
                <Link href="/products/icarkno">
                  Explore icarKno
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Interactive Demo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-orange-50 via-white to-white p-8 shadow-xl">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-lg font-semibold text-foreground/40">
                  Office Questions
                </h4>
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm transition-all duration-500 ${
                      index === activeIndex
                        ? "border-2 border-primary scale-105"
                        : "border border-border opacity-60"
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-200 to-slate-300">
                      <span className="text-xs font-bold text-slate-700">
                        {useCase.user.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-semibold text-foreground">
                          {useCase.user}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-foreground">
                        {useCase.question}
                      </p>
                      <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">
                        <MessageSquare className="h-3 w-3" />
                        {useCase.badge}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange-200/30 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-blue-200/30 blur-2xl" />
            </div>

            {/* Bottom Card */}
            <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    You assign the tasks. icarKno Agent does the work.
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Deploy intelligent AI agents that work 24/7 to handle
                    repetitive queries and tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Strip */}
        <div className="mt-16 grid gap-4 sm:grid-cols-4 text-center">
          {[
            { label: "Instant Answers", value: "24/7" },
            { label: "Response Time", value: "<2s" },
            { label: "Knowledge Sources", value: "Unlimited" },
            { label: "Languages", value: "100+" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-4"
            >
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
