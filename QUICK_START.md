# 🚀 Quick Start Guide - Carnot Research Website

## Installation & Setup (2 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Visit: http://localhost:3000
```

That's it! The website is now running locally.

---

## File Locations Quick Reference

### Key Files to Edit

| What | File | Location |
|------|------|----------|
| **Colors** | globals.css | `/app/globals.css` lines 6-40 |
| **Fonts** | layout.tsx | `/app/layout.tsx` line 8 |
| **Metadata** | layout.tsx | `/app/layout.tsx` line 13-80 |
| **Logo/Brand** | navbar.tsx | `/components/navbar.tsx` line 23-28 |
| **Address** | footer.tsx | `/components/footer.tsx` line 45-51 |
| **Company Info** | footer.tsx | `/components/footer.tsx` line 32-37 |

### Page Routes

| Page | Route | File |
|------|-------|------|
| Home | / | `/app/page.tsx` |
| Products | /products | `/app/products/page.tsx` |
| Solutions | /solutions | `/app/solutions/page.tsx` |
| Research | /research | `/app/research/page.tsx` |
| Company | /company | `/app/company/page.tsx` |
| Blog | /blog | `/app/blog/page.tsx` |
| Contact | /contact | `/app/contact/page.tsx` |
| Privacy | /privacy | `/app/privacy/page.tsx` |
| Terms | /terms | `/app/terms/page.tsx` |

---

## Common Customizations

### Change Brand Colors

**File**: `/app/globals.css`

```css
:root {
  --primary: oklch(0.47 0.16 280);        /* Brand blue - CHANGE THIS */
  --accent: oklch(0.60 0.15 50);          /* Accent gold - OR THIS */
  --background: oklch(0.99 0.001 250);    /* Background color */
}
```

**Visualize colors**: https://oklch.com

### Update Company Name

**Files to update**:
1. `/app/layout.tsx` line 23 (metadata)
2. `/components/navbar.tsx` line 24 (navbar)
3. `/components/footer.tsx` line 33 (footer)

### Change Business Address

**File**: `/components/footer.tsx` (lines 45-51)
```tsx
<address className="mt-4 not-italic text-sm text-muted-foreground space-y-1">
  <p>Your Street Address</p>
  <p>Your City, State</p>
  <p>Your Zip Code, Country</p>
```

### Update Meta Tags

**File**: `/app/layout.tsx` (lines 13-80)

Replace values in:
- `title.default`
- `description`
- `keywords[]`
- `authors`
- `openGraph.images`

---

## Deploy to Vercel (1 minute)

### Option 1: GitHub
```bash
# Push to GitHub
git add .
git commit -m "Deploy Carnot Research website"
git push origin main

# Go to vercel.com → New Project → Select repo → Deploy
```

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel deploy --prod
```

### Option 3: Direct Upload
1. Go to https://vercel.com
2. Click "Deploy" button
3. Upload project folder

---

## Adding New Pages

### Create a new page in 3 steps

**Step 1**: Create folder
```
/app/your-page/page.tsx
```

**Step 2**: Add content
```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your meta description",
}

export default function YourPage() {
  return (
    <main>
      <h1>Your Page</h1>
    </main>
  )
}
```

**Step 3**: Add link to navbar/footer
- Edit `/components/navbar.tsx`
- Add to `navigation` array

---

## Useful Commands

```bash
# Development
npm run dev          # Run local server (http://localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Run production build locally

# Maintenance
npm run lint         # Check for errors
npm outdated        # Check package updates
npm update          # Update packages
```

---

## SEO Quick Wins

### 1. Add to Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: https://your-domain.com
3. Verify ownership
4. Submit sitemap: https://your-domain.com/sitemap.xml

### 2. Submit to Google My Business
1. Go to https://business.google.com
2. Claim your business
3. Add New Delhi location
4. Verify phone number

### 3. Monitor Rankings
1. Use SEMrush or Ahrefs
2. Track: "on-premise AI India"
3. Track: "government AI solutions"

### 4. Build Backlinks
- IIT Delhi website
- Government tech forums
- Industry associations
- Partner websites

---

## Color Reference

### Quick Copy-Paste Colors

