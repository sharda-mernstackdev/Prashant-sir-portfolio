import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SEO from '../seo/SEO';
import { SEO_ROUTES } from '../seo/seoConfig';
import { imageGallerySchema, personSchema } from '../seo/schemas';
import { GALLERY, CERTIFICATES } from '../data/site';

const CATEGORIES = [
  { id: 'all', label: 'All Images' },
  { id: 'industrial', label: 'Industrial Visit' },
  { id: 'corporate', label: 'Corporate Training' },
  { id: 'expert', label: 'Expert Talk' },
  { id: 'jci', label: 'JCI Events' },
  { id: 'events', label: 'Events' },
  { id: 'certificates', label: 'Certificates' }
];

export default function Gallery() {
  const [active, setActive] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const allImages = [
    ...GALLERY.industrial.map(item => {
      const isObj = typeof item === 'object';
      return { src: `/images/${isObj ? item.src : item}`, name: isObj ? item.name : '', cat: 'industrial', catLabel: 'Industrial Visit' };
    }),
    ...(GALLERY.corporate || []).map(item => {
      const isObj = typeof item === 'object';
      return { src: `/images/${isObj ? item.src : item}`, name: isObj ? item.name : '', cat: 'corporate', catLabel: 'Corporate Training' };
    }),
    ...GALLERY.expert.map(item => {
      const isObj = typeof item === 'object';
      return { src: `/images/${isObj ? item.src : item}`, name: isObj ? item.name : '', cat: 'expert', catLabel: 'Expert Talk' };
    }),
    ...GALLERY.jci.map(item => {
      const isObj = typeof item === 'object';
      return { src: `/images/${isObj ? item.src : item}`, name: isObj ? item.name : '', cat: 'jci', catLabel: 'JCI Events' };
    }),
    ...GALLERY.events.map(item => {
      const isObj = typeof item === 'object';
      return { src: `/images/${isObj ? item.src : item}`, name: isObj ? item.name : '', cat: 'events', catLabel: 'Events' };
    }),
    ...CERTIFICATES.map(item => {
      const isObj = typeof item === 'object';
      return { src: `/images/certificates/${isObj ? item.src : item}`, name: isObj ? item.name : '', cat: 'certificates', catLabel: 'Certificate' };
    })
  ];

  const filtered = active === 'all' ? allImages : allImages.filter(img => img.cat === active);

  const counts = {
    all: allImages.length,
    industrial: GALLERY.industrial.length,
    corporate: (GALLERY.corporate || []).length,
    expert: GALLERY.expert.length,
    jci: GALLERY.jci.length,
    events: GALLERY.events.length,
    certificates: CERTIFICATES.length
  };

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
      const onKey = (e) => {
        if (e.key === 'Escape') setLightbox(null);
        if (e.key === 'ArrowRight') setLightbox(prev => prev !== null ? Math.min(prev + 1, filtered.length - 1) : prev);
        if (e.key === 'ArrowLeft') setLightbox(prev => prev !== null ? Math.max(prev - 1, 0) : prev);
      };
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [lightbox, filtered.length]);

  const seo = SEO_ROUTES["/gallery"];
  // Build image gallery schema with a sample of images for SEO
  const sampleImages = [
    ...(GALLERY.industrial || []).slice(0, 4).map(i => typeof i === 'object' ? i : { src: `/images/${i}`, name: '' }),
    ...(GALLERY.corporate || []).slice(0, 4).map(i => typeof i === 'object' ? i : { src: `/images/${i}`, name: '' }),
    ...(GALLERY.expert || []).slice(0, 4).map(i => typeof i === 'object' ? i : { src: `/images/${i}`, name: '' })
  ].map(i => ({ src: i.src && i.src.startsWith('/') ? i.src : `/images/${i.src}`, name: i.name }));

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        ogImage={seo.ogImage}
        ogType={seo.ogType}
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" }
        ]}
        jsonLd={[personSchema(), imageGallerySchema(sampleImages)]}
      />
      <PageHeader
        eyebrow="Visual Stories"
        title="Gallery & Highlights"
        subtitle="A visual journey through keynote speeches, corporate training, expert talks, industrial visits, JCI events including LOTS 2026 and Bharat Udyogratna Award 2024."
        breadcrumb="Gallery"
      />

      {/* Sticky Filter Bar */}
      <section className="sticky top-[68px] sm:top-[76px] z-30 bg-white/95 backdrop-blur-lg border-b border-slate-100 py-4">
        <div className="container-x">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 justify-start lg:justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  active === cat.id
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-slate-50 text-ink hover:bg-slate-100'
                }`}
              >
                {cat.label}
                {/* <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full ${
                  active === cat.id ? 'bg-white/20' : 'bg-white'
                }`}>
                  {counts[cat.id]}
                </span> */}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Uniform Grid */}
      <section className="py-12 lg:py-16 bg-mist min-h-screen">
        <div className="container-x">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400">No images in this category.</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {filtered.map((img, i) => (
                <Reveal key={`${img.src}-${i}`} delay={Math.min(i * 30, 600)}>
                  <div
                    onClick={() => setLightbox(i)}
                    className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group relative"
                  >
                    <img
                      src={img.src}
                      alt={`${img.name || img.catLabel} — Prashant Kadhao ${img.catLabel}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Always-visible name badge — bottom-left */}
                    <div className="absolute bottom-0 left-0 right-0 px-2.5 py-2 bg-gradient-to-t from-black/75 to-transparent">
                      <span className="inline-block bg-emerald-500/90 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-md leading-tight shadow-sm">
                        {img.name}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Category + name badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-1 z-10">
            <span className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider">
              {filtered[lightbox].catLabel}
            </span>
            {filtered[lightbox].name && (
              <span className="px-3 py-1.5 rounded-full bg-black/50 text-white text-xs font-semibold">
                {filtered[lightbox].name}
              </span>
            )}
          </div>

          {/* Prev */}
          {lightbox > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-emerald-500 text-white flex items-center justify-center transition-all z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
          )}
          {/* Next */}
          {lightbox < filtered.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-emerald-500 text-white flex items-center justify-center transition-all z-10"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>
          )}

          <img
            src={filtered[lightbox].src}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[80vh] object-contain rounded-2xl shadow-2xl"
          />

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs sm:text-sm font-medium bg-white/10 px-4 py-2 rounded-full">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
}