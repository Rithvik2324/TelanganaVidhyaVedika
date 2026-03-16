import Layout from "../components/Layout";
import Container from "../components/Container";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ScholarshipCard from "../components/ScholarshipCard";
import ContactForm from "../components/ContactForm";
import { admissionTracks, contactDetails, organization, processSteps, services } from "../data/siteData";

export default function HomePage() {
  return (
    <Layout
      description="Telangana Vidya Vedika offers all admissions, all seats, and college guidance across India for B.Tech, medical, pharmacy, nursing, management, and more. Call Shyam Reddy at 9347642633."
    >
      <Hero />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="About"
            title="Trusted admission guidance for families planning higher education across India."
            description="Telangana Vidya Vedika helps parents and students explore practical admission options for engineering, medical, management, and professional courses nationwide."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-[2rem] bg-brand-cream p-8">
              <p className="text-lg leading-8 text-brand-slate">{organization.description}</p>
            </div>
            <div className="rounded-[2rem] border border-brand-navy/10 bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">Direct Contact</p>
              <h3 className="mt-4 text-2xl font-bold text-brand-navy">Speak with {organization.director}</h3>
              <p className="mt-4 leading-8 text-brand-slate">
                Parents can call directly to discuss course preference, budget range, college options anywhere in India, and eligible admission routes.
              </p>
              <a
                href={`tel:${organization.phone}`}
                className="mt-6 inline-flex rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-gold hover:text-brand-navy"
              >
                Call {organization.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Courses"
            title="Admission support for in-demand courses"
            description="Get guidance for the course categories parents most often ask about when planning private college admissions."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Admission Tracks"
            title="Direct admission guidance and management quota support"
            description="Clear guidance on course selection, private college options, documentation, and admission follow-up."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {admissionTracks.map((track) => (
              <ScholarshipCard key={track.name} {...track} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="A simple parent-first admission process"
            description="Start with a call, review suitable options, visit the office if needed, and proceed with admission support."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-[1.75rem] bg-white p-7 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">Step {index + 1}</p>
                <p className="mt-4 text-lg font-semibold leading-8 text-brand-navy">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-navy py-20 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Call or visit the office for direct admission guidance."
                description="Parents can connect directly with Shyam Reddy for course options, all seat routes, and next steps across India."
                theme="light"
              />
              <div className="mt-8 space-y-5">
                {contactDetails.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-brand-gold">{item.label}</p>
                    <p className="mt-2 text-lg text-white/85">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </Layout>
  );
}
