export default function ServiceCard({ title, description }) {
  return (
    <div className="group rounded-[1.75rem] border border-brand-navy/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-brand-gold/60">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cream text-brand-navy transition group-hover:bg-brand-gold group-hover:text-white">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M12 2 2 7l10 5 8-4v6h2V7L12 2Zm-7.5 9.4V15c0 3 4.1 5 7.5 5s7.5-2 7.5-5v-3.6L12 16l-7.5-4.6Z" />
        </svg>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-brand-navy">{title}</h3>
      <p className="mt-3 leading-7 text-brand-slate">{description}</p>
    </div>
  );
}
