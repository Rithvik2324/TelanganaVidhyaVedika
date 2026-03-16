import Layout from "../components/Layout";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { aboutSections, organization } from "../data/siteData";

export default function AboutPage() {
  return (
    <Layout
      title="About"
      description="About Telangana Vidya Vedika, an all-India admissions guidance platform led by Shyam Reddy."
    >
      <PageHero
        eyebrow="About"
        title="An admissions brand built for families across India."
        description="Telangana Vidya Vedika is an admissions guidance platform for engineering, medical, management, and professional course seekers across India."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-brand-cream p-8 lg:col-span-2">
              <SectionHeading
                eyebrow="Background"
                title="Focused on practical admissions support"
                description={aboutSections.history}
              />
            </div>
            <div className="rounded-[2rem] border border-brand-navy/10 bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">Advisor</p>
              <h2 className="mt-4 text-2xl font-bold text-brand-navy">{organization.director}</h2>
              <p className="mt-3 text-brand-slate">Admissions guidance and parent counseling</p>
              <a
                href={`tel:${organization.phone}`}
                className="mt-6 inline-flex rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-gold hover:text-brand-navy"
              >
                Call Now
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <SectionHeading eyebrow="Mission" title="Bring parents and seats closer with faster clarity" description={aboutSections.mission} />
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <SectionHeading eyebrow="Vision" title="Build a durable all-India admissions brand" description={aboutSections.vision} />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-[2rem] bg-brand-navy p-10 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">Message from {organization.director}</p>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-white/80">{aboutSections.directorMessage}</p>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
