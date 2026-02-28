# SEO & GEO Optimization Documentation

This document outlines all SEO and GEO optimizations implemented in the Carnot Research website.

## 1. Technical SEO

### 1.1 Metadata Optimization
- **Dynamic Page Titles**: Each page has unique, keyword-rich titles with the company name
- **Meta Descriptions**: Comprehensive 150-160 character descriptions for all pages
- **Keywords**: Geo-targeted and industry-specific keywords for India market
- **Canonical URLs**: Proper canonical tags to prevent duplicate content issues
- **Language Tags**: `lang="en"` with `en-IN` OpenGraph locale for India targeting

**File**: `/app/layout.tsx`

### 1.2 Structured Data (Schema Markup)
- **Organization Schema**: Complete company information with contact details, locations, and social media
- **Breadcrumb Schema**: Hierarchical navigation structure for search engines
- **LocalBusiness Schema**: Location-specific schema with address in New Delhi, India

**File**: `/lib/seo.ts`

### 1.3 XML Sitemap
- **Dynamic Sitemap**: Generated programmatically with proper change frequencies
- **Priority Scores**: 
  - Homepage: 1.0
  - Products/Solutions: 0.9
  - Company/Research: 0.8
  - Blog/Contact: 0.7-0.8
  - Legal pages: 0.5

**File**: `/app/sitemap.ts`

### 1.4 Robots.txt
- **Search Engine Rules**: Optimized crawl rules for Googlebot and Bingbot
- **Bad Bot Blocking**: Blocks aggressive bots (Ahrefs, Semrush)
- **Sitemap Declaration**: Multiple sitemaps for better coverage

**File**: `/public/robots.txt`

### 1.5 Performance & Core Web Vitals
- **Image Optimization**: Using Next.js Image component for automatic optimization
- **Code Splitting**: Components split for lazy loading
- **CSS Optimization**: Minimal CSS with Tailwind
- **Font Optimization**: Using system fonts and Google Fonts with proper fallbacks

## 2. GEO Optimization (India-Focused)

### 2.1 Geo-Targeting
- **Geographic Hints**: Keywords include "India" and location-specific terms
- **Address Markup**: Full business address in New Delhi included in schema
- **Language**: Indian English (`en-IN`) for OpenGraph
- **Local Business Schema**: Proper `addressCountry: "IN"` for India

**Locations Targeted**:
- New Delhi (Primary)
- Mumbai
- Bangalore
- Pan-India

### 2.2 Localized Content
- **India-Specific Keywords**:
  - "on-premise generative AI India"
  - "government AI India"
  - "STQC certified AI"
  - "ISO 27001 certified"
  - "Indian AI startup"
  
- **Government Agencies**: Content targets government bodies (GEM-listed products)
- **Local Language Support**: Ready for Hindi and other Indian languages

### 2.3 Geo Meta Tags
```
<meta name="geo.placename" content="New Delhi" />
<meta name="geo.region" content="IN-DL" />
<meta name="geo.position" content="28.5355;77.1910" />
```

## 3. On-Page SEO

