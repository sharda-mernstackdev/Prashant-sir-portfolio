# Prashant Kadhao — Official Website

Modern, professional multi-page website built with **React + Vite + Tailwind CSS**.

## Tech Stack

- **React 18** + **Vite 5** (fast HMR build)
- **Tailwind CSS 3** (utility-first styling)
- **React Router 6** (multipage navigation)
- **Lucide React** (clean icon set)
- **Outfit + Inter** fonts (Google Fonts)

## Design System

- **Palette**: Deep Indigo (`#0B1437`) + Emerald (`#10B981`) + White (Professional Tech)
- **Typography**: Outfit (display headings) + Inter (body)
- **Components**: Hero slider, sticky navbar, animated cards, gallery lightbox, WhatsApp form integration, training modal

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

After build, deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.)

## Project Structure

```
prashant-react/
├── public/
│   └── images/              # All images (banner, certificates, gallery, logos)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSlider.jsx
│   │   ├── TrainingModal.jsx
│   │   ├── WhatsAppFloat.jsx
│   │   ├── PageHeader.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/               # Route pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Training.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── site.js          # Centralized content/data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Pages

- **Home** (`/`) — Hero slider, stats, founder intro (single clean image), expertise roles, 2 ventures (PSK + BigZoom), separate marquees for Industry Clients and Associated Colleges, testimonials, CTA
- **About** (`/about`) — Detailed bio with a single hero image (decorative corner frame, name plate overlay), expertise grid, **horizontal alternating timeline with scroll-triggered animations** (5 milestones), core values, certificates strip
- **Services** (`/services`) — 3 expandable accordion cards: Corporate Training, Leadership Development, Employability & Life Skills. Each card opens to reveal 3 sub-options. The navbar also has a **mega-dropdown** on hover for desktop, accordion-style dropdown for mobile.
- **Service Detail** (`/services/:slug`) — Full detail pages for each of the 9 sub-services (Communication & Presentation Skills, Time & Stress Management, etc.) with overview, key outcomes, full curriculum, related programs, prev/next nav
- **Gallery** (`/gallery`) — Filterable gallery (All / Industrial Visit / Expert Talk / JCI Events / Events / Certificates) with **uniform aspect-square tiles** for a clean grid, lightbox with keyboard nav
- **Contact** (`/contact`) — Quick contact cards, dark info card + form (WhatsApp integration), Google Maps embed

## Contact

- Phone: +91 99752 88300 | +91 94221 23343
- Email: help@prashantkadhao.com
- Address: PSK Technologies Pvt. Ltd., Lower Ground Fortune Mall, Sitabuldi, Nagpur — 440012

---

© 2026 Prashant Kadhao. Developed by PSK Technologies Pvt. Ltd.
