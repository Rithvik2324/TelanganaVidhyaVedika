export default function ScholarshipCard({ name, audience, detail, label = "Admission Track" }) {
  return (
    <article className="rounded-[1.75rem] border border-brand-navy/10 bg-brand-cream/55 p-7 transition hover:border-brand-gold/70 hover:bg-white">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">{label}</p>
      <h3 className="mt-4 text-2xl font-bold text-brand-navy">{name}</h3>
      <p className="mt-3 font-medium text-brand-navy/80">{audience}</p>
      <p className="mt-4 leading-7 text-brand-slate">{detail}</p>
    </article>
  );
}


