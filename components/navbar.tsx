"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Insights", href: "/insights" },
  { name: "Resources", href: "/resources" },
  { name: "FAQ", href: "/faq" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-xs font-bold text-primary-foreground">CR</span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground hidden sm:inline">
            Carnot Research
          </span>
        </Link>

        {/* Desktop Nav with mega menus */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <NavigationMenu className="justify-center">
            <NavigationMenuList>
              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="rounded-xl bg-popover shadow-lg md:w-[640px] lg:w-[720px]">
                    <div className="grid gap-8 px-6 py-6 lg:grid-cols-3">
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Company
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/about"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Overview
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Who we are, what we do, why we do it
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/about/mission-vision"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Mission &amp; Vision
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Why Carnot Research exists and where we&apos;re headed
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/about/team"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Team
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Meet the researchers, engineers, and advisors
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Ecosystem
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/about/clients-partners"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Clients &amp; Partners
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Organizations we collaborate and build with
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/about/news"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                News &amp; Updates
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Events, announcements, and press coverage
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Work with us
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/contact"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Join our team
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Explore roles with Carnot Research
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Products */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="rounded-xl bg-popover shadow-lg md:w-[640px] lg:w-[720px]">
                    <div className="grid gap-8 px-6 py-6 lg:grid-cols-3">
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Browse
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/products"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                All products
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Overview of Carnot AI platforms
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/products/icarkno"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                icarKno
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Enterprise knowledge RAG &amp; assistant
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/products/bhargati"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                BharGati AI
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Biomechanics &amp; sports performance analytics
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Explore
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/products/other-products"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Other products
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Space for upcoming AI products
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Get started
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/contact"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Request a product demo
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Talk to us about deployments
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="rounded-xl bg-popover shadow-lg md:w-[640px] lg:w-[720px]">
                    <div className="grid gap-8 px-6 py-6 lg:grid-cols-3">
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Overview
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/solutions"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Solutions hub
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Map AI to your business problems
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Enterprise AI
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/solutions/enterprise-rag"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Enterprise RAG
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Governed retrieval-augmented generation
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/solutions/on-prem-ai"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                On-prem &amp; offline AI
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Secure, compliant deployments
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Applied AI
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/solutions/ai-in-sports"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                AI in sports
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Biomechanics, performance, and injury prevention
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Insights */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60">
                  Insights
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="rounded-xl bg-popover shadow-lg md:w-[640px] lg:w-[720px]">
                    <div className="grid gap-8 px-6 py-6 lg:grid-cols-3">
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Content hub
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/insights"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Insights overview
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  SEO, AEO &amp; GEO-ready content library
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Learn
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/insights/explainers"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Explainers
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  What &amp; how of AI, RAG, biomechanics
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/insights/guides"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Guides
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Implementation playbooks &amp; best practices
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Research
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/insights/research"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Research summaries
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Applied studies &amp; technical experiments
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="rounded-xl bg-popover shadow-lg md:w-[640px] lg:w-[720px]">
                    <div className="grid gap-8 px-6 py-6 lg:grid-cols-4">
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Open source
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/resources"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Open source projects
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Access Carnot&apos;s public repositories
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Case studies
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/resources/case-studies"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Case studies
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Real deployments &amp; measurable impact
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Whitepapers
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/resources/whitepapers"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Whitepapers
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Deep dives into AI systems &amp; security
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Support
                        </p>
                        <ul className="space-y-1.5">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/contact"
                                className="block rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                              >
                                Contact support
                                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                  Get help with implementations
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* FAQ */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/faq"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2"
                  >
                    FAQ
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="text-sm font-medium">
            <Link href="/contact">Book a demo</Link>
          </Button>
          <Button size="sm" asChild className="text-sm font-medium">
            <Link href="/products">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-foreground lg:hidden hover:bg-secondary transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-[#f97316]" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5 text-[#1a57eb]" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col gap-0.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
                <Button variant="ghost" size="sm" asChild className="w-full text-sm">
                  <Link href="/contact">Book a demo</Link>
                </Button>
                <Button size="sm" asChild className="w-full text-sm">
                  <Link href="/products">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