```css
/* Primary Blue (Brand) */
--primary: oklch(0.47 0.16 280);

/* Accent Gold (Highlights) */
--accent: oklch(0.60 0.15 50);

/* Background (Off-white) */
--background: oklch(0.99 0.001 250);

/* Text (Dark Blue) */
--foreground: oklch(0.12 0.005 280);

/* Secondary (Light Gray) */
--secondary: oklch(0.96 0.006 250);

/* Muted (Medium Gray) */
--muted: oklch(0.88 0.005 250);

/* Success (Green) */
oklch(0.65 0.15 150)

/* Error (Red) */
oklch(0.58 0.23 30)
```

---

## Performance Targets

### Lighthouse Scores
- Performance: **90+**
- Accessibility: **95+**
- Best Practices: **90+**
- SEO: **100**

### Core Web Vitals
- LCP: **< 2.5 seconds**
- FID: **< 100 milliseconds**
- CLS: **< 0.1**

Check with: https://developers.google.com/web/tools/lighthouse

---

## Common Issues & Fixes

### Pages Not Loading
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
npm run dev
```

### Import Errors
```bash
# Reinstall all dependencies
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Applying
1. Check Tailwind class spelling
2. Check globals.css is imported
3. Rebuild: `npm run build`

### Form Not Working
1. Verify form has name attribute
2. Check server-side handling
3. Test in browser console

---

## Keywords by Page

### Homepage
- "on-premise generative AI India"
- "enterprise AI solutions"
- "government approved AI"

### Products
- "icarKno RAG platform"
- "BharGati AI transport"
- "SAATHI travel assistant"

### Solutions
- "AI for government India"
- "enterprise knowledge platform"
- "on-premise LLM"

### Company
- "Carnot Research IIT"
- "AI startup India"
- "STQC certified AI"

---

## Documentation Files

| File | Purpose | Lines |
|------|---------|-------|
| SEO_GEO_OPTIMIZATION.md | Complete SEO setup | 241 |
| DESIGN_SYSTEM.md | Design tokens & components | 305 |
| IMPLEMENTATION_GUIDE.md | How to customize | 347 |
| COMPLETION_SUMMARY.md | What's been done | 386 |
| LAUNCH_CHECKLIST.md | Pre-launch tasks | 488 |
| QUICK_START.md | This file | 300+ |

---

## Support Links

| Resource | Link |
|----------|------|
| **Next.js Docs** | https://nextjs.org/docs |
| **Tailwind Docs** | https://tailwindcss.com/docs |
| **Shadcn/ui** | https://ui.shadcn.com |
| **OKLCH Colors** | https://oklch.com |
| **Google Search Console** | https://search.google.com/search-console |
| **Google Analytics** | https://analytics.google.com |
| **Vercel Docs** | https://vercel.com/docs |

---

## Next Steps (After Launch)

1. ✅ Deploy to Vercel
2. ✅ Setup Google Search Console
3. ✅ Setup Google Analytics
4. ✅ Add OG images
5. ✅ Write first blog post
6. ✅ Monitor rankings
7. ✅ Build backlinks
8. ✅ Optimize based on data

---

## Contact & Support

**Questions about this website?**
- Check `IMPLEMENTATION_GUIDE.md` for detailed info
- Check `SEO_GEO_OPTIMIZATION.md` for SEO help
- Check `DESIGN_SYSTEM.md` for design questions

**Need help with deployment?**
- Vercel Support: https://vercel.com/support
- Next.js Discussions: https://github.com/vercel/next.js/discussions

---

## 🎉 You're All Set!

Your production-ready website is:
- ✅ Built with Next.js 16
- ✅ Styled with Tailwind CSS
- ✅ Optimized for SEO/GEO
- ✅ Ready to deploy
- ✅ Fully documented

**Deploy now and start ranking!** 🚀

---

**Quick Links**:
- 📘 [Full Implementation Guide](./IMPLEMENTATION_GUIDE.md)
- 🎨 [Design System](./DESIGN_SYSTEM.md)
- 🌍 [SEO/GEO Optimization](./SEO_GEO_OPTIMIZATION.md)
- ✅ [Launch Checklist](./LAUNCH_CHECKLIST.md)
- 📊 [Completion Summary](./COMPLETION_SUMMARY.md)

**Last Updated**: 2026-02-26 | **Status**: Ready for Production
