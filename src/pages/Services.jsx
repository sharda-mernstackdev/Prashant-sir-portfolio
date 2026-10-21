import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight, ChevronDown, Briefcase, Crown, GraduationCap, Mic, Clock, Users, Shield, Heart,
  Target, Award, Sparkles, CheckCircle2, Star
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SEO from '../seo/SEO';
import { SEO_ROUTES } from '../seo/seoConfig';
import { serviceSchema, personSchema } from '../seo/schemas';
import { SERVICES_DATA, STATS, TESTIMONIALS } from '../data/site';

const IconMap = { Briefcase, Crown, GraduationCap, Mic, Clock, Users, Shield, Heart, Target, Award, Sparkles };

export default function Services({ onOpenModal }) {
  const [openId, setOpenId] = useState(SERVICES_DATA[0].id);
  const location = useLocation();
  const seo = SEO_ROUTES["/services"];

  // Build a Service schema for each top-level category for richer SERP visibility
  const serviceSchemas = SERVICES_DATA.flatMap(svc =>
    svc.sub.map(sub => serviceSchema({
      name: sub.title,
      description: sub.tagline + ' ' + (sub.overview || '').slice(0, 160),
      category: svc.title,
      slug: sub.slug,
      audience: sub.audience,
      duration: sub.duration
    }))
  );

  // If user comes from navbar dropdown with #category-id hash, open that one
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (SERVICES_DATA.find(s => s.id === id)) {
        setOpenId(id);
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, [location]);

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
          { name: "Services", url: "/services" }
        ]}
        jsonLd={[personSchema(), ...serviceSchemas]}
      />
      <PageHeader
        eyebrow="What I Offer"
        title="Services & Programs"
        subtitle="Three pillars. Nine specialized programs. Each crafted to deliver measurable transformation for individuals, teams, and organizations."
        breadcrumb="Services"
      />

      {/* ── ACCORDION CARDS ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-x max-w-5xl">
          <div className="space-y-4 sm:space-y-5">
            {SERVICES_DATA.map((svc, i) => {
              const Icon = IconMap[svc.icon] || Sparkles;
              const isOpen = openId === svc.id;
              return (
                <Reveal key={svc.id} delay={i * 100}>
                  <div
                    id={svc.id}
                    className={`bg-white rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                      isOpen ? 'border-emerald-500 shadow-2xl shadow-emerald-500/10' : 'border-slate-100 hover:border-slate-200 shadow-sm'
                    }`}
                  >
                    {/* Header */}
                    <button
                      onClick={() => setOpenId(isOpen ? null : svc.id)}
                      className="w-full p-5 sm:p-7 flex items-center gap-4 sm:gap-6 text-left"
                    >
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? 'scale-110 rotate-3' : ''}`}>
                        <Icon className="text-white" size={26} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600">
                            Service · 0{i + 1}
                          </span>
                        </div>
                        <h3 className="font-display text-lg sm:text-2xl font-bold text-ink mb-1">{svc.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-500 hidden sm:block">{svc.short}</p>
                      </div>
                      <ChevronDown
                        size={24}
                        className={`text-emerald-500 flex-shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Body */}
                    <div className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-5 sm:px-7 pb-7 pt-2">
                        <div className="border-t border-slate-100 pt-6">
                          <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed sm:hidden">{svc.short}</p>
                          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                            {svc.sub.map(sub => {
                              const SubIcon = IconMap[sub.icon] || Sparkles;
                              return (
                                <Link
                                  key={sub.slug}
                                  to={`/services/${sub.slug}`}
                                  className="group bg-gradient-to-br from-mist to-white p-5 rounded-xl border border-slate-100 hover:border-emerald-500 hover:shadow-lg transition-all hover:-translate-y-1"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:bg-emerald-500 transition-colors">
                                    <SubIcon className="text-emerald-600 group-hover:text-white transition-colors" size={18} />
                                  </div>
                                  <h4 className="font-display font-bold text-ink text-sm sm:text-base mb-1 leading-tight group-hover:text-emerald-600 transition-colors">
                                    {sub.title}
                                  </h4>
                                  <p className="text-xs text-slate-500 mb-3 leading-snug">{sub.tagline}</p>
                                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 group-hover:gap-2 transition-all">
                                    Learn More <ArrowRight size={12} />
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ── */}
      <section className="py-16 lg:py-20 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="container-x relative">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-3 inline-block">
                Numbers That Matter
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                The Impact in <span className="text-emerald-400">Numbers</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="glass rounded-2xl p-5 sm:p-7 text-center h-full">
                  <div className="font-display font-bold text-4xl sm:text-5xl text-emerald-400 mb-2">{s.number}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 lg:py-24 bg-mist">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-12 lg:mb-16">
              <span className="label-tag">How It Works</span>
              <h2 className="heading-lg">
                Your Journey, <span className="text-emerald-600">Step by Step</span>
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-6" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-emerald-500 via-indigo-300 to-emerald-500" />

            {[
              { num: "01", title: "Consultation", desc: "We discuss your goals, challenges, and what you want to achieve." },
              { num: "02", title: "Customization", desc: "A tailored program is designed for your specific needs and pace." },
              { num: "03", title: "Training", desc: "Engaging sessions with real-world examples, exercises, and mentorship." },
              { num: "04", title: "Follow-up", desc: "Continued support and check-ins to ensure lasting transformation." }
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div className="relative text-center">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-emerald-500 flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg">
                    <span className="font-display font-bold text-2xl text-ink">{step.num}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed px-3">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-12 lg:mb-16">
              <span className="label-tag">What They Say</span>
              <h2 className="heading-lg">
                Voices of <span className="text-emerald-600">Success</span>
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-6" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.slice(0, 4).map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="bg-gradient-to-br from-mist to-white p-6 sm:p-8 rounded-3xl border border-slate-100 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ink to-indigo-700 flex items-center justify-center font-display font-bold text-white">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-ink">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-ink to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="container-x relative text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-5 inline-block">
            Take the Next Step
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Ready to Start Your <span className="text-emerald-400">Journey?</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join hundreds who've transformed their careers and lives through our programs. Your future starts with one decision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={onOpenModal} className="btn-primary group">
              Corporate Training Enquiry
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link to="/contact" className="btn-ghost">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
