import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHeader({ eyebrow, title, subtitle, breadcrumb }) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-br from-ink via-indigo-900 to-indigo-800 overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-10 dot-pattern" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-indigo-600/30 blur-3xl" />

      <div className="container-x relative z-10 text-center">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs text-white/50 mb-5 sm:mb-6">
          <Link to="/" className="hover:text-emerald-400 flex items-center gap-1">
            <Home size={12} /> Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-emerald-400">{breadcrumb}</span>
        </div>

        {eyebrow && (
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-5">
            <div className="w-6 sm:w-8 h-px bg-emerald-500" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">{eyebrow}</span>
            <div className="w-6 sm:w-8 h-px bg-emerald-500" />
          </div>
        )}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-5 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">{subtitle}</p>
        )}
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,60 L0,30 Q300,0 600,30 T1200,30 L1200,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
