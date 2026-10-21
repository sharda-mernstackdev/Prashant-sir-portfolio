// ============================================================
//  Reusable JSON-LD Schema Builders
//  Each function returns a schema.org structured-data object
//  ready to pass into the <SEO jsonLd={[...]}/> prop.
// ============================================================

import { SEO_DEFAULTS, absoluteUrl } from './seoConfig';

/**
 * Person schema — for About page & site-wide person identity.
 */
export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SEO_DEFAULTS.siteUrl}/#person`,
  "name": "Prashant Kadhao",
  "alternateName": ["Mr. Prashant Kadhao", "Prashant Kadhao Nagpur", "Prashant Kadhao India"],
  "url": SEO_DEFAULTS.siteUrl,
  "image": absoluteUrl("/images/Prashant sir.webp"),
  "jobTitle": "Public Speaker, Corporate Trainer, Business Coach, Motivational Speaker & Leadership Coach in Nagpur",
  "description": "Prashant Kadhao is the best public speaker, corporate trainer, business coach, motivational speaker and leadership coach in Nagpur, with 19+ years of experience. Founder of PSK Technologies Pvt. Ltd., BigZoom Podcast Studio and JCI Nagpur Fortune. Bharat Udyogratna Awardee 2024. Based in Nagpur, serves clients across India.",
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "State", "name": "Maharashtra" },
    { "@type": "City", "name": "Nagpur" },
    { "@type": "City", "name": "Mumbai" },
    { "@type": "City", "name": "Pune" },
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "Bangalore" },
    { "@type": "City", "name": "Hyderabad" }
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "PSK Technologies Pvt. Ltd.",
    "url": "https://pskitservices.com"
  },
  "founder": [
    { "@type": "Organization", "name": "PSK Technologies Pvt. Ltd.", "url": "https://pskitservices.com" },
    { "@type": "Organization", "name": "BigZoom Podcast Studio", "url": "https://bzpodcast.in" },
    { "@type": "Organization", "name": "JCI Nagpur Fortune" },
    { "@type": "Organization", "name": "MotivationalPapa", "url": "https://motivationalpapa.com" },
    { "@type": "Organization", "name": "Prolific Webcoder IT Services", "url": "https://prolificwebcoder.com" }
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "JCI India — Zone 9",
    "description": "Zone Director — Business Training 2026; Immediate Past President JCI Nagpur Fortune 2026"
  },
  "award": [
    "Bharat Udyogratna Award 2024",
    "BIZ XI Certification",
    "Speech Craft 2024",
    "AOS 2024",
    "EPS Certification"
  ],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "MBA in Marketing Management" },
    { "@type": "EducationalOccupationalCredential", "name": "Red Hat Certified System Administrator (RHCSA)" },
    { "@type": "EducationalOccupationalCredential", "name": "Microsoft Certified Professional" },
    { "@type": "EducationalOccupationalCredential", "name": "AWS Solutions Architect" }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lower Ground Fortune Mall, behind Maharashtra Bank, Sitabuldi",
    "addressLocality": "Nagpur",
    "addressRegion": "Maharashtra",
    "postalCode": "440012",
    "addressCountry": "IN"
  },
  "telephone": ["+91-99752-88300", "+91-94221-23343"],
  "email": "help@prashantkadhao.com",
  "sameAs": [
    "https://www.facebook.com/prashant.kadhao",
    "https://www.instagram.com/prashant_kadhao/",
    "https://www.linkedin.com/in/prashant-kadhao-544600a9/",
    "https://www.youtube.com/@psktechnologiespvt.ltd.itc5927"
  ],
  "knowsAbout": [
    "Public Speaking",
    "Corporate Training",
    "Business Coaching",
    "Motivational Speaking",
    "Leadership Coaching",
    "Keynote Speaking",
    "Executive Coaching",
    "Soft Skills Training",
    "Public Speaking Coaching",
    "Leadership Training",
    "Train the Trainer",
    "Career Mentorship",
    "Student Coaching",
    "Communication Skills Training",
    "IT Consulting"
  ],
  "knowsLanguage": ["English", "Hindi", "Marathi"]
});

/**
 * LocalBusiness schema — for Contact + Home pages (drives Google Maps + Knowledge Panel).
 */
