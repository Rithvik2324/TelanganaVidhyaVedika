import Layout from "../components/Layout";
import Container from "../components/Container";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { contactDetails, organization } from "../data/siteData";

export default function ContactPage() {
  return (
    <Layout
      title="Contact"
      description="Contact Telangana Vidya Vedika in Dilsukhnagar, Hyderabad for B.Tech, medical, and management quota admission guidance."
    >
      <PageHero
        eyebrow="Contact"
        title="Call, WhatsApp, or visit the Dilsukhnagar office."
        description="This page is structured to make contacting Shyam Reddy the default next action."
      />

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr]">
          <div className="space-y-5">
            {contactDetails.map((item) => (
              <div key={item.label} className="rounded-[1.75rem] bg-brand-cream p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">{item.label}</p>
                <p className="mt-3 text-lg font-medium text-brand-navy">{item.value}</p>
              </div>
            ))}
            <div className="rounded-[1.75rem] border border-brand-navy/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">Office Visit</p>
              <p className="mt-3 text-lg font-medium text-brand-navy">{organization.address}</p>
              <p className="mt-3 leading-8 text-brand-slate">
                Parents can call before visiting so course requirements and preferred colleges can be discussed in advance.
              </p>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </Layout>
  );
}
