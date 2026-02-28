import type { Metadata } from "next"

export interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article" | "product"
}

const baseUrl = "https://carnotresearch.com"
const twitterHandle = "@CarnotResearch"
const companyName = "Carnot Research"

export function generateMetadata(seo: SEOProps): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = "/og-image.png",
    url = baseUrl,
    type = "website",
  } = seo

  const fullTitle = title.includes(companyName) ? title : `${title} | ${companyName}`

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      "AI India",
      "enterprise AI",
      "secure LLM",
      "on-premise AI",
      "government AI",
    ],
    authors: [{ name: companyName, url: baseUrl }],
    creator: companyName,
    openGraph: {
      type,
      locale: "en_IN",
      url,
      siteName: companyName,
      title: fullTitle,
      description,
      images: [
        {
          url: image.startsWith("http") ? image : `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: twitterHandle,
      images: [image.startsWith("http") ? image : `${baseUrl}${image}`],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
  }
}

export function generateBreadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyName,
    image: `${baseUrl}/logo.png`,
    description:
      "Production-grade AI solutions for government and enterprise in India",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2-B-4A, Research and Innovation Park",
      addressLocality: "New Delhi",
      addressRegion: "DL",
      postalCode: "110016",
      addressCountry: "IN",
    },
    telephone: "+91-XXXXXXXXXX",
    url: baseUrl,
    sameAs: [
      "https://www.linkedin.com/company/carnot-research",
      "https://twitter.com/CarnotResearch",
      "https://github.com/carnotresearch",
    ],
  }
}
