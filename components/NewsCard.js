export default function NewsCard({ title, date, excerpt }) {
  return (
    <article className="rounded-[1.75rem] border border-brand-navy/10 bg-white p-7 shadow-soft transition hover:-translate-y-1">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">{date}</p>
      <h3 className="mt-4 text-2xl font-bold text-brand-navy">{title}</h3>
      <p className="mt-4 leading-7 text-brand-slate">{excerpt}</p>
    </article>
  );
}
