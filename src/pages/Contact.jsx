import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Facebook, Instagram, Linkedin, Youtube, Clock, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../seo/SEO';
import { SEO_ROUTES } from '../seo/seoConfig';
import { localBusinessSchema, personSchema } from '../seo/schemas';
import { SITE } from '../data/site';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const seo = SEO_ROUTES["/contact"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get('name')?.trim();
    const email = fd.get('email')?.trim();
    const phone = fd.get('phone')?.trim();
    const subject = fd.get('subject')?.trim() || 'General Enquiry';
    const message = fd.get('message')?.trim();

    if (!name || !email || !phone || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    const waText =
      `*Contact Enquiry — PrashantKadhao.com*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone}\n` +
      `*Subject:* ${subject}\n` +
      `*Message:* ${message}`;
    const waURL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(waText)}`;
    setTimeout(() => {
      e.target.reset();
      setSubmitting(false);
      window.open(waURL, '_blank');
    }, 500);
  };

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
          { name: "Contact", url: "/contact" }
        ]}
        jsonLd={[personSchema(), localBusinessSchema()]}
      />
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Start a Conversation"
        subtitle="Book a keynote, corporate training, or 1-on-1 coaching session with Prashant Kadhao. We respond within 24 hours."
        breadcrumb="Contact"
      />

      {/* Quick Contact Cards */}
      <section className="py-12 sm:py-16 bg-white relative sm:-mt-12 sm:z-10">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                icon: Phone,
                title: "Call Us",
                lines: SITE.phones,
                action: `tel:${SITE.phones[0].replace(/\s/g, '')}`,
                cta: "Make a Call"
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: [SITE.email],
                action: `mailto:${SITE.email}`,
                cta: "Send Email"
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                lines: ["Chat with us instantly", "Quick replies guaranteed"],
                action: `https://wa.me/${SITE.whatsapp}`,
                cta: "Chat Now"
              }
            ].map(card => (
              <a
                key={card.title}
                href={card.action}
                target={card.action.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group bg-white p-7 rounded-3xl border border-slate-100 hover:border-emerald-500/30 hover:shadow-2xl shadow-sm transition-all hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ink to-indigo-700 flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
                  <card.icon className="text-emerald-400" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">{card.title}</h3>
                <div className="space-y-1 mb-5">
                  {card.lines.map(l => (
                    <div key={l} className="text-sm text-slate-500">{l}</div>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  {card.cta} <ArrowRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-mist">
        <div className="container-x">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left - Info card */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-ink to-indigo-900 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden h-full">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/30 rounded-full blur-3xl" />

                <div className="relative">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-3 inline-block">
                    Contact Information
                  </span>
                  <h3 className="font-display text-3xl font-bold mb-3">
                    Let's <span className="text-emerald-400">Connect</span>
                  </h3>
                  <p className="text-white/60 text-sm mb-10 leading-relaxed">
                    Reach out through any channel — we're committed to responding within 24 hours.
                  </p>

                  <div className="space-y-6 mb-10">
                    <div className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-emerald-400" size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold mb-1">Office</div>
                        <p className="text-sm text-white/80 leading-relaxed">{SITE.address}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-emerald-400" size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold mb-1">Phone</div>
                        {SITE.phones.map(p => (
                          <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block text-sm text-white/80 hover:text-emerald-400 transition-colors">{p}</a>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-emerald-400" size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold mb-1">Email</div>
                        <a href={`mailto:${SITE.email}`} className="text-sm text-white/80 hover:text-emerald-400 transition-colors break-all">{SITE.email}</a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="text-emerald-400" size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold mb-1">Hours</div>
                        <p className="text-sm text-white/80">Mon - Sat: 10:00 AM - 7:00 PM</p>
                        <p className="text-sm text-white/60">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  {/* Socials */}
                  <div className="pt-8 border-t border-white/10">
                    <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold mb-3">Follow Us</div>
                    <div className="flex gap-3">
                      {[
                        { Icon: Facebook, href: SITE.social.facebook },
                        { Icon: Instagram, href: SITE.social.instagram },
                        { Icon: Linkedin, href: SITE.social.linkedin },
                        { Icon: Youtube, href: SITE.social.youtube }
                      ].map(({ Icon, href }, i) => (
                        <a
                          key={i}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all"
                        >
                          <Icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100">
                <span className="label-tag">Send a Message</span>
                <h3 className="heading-md mb-2">Fill the Form Below</h3>
                <p className="text-slate-500 mb-8">We'll respond to you via WhatsApp.</p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-ink"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                        Phone *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-ink"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-ink"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-ink"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-ink resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-500/30 disabled:opacity-50"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="label-tag">Visit Us</span>
            <h2 className="heading-lg">
              Find Us in <span className="text-emerald-600">Nagpur</span>
            </h2>
            <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-6" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-ink/10 h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d79.0876!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzQ0LjkiTiA3OcKwMDUnMTUuNCJF!5e0!3m2!1sen!2sin!4v1640000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PSK Technologies Office Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
