import Layout from "../components/Layout";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { collegeCategories, organization } from "../data/siteData";

export default function GalleryPage() {
  return (
    <Layout
      title="Colleges"
      description="College categories and admission support areas covered by Telangana Vidya Vedika across India."
    >
      <PageHero
        eyebrow="Colleges"
        title="College categories parents ask about most often."
        description="Review the broad college categories families commonly explore when planning admissions across India."
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="College Categories"
            title="Types of colleges we discuss with parents"
            description="The focus is on practical college categories and admission relevance, without relying on photos or event-based sections."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {collegeCategories.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-brand-navy/10 bg-white p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-4 leading-8 text-brand-slate">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] bg-brand-cream p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">Need faster guidance?</p>
            <p className="mt-4 text-2xl font-bold text-brand-navy">
              Call {organization.director} at {organization.phone} for current admission discussions.
            </p>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
