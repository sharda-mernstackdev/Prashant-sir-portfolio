import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/site';

export default function HeroSlider({ onOpenModal }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = useCallback((index) => {
    setIsAnimating(true);
    setCurrent(((index % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  const slide = HERO_SLIDES[current];

  return (
    <>
      {/* ───────────── MOBILE LAYOUT (stacked: image top + text bottom) ───────────── */}
      <section
        className="sm:hidden relative w-full bg-ink overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left accent line spanning whole section */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-500 z-10" />

        {/* IMAGE TOP — full image, no crop. Uses natural aspect ratio */}
        <div className="relative w-full pt-20 bg-ink">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={i}
              className={`transition-opacity duration-1000 ${
                i === current ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pt-20'
              }`}
            >
              <img
                src={s.image}
                alt={`${slide.eyebrow} — Prashant Kadhao`}
                width="1200"
                height="675"
                fetchpriority={i === 0 ? "high" : "auto"}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-auto block"
              />
              {/* Subtle overlay - light enough to keep image visible, dark enough for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/10 to-ink/40 pointer-events-none" />
              <div className="absolute inset-0 bg-ink/15 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* TEXT SECTION — dark background, content stacked */}
        <div className="relative bg-gradient-to-b from-ink to-indigo-950 px-5 pt-8 pb-24">
          <div
            key={current}
            className={`transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-emerald-500" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400 leading-tight">
                {slide.eyebrow}
              </span>
            </div>

            {/* Mobile visual headline (single H1 lives in desktop layout below — this is a styled visual element) */}
            <p className="font-display text-[1.875rem] leading-[1.15] font-bold text-white mb-3 tracking-tight whitespace-pre-line" role="heading" aria-level="1">
              {slide.title}
            </p>

            <p className="text-white/75 text-sm mb-5 leading-relaxed">
              19+ years of empowering minds, building leaders, and transforming careers across India.
            </p>

            <div className="flex flex-wrap gap-3 mb-2">
              {slide.cta1.href === '#modal' ? (
                <button onClick={onOpenModal} className="btn-primary group !px-5 !py-2.5 text-sm">
                  {slide.cta1.label}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <Link to={slide.cta1.href} className="btn-primary group !px-5 !py-2.5 text-sm">
                  {slide.cta1.label}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {slide.cta2.href === '#modal' ? (
                <button onClick={onOpenModal} className="btn-ghost !px-5 !py-2.5 text-sm">
                  {slide.cta2.label}
                </button>
              ) : (
                <Link to={slide.cta2.href} className="btn-ghost !px-5 !py-2.5 text-sm">
                  {slide.cta2.label}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Bottom indicators row */}
        <div className="absolute bottom-4 left-0 right-0 z-20">
          <div className="px-5 flex items-end justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl text-white leading-none">
                {String(current + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col">
                <div className="w-6 h-px bg-white/40 mb-1" />
                <span className="text-white/60 text-[9px] uppercase tracking-widest">
                  of {String(HERO_SLIDES.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === current ? 'w-6 bg-emerald-500' : 'w-1 bg-white/40'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-white/30 bg-white/15 backdrop-blur flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-white/30 bg-white/15 backdrop-blur flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── DESKTOP LAYOUT (text overlay on full-screen image) ───────────── */}
      <section
        className="hidden sm:block relative w-full overflow-hidden bg-ink h-[100svh] min-h-[600px] max-h-[900px]"
      >
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
                i === current ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${s.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
        ))}

        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-500 z-10" />

        <div className="relative z-20 h-full flex items-center pt-24 pb-28">
          <div className="container-x w-full">
            <div className="max-w-3xl">
              <div
                key={current}
                className={`transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-px bg-emerald-500" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 leading-tight">
                    {slide.eyebrow}
                  </span>
                </div>

                <h1 className="font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight whitespace-pre-line">
                  {slide.title}
                </h1>

                <p className="text-white/75 text-base md:text-lg max-w-xl mb-8 md:mb-10 leading-relaxed mt-5">
                  19+ years of empowering minds, building leaders, and transforming careers across India.
                </p>

                <div className="flex flex-wrap gap-4">
                  {slide.cta1.href === '#modal' ? (
                    <button onClick={onOpenModal} className="btn-primary group">
                      {slide.cta1.label}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <Link to={slide.cta1.href} className="btn-primary group">
                      {slide.cta1.label}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                  {slide.cta2.href === '#modal' ? (
                    <button onClick={onOpenModal} className="btn-ghost">
                      {slide.cta2.label}
                    </button>
                  ) : (
                    <Link to={slide.cta2.href} className="btn-ghost">
                      {slide.cta2.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container-x flex items-end justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="font-display font-bold text-4xl text-white leading-none">
                {String(current + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col">
                <div className="w-12 h-px bg-white/40 mb-1" />
                <span className="text-white/60 text-xs uppercase tracking-widest">
                  of {String(HERO_SLIDES.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === current ? 'w-12 bg-emerald-500' : 'w-6 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/30 bg-white/15 backdrop-blur flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/30 bg-white/15 backdrop-blur flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}