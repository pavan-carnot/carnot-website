# Implementation Guide - Carnot Research Website

## Project Overview

This is a complete, production-ready website for Carnot Research built with:
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with OKLCH color system
- **Typography**: Inter font family
- **Design**: Stripe/Notion-inspired, enterprise-grade
- **SEO/GEO**: India-optimized with comprehensive schema markup

## What's Been Implemented

### ✅ Design System
- **Color Palette**: 5-color system (primary blue, accent gold, neutrals)
- **Typography**: Single font family (Inter) for consistency
- **Spacing**: Tailwind spacing scale (4px base)
- **Components**: Reusable, semantic HTML components
- **Responsive**: Mobile-first, fully responsive design

### ✅ Pages (7 Total)
1. **Homepage** (`/`)
   - Hero section with gradient background
   - Credibility strip
   - Products showcase
   - Solutions overview
   - Why Carnot section
   - Services grid
   - Client logos
   - Certifications
   - Call-to-action

2. **Products** (`/products`)
   - icarKno - Enterprise Knowledge RAG
   - BharGati AI - Transport Analytics
   - SAATHI - Travel Assistant
   - Meeting Summarizer
   - Detailed feature descriptions

3. **Solutions** (`/solutions`)
   - Government AI
   - Enterprise Knowledge AI
   - On-Premise LLM
   - Computer Vision
   - NLP Solutions

4. **Research** (`/research`)
   - NLP Capabilities
   - Computer Vision Capabilities
   - GEO-optimized definitions
   - Research partnerships

5. **Company** (`/company`)
   - About Us
   - Mission & Vision
   - Founders profiles
   - Awards & Recognition
   - Certifications
   - Careers section

6. **Blog** (`/blog`)
   - Blog post cards
   - Ready for CMS integration

7. **Contact** (`/contact`)
   - Contact form
   - Service/product selectors
   - Location information
   - Quick response CTAs

### ✅ Legal Pages
- **Privacy Policy** (`/privacy`)
- **Terms of Service** (`/terms`)

### ✅ SEO/GEO Optimization
- **Metadata**: Comprehensive metadata for all pages
- **Schema Markup**: Organization, LocalBusiness, Breadcrumb schemas
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Optimized crawler rules
- **Keywords**: India-focused, government/enterprise keywords
- **Geo-targeting**: New Delhi location with language targeting
- **Structured Data**: JSON-LD for rich snippets

### ✅ Components
- **Navbar**: Stripe/Notion-style navigation
- **Footer**: Comprehensive footer with structured links
- **Contact Form**: Lead capture with validation
- **Hero Section**: Gradient background with CTAs
- **Product Cards**: Feature-rich product showcases
- **Service Grid**: Solutions overview

## File Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx                 # Root layout with global metadata
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles & color system
│   ├── products/
│   │   └── page.tsx              # Products page
│   ├── solutions/
│   │   └── page.tsx              # Solutions page
│   ├── research/
│   │   └── page.tsx              # Research page
│   ├── company/
│   │   └── page.tsx              # Company page
│   ├── blog/
│   │   └── page.tsx              # Blog page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── privacy/
│   │   └── page.tsx              # Privacy policy
│   ├── terms/
│   │   └── page.tsx              # Terms of service
│   ├── sitemap.ts                # XML sitemap generation
│   └── sitemap/
│       └── page.tsx              # HTML sitemap page
├── components/
│   ├── navbar.tsx                # Navigation component
│   ├── footer.tsx                # Footer component
│   ├── contact-form.tsx          # Contact form
│   ├── home/
│   │   ├── hero-section.tsx
│   │   ├── credibility-strip.tsx
│   │   ├── products-section.tsx
│   │   ├── solutions-section.tsx
│   │   ├── why-carnot-section.tsx
│   │   ├── services-section.tsx
│   │   ├── clients-section.tsx
│   │   ├── certifications-section.tsx
│   │   └── cta-section.tsx
│   └── ui/                       # shadcn/ui components
├── lib/
│   ├── seo.ts                    # SEO utilities & schema generators
│   └── utils.ts                  # General utilities
├── public/
│   └── robots.txt                # SEO robots configuration
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
├── SEO_GEO_OPTIMIZATION.md       # SEO/GEO documentation
├── DESIGN_SYSTEM.md              # Design system guide
└── IMPLEMENTATION_GUIDE.md       # This file
```

## Color Palette Reference

### Primary Colors
- **Primary (Blue)**: `oklch(0.47 0.16 280)` - Main brand color
- **Primary Foreground**: `oklch(0.99 0 0)` - White text on primary
- **Accent (Gold)**: `oklch(0.60 0.15 50)` - Highlights & CTAs
- **Background**: `oklch(0.99 0.001 250)` - Off-white with blue tint

### Using Colors in Components

```tsx
// Primary button
<Button className="bg-primary text-primary-foreground">
  Click me
