import { Link } from 'react-router-dom';
import { ArrowRight, Award, Brain, Briefcase, GraduationCap, Heart, Mic, Rocket, Crown, Target, Sparkles, Shield, Trophy, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SEO from '../seo/SEO';
import { SEO_ROUTES } from '../seo/seoConfig';
import { personSchema, organizationSchema } from '../seo/schemas';
import { ROLES, TIMELINE, VALUES, CERTIFICATES } from '../data/site';

const IconMap = { Crown, Brain, Briefcase, GraduationCap, Heart, Mic, Rocket, Target, Sparkles, Shield, Trophy, Users, Laptop: Briefcase };

export default function About({ onOpenModal }) {
  const seo = SEO_ROUTES["/about"];
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
          { name: "About", url: "/about" }
        ]}
        jsonLd={[personSchema(), organizationSchema()]}
      />
      <PageHeader
        eyebrow="Get to Know Me"
        title="About Prashant Kadhao"
        subtitle="A journey of 19+ years in IT, leadership, and human transformation — building futures, one mind at a time."
        breadcrumb="About"
      />

      {/* ── INTRO BLOCK — single image, clean ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal direction="right" className="lg:col-span-5">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Decorative frame elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-emerald-500 rounded-tl-3xl" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-emerald-500 rounded-br-3xl" />

                {/* Single clean image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ink/20 aspect-square">
  <img
    src="/images/Prashant sir.webp"
    alt="Mr. Prashant Kadhao — 19+ year journey as Leadership Coach, Founder of PSK Technologies"
    width="600"
    height="600"
    loading="eager"
    fetchpriority="high"
    decoding="async"
    className="w-full h-full object-cover object-center"
  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                  {/* Name plate at bottom */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="font-display font-bold text-xl">Mr. Prashant Kadhao</div>
                    <div className="text-xs uppercase tracking-widest text-emerald-400 mt-1">Founder · CEO · Mentor</div>
                  </div> */}
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={150} className="lg:col-span-7">
              <span className="label-tag">Meet</span>
              <h2 className="heading-lg mb-6">
                Mr. Prashant <span className="text-emerald-600">Kadhao</span>
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6" />
              <p className="text-slate-600 leading-relaxed mb-5">
                Mr. Prashant Kadhao is the Founder Director of <strong className="text-ink">PSK Technologies Pvt. Ltd.</strong>, an IT company providing innovative technology solutions. He is also the Founder of <strong className="text-ink">BigZoom Podcast Studio</strong> and Founder of <strong className="text-ink">JCI Nagpur Fortune</strong> (NGO), demonstrating strong leadership and entrepreneurial vision.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                He holds an <strong className="text-ink">MBA in Marketing Management</strong>, and is certified in Microsoft, Red Hat, and Cloud Technologies. With <strong className="text-emerald-600">19 years</strong> of experience in the IT industry — including 4 years with reputed organizations such as Secure Meter Pvt Ltd, HCL, Toshiba Service Centre, and Vishaka Industries — he brings deep technical and business expertise.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                For the past <strong className="text-emerald-600">15 years</strong>, he has been successfully running PSK Technologies and is actively associated with <strong className="text-ink">25+ engineering colleges</strong> across Nagpur, MP Balaghat, Akola, Dhule, Nanded, Balarsha, and Wardha — providing technical assistance and industry support to students and institutions.
              </p>

              {/* Inline stats — no badge tiles, just clean numbers */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 pt-6 border-t border-slate-100">
                {[
                  { num: "19+", label: "Years" },
                  { num: "25+", label: "Colleges" },
                  { num: "500+", label: "Projects" }
                ].map(s => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-3xl sm:text-4xl text-emerald-600 leading-none">{s.num}</div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 mt-2 font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-primary group">
                Connect With Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT I OFFER ── */}
      <section className="py-20 lg:py-24 bg-mist">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-12 lg:mb-16">
              <span className="label-tag">Multi-Faceted Expertise</span>
              <h2 className="heading-lg">
                What I <span className="text-emerald-600">Offer</span>
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-6" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {ROLES.map((role, i) => {
              const Icon = IconMap[role.icon] || Sparkles;
              return (
                <Reveal key={role.title} delay={i * 60}>
                  <div className="group bg-white p-5 sm:p-7 rounded-2xl border border-slate-100 hover:border-emerald-500/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-ink to-indigo-700 flex items-center justify-center mb-4 sm:mb-5 group-hover:rotate-6 transition-transform">
                      <Icon className="text-emerald-400" size={22} />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-2">{role.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{role.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TIMELINE — HORIZONTAL COMPACT WITH SCROLL ANIMATIONS ── */}
      <section className="py-20 lg:py-24 bg-white overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-12 lg:mb-16">
              <span className="label-tag">Journey & Milestones</span>
              <h2 className="heading-lg">
                A Legacy of <span className="text-emerald-600">Excellence</span>
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-6" />
            </div>
          </Reveal>

          {/* Desktop: horizontal compact timeline */}
          <div className="hidden md:block relative max-w-6xl mx-auto p-12">
            {/* Center horizontal line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-5 gap-4 relative">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 120}>
                  <div className={`relative ${i % 2 === 0 ? '-translate-y-4' : 'translate-y-32'}`}>
                    {/* Connector line */}
                    <div className={`absolute left-1/2 w-px bg-emerald-500/40 ${i % 2 === 0 ? 'top-full h-12' : 'bottom-full h-12'}`} />
                    {/* Dot on line */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-lg shadow-emerald-500/40 ${i % 2 === 0 ? 'top-[calc(100%+44px)]' : 'bottom-[calc(100%+44px)]'}`} />

                    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 hover:border-emerald-500/40">
                      <div className="font-display font-bold text-2xl text-emerald-600 mb-1 leading-none">{t.year}</div>
                      <h3 className="font-display text-sm font-bold text-ink mb-2 mt-2">{t.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile: simple vertical compact */}
          <div className="md:hidden relative max-w-md mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-500/40" />
            <div className="space-y-6">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 80}>
                  <div className="relative pl-12">
                    <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-lg -translate-x-1/2" />
                    <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                      <div className="font-display font-bold text-xl text-emerald-600 leading-none">{t.year}</div>
                      <h3 className="font-display text-sm font-bold text-ink mb-1 mt-2">{t.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-ink to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="container-x relative">
          <Reveal>
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-3 inline-block">
                Core Values
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                The Pillars of My <span className="text-emerald-400">Philosophy</span>
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-6" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {VALUES.map((v, i) => {
              const Icon = IconMap[v.icon] || Sparkles;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="glass rounded-2xl p-5 sm:p-7 hover:bg-white/10 transition-all hover:-translate-y-1 h-full">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                      <Icon className="text-emerald-400" size={22} />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES STRIP ── */}
      <section className="py-20 lg:py-24 bg-mist">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-10 lg:mb-12">
              <span className="label-tag">Certifications & Credentials</span>
              <h2 className="heading-lg">
                Recognized <span className="text-emerald-600">Excellence</span>
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-6" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {CERTIFICATES.slice(0, 8).map((c, i) => (
  <Reveal key={i} delay={i * 50}>
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group aspect-[4/3]">
      <img
        src={`/images/certificates/${c.src}`}
        alt={`${c.name || 'Certificate'} — Prashant Kadhao professional certification`}
        loading="lazy"
        decoding="async"
        width="400"
        height="300"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  </Reveal>
))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-outline">
              View All Certificates
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-20 bg-emerald-500 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="container-x relative z-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Ready to Unlock Your Full Potential?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you're a student, professional, entrepreneur, or organization — coaching programs are designed to help you achieve more.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={onOpenModal} className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-white font-bold rounded-full hover:bg-indigo-900 transition-all hover:-translate-y-0.5 shadow-xl">
              Book Consultation <ArrowRight size={18} />
            </button>
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-ink font-bold rounded-full hover:bg-mist transition-all hover:-translate-y-0.5 shadow-xl">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
