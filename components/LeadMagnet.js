import { useState } from "react";
import { organization } from "../data/siteData";

export default function LeadMagnet() {
  const [unlocked, setUnlocked] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    const message = encodeURIComponent(
      `Hi, I want the Top Engineering Colleges by Rank 2026 PDF.\n\nName: ${payload.name}\nPhone: ${payload.phone}`
    );
    setUnlocked(true);
    window.open(`https://wa.me/91${organization.whatsapp}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr,1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">Free PDF Guide</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">Top Engineering Colleges by Rank 2026</h2>
          <p className="mt-4 leading-8 text-brand-slate">
            A quick parent-friendly guide covering rank ranges, high-demand branches, approximate fees, and counseling contact steps.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Under 10k, 25k, 50k and 75k rank options", "CSE, AI/ML, Data Science and Cyber Security", "Approximate fee range discussion points", "WhatsApp counseling CTA"].map((item) => (
              <p key={item} className="rounded-2xl bg-white p-4 text-sm font-semibold text-brand-navy shadow-sm">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-soft sm:p-8">
          {!unlocked ? (
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold text-brand-navy">Access the PDF</h3>
              <input name="name" type="text" placeholder="Your Name" required className="lead-input" />
              <input name="phone" type="tel" placeholder="Phone Number" required className="lead-input" />
              <button type="submit" className="min-h-12 rounded-2xl bg-brand-gold px-6 py-3 text-base font-bold text-brand-navy">
                Unlock PDF Guide
              </button>
            </form>
          ) : (
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-brand-navy">PDF Unlocked</h3>
              <p className="leading-7 text-brand-slate">Use this guide while discussing rank, branch, and budget with the counselor.</p>
              <a
                href="/api/rank-guide-pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-brand-navy px-6 py-3 text-base font-bold text-white transition hover:bg-brand-gold hover:text-brand-navy"
              >
                Open PDF Guide
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
