import Layout from "../components/Layout";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import NewsCard from "../components/NewsCard";
import SectionHeading from "../components/SectionHeading";
import { faqItems, organization } from "../data/siteData";

export default function NewsPage() {
  return (
    <Layout
      title="FAQ"
      description="Frequently asked questions about all-India admissions, management quota guidance, and course support."
    >
      <PageHero
        eyebrow="FAQ"
        title="Common questions from parents looking for admissions help."
        description="Find direct answers to common questions about private college admissions and management quota guidance."
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Straight answers for admission-related inquiries"
            description="These answers help parents understand the process before speaking directly with the office."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {faqItems.map((item) => (
              <NewsCard key={item.title} {...item} />
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] bg-brand-navy p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">Need a direct answer?</p>
            <p className="mt-4 text-2xl font-bold">Call {organization.phone} and speak with {organization.director}.</p>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
