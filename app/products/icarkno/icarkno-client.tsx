"use client"

import { VideoWithSkeleton } from "./video-skeleton"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function IcarKnoClientContent() {
  return (
    <VideoWithSkeleton
      src={`${B}/assets/products/icarkno/demo/Final_video.mp4`}
      ariaLabel="icarKno dashboard and system interface demo"
      className="block h-auto max-h-[min(420px,50vh)] w-auto max-w-full rounded-2xl"
      skeletonClassName="w-full h-[320px] sm:h-[380px]"
    />
  )
}