export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SEO_DEFAULTS.siteUrl}/#localbusiness`,
  "name": "Prashant Kadhao — Public Speaker, Corporate Trainer, Business Coach & Leadership Coach in Nagpur",
  "image": absoluteUrl("/images/og-cover.jpg"),
  "url": SEO_DEFAULTS.siteUrl,
  "telephone": "+91-99752-88300",
  "email": "help@prashantkadhao.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lower Ground Fortune Mall, Sitabuldi",
    "addressLocality": "Nagpur",
    "addressRegion": "Maharashtra",
    "postalCode": "440012",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.1458,
    "longitude": 79.0882
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "State", "name": "Maharashtra" },
    { "@type": "City", "name": "Nagpur" },
    { "@type": "City", "name": "Mumbai" },
    { "@type": "City", "name": "Pune" },
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "Bangalore" },
    { "@type": "City", "name": "Hyderabad" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Kolkata" },
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "City", "name": "Indore" }
  ],
  "serviceType": [
    "Public Speaking",
    "Corporate Training",
    "Business Coaching",
    "Motivational Speaking",
    "Leadership Coaching",
    "Keynote Speaking",
    "Executive Coaching",
    "Soft Skills Training",
    "Leadership Development",
    "Employability & Life Skills Training",
    "Train The Trainer Program",
    "IT Consulting",
    "Student Mentorship"
  ],
  "founder": { "@id": `${SEO_DEFAULTS.siteUrl}/#person` },
  "sameAs": [
    "https://www.facebook.com/prashant.kadhao",
    "https://www.instagram.com/prashant_kadhao/",
    "https://www.linkedin.com/in/prashant-kadhao-544600a9/",
    "https://www.youtube.com/@psktechnologiespvt.ltd.itc5927"
  ]
});

/**
 * Service schema — for each individual service-detail page.
 */
export const serviceSchema = ({ name, description, category, slug, audience, duration }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SEO_DEFAULTS.siteUrl}/services/${slug}/#service`,
  "name": name,
  "description": description,
  "category": category,
  "url": absoluteUrl(`/services/${slug}`),
  "provider": { "@id": `${SEO_DEFAULTS.siteUrl}/#person` },
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "State", "name": "Maharashtra" },
    { "@type": "City", "name": "Nagpur" },
    { "@type": "City", "name": "Mumbai" },
    { "@type": "City", "name": "Pune" },
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "Bangalore" },
    { "@type": "City", "name": "Hyderabad" }
  ],
  ...(audience && {
    "audience": {
      "@type": "Audience",
      "audienceType": audience
    }
  }),
  ...(duration && {
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": absoluteUrl(`/services/${slug}`),
      "priceCurrency": "INR",
      "category": "Training Program"
    }
  })
});

/**
 * Course schema — alternative for training-style services (richer search treatment).
 */
export const courseSchema = ({ name, description, slug, duration, audience }) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SEO_DEFAULTS.siteUrl}/services/${slug}/#course`,
  "name": name,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Prashant Kadhao Coaching",
    "sameAs": SEO_DEFAULTS.siteUrl
  },
  "url": absoluteUrl(`/services/${slug}`),
  "courseMode": "in-person",
  ...(audience && {
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": audience
    }
  }),
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "onsite",
    "location": {
      "@type": "Place",
      "name": "PSK Technologies, Sitabuldi, Nagpur"
    }
  }
});

/**
 * Organization schema — for site identity (used on Home).
 */
export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SEO_DEFAULTS.siteUrl}/#organization`,
  "name": "PSK Technologies Pvt. Ltd.",
  "alternateName": "PSK Technologies",
  "url": "https://pskitservices.com",
  "logo": absoluteUrl("/images/pskbglogo.png"),
  "foundingDate": "2011",
  "founder": { "@id": `${SEO_DEFAULTS.siteUrl}/#person` },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-99752-88300",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Marathi"]
  },
  "sameAs": [
    "https://www.facebook.com/prashant.kadhao",
    "https://www.instagram.com/prashant_kadhao/",
    "https://www.linkedin.com/in/prashant-kadhao-544600a9/"
  ]
});

/**
 * WebSite schema with SearchAction (enables sitelinks search box).
 */
export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SEO_DEFAULTS.siteUrl}/#website`,
  "name": SEO_DEFAULTS.siteName,
  "url": SEO_DEFAULTS.siteUrl,
  "inLanguage": "en-IN",
  "publisher": { "@id": `${SEO_DEFAULTS.siteUrl}/#person` }
});

/**
 * FAQPage schema — for Service detail pages with Q&A content.
 */
export const faqSchema = (faqs = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answer
    }
  }))
});

/**
 * ImageObject schema — for high-value photographic content (Gallery page).
 */
export const imageGallerySchema = (images = []) => ({
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Prashant Kadhao — Events & Training Gallery",
  "image": images.slice(0, 20).map(img => ({
    "@type": "ImageObject",
    "contentUrl": absoluteUrl(img.src),
    "name": img.name || "Training event"
  }))
});
