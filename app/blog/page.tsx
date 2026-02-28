import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, research updates, and thought leadership from Carnot Research on enterprise AI, NLP, computer vision, and on-premise generative AI.",
}

const posts = [
  {
    title: "Understanding On-Premise Generative AI for Enterprise",
    excerpt:
      "A comprehensive guide to deploying large language models within your own infrastructure while maintaining complete data sovereignty.",
    category: "Enterprise AI",
    date: "2025-01-15",
  },
  {
    title: "Building Enterprise RAG Systems: A Technical Deep Dive",
    excerpt:
      "How Retrieval-Augmented Generation transforms enterprise knowledge management with citation-backed, contextually grounded responses.",
    category: "Generative AI",
    date: "2025-01-08",
  },
  {
    title: "Secure LLM Deployment Architecture for Government",
    excerpt:
      "Design patterns and infrastructure considerations for deploying large language models in environments where data privacy is paramount.",
    category: "Government AI",
    date: "2024-12-20",
  },
  {
    title: "Multimodal AI: Combining Vision and Language Models",
    excerpt:
      "How VLM integration enables visual reasoning, OCR-based tasks, and richer intelligence from diverse data sources.",
    category: "Research",
    date: "2024-12-10",
  },
  {
    title: "SAATHI Wins Transport Stack Open Innovation Challenge",
    excerpt:
      "Our hyper-personalized multilingual AI agent recognized by JICA, BCG, and FITT IIT Delhi for transport innovation.",
    category: "News",
    date: "2025-02-01",
  },
  {
    title: "The Future of NLP in Indian Languages",
    excerpt:
      "Building deployable, domain-specific language models for multilingual, multimodal data processing in Indian enterprise and government contexts.",
    category: "NLP",
    date: "2024-11-28",
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-wider text-accent uppercase">
              Blog
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Insights & Research
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Thought leadership, technical deep dives, and research updates
              from the Carnot Research team.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="mt-4 text-base font-semibold leading-snug text-foreground">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center text-sm font-medium text-accent transition-colors group-hover:text-foreground">
                    Read more
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
