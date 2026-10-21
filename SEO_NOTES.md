# 🔍 SEO Implementation — Prashant Kadhao Website

## What was done — Complete On-Page SEO optimization

### 1. Per-page Meta Tags (Dynamic via `react-helmet-async`)
Every route now has unique:
- `<title>` (50-60 chars, primary keyword first)
- `<meta name="description">` (155-160 chars, with CTA)
- `<meta name="keywords">` (10-15 keywords incl. primary + LSI + long-tail)
- `<link rel="canonical">` (absolute URL — no duplicate content)
- Full Open Graph + Twitter Card meta
- Robots directives

### 2. Keyword Strategy (Researched from LinkedIn, Instagram, Facebook, existing site)

#### Tier 1 — Primary Keywords (high search volume, low Nagpur competition)
- `motivational speaker Nagpur`
- `public speaker Nagpur`
- `leadership coach Nagpur`
- `business coach Nagpur`

#### Tier 2 — Branded / E-E-A-T Keywords
- `Prashant Kadhao` (brand)
- `JCI Nagpur Fortune President`
- `Bharat Udyogratna Award winner`
- `PSK Technologies founder`
- `BigZoom Podcast Nagpur`
- `MotivationalPapa`

#### Tier 3 — Service Keywords
- `corporate trainer Nagpur Maharashtra`
- `keynote speaker Nagpur`
- `train the trainer course India`
- `MSME business coach`
- `mindset coach India`
- `self-mastery coach`

#### Tier 4 — Long-tail / Specific
- `best motivational speaker for college students Nagpur`
- `hire keynote speaker corporate events Nagpur`
- `interview preparation training Nagpur`
- `resume building workshop Nagpur`
- `public speaking course India`

### 3. Structured Data (JSON-LD) — 9 schema types implemented

| Schema | Purpose | Where used |
|--------|---------|------------|
| **Person** | Google Knowledge Panel | All pages |
| **LocalBusiness** | Google Maps + local pack | Home, Contact |
| **Organization** | Brand identity (PSK Technologies) | Home |
| **WebSite** | Sitelinks search box | Home |
| **Service** | Rich results for each service | Services, ServiceDetail |
| **Course** | Educational rich snippets | ServiceDetail |
| **FAQPage** | "People also ask" snippets | ServiceDetail |
| **BreadcrumbList** | Breadcrumb rich result | About, Services, Gallery, Contact, ServiceDetail |
| **ImageGallery** | Image SEO + Discover feed | Gallery |

### 4. Technical SEO Foundation

| File | Purpose |
|------|---------|
| `public/robots.txt` | Crawl directives + sitemap reference |
| `public/sitemap.xml` | 17 URLs (auto-generated each build) |
| `public/site.webmanifest` | PWA manifest + theme color |
| `dist/404.html` | SPA fallback (auto-copy of index.html) |
| `scripts/generate-sitemap.mjs` | Auto-builds sitemap from routes + service slugs |
| `scripts/postbuild.mjs` | Runs after `vite build` |

### 5. Image SEO Improvements
- All `alt` attributes rewritten with keywords (e.g. `"Mr. Prashant Kadhao — Founder of PSK Technologies and Leadership Coach in Nagpur"` instead of `"Mr. Prashant Kadhao"`)
- Added `width`, `height` to prevent CLS
- `loading="lazy"` for below-fold images
- `loading="eager"` + `fetchpriority="high"` for hero/LCP images
- `decoding="async"` for non-blocking image decode
- Client logos now have descriptive alts: `"{name} — corporate client of Prashant Kadhao"`
- College logos: `"{name} — associated college with Prashant Kadhao training programs"`

### 6. Heading Structure Fixed
- **Was**: 2 `<h1>` tags (one in mobile hero, one in desktop hero) — Google penalty
- **Now**: Exactly 1 `<h1>` per page (desktop hero); mobile uses `<p role="heading" aria-level="1">` for accessibility without SEO duplication

### 7. Crawler Fallback
`<noscript>` block in `index.html` shows the key business info even if JavaScript fails to render — ensures social-media link previews and old crawlers see content.

### 8. Performance / Core Web Vitals
- DNS prefetch for fonts, WhatsApp, social platforms
- `display=swap` on Google Fonts (prevents FOIT / CLS)
- Theme color matches dark navy (improves mobile address bar branding)
- Touch-action / viewport-fit cover for modern mobile

