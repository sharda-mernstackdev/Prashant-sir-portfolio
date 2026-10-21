import { useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { SITE } from '../data/site';

export default function TrainingModal({ open, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get('name')?.trim();
    const phone = fd.get('phone')?.trim();
    const email = fd.get('email')?.trim();
    const desig = fd.get('desig')?.trim() || 'Not specified';
    const msg = fd.get('msg')?.trim();

    if (!name || !phone || !email || !msg) {
      alert('Please fill in all required fields.');
      return;
    }

    const waText =
      `*Corporate Training Enquiry — PrashantKadhao.com*\n\n` +
      `*Name:* ${name}\n` +
      `*Mobile:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Designation:* ${desig}\n` +
      `*Message:* ${msg}`;
    const waURL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(waText)}`;
    e.target.reset();
    onClose();
    window.open(waURL, '_blank');
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-md" />

      {/* Modal box */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-ink to-indigo-700 p-7 rounded-t-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-emerald-500/20 blur-2xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-3">
            Let's Work Together
          </span>
          <h3 className="font-display text-3xl font-bold text-white mb-2">Corporate Training</h3>
          <p className="text-white/70 text-sm">
            Tell us about your organization & training needs. We'll craft a tailored program.
          </p>
        </div>

        {/* Form */}
        <form className="p-7 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-ink"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                Mobile *
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-ink"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-ink"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
              Designation
            </label>
            <input
              type="text"
              name="desig"
              placeholder="e.g. HR Manager, Director"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-ink"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
              Training Requirements *
            </label>
            <textarea
              name="msg"
              required
              rows="4"
              placeholder="Describe your training needs, team size, preferred dates..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-ink resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Send via WhatsApp
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
