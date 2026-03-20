"use client"

import { IcarKnoSlideshow } from "@/components/icarkno-slideshow"

export function IcarKnoClientContent() {
  return (
    <IcarKnoSlideshow
      className="h-[360px] w-full sm:h-[420px]"
      interval={3500}
    />
  )
}
