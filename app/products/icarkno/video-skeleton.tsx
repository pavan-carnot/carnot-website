"use client"

import { useState } from "react"

const BAR_HEIGHTS = [55, 80, 40, 90, 65, 75, 50, 85, 60, 70, 45, 88]

function VerticalLinesSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gray-100 ${className}`}>
      {/* Vertical bars */}
      <div className="flex h-full items-end gap-[5px] px-5 pb-6 pt-10">
        {BAR_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-gray-200"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      {/* Thin top label row skeleton */}
      <div className="absolute top-4 left-5 right-5 flex gap-3">
        <div className="h-2.5 w-24 rounded-full bg-gray-200" />
        <div className="h-2.5 w-16 rounded-full bg-gray-200" />
      </div>
      {/* Shimmer sweep */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmerSweep 1.6s ease-in-out infinite",
        }}
      />
    </div>
  )
}

export function VideoWithSkeleton({
  src,
  className = "",
  skeletonClassName = "",
  ariaLabel = "Product demo video",
}: {
  src: string
  className?: string
  skeletonClassName?: string
  ariaLabel?: string
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative">
      {!loaded && (
        <VerticalLinesSkeleton className={skeletonClassName || "w-full aspect-video"} />
      )}
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        aria-label={ariaLabel}
        onLoadedData={() => setLoaded(true)}
        className={`${className} ${loaded ? "" : "absolute inset-0 opacity-0 pointer-events-none"}`}
      />
    </div>
  )
}
