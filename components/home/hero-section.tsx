"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, FileText, Shield, Cpu, Search, ChevronRight } from "lucide-react"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); ob.unobserve(el) } }, { threshold })
    ob.observe(el); return () => ob.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ─── Animated number ──────────────────────────────────────────────────────────
function Ticker({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const { ref, inView } = useInView(0.5)
  useEffect(() => {
    if (!inView) return
    let v = 0
    const go = () => { v = Math.min(v + Math.ceil(end / 30), end); setVal(v); if (v < end) requestAnimationFrame(go) }
    requestAnimationFrame(go)
  }, [inView, end])
  return <span ref={ref}>{val}{suffix}</span>
}

// ─── Full-width product window ────────────────────────────────────────────────
function ProductWindow() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 60px 120px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.03)",
      }}
    >
      {/* ── Window chrome ── */}
      <div
        className="flex items-center gap-3 px-5 py-3"
        style={{ background: "#111", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
          <div className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <div className="flex-1 mx-6">
          <div
            className="flex items-center gap-2 rounded-lg px-3 py-1.5 w-full max-w-sm mx-auto"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <Search className="h-3 w-3 text-zinc-600 shrink-0" />
            <span className="text-[11px] text-zinc-600">icarKno™ — Knowledge Agent</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="hidden sm:flex items-center gap-1.5 rounded-full px-3 py-1"
            style={{ background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.2)" }}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-teal-400" style={{ animation: "borderGlow 2s infinite" }} />
            <span className="text-[10px] font-semibold text-teal-400">On-Premise</span>
          </div>
          <div
            className="hidden sm:flex items-center gap-1.5 rounded-full px-3 py-1"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <Shield className="h-3 w-3 text-zinc-600" />
            <span className="text-[10px] text-zinc-600">Air-Gap</span>
          </div>
        </div>
      </div>

      {/* ── App layout ── */}
      <div className="flex" style={{ minHeight: 340 }}>

        {/* Left sidebar */}
        <div
          className="hidden md:flex flex-col w-52 shrink-0 p-3 gap-0.5"
          style={{ borderRight: "1px solid rgba(255,255,255,0.05)", background: "#0e0e0e" }}
        >
          <p className="px-2 py-1 mb-1 text-[10px] font-bold uppercase tracking-widest text-zinc-700">Workspace</p>
          {[
            { label: "All Documents", count: "47", active: false },
            { label: "Q4 Procurement", count: "3",  active: true  },
            { label: "HR Policies",    count: "12", active: false },
            { label: "IT Security",    count: "8",  active: false },
            { label: "Finance",        count: "19", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-lg px-2.5 py-1.5"
              style={{
                background: item.active ? "rgba(20,184,166,0.1)" : "transparent",
                border: item.active ? "1px solid rgba(20,184,166,0.18)" : "1px solid transparent",
              }}
            >
              <span
                className="text-[12px] font-medium"
                style={{ color: item.active ? "#2dd4bf" : "#3f3f46" }}
              >
                {item.label}
              </span>
              <span
                className="text-[10px] rounded-full px-1.5 py-0.5"
                style={{
                  background: item.active ? "rgba(20,184,166,0.15)" : "rgba(255,255,255,0.04)",
                  color: item.active ? "#2dd4bf" : "#52525b",
                }}
              >
                {item.count}
              </span>
            </div>
          ))}
        </div>

        {/* Center: source results */}
        <div
          className="hidden lg:flex flex-col w-72 shrink-0 p-4"
          style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-zinc-700">
            Sources — 3 matches
          </p>
          {[
            { file: "SOP-2024.pdf",       tag: "Policy",  snippet: "Q4 procurement requires department head authorization and budget confirmation..." },
            { file: "Q4-Guidelines.pdf",  tag: "Finance", snippet: "All purchases above ₹2L must follow the 3-tier approval process as per..." },
            { file: "Circular-Oct24.pdf", tag: "Admin",   snippet: "New approval matrix effective from Q4 2024 includes digital signatures..." },
          ].map((r) => (
            <div
              key={r.file}
              className="mb-2.5 rounded-xl p-3"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <FileText className="h-3 w-3 text-teal-600 shrink-0" />
                <span className="text-[10px] font-semibold text-teal-500 truncate">{r.file}</span>
                <span
                  className="ml-auto text-[9px] rounded-full px-1.5 py-0.5 shrink-0"
                  style={{ background: "rgba(255,255,255,0.05)", color: "#52525b" }}
                >
                  {r.tag}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-zinc-600 line-clamp-2">{r.snippet}</p>
            </div>
          ))}
        </div>

        {/* Right: AI chat */}
        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-teal-400" />
            <p className="text-[11px] font-semibold text-zinc-400">icarKno™ is responding...</p>
          </div>

          {/* User message */}
          <div className="flex justify-end mb-4">
            <div
              className="max-w-xs rounded-2xl rounded-tr-sm px-4 py-2.5 text-[13px] text-zinc-200"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              What are the Q4 procurement protocols?
            </div>
          </div>

          {/* AI response */}
          <div className="flex gap-3 mb-4">
            <div
              className="h-7 w-7 shrink-0 rounded-full flex items-center justify-center text-[11px] font-black"
              style={{ background: "linear-gradient(135deg,#0d9488,#0891b2)", color: "#fff" }}
            >
              K
            </div>
            <div
              className="rounded-2xl rounded-tl-sm px-4 py-3 flex-1 text-[13px] leading-relaxed text-zinc-300"
              style={{ background: "rgba(20,184,166,0.07)", border: "1px solid rgba(20,184,166,0.12)" }}
            >
              Based on <span className="text-teal-400 font-semibold">SOP-2024.pdf (pg. 14)</span>, Q4 procurement
              follows a 3-tier approval process. All purchases above ₹2 lakh require department head
              authorization and Finance confirmation within 48 hours.
            </div>
          </div>

          {/* Citations */}
          <div className="flex flex-wrap gap-1.5 mb-4 ml-10">
            {["SOP-2024.pdf · pg 14", "Q4-Guidelines.pdf · pg 2"].map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] text-zinc-600"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <FileText className="h-2.5 w-2.5" /> {s}
              </span>
            ))}
          </div>

          {/* Input */}
          <div className="mt-auto">
            <div
              className="flex items-center gap-3 rounded-xl px-4 py-3"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="flex-1 text-[12px] text-zinc-700">Ask anything about your documents...</span>
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                style={{ background: "#14b8a6" }}
              >
                <ArrowRight className="h-3.5 w-3.5 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex items-center gap-4 px-5 py-2"
        style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <Cpu className="h-3 w-3 text-zinc-700" />
        <span className="text-[10px] text-zinc-700">LLM: Llama-3.1 · Local</span>
        <span className="text-zinc-800 text-xs">|</span>
        <span className="text-[10px] text-zinc-700">47 docs · 12,400 chunks indexed</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-teal-500" />
          <span className="text-[10px] text-zinc-700">No external connections</span>
        </div>
      </div>
    </div>
  )
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
const clientNames = ["NSG", "IIT Delhi", "JICA", "BCG", "FITT", "MSME", "Rashtriya Raksha University"]

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#ffffff", minHeight: "100vh" }}
    >
      {/* Teal halo top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: 500,
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(20,184,166,0.10) 0%, transparent 100%)",
        }}
      />

      {/* Faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-0">

        {/* ── Top label ── */}
        <div
          className="mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
          style={{
            background: "rgba(20,184,166,0.07)",
            border: "1px solid rgba(20,184,166,0.22)",
            animation: "revealUp 0.5s ease both",
          }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-teal-500" style={{ animation: "borderGlow 2s infinite" }} />
          <span className="text-[11px] font-semibold tracking-widest uppercase text-teal-600">
            Applied AI · IIT Delhi · CMMI Level 3
          </span>
        </div>

        {/* ── Giant headline ── */}
        <div style={{ animation: "revealUp 0.6s ease 0.05s both", opacity: 0 }}>
          <h1 className="font-black tracking-tight leading-[1.0] text-zinc-900"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}>
            Knowledge AI that lives
            <br />
            <span className="text-teal-600">inside your network.</span>
          </h1>
        </div>

        {/* ── Sub + CTAs row ── */}
        <div
          className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6"
          style={{ animation: "revealUp 0.6s ease 0.15s both", opacity: 0 }}
        >
          <p className="max-w-md text-base leading-relaxed text-zinc-500">
            icarKno™ — 100% on-premise enterprise AI for Government, Defense &amp; Enterprise.
            Zero cloud. Full data sovereignty.
          </p>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/products/icarkno"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-black transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
              style={{ background: "#14b8a6", boxShadow: "0 4px 24px rgba(20,184,166,0.25)" }}
            >
              Explore icarKno™ <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-zinc-700 transition-all duration-200 hover:text-zinc-900 hover:-translate-y-0.5"
              style={{ border: "1px solid rgba(0,0,0,0.15)" }}
            >
              Book Demo <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div
          className="mt-10 flex items-center gap-8 pb-10"
          style={{
            animation: "revealUp 0.6s ease 0.25s both",
            opacity: 0,
            borderBottom: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          {([
            { end: 120, suffix: "+",   label: "Deployments"       },
            { end: 47,  suffix: "+",   label: "Projects Delivered" },
            { end: 70,  suffix: "Cr+", label: "₹ Funded"          },
          ] as const).map((s, i) => (
            <div key={s.label} className="flex items-center gap-8">
              {i > 0 && <div className="hidden sm:block h-6 w-px bg-black/10" />}
              <div className="flex flex-col">
                <span className="text-2xl font-black text-teal-600">
                  <Ticker end={s.end} suffix={s.suffix} />
                </span>
                <span className="text-[11px] text-zinc-500 mt-0.5">{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Product window ── */}
        <div
          className="mt-10"
          style={{ animation: "revealUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s both", opacity: 0 }}
        >
          {/* Glow behind */}
          <div
            className="relative"
            style={{
              filter: "drop-shadow(0 40px 80px rgba(20,184,166,0.10))",
            }}
          >
            <ProductWindow />
          </div>
        </div>

        {/* ── Client strip ── */}
        <div
          className="mt-12 pb-12"
          style={{ animation: "revealUp 0.6s ease 0.5s both", opacity: 0 }}
        >
          <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Trusted by India's most security-conscious organisations
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg,#ffffff,transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
              style={{ background: "linear-gradient(270deg,#ffffff,transparent)" }} />
            <div
              className="flex items-center gap-12"
              style={{ animation: "marquee 22s linear infinite", width: "max-content" }}
            >
              {[...clientNames, ...clientNames].map((c, i) => (
                <span key={i} className="shrink-0 text-sm font-medium text-zinc-400 whitespace-nowrap">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
