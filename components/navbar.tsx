"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
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

// Shared dropdown link style
const dropLink =
  "block rounded-md px-2.5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
const dropTitle = "font-medium"
const dropSub = "mt-0.5 block text-xs font-normal text-gray-400"
const dropSection = "text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-3 pb-0">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-xl border border-gray-200 bg-white px-4 h-12 shadow-sm lg:px-5">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2563eb]">
            <span className="text-[10px] font-bold text-white leading-none">CR</span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-gray-900 hidden sm:inline">
            Carnot Research
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex flex-1 items-center justify-start pl-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-0">

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[580px]">
                    <div className="grid grid-cols-3 gap-6 px-5 py-5">
                      <div>
                        <p className={dropSection}>Company</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/about" className={dropLink}><span className={dropTitle}>Overview</span><span className={dropSub}>Who we are and what we do</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/about/mission-vision" className={dropLink}><span className={dropTitle}>Mission &amp; Vision</span><span className={dropSub}>Where we&apos;re headed</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/about/team" className={dropLink}><span className={dropTitle}>Team</span><span className={dropSub}>Researchers and engineers</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Ecosystem</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/about/clients-partners" className={dropLink}><span className={dropTitle}>Clients &amp; Partners</span><span className={dropSub}>Who we collaborate with</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/about/news" className={dropLink}><span className={dropTitle}>News &amp; Updates</span><span className={dropSub}>Announcements and press</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Work with us</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/contact" className={dropLink}><span className={dropTitle}>Join our team</span><span className={dropSub}>Explore open roles</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Products */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[580px]">
                    <div className="grid grid-cols-3 gap-6 px-5 py-5">
                      <div>
                        <p className={dropSection}>Browse</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/products" className={dropLink}><span className={dropTitle}>All products</span><span className={dropSub}>Overview of Carnot AI platforms</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/products/icarkno" className={dropLink}><span className={dropTitle}>icarKno</span><span className={dropSub}>Enterprise knowledge RAG</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/products/bhargati" className={dropLink}><span className={dropTitle}>BharGati AI</span><span className={dropSub}>Transport analytics platform</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Explore</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/products/other-products" className={dropLink}><span className={dropTitle}>Other products</span><span className={dropSub}>Upcoming AI platforms</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Get started</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/contact" className={dropLink}><span className={dropTitle}>Request a demo</span><span className={dropSub}>Talk to us about deployments</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[580px]">
                    <div className="grid grid-cols-3 gap-6 px-5 py-5">
                      <div>
                        <p className={dropSection}>Overview</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/solutions" className={dropLink}><span className={dropTitle}>Solutions hub</span><span className={dropSub}>Map AI to your business</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Enterprise AI</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/solutions/enterprise-rag" className={dropLink}><span className={dropTitle}>Enterprise RAG</span><span className={dropSub}>Governed retrieval-augmented AI</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/solutions/on-prem-ai" className={dropLink}><span className={dropTitle}>On-prem AI</span><span className={dropSub}>Secure, compliant deployments</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Applied AI</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/solutions/ai-in-sports" className={dropLink}><span className={dropTitle}>AI in sports</span><span className={dropSub}>Biomechanics &amp; performance</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Company */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[400px]">
                    <div className="grid grid-cols-2 gap-6 px-5 py-5">
                      <div>
                        <p className={dropSection}>Learn</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/insights" className={dropLink}><span className={dropTitle}>Insights</span><span className={dropSub}>Guides, explainers, research</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/resources" className={dropLink}><span className={dropTitle}>Resources</span><span className={dropSub}>Case studies &amp; whitepapers</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Connect</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/about/news" className={dropLink}><span className={dropTitle}>News</span><span className={dropSub}>Announcements &amp; press</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/contact" className={dropLink}><span className={dropTitle}>Contact</span><span className={dropSub}>Get in touch with us</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing — plain link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="inline-flex h-8 items-center rounded-md px-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* ── Right CTAs ── */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            href="/contact"
            className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-50"
          >
            Book a demo
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 rounded-md bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Get Started
            <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-white/15">
              <ArrowRight className="h-2.5 w-2.5" />
            </span>
          </Link>
        </div>

        {/* ── Mobile Menu Button ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 transition-colors lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="mx-auto mt-1 max-w-6xl rounded-xl border border-gray-200 bg-white shadow-sm lg:hidden">
          <div className="px-4 py-3">
            <div className="flex flex-col gap-0.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3">
                <Link
                  href="/contact"
                  className="block rounded-md px-3 py-2 text-center text-sm font-medium text-gray-600 hover:bg-gray-50"
                >
                  Book a demo
                </Link>
                <Link
                  href="/products"
                  className="flex items-center justify-center gap-1.5 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
