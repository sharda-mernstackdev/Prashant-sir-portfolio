import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, CheckCircle2, Clock, Users, Target, Sparkles, Award, Briefcase,
  Crown, Heart, Mic, Shield, GraduationCap, Calendar, Layers, Home, ChevronRight
} from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../seo/SEO';
import { SEO_SERVICE_DETAILS, absoluteUrl } from '../seo/seoConfig';
import { serviceSchema, courseSchema, faqSchema, personSchema } from '../seo/schemas';
import { SERVICES_DATA } from '../data/site';

const IconMap = { Briefcase, Crown, GraduationCap, Mic, Clock, Users, Shield, Heart, Target, Award, Sparkles };

export default function ServiceDetail({ onOpenModal }) {
  const { slug } = useParams();

  // find which parent service + the sub-option
  let parent = null;
  let sub = null;
  for (const svc of SERVICES_DATA) {
    const found = svc.sub.find(s => s.slug === slug);
    if (found) {
      parent = svc;
      sub = found;
      break;
    }
  }

  if (!sub) {
    return <Navigate to="/services" replace />;
  }

  const Icon = IconMap[sub.icon] || Sparkles;

  // Build SEO meta for this specific slug
  const seoMeta = SEO_SERVICE_DETAILS[slug] || {
    title: `${sub.title} | Prashant Kadhao`,
    description: sub.overview ? sub.overview.slice(0, 158) : sub.tagline,
    keywords: `${sub.title}, ${parent.title}, Nagpur training, professional development`,
    category: parent.title
  };

  // Build FAQ schema from outcomes (each outcome → a Q&A pair for rich snippets)
  const faqs = sub.outcomes ? sub.outcomes.slice(0, 5).map((o, i) => ({
    question: `What will I learn in ${sub.title}? (Outcome ${i + 1})`,
    answer: o
  })) : [];

  // Find other sub-options in same parent + next/prev
  const siblings = parent.sub;
  const currentIndex = siblings.findIndex(s => s.slug === slug);
  const prev = siblings[currentIndex - 1];
  const next = siblings[currentIndex + 1];

  return (
    <>
      <SEO
        title={seoMeta.title}
        description={seoMeta.description}
        keywords={seoMeta.keywords}
        canonical={`/services/${slug}`}
        ogImage={parent.image || "/images/og-cover.jpg"}
        ogType="article"
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: parent.title, url: `/services#${parent.id}` },
          { name: sub.title, url: `/services/${slug}` }
        ]}
        jsonLd={[
          personSchema(),
          serviceSchema({
            name: sub.title,
            description: sub.overview || sub.tagline,
            category: parent.title,
            slug: slug,
            audience: sub.audience,
            duration: sub.duration
          }),
          courseSchema({
            name: sub.title,
            description: sub.overview || sub.tagline,
            slug: slug,
            duration: sub.duration,
            audience: sub.audience
          }),
          ...(faqs.length > 0 ? [faqSchema(faqs)] : [])
        ]}
      />
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-ink via-indigo-900 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 dot-pattern" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-indigo-600/30 blur-3xl" />

        <div className="container-x relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/50 mb-6 flex-wrap">
            <Link to="/" className="hover:text-emerald-400 flex items-center gap-1">
              <Home size={12} /> Home
            </Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-emerald-400">Services</Link>
            <ChevronRight size={12} />
            <Link to={`/services#${parent.id}`} className="hover:text-emerald-400">{parent.title}</Link>
            <ChevronRight size={12} />
            <span className="text-emerald-400">{sub.title}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Icon className="text-white" size={22} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                  {parent.title}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {sub.title}
              </h1>
              <p className="text-emerald-400 text-base sm:text-lg italic mb-6">"{sub.tagline}"</p>
              <p className="text-white/70 text-base leading-relaxed max-w-2xl">
                {sub.overview}
              </p>
            </div>

            {/* Quick info card */}
            <div className="lg:col-span-4">
              <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    <Calendar size={12} /> Duration
                  </div>
                  <div className="text-white text-sm font-semibold">{sub.duration}</div>
                </div>
                <div className="pt-5 border-t border-white/10">
                  <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    <Layers size={12} /> Format
                  </div>
                  <div className="text-white text-sm font-semibold">{sub.format}</div>
                </div>
                <div className="pt-5 border-t border-white/10">
                  <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    <Users size={12} /> Audience
                  </div>
                  <div className="text-white text-sm leading-relaxed">{sub.audience}</div>
                </div>
                <button
                  onClick={onOpenModal}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-500/30"
                >
                  Enquire Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,60 L0,30 Q300,0 600,30 T1200,30 L1200,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── KEY OUTCOMES ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-x max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <span className="label-tag">What You'll Achieve</span>
              <h2 className="heading-md">
                Key <span className="text-emerald-600">Outcomes</span>
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-5" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {sub.outcomes.map((o, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex items-start gap-4 bg-mist p-5 rounded-xl hover:shadow-md transition-shadow h-full">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                      Outcome 0{i + 1}
                    </span>
                    <p className="text-ink font-semibold text-sm sm:text-base leading-snug">{o}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM / TOPICS ── */}
      <section className="py-16 lg:py-20 bg-mist">
        <div className="container-x max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <span className="label-tag">Module Curriculum</span>
              <h2 className="heading-md">
                Topics <span className="text-emerald-600">Covered</span>
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-5" />
            </div>
          </Reveal>

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {sub.topics.map((topic, i) => (
                <Reveal key={i} delay={i * 40}>
                  <div className="flex items-start gap-3 py-2 border-b border-slate-100 last:border-0">
                    <div className="font-display font-bold text-emerald-600 text-sm flex-shrink-0 w-8">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-snug">{topic}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES IN THIS CATEGORY ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-10">
              <span className="label-tag">More in {parent.title}</span>
              <h2 className="heading-md">
                Explore <span className="text-emerald-600">Related Programs</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {siblings.map(s => {
              const SubIcon = IconMap[s.icon] || Sparkles;
              const isActive = s.slug === slug;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className={`group p-5 sm:p-6 rounded-2xl border-2 transition-all ${
                    isActive
                      ? 'bg-ink border-ink text-white'
                      : 'bg-white border-slate-100 hover:border-emerald-500 hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-3 ${
                    isActive ? 'bg-emerald-500' : 'bg-emerald-500/10 group-hover:bg-emerald-500'
                  } transition-colors`}>
                    <SubIcon className={isActive ? 'text-white' : 'text-emerald-600 group-hover:text-white'} size={20} />
                  </div>
                  <h4 className={`font-display font-bold text-sm sm:text-base mb-1.5 leading-tight ${isActive ? 'text-white' : 'text-ink'}`}>
                    {s.title}
                  </h4>
                  <p className={`text-xs leading-snug ${isActive ? 'text-emerald-300' : 'text-slate-500'}`}>
                    {s.tagline}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAV ── */}
      <section className="py-12 bg-mist border-t border-slate-100">
        <div className="container-x max-w-5xl">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prev ? (
              <Link
                to={`/services/${prev.slug}`}
                className="flex-1 bg-white rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all border border-slate-100 group"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                  <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Previous
                </div>
                <div className="font-display font-bold text-ink text-sm sm:text-base">{prev.title}</div>
              </Link>
            ) : <div className="flex-1 hidden sm:block" />}
            {next ? (
              <Link
                to={`/services/${next.slug}`}
                className="flex-1 bg-white rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all border border-slate-100 group text-right"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center justify-end gap-1">
                  Next <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="font-display font-bold text-ink text-sm sm:text-base">{next.title}</div>
              </Link>
            ) : <div className="flex-1 hidden sm:block" />}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-emerald-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="container-x relative text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto">
            Ready to Enroll in This Program?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Get a custom proposal designed for your team, college, or organization. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-white font-bold rounded-full hover:bg-indigo-900 transition-all hover:-translate-y-0.5 shadow-xl"
            >
              Request Proposal <ArrowRight size={18} />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-ink font-bold rounded-full hover:bg-mist transition-all hover:-translate-y-0.5 shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
