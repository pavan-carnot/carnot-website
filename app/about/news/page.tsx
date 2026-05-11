import type { Metadata } from "next"
import { NewsContent } from "./content"

export const metadata: Metadata = {
  title: "News & Updates: icarKno™",
  description:
    "Latest news, events, announcements, and press coverage from icarKno™, building secure AI infrastructure for India.",
  openGraph: {
    title: "News & Updates: icarKno™",
    description: "Events, announcements, and press coverage from icarKno™.",
    url: "https://carnotresearch.com/about/news",
    type: "website",
  },
}

export default function NewsPage() {
  return <NewsContent />
}
