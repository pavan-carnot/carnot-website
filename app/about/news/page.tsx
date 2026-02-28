import type { Metadata } from "next"
import { NewsContent } from "./content"

export const metadata: Metadata = {
  title: "News & Updates — Carnot Research",
  description:
    "Latest news, events, announcements, and press coverage from Carnot Research — building secure AI infrastructure for India.",
  openGraph: {
    title: "News & Updates — Carnot Research",
    description: "Events, announcements, and press coverage from Carnot Research.",
    url: "https://carnotresearch.com/about/news",
    type: "website",
  },
}

export default function NewsPage() {
  return <NewsContent />
}
