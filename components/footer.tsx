import Link from "next/link"

const footerLinks = {
  Products: [
    { name: "icarKno", href: "/products#icarkno" },
    { name: "BharGati AI", href: "/products#bhargati" },
    { name: "SAATHI", href: "/products#saathi" },
    { name: "Meeting Summarizer", href: "/products#summarizer" },
  ],
  Solutions: [
    { name: "AI for Government", href: "/solutions#government" },
    { name: "Enterprise Knowledge AI", href: "/solutions#enterprise" },
    { name: "On-Premise LLM", href: "/solutions#on-premise" },
    { name: "Computer Vision", href: "/solutions#cv" },
  ],
  Company: [
    { name: "About Us", href: "/company" },
    { name: "Research", href: "/research" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/company#careers" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Certifications", href: "/company#certifications" },
    { name: "Partners", href: "/company#partners" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-xs font-bold text-primary-foreground">CR</span>
              </div>
              <span className="text-sm font-semibold tracking-tight text-foreground">
                Carnot Research
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Deep-tech AI company building production-grade Generative AI, NLP,
              and Computer Vision systems for government and enterprise.
            </p>
            <address className="mt-4 not-italic text-sm text-muted-foreground space-y-1">
              <p>2-B-4A, Research and Innovation Park</p>
              <p>IIT Delhi, Hauz Khas</p>
              <p>New Delhi, 110016, India</p>
              <p className="pt-2">
                Email:{" "}
                <a href="mailto:hello@carnotresearch.com" className="hover:text-foreground transition-colors">
                  hello@carnotresearch.com
                </a>
              </p>
            </address>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <nav key={title}>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">{title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {`© ${currentYear} Carnot Research Pvt. Ltd. All rights reserved.`}
          </p>
          <nav className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/site-map"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
