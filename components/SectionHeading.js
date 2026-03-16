export default function SectionHeading({ eyebrow, title, description, align = "left", theme = "dark" }) {
  const centered = align === "center";
  const isLight = theme === "light";

  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} space-y-4`}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">{eyebrow}</p>
      <h2 className={`text-3xl font-bold sm:text-4xl ${isLight ? "text-white" : "text-brand-navy"}`}>{title}</h2>
      {description ? (
        <p className={`text-lg leading-8 ${isLight ? "text-white/80" : "text-brand-slate"}`}>{description}</p>
      ) : null}
    </div>
  );
}
