import Container from "./Container";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy bg-hero-glow py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_35%,transparent_60%,rgba(212,167,60,0.12))]" />
      <Container className="relative">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-gold">{eyebrow}</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="text-lg leading-8 text-white/80">{description}</p>
        </div>
      </Container>
    </section>
  );
}