### 3.1 Heading Structure
- **H1**: One per page (main topic)
- **H2-H3**: Hierarchical structure for readability
- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`

### 3.2 Content Optimization
- **Keyword Density**: 1-2% for primary keywords
- **LSI Keywords**: Related terms for better context
- **Content Length**: 2000+ words on main pages
- **Internal Linking**: Strategic links between related products and solutions
- **External Links**: Authority links to government sites and research institutions

### 3.3 Image SEO
- **Alt Text**: Descriptive alt text for all images
- **Image Filenames**: Keyword-rich file names
- **Image Compression**: Optimized file sizes
- **Image Formats**: Modern formats (WebP) with fallbacks

## 4. Technical Implementation

### 4.1 Core Files Modified

**Layout & Metadata**:
- `/app/layout.tsx` - Master metadata and schema
- `/lib/seo.ts` - Reusable SEO utilities

**Pages Created**:
- `/app/page.tsx` - Homepage with metadata
- `/app/products/page.tsx` - Products with rich descriptions
- `/app/solutions/page.tsx` - Solutions targeting government/enterprise
- `/app/research/page.tsx` - Research content
- `/app/company/page.tsx` - Company information and credibility
- `/app/blog/page.tsx` - Blog section
- `/app/contact/page.tsx` - Contact form for leads
- `/app/privacy/page.tsx` - Privacy policy
- `/app/terms/page.tsx` - Terms of Service
- `/app/sitemap/page.tsx` - HTML sitemap for users

**Components**:
- `/components/navbar.tsx` - Navigation with proper ARIA labels
- `/components/footer.tsx` - Footer with structured links
- `/components/contact-form.tsx` - Lead capture form

## 5. Mobile & Accessibility

### 5.1 Mobile Optimization
- **Responsive Design**: Mobile-first approach
- **Viewport Settings**: Proper viewport meta tag
- **Touch-Friendly**: Adequate spacing for touch targets
- **Mobile Performance**: Optimized for Core Web Vitals

### 5.2 Accessibility
- **ARIA Labels**: Proper ARIA attributes for interactive elements
- **Semantic HTML**: Meaningful markup structure
- **Color Contrast**: WCAG AAA compliance
- **Keyboard Navigation**: Full keyboard support

## 6. OpenGraph & Social Meta Tags

### 6.1 Twitter Card
- **Card Type**: `summary_large_image`
- **Creator Tag**: `@CarnotResearch`
- **Image**: 1200x630px optimized

### 6.2 OpenGraph
- **Locale**: `en_IN` for India
- **Type**: Website/Article as appropriate
- **Images**: 1200x630px with proper alt text
- **URL**: Canonical URL for each page

## 7. Advanced Features

### 7.1 Multi-Language Readiness
- Alternates for Hindi `/hi` path
- Language switching capability
- RTL support ready

### 7.2 Rich Snippets
- **Organization**: Name, logo, contact info
- **LocalBusiness**: Address, phone, hours
- **Breadcrumb**: Navigation hierarchy
- **Article**: For blog posts with author, date, content

### 7.3 International Expansion
- Language alternatives in alternates
- Hreflang tags ready for multi-language
- Separate sitemaps for different languages

## 8. Monitoring & Maintenance

### 8.1 Tools to Use
- **Google Search Console**: Monitor search performance
- **Google Analytics**: Track user behavior
- **Lighthouse**: Check Core Web Vitals
- **Screaming Frog**: Audit technical SEO

### 8.2 Regular Checks
- Monitor keyword rankings
- Check for broken links
- Update content regularly
- Monitor Core Web Vitals
- Check indexed pages in GSC

### 8.3 Optimization Tips
1. Add more content to products pages (2000+ words)
2. Create blog posts with LSI keywords
3. Build backlinks from government/enterprise sites
4. Submit to Google Business Profile
5. Add FAQ schema for common questions
6. Create location pages for other Indian cities

## 9. Keywords by Target

### 9.1 Primary Keywords
- on-premise generative AI India
- enterprise AI solutions
- secure LLM deployment
- government approved AI
- NLP platform India

### 9.2 Secondary Keywords
- computer vision company India
- edge AI deployment
- local language AI
- private AI infrastructure
- STQC certified AI

### 9.3 Long-tail Keywords
- best on-premise AI for government in India
- secure generative AI platform for enterprises
- local language NLP solutions India
- private LLM deployment service India
- government approved AI solutions

## 10. Performance Metrics

### 10.1 Target Metrics
- **Page Load Time**: < 3 seconds
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Cumulative Layout Shift**: < 0.1

### 10.2 SEO Metrics
- **Domain Authority**: Target 30+
- **Keyword Rankings**: Top 3 for 20+ keywords
- **Organic Traffic**: 10,000+ monthly visitors
- **Click-Through Rate**: > 5%

## 11. Future Optimizations

1. **AI-Generated Content**: Create unique AI-generated blog posts
2. **Video Content**: Add YouTube videos for products
3. **Local Partnerships**: Build links from local tech communities
4. **Press Releases**: Distribute through Indian tech press
5. **University Partnerships**: Link from IIT alumni networks
6. **Government Listings**: Submit to government vendor databases

## Contact

For questions about SEO/GEO optimization, contact: hello@carnotresearch.com
