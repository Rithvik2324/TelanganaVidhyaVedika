import Layout from "../components/Layout";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/siteData";

const extraCourses = [
  {
    title: "MBA and Professional Programs",
    description: "Guidance for postgraduate and professional program admissions when parents need quick private-college options."
  },
  {
    title: "Nursing and Allied Health",
    description: "Help for B.Sc Nursing, physiotherapy, and allied health admissions across India."
  },
  {
    title: "Pharmacy and Pharm.D",
    description: "Support for pharmacy-related admissions, including private colleges and course comparison."
  },
  {
    title: "Course Selection Support",
    description: "Advice for families comparing engineering, medical, and healthcare career paths before admission."
  }
];

export default function ServicesPage() {
  return (
    <Layout
      title="Courses"
      description="Course categories supported by Telangana Vidya Vedika for admissions across India, including B.Tech, medical, pharmacy, nursing, and more."
    >
      <PageHero
        eyebrow="Courses"
        title="Course categories families usually search for before calling."
        description="Explore the main course categories covered for private college admissions and guidance across India."
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Popular Categories"
            title="Core admission categories"
            description="Course-specific guidance helps parents narrow down the right direction faster."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Additional Programs"
            title="More categories you can discuss during parent calls"
            description="Additional options are available for families exploring broader professional education choices."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {extraCourses.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}
