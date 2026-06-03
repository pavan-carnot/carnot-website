import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://carnotresearch.com"
  const now = new Date().toISOString().split("T")[0]

  return [
    // ── Core ──────────────────────────────────────────────────────────
    { url: base,                                    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/contact`,                       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/careers`,                       lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // ── Products ──────────────────────────────────────────────────────
    { url: `${base}/products`,                      lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/products/icarkno`,              lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/products/bhargati`,             lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/products/saathi`,               lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/products/gem/meeting-summarizer`,          lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/products/gem/onpremise-knowledge-agent`,   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/products/gem/multilingual-chatbot`,        lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/products/gem/genai-conversational-agent`,  lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // ── Solutions ─────────────────────────────────────────────────────
    { url: `${base}/solutions`,                     lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/solutions/enterprise-rag`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/solutions/on-prem-ai`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/solutions/ai-in-sports`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── About ─────────────────────────────────────────────────────────
    { url: `${base}/about`,                         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about/team`,                    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/mission-vision`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/clients-partners`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Company ───────────────────────────────────────────────────────
    { url: `${base}/company`,                       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/company/guides`,                lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/company/resources`,             lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // ── Content ───────────────────────────────────────────────────────
    { url: `${base}/research`,                      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,                          lastModified: now, changeFrequency: "weekly",  priority: 0.8 },

    // ── Legal ─────────────────────────────────────────────────────────
    { url: `${base}/privacy`,                       lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
    { url: `${base}/terms`,                         lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
  ]
}
