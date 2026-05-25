import CallbackForm from "./CallbackForm";
import Container from "./Container";
import Layout from "./Layout";
import LeadForm from "./LeadForm";
import LeadMagnet from "./LeadMagnet";
import SectionHeading from "./SectionHeading";
import TrustBuilders from "./TrustBuilders";
import { organization } from "../data/siteData";

export default function AdmissionLandingPage({ title, description, eyebrow, points, faqs, source }) {
  return (
    <Layout title={title} description={description}>
      <section className="bg-brand-navy bg-hero-glow py-14 text-white sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">{eyebrow}</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
            <p className="text-lg leading-8 text-white/80">{description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${organization.phone}`} className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-brand-gold px-6 py-3 font-bold text-brand-navy">
                Call Counselor
              </a>
              <a
                href={`https://wa.me/91${organization.whatsapp}?text=Hi%20I%20need%20engineering%20college%20guidance`}
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-bold text-white"
              >
                Talk to Counselor
              </a>
            </div>
          </div>
          <LeadForm compact source={source} />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Student Solution"
            title="What we help you decide"
            description="Every recommendation starts with rank, branch preference, budget, location, and parent priorities."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-sm">
                <p className="text-lg font-semibold leading-8 text-brand-navy">{point}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <SectionHeading eyebrow="Common Questions" title="Questions parents ask before taking admission" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-brand-navy">{item.q}</h2>
                <p className="mt-3 leading-7 text-brand-slate">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <LeadMagnet source={`${source}-pdf`} />

      <section className="py-16">
        <Container>
          <CallbackForm source={`${source}-callback`} />
        </Container>
      </section>

      <TrustBuilders />
    </Layout>
  );
}
