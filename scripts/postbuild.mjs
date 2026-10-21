// Postbuild script:
// 1. Generates fresh sitemap.xml into dist/
// 2. Creates 404.html copy of index.html (for static-host SPA routing)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

// 1) Generate fresh sitemap into dist/
try {
  execSync('node scripts/generate-sitemap.mjs', { cwd: root, stdio: 'inherit' });
  // Also copy generated sitemap from public/ to dist/
  const sitemapSrc = path.join(root, 'public', 'sitemap.xml');
  const sitemapDst = path.join(dist, 'sitemap.xml');
  if (fs.existsSync(sitemapSrc)) {
    fs.copyFileSync(sitemapSrc, sitemapDst);
    console.log('✓ Sitemap copied to dist/');
  }
} catch (e) {
  console.warn('⚠ Sitemap generation failed:', e.message);
}

// 2) Copy index.html → 404.html for SPA fallback on static hosts
try {
  const indexSrc = path.join(dist, 'index.html');
  const notFoundDst = path.join(dist, '404.html');
  if (fs.existsSync(indexSrc)) {
    fs.copyFileSync(indexSrc, notFoundDst);
    console.log('✓ 404.html created (SPA fallback)');
  }
} catch (e) {
  console.warn('⚠ 404.html copy failed:', e.message);
}

console.log('✓ Postbuild complete.');