</Button>

// Card with hover effect
<div className="bg-card p-6 hover:shadow-md transition-shadow">
  Content
</div>

// Text hierarchy
<h1 className="text-foreground">Heading</h1>
<p className="text-muted-foreground">Subtext</p>
```

## SEO Best Practices Implemented

### 1. Technical SEO
- ✅ XML Sitemap generation
- ✅ Robots.txt with proper rules
- ✅ Canonical URLs
- ✅ Proper heading hierarchy
- ✅ Alt text on images
- ✅ Mobile-responsive design
- ✅ Fast page load times

### 2. Content SEO
- ✅ Keyword-rich page titles (50-60 chars)
- ✅ Meta descriptions (150-160 chars)
- ✅ Internal linking strategy
- ✅ India-focused keywords
- ✅ Long-form content
- ✅ LSI keywords

### 3. Geo-Targeting
- ✅ India location in metadata
- ✅ en_IN locale for OpenGraph
- ✅ Address in New Delhi
- ✅ Government agency keywords
- ✅ Local language readiness

### 4. Schema Markup
- ✅ Organization schema
- ✅ LocalBusiness schema
- ✅ Breadcrumb schema
- ✅ JSON-LD format

## Customization Guide

### Changing Colors
Edit `/app/globals.css`:
```css
:root {
  --primary: oklch(0.47 0.16 280); /* Change this */
  --accent: oklch(0.60 0.15 50);   /* Or this */
}
```

### Updating Content
Each page has its own metadata in the file header:
```tsx
export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your meta description",
  keywords: ["keyword1", "keyword2"],
}
```

### Adding New Pages
1. Create folder in `/app/[page-name]/`
2. Add `page.tsx` with metadata
3. Update sitemap in `/app/sitemap.ts`
4. Add link in navbar/footer

### SEO Utilities
Use the `generateMetadata` function from `/lib/seo.ts`:
```tsx
import { generateMetadata } from "@/lib/seo"

export const metadata = generateMetadata({
  title: "Page Title",
  description: "Page description",
  keywords: ["keyword1", "keyword2"],
})
```

## Performance Optimization

### Current Optimizations
- ✅ Code splitting per route
- ✅ Image optimization (Next.js Image)
- ✅ Font optimization (system fonts + Google Fonts)
- ✅ CSS minification (Tailwind)
- ✅ Semantic HTML for better parsing
- ✅ Proper caching headers

### Further Optimizations
1. Add image compression service
2. Implement CDN for static assets
3. Add service worker for offline support
4. Optimize font loading strategy
5. Implement lazy loading for images

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Build Locally
```bash
npm run build
npm run start
```

### Environment Variables
Currently no environment variables required. When adding features, use `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Monitoring & Maintenance

### Tools to Use
1. **Google Search Console**: Monitor indexing & search performance
2. **Google Analytics**: Track user behavior
3. **Lighthouse**: Check Core Web Vitals
4. **Screaming Frog**: Audit technical SEO
5. **SEMrush/Ahrefs**: Keyword tracking

### Regular Tasks
- [ ] Update blog posts weekly
- [ ] Monitor keyword rankings monthly
- [ ] Check broken links quarterly
- [ ] Update certifications as needed
- [ ] Add new case studies
- [ ] Update team/founder information

## Future Enhancements

### Phase 2
1. CMS Integration (Contentful, Sanity)
2. Blog with categories/tags
3. Search functionality
4. Dark mode support
5. Internationalization (Hindi, etc.)

### Phase 3
1. Analytics dashboard
2. Email capture campaigns
3. Webinar registration
4. Product demonstrations
5. API documentation

### Phase 4
1. Multi-language support
2. Regional variations
3. Partner program portal
4. Customer success stories
5. Marketplace integration

## Support & Questions

### Documentation Files
- `SEO_GEO_OPTIMIZATION.md` - Complete SEO/GEO setup
- `DESIGN_SYSTEM.md` - Design tokens & components
- `IMPLEMENTATION_GUIDE.md` - This file

### Getting Help
- Check Next.js docs: https://nextjs.org
- Check Tailwind docs: https://tailwindcss.com
- Check Shadcn/ui docs: https://ui.shadcn.com

## Version History

- **v1.0** (Current)
  - Complete site build
  - Stripe/Notion design
  - Full SEO/GEO optimization
  - 7 main pages
  - Legal pages

---

**Last Updated**: 2026-02-26
**Built with**: Next.js 16, Tailwind CSS v4, Inter Font
**Optimized for**: India market, Government & Enterprise
