import { organization, whatsappMessages } from "../data/siteData";

export default function WhatsAppCTA() {
  const message = encodeURIComponent(whatsappMessages.quick);
  const href = `https://wa.me/91${organization.whatsapp}?text=${message}`;

  return (
    <>
      <a
        href={href}
        aria-label="Talk to counselor on WhatsApp"
        className="fixed bottom-24 right-4 z-50 hidden min-h-14 items-center justify-center rounded-full bg-[#16A34A] px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 sm:inline-flex"
      >
        WhatsApp Counselor
      </a>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-navy/10 bg-white/95 p-3 shadow-soft backdrop-blur sm:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a href={`tel:${organization.phone}`} className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-brand-navy px-4 py-3 text-sm font-bold text-white">
            Call Counselor
          </a>
          <a href={href} className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#16A34A] px-4 py-3 text-sm font-bold text-white">
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
