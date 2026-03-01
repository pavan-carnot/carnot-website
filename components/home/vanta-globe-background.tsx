"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

type VantaGlobeEffect = { destroy: () => void }

export function VantaGlobeBackground() {
  const elRef = useRef<HTMLDivElement>(null)
  const vantaRef = useRef<VantaGlobeEffect | null>(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    let mounted = true

    const initVanta = async () => {
      const GLOBE = (await import("vanta/dist/vanta.globe.min")).default
      if (!mounted || !el) return
      vantaRef.current = GLOBE({
        el,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        // Violet aurora palette
        backgroundColor: 0xfaf5ff,   // violet-50 — barely-there lavender
        color: 0x8b5cf6,              // violet-500 — vibrant mesh lines
        color2: 0x22d3ee,             // cyan-400 — electric highlight arcs
        size: 1.3,
      }) as VantaGlobeEffect
    }

    initVanta()

    return () => {
      mounted = false
      vantaRef.current?.destroy()
      vantaRef.current = null
    }
  }, [])

  return (
    <div
      ref={elRef}
      className="absolute inset-0 h-full w-full min-h-[600px] overflow-hidden bg-[#faf5ff]"
      style={{ backgroundColor: "#faf5ff" }}
      aria-hidden
    />
  )
}
