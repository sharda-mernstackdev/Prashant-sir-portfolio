import { Helmet } from 'react-helmet-async';
import { SEO_DEFAULTS, absoluteUrl } from './seoConfig';

/**
 * <SEO /> — Drop-in component that sets all per-page SEO tags.
 *
 * Props:
 *   title         — page <title>
 *   description   — meta description (155-160 chars ideal)
 *   keywords      — comma-separated keyword list
 *   canonical     — canonical path (e.g. "/about"). Auto-built into absolute URL.
 *   ogImage       — relative or absolute OG/Twitter image
 *   ogType        — og:type (website | article | profile)
 *   noindex       — set true to add <meta name="robots" content="noindex">
 *   jsonLd        — array of structured-data objects to inject as JSON-LD scripts
 *   breadcrumb    — array of {name, url} for automatic BreadcrumbList schema
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
  jsonLd = [],
  breadcrumb
}) {
  const fullTitle = title || SEO_DEFAULTS.siteName;
  const fullDesc = description || '';
  const fullCanonical = canonical ? absoluteUrl(canonical) : SEO_DEFAULTS.siteUrl;
  const fullImage = ogImage
    ? (ogImage.startsWith('http') ? ogImage : absoluteUrl(ogImage))
    : absoluteUrl(SEO_DEFAULTS.defaultImage);

  // Auto-build BreadcrumbList schema if breadcrumb prop provided
  const breadcrumbSchema = breadcrumb && breadcrumb.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumb.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.name,
      "item": b.url.startsWith('http') ? b.url : absoluteUrl(b.url)
    }))
  } : null;

  const allSchemas = [
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ...jsonLd
  ];

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Robots */}
      {noindex
        ? <meta name="robots" content="noindex, follow" />
        : <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      }

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SEO_DEFAULTS.siteName} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content={SEO_DEFAULTS.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Structured Data (JSON-LD) */}
      {allSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
