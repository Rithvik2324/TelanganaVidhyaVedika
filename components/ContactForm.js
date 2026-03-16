import { organization } from "../data/siteData";

export default function ContactForm() {
  return (
    <form className="rounded-[2rem] border border-brand-navy/10 bg-white p-8 shadow-soft">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-brand-navy">Full Name</span>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-2xl border border-brand-navy/10 px-4 py-3 outline-none transition focus:border-brand-gold"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-brand-navy">Phone Number</span>
          <input
            type="tel"
            placeholder="Enter your phone"
            className="w-full rounded-2xl border border-brand-navy/10 px-4 py-3 outline-none transition focus:border-brand-gold"
          />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-brand-navy">Course Interested In</span>
        <input
          type="text"
          placeholder="B.Tech, MBBS, BDS, Pharmacy, Nursing..."
          className="w-full rounded-2xl border border-brand-navy/10 px-4 py-3 outline-none transition focus:border-brand-gold"
        />
      </label>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-brand-navy">Message</span>
        <textarea
          rows="5"
          placeholder="Mention preferred course, budget, college area, and admission timeline"
          className="w-full rounded-2xl border border-brand-navy/10 px-4 py-3 outline-none transition focus:border-brand-gold"
        />
      </label>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={`tel:${organization.phone}`}
          className="inline-flex items-center justify-center rounded-full bg-brand-navy px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-gold hover:text-brand-navy"
        >
          Call {organization.phone}
        </a>
        <a
          href={`https://wa.me/91${organization.whatsapp}`}
          className="inline-flex items-center justify-center rounded-full border border-brand-navy/15 px-7 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-gold hover:text-brand-gold"
        >
          WhatsApp Inquiry
        </a>
      </div>
    </form>
  );
}
