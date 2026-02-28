import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Carnot Research | Enterprise AI & Secure On-Premise GenAI Solutions",
    template: "%s | Carnot Research - Enterprise AI Platform",
  },
  description:
    "Carnot Research delivers production-grade on-premise generative AI, NLP, and computer vision solutions for government and enterprise. Secure, scalable AI infrastructure built by IIT researchers.",
  applicationName: "Carnot Research",
  authors: [{ name: "Carnot Research", url: "https://carnotresearch.com" }],
  creator: "Carnot Research",
  publisher: "Carnot Research",
  keywords: [
    "on-premise generative AI India",
    "enterprise AI solutions India",
    "government AI India",
    "NLP company India",
    "computer vision company India",
    "secure LLM deployment India",
    "enterprise RAG systems",
    "local language AI India",
    "Indian AI startup",
    "edge AI deployment",
    "private AI infrastructure",
    "government approved AI",
    "STQC certified AI",
    "ISO 27001 certified AI company",
  ],
  referrer: "strict-origin-when-cross-origin",
  category: "Technology",
  classification: "Business, Technology, AI/ML",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://carnotresearch.com",
    siteName: "Carnot Research",
    title: "Carnot Research | Enterprise AI & Secure On-Premise GenAI Solutions",
    description:
      "Production-grade on-premise generative AI, NLP, and computer vision solutions for government and enterprise in India.",
    images: [
      {
        url: "https://carnotresearch.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Carnot Research - Enterprise AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carnot Research | Enterprise AI & Secure On-Premise GenAI",
    description: "Secure, scalable AI infrastructure for government and enterprise.",
    creator: "@CarnotResearch",
  },
  alternates: {
    canonical: "https://carnotresearch.com",
    languages: {
      "en-IN": "https://carnotresearch.com",
      hi: "https://carnotresearch.com/hi",
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8f8" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Carnot Research",
  url: "https://carnotresearch.com",
  logo: "https://carnotresearch.com/logo.png",
  description:
    "Production-grade on-premise generative AI, NLP, and computer vision solutions for government and enterprise.",
  foundingDate: "2020",
  areaServed: "IN",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    email: "sales@carnotresearch.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/carnot-research",
    "https://twitter.com/CarnotResearch",
    "https://github.com/carnotresearch",
  ],
  knowsAbout: [
    "Generative AI",
    "Natural Language Processing",
    "Computer Vision",
    "Enterprise AI",
    "On-Premise Deployment",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
