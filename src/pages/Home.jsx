import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Award, Users, Briefcase, Mic, Target, Sparkles, Building2, Quote, Star } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import Reveal from '../components/Reveal';
import SEO from '../seo/SEO';
import { SEO_ROUTES } from '../seo/seoConfig';
import { personSchema, localBusinessSchema, websiteSchema, organizationSchema } from '../seo/schemas';
import { STATS, COMPANIES, ROLES, TESTIMONIALS, INDUSTRY_LOGOS, COLLEGE_LOGOS, SITE } from '../data/site';

const IconMap = { Crown: Award, Brain: Sparkles, Briefcase, GraduationCap: Users, Laptop: Briefcase, Users, Heart: Sparkles, Mic, Rocket: Target };

export default function Home({ onOpenModal }) {
  const seo = SEO_ROUTES["/"];
  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        ogImage={seo.ogImage}
        ogType={seo.ogType}
        jsonLd={[
          websiteSchema(),
          personSchema(),
          organizationSchema(),
          localBusinessSchema()
        ]}
      />
      <HeroSlider onOpenModal={onOpenModal} />

      {/* ── STATS BAR ── */}
      <section className="relative -mt-16 z-30 container-x">
        <Reveal>
          <div className="bg-white rounded-2xl shadow-2xl shadow-ink/10 grid grid-cols-2 md:grid-cols-4 overflow-hidden border border-slate-100">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`p-5 sm:p-6 md:p-8 text-center ${i < STATS.length - 1 ? 'md:border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} ${i % 2 === 0 ? 'border-r md:border-r' : ''} border-slate-100`}
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-600 mb-1">
                  {s.number}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FOUNDER INTRO ── */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal direction="right" className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-6 dot-pattern opacity-30 -z-10" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ink/20 bg-gradient-to-br from-emerald-50 to-indigo-50 aspect-square">
  <img
    src="/images/founder.png"
    alt="Mr. Prashant Kadhao — Founder & CEO of PSK Technologies, Leadership & Business Coach in Nagpur"
    width="600"
    height="600"
    loading="eager"
    fetchpriority="high"
    decoding="async"
    className="w-full h-full object-cover object-center"
  />
