import Link from "next/link";
import Container from "./Container";
import { navigation, organization } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr,0.9fr,1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">{organization.name}</p>
            <h3 className="text-2xl font-bold">Admissions guidance for students seeking the right college seat anywhere in India.</h3>
            <p className="max-w-xl text-white/75">{organization.description}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${organization.phone}`}
                className="inline-flex rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-white"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/91${organization.whatsapp}`}
                className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-lg font-semibold">Quick Links</p>
            <div className="grid gap-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-white/75 transition hover:text-brand-gold">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-lg font-semibold">Contact</p>
            <p className="text-white/75">{organization.address}</p>
            <a href={`tel:${organization.phone}`} className="block text-white/75 transition hover:text-brand-gold">
              {organization.phone}
            </a>
            <a
              href={`https://wa.me/91${organization.whatsapp}`}
              className="block text-white/75 transition hover:text-brand-gold"
            >
              WhatsApp: +91 {organization.whatsapp}
            </a>
            <a href={`mailto:${organization.email}`} className="block text-white/75 transition hover:text-brand-gold">
              {organization.email}
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>&copy; 2026 Telangana Vidya Samithi. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
