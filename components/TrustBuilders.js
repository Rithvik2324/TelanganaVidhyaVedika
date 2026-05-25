import SectionHeading from "./SectionHeading";

const trustItems = [
  "6+ years of admission counseling experience",
  "Successful admissions across engineering and professional courses",
  "Parent-first counseling for branch, budget, hostel, and city fit",
  "Direct counselor support from inquiry to documentation",
  "College option comparison for CSE, AI/ML, ECE, and emerging branches",
  "Follow-up process for parent discussions and admission conversion"
];

const stories = [
  {
    name: "Parent from Dilsukhnagar",
    text: "The counselor explained realistic college options based on rank and budget before asking us to decide."
  },
  {
    name: "CSE Aspirant",
    text: "I got a clear shortlist for CSE and AI/ML colleges instead of random suggestions."
  },
  {
    name: "Parent Discussion",
    text: "The call helped us compare fees, location, and branch demand quickly."
  }
];

export default function TrustBuilders() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Parents Trust Us"
          title="Useful guidance first, admission steps after clarity."
          description="The platform is designed around the questions students and parents ask before choosing an engineering college."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <div key={item} className="rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm">
              <p className="font-semibold leading-7 text-brand-navy">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {stories.map((story) => (
            <div key={story.name} className="rounded-3xl bg-brand-cream p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Appreciation Message</p>
              <p className="mt-4 leading-7 text-brand-slate">"{story.text}"</p>
              <p className="mt-4 font-bold text-brand-navy">{story.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
