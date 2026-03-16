import Container from "./Container";
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
              All admissions, all seats, and colleges across India.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/80">{organization.tagline}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${organization.phone}`}
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-navy transition hover:-translate-y-0.5"
            >
              Call for Admission Guidance
            </a>
            <a
              href={`https://wa.me/91${organization.whatsapp}`}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
            >
              WhatsApp Now
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
          <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-brand-gold/20 blur-2xl" />
          <div className="absolute -right-4 bottom-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-soft backdrop-blur-sm">
            <div className="animate-float rounded-[1.6rem] bg-white p-6 text-brand-navy">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">Direct Parent Support</p>
              <h2 className="mt-4 text-3xl font-bold">Speak with Shyam Reddy for admission options across India.</h2>
              <p className="mt-4 leading-8 text-brand-slate">
                Get guidance on course selection, private college options, all seat types, management quota pathways, documentation, and next steps.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-brand-cream p-4">
                  <p className="text-sm font-semibold text-brand-navy">Office Location</p>
                  <p className="mt-2 text-sm text-brand-slate">Dilsukhnagar, Hyderabad, Telangana.</p>
                </div>
                <div className="rounded-2xl bg-brand-cream p-4">
                  <p className="text-sm font-semibold text-brand-navy">Phone Number</p>
                  <p className="mt-2 text-sm text-brand-slate">{organization.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
