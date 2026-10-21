import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import { SITE, NAV_LINKS } from '../data/site';

export default function Footer() {
  return (
    <footer className="bg-ink text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="container-x relative z-10 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 ">
              <img src="/images/pklogo.png" alt="Prashant Kadhao" className="h-14 w-auto object-contain  mb-2 ml-5" />
              <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold ">
                Coach · Consultant · Leader
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Mindset, Leadership & Business Coach. IT Consultant. Founder of PSK Technologies Pvt. Ltd. and BigZoom Podcast Studio. Mentor of JCI Nagpur Fortune.
            </p>
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

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold mb-5 text-lg">Navigate</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 text-sm hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-bold mb-5 text-lg">Services</h4>
            <ul className="space-y-3">
              {["Corporate Training", "Leadership Development", "Employability & Life Skills", "Train The Trainer", "Communication Skills", "Public Speaker"].map(s => (
                <li key={s}>
                  <span className="text-white/60 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold mb-5 text-lg">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">{SITE.address}</span>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-white/60 text-sm space-y-1">
                  {SITE.phones.map(p => (
                    <a key={p} href={`tel:${p.replace(/\s+/g,'')}`} className="block hover:text-emerald-400 transition-colors">{p}</a>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${SITE.email}`} className="text-white/60 text-sm hover:text-emerald-400 transition-colors break-all">{SITE.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Prashant Kadhao. Developed by <span className="text-emerald-400 font-semibold">PSK Technologies Pvt. Ltd.</span>
          </p>
          <p className="text-white/40 text-xs uppercase tracking-widest">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
