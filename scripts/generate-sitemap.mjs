// Generate sitemap.xml automatically by reading routes from SEO config + SERVICES_DATA.
// Run as part of build: `node scripts/generate-sitemap.mjs`

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = "https://www.prashantkadhao.com";
const today = new Date().toISOString().split('T')[0];

// Static routes
const staticUrls = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/about", priority: "0.9", changefreq: "monthly" },
  { loc: "/services", priority: "0.9", changefreq: "weekly" },
  { loc: "/gallery", priority: "0.7", changefreq: "weekly" },
  { loc: "/contact", priority: "0.8", changefreq: "monthly" }
];

// Dynamic service-detail routes — read slugs from src/data/site.js
const sitePath = path.join(__dirname, '..', 'src', 'data', 'site.js');
const siteSource = fs.readFileSync(sitePath, 'utf-8');
const slugRegex = /slug:\s*["']([a-z0-9-]+)["']/g;
const slugs = new Set();
let m;
while ((m = slugRegex.exec(siteSource))) slugs.add(m[1]);

const dynamicUrls = [...slugs].map(slug => ({
  loc: `/services/${slug}`,
  priority: "0.8",
  changefreq: "monthly"
}));

const allUrls = [...staticUrls, ...dynamicUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allUrls.map(u => `  <url>
    <loc>${SITE_URL}${u.loc === '/' ? '' : u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml);
console.log(`✓ Sitemap generated: ${outPath} (${allUrls.length} URLs)`);