</div>
                <div className="absolute -bottom-6 -right-4 bg-emerald-500 text-white px-5 py-4 rounded-2xl shadow-xl shadow-emerald-500/30">
                  <div className="font-display font-bold text-2xl sm:text-3xl leading-none">19+</div>
                  <div className="text-[10px] uppercase tracking-widest mt-1">Yrs Experience</div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={150} className="lg:col-span-7">
              <span className="label-tag">Founder & CEO</span>
              <h2 className="heading-lg mb-6">
                Meet <span className="text-emerald-600">Prashant Kadhao</span> —<br className="hidden sm:block" />
                Visionary Behind the Impact
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6" />
              <p className="text-slate-600 leading-relaxed mb-5">
                Greetings, Tech Enthusiasts! As the Founder & CEO of <strong className="text-ink">PSK Technologies Pvt. Ltd.</strong> and <strong className="text-ink">BigZoom Podcast Studio</strong>, I lead an innovative team committed to pushing technological frontiers. With a strong enthusiasm for innovation and a clear vision for turning ideas into reality, I bring 19+ years of expertise across IT, coaching, and entrepreneurship.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                MBA in Marketing, certified in Microsoft, Red Hat, and Cloud Technologies — I'm proud to be associated with 25+ engineering colleges across Maharashtra and beyond, bridging the gap between education and industry.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                {[
                  { icon: Building2, text: "Founder of 2 Companies" },
                  { icon: Award, text: "Certified Trainer" },
                  { icon: Users, text: "25+ College Tie-ups" },
                  { icon: Target, text: "Industry Pioneer" }
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 bg-slate-50 rounded-xl px-3 sm:px-4 py-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-emerald-600" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-ink">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary group">
                  Know My Story
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/gallery" className="btn-outline">
                  Gallery
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ROLES ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-mist relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="text-center mb-12 lg:mb-16">
              <span className="label-tag">Multi-Faceted Expertise</span>
              <h2 className="heading-lg max-w-3xl mx-auto">
                Eight Roles. <span className="text-emerald-600">One Mission.</span><br />
                Empowering People Everywhere.
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-6" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {ROLES.map((role, i) => {
              const Icon = IconMap[role.icon] || Sparkles;
              return (
                <Reveal key={role.title} delay={i * 60}>
                  <div className="group bg-white p-5 sm:p-7 rounded-2xl border border-slate-100 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-indigo-500/5 transition-all duration-500" />
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-ink to-indigo-700 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Icon className="text-emerald-400" size={22} />
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-2">{role.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{role.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OUR ECOSYSTEM (2 companies) ── */}
      <section className="py-20 lg:py-24 bg-ink text-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />

        <div className="container-x relative">
          <Reveal>
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-3 inline-block">
                Our Ecosystem
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Two Ventures. <span className="text-emerald-400">One Vision.</span>
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
  {COMPANIES.map((co, i) => (
    <Reveal key={co.name} delay={i * 100}>
      <div className="group glass rounded-2xl p-7 sm:p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 h-full">
        
        <a href={co.link} target="_blank" rel="noopener noreferrer"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-3 mb-6 group-hover:scale-105 transition-transform block">
          <img src={co.logo} alt={`${co.name} — official logo`} loading="lazy" decoding="async" className="w-full h-full object-contain" />
        </a>

        <a href={co.link} target="_blank" rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">{co.name}</h3>
        </a>

        <p className="text-white/60 text-sm leading-relaxed mb-5">{co.desc}</p>
        <div className="flex flex-wrap gap-2">
          {co.tags.map(t => (
            <span key={t} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  ))}
</div>
        </div>
      </section>

      {/* ── INDUSTRY CLIENTS MARQUEE ── */}
      <section className="py-16 lg:py-20 bg-white border-y border-slate-100">
        <div className="container-x mb-8 lg:mb-10 text-center">
          <span className="label-tag">Trusted By</span>
          <h2 className="heading-md">Working with Industry Leaders</h2>
          <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
            Companies & brands that have partnered with us across IT services, training & consulting.
          </p>
        </div>
        <div className="marquee overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="flex gap-8 sm:gap-12 animate-scroll-x w-max">
            {[...INDUSTRY_LOGOS, ...INDUSTRY_LOGOS].map((logo, i) => {
              const cleanName = logo.replace(/\.(webp|png|jpg|jpeg)$/i, '').replace(/[-_]/g, ' ');
              return (
                <div key={i} className="flex-shrink-0 w-28 h-16 sm:w-32 sm:h-20 bg-slate-50 rounded-xl flex items-center justify-center p-3 sm:p-4 grayscale hover:grayscale-0 transition-all">
                  <img
                    src={`/images/clientlogo/${logo}`}
                    alt={`${cleanName} — corporate client of Prashant Kadhao`}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COLLEGES ASSOCIATED MARQUEE ── */}
      <section className="py-16 lg:py-20 bg-mist">
        <div className="container-x mb-8 lg:mb-10 text-center">
          <span className="label-tag">Academic Partners</span>
          <h2 className="heading-md">Associated with Colleges & Institutes</h2>
          <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
            25+ engineering colleges across Maharashtra trust us with their students' industry readiness.
          </p>
        </div>
        <div className="marquee overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="flex gap-8 sm:gap-12 animate-scroll-x w-max" style={{ animationDirection: 'reverse' }}>
            {[...COLLEGE_LOGOS, ...COLLEGE_LOGOS].map((logo, i) => {
              const cleanName = logo.replace(/\.(webp|png|jpg|jpeg)$/i, '').replace(/[-_]/g, ' ');
              return (
                <div key={i} className="flex-shrink-0 w-28 h-16 sm:w-32 sm:h-20 bg-white rounded-xl flex items-center justify-center p-3 sm:p-4 grayscale hover:grayscale-0 transition-all shadow-sm">
                  <img
                    src={`/images/collegelogo/${logo}`}
                    alt={`${cleanName} — associated college with Prashant Kadhao training programs`}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-12 lg:mb-16">
              <span className="label-tag">Voices of Success</span>
              <h2 className="heading-lg">
                What People <span className="text-emerald-600">Say About Us</span>
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-6" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="bg-mist p-5 sm:p-7 rounded-2xl hover:shadow-2xl hover:shadow-ink/10 transition-all duration-500 hover:-translate-y-2 relative h-full">
                  <Quote className="absolute top-5 right-5 text-emerald-500/20" size={32} />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={13} className="fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-200">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-ink to-indigo-700 flex items-center justify-center font-display font-bold text-white text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-ink text-sm">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-ink via-indigo-900 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="container-x relative z-10 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} /> Ready to Transform?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight mb-6">
              Let's Build Something <span className="text-emerald-400">Extraordinary</span> Together
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you need IT solutions, leadership coaching, corporate training, or career mentoring — Prashant Kadhao is here to guide your journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary group">
                Get In Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button onClick={onOpenModal} className="btn-ghost">
                Corporate Training
                <ArrowUpRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