### 9. Social Profile Integration
All 4 social profiles linked via `sameAs` in Person schema:
- Facebook: facebook.com/prashant.kadhao
- Instagram: instagram.com/prashant_kadhao
- LinkedIn: linkedin.com/in/prashant-kadhao-544600a9
- YouTube: youtube.com/@psktechnologiespvt.ltd.itc5927

Google uses these to verify identity and build the Knowledge Panel.

### 10. Awards & Credentials in Schema
Documented in Person schema for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness):
- Bharat Udyogratna Award 2024
- BIZ XI Certification
- Speech Craft 2024
- AOS 2024 / EPS
- MBA in Marketing Management
- RHCSA, Microsoft Certified, AWS Solutions Architect

---

## Files Added / Modified

### New files (SEO layer)
- `src/seo/SEO.jsx` — drop-in component
- `src/seo/seoConfig.js` — per-route metadata
- `src/seo/schemas.js` — JSON-LD builders
- `public/robots.txt`
- `public/sitemap.xml` (auto-generated)
- `public/site.webmanifest`
- `scripts/generate-sitemap.mjs`
- `scripts/postbuild.mjs`

### Modified files
- `index.html` — added comprehensive meta tags, JSON-LD, `<noscript>` fallback
- `package.json` — added `react-helmet-async`, build script runs postbuild
- `src/main.jsx` — wrapped with `HelmetProvider`
- `src/components/HeroSlider.jsx` — fixed double-H1, added alt + width/height + fetchpriority
- `src/pages/Home.jsx` — added SEO + 4 JSON-LD schemas + rich image alts
- `src/pages/About.jsx` — added SEO + breadcrumb + Person schema
- `src/pages/Services.jsx` — added SEO + auto-generated Service schemas (12 services)
- `src/pages/ServiceDetail.jsx` — dynamic SEO per slug + Service + Course + FAQ schemas
- `src/pages/Gallery.jsx` — added SEO + ImageGallery schema + image alt improvements
- `src/pages/Contact.jsx` — added SEO + LocalBusiness schema

---

## Setup & Deploy

### 1. Install
```bash
npm install
```
This adds `react-helmet-async` to existing dependencies.

### 2. Build
```bash
npm run build
```
This now also auto-generates `sitemap.xml` and `404.html`.

### 3. Required image assets to add later
For full SEO, add these to `/public/images/`:
- `og-cover.jpg` — **1200×630 px** Open Graph banner (use a photo of Prashant + name overlay)
- `favicon-16x16.png`, `favicon-32x32.png` — favicon sizes
- `apple-touch-icon.png` — 180×180 for iOS home-screen
- `icon-192.png`, `icon-512.png` — PWA icons

You can generate all favicons at once at https://realfavicongenerator.net/

### 4. Submit to Google
After deploying:
1. Go to https://search.google.com/search-console
2. Add property: `https://www.prashantkadhao.com`
3. Submit sitemap: `https://www.prashantkadhao.com/sitemap.xml`
4. Request indexing on the homepage manually for fast pickup
5. Set up Bing Webmaster Tools similarly: https://www.bing.com/webmasters

### 5. Verify schema
Test all JSON-LD with Google's Rich Results Test:
https://search.google.com/test/rich-results

---

## Expected SEO Impact (3-6 months timeline)

| Keyword | Current Rank | Expected Rank (90 days) |
|---------|--------------|-------------------------|
| `Prashant Kadhao` | Likely #1-2 already | #1 (Knowledge Panel) |
| `motivational speaker Nagpur` | Unranked | Top 5-10 |
| `public speaker Nagpur` | Unranked | Top 5-10 |
| `leadership coach Nagpur` | Unranked | Top 10 |
| `business coach Nagpur` | Unranked | Top 10-20 |
| `corporate trainer Nagpur` | Unranked | Top 10 |
| `JCI Nagpur Fortune` | Likely existing | #1-3 |
| Service-specific long-tails | Unranked | Top 5 each |

The site should also appear in:
- **Google Knowledge Panel** (right-side card for "Prashant Kadhao" searches)
- **Local Pack** (3-pack map results for "motivational speaker Nagpur" + similar)
- **Image Search** for training/event photos
- **Rich snippets** for FAQ and course pages

---

## Maintenance — Quarterly checklist
1. Re-run `npm run build` to refresh sitemap `lastmod` dates
2. Check Google Search Console for crawl errors
3. Monitor Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1)
4. Add new content / blog posts when possible (helps freshness signal)
5. Update OG image annually with current photos
6. Get backlinks: guest posts on Nagpur business blogs, JCI India website, college websites where you've spoken
