"use client"

import { useEffect, useState } from "react"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const slides = [
  "/assets/products/icarkno/slideshow/slide-1.jpeg",
  "/assets/products/icarkno/slideshow/slide-2.jpeg",
]

interface IcarKnoSlideshowProps {
  className?: string
  interval?: number
}

export function IcarKnoSlideshow({ className = "", interval = 3500 }: IcarKnoSlideshowProps) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        setPrev(c)
        setAnimating(true)
        return (c + 1) % slides.length
      })
    }, interval)
    return () => clearInterval(timer)
  }, [interval])

  useEffect(() => {
    if (!animating) return
    const t = setTimeout(() => { setPrev(null); setAnimating(false) }, 600)
    return () => clearTimeout(t)
  }, [animating])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {prev !== null && (
        <img
          key={`prev-${prev}`}
          src={`${B}${slides[prev]}`}
          alt={`icarKno slide ${prev + 1}`}
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ animation: "fadeOut 0.6s ease forwards" }}
        />
      )}
      <img
        key={`curr-${current}`}
        src={`${B}${slides[current]}`}
        alt={`icarKno slide ${current + 1}`}
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ animation: animating ? "fadeIn 0.6s ease forwards" : undefined }}
      />
      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i); setAnimating(true) }}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === current ? "20px" : "6px",
              background: i === current ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
