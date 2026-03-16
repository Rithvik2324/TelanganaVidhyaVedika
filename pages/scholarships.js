import Layout from "../components/Layout";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import ScholarshipCard from "../components/ScholarshipCard";
import SectionHeading from "../components/SectionHeading";
import { admissionTracks } from "../data/siteData";

const supportPoints = [
  "Shortlisting colleges based on course, budget, and urgency",
  "Clarifying eligible management quota pathways in private colleges",
  "Document readiness for admission discussions and follow-up"
];

export default function ScholarshipsPage() {
  return (
    <Layout
      title="Admissions"
      description="Management quota and direct admission guidance across India for B.Tech, medical, management, and professional courses."
    >
      <PageHero
        eyebrow="Admissions"
        title="Direct admission and management quota guidance across India."
        description="Parents can get guidance on private college admissions, all seat routes, course options, and management quota pathways where applicable."
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Admission Guidance"
            title="What families can get help with"
            description="Support is available across course planning, seat route discussions, documentation, and next-step clarity."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {admissionTracks.map((program) => (
              <ScholarshipCard key={program.name} {...program} label="Admission Track" />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          {supportPoints.map((item) => (
            <div key={item} className="rounded-[1.75rem] bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">Key Support</p>
              <p className="mt-4 text-xl font-semibold leading-8 text-brand-navy">{item}</p>
            </div>
          ))}
        </Container>
      </section>
    </Layout>
  );
}
