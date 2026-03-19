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

    // Skip on mobile (< 640px) — hides via CSS too, but avoids wasting resources
    if (window.innerWidth < 640) return

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
        backgroundColor: 0xf8fafc,
        color: 0x2563eb,
        color2: 0x06b6d4,
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
      className="absolute inset-0 h-full w-full min-h-[600px] overflow-hidden hidden sm:block"
      style={{ backgroundColor: "#f8fafc" }}
      aria-hidden
    />
  )
}
