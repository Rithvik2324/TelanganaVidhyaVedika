import Container from "./Container";
import LeadForm from "./LeadForm";
import { organization, stats } from "../data/siteData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy bg-hero-glow text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(212,167,60,0.16),transparent)]" />
      <Container className="relative grid gap-14 py-20 lg:grid-cols-[1.15fr,0.85fr] lg:items-center lg:py-24">
        <div className="space-y-8 opacity-0 [animation-delay:120ms] [animation-fill-mode:forwards] animate-fadeUp">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-gold">All India College Admissions</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Engineering admission guidance based on your rank, branch, and budget.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/80">
              Find realistic college options for CSE, AI/ML, ECE, Data Science, and direct B.Tech admission routes with parent-first counseling.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${organization.phone}`}
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-navy transition hover:-translate-y-0.5"
            >
              Call for Admission Guidance
            </a>
            <a
              href={`https://wa.me/91${organization.whatsapp}?text=Hi%20I%20need%20engineering%20college%20guidance`}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
            >
              Talk to Counselor
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-3xl font-bold text-brand-gold">{item.value}</p>
                <p className="mt-2 text-sm text-white/75">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative opacity-0 [animation-delay:280ms] [animation-fill-mode:forwards] animate-fadeUp">
          <LeadForm compact source="homepage-above-fold" />
        </div>
      </Container>
    </section>
  );
}
