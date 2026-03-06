"use client"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function IcarKnoClientContent() {
  return (
    <video
      src={`${B}/assets/clients/Final_video.mp4`}
      autoPlay
      muted
      loop
      playsInline
      className="block h-auto max-h-[min(420px,50vh)] w-auto max-w-full rounded-2xl"
      aria-label="icarKno dashboard and system interface demo"
    />
  )
}
