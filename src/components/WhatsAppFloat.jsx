import { MessageCircle } from 'lucide-react';
import { SITE } from '../data/site';

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=Hi%20Prashant%20Kadhao`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse-ring opacity-50" />
      <span className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white shadow-2xl shadow-emerald-500/40 transition-all group-hover:scale-110">
        <MessageCircle size={26} fill="currentColor" />
      </span>
    </a>
  );
}
