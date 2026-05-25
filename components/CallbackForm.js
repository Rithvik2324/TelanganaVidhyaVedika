import { organization } from "../data/siteData";

export default function CallbackForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    const message = encodeURIComponent(
      `Hi, I want to request a free counseling callback.\n\nName: ${payload.name}\nPhone: ${payload.phone}\nBest time to call: ${payload.bestTime}`
    );
    window.location.href = `https://wa.me/91${organization.whatsapp}?text=${message}`;
  }

  return (
    <div className="rounded-3xl bg-brand-cream p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">Parent Support</p>
      <h2 className="mt-3 text-3xl font-bold text-brand-navy">Request Free Counseling Call</h2>
      <p className="mt-3 leading-7 text-brand-slate">
        Share a convenient time and a counselor will call to understand rank, branch, budget, hostel needs, and city preference.
      </p>
      <form className="mt-6 grid gap-4 md:grid-cols-3" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" required className="lead-input bg-white" />
        <input name="phone" type="tel" placeholder="Phone Number" required className="lead-input bg-white" />
        <input name="bestTime" type="text" placeholder="Best Time to Call" required className="lead-input bg-white" />
        <button
          type="submit"
          className="min-h-12 rounded-2xl bg-brand-navy px-6 py-3 text-base font-bold text-white transition hover:bg-brand-gold hover:text-brand-navy md:col-span-3 lg:col-span-1"
        >
          Request Callback
        </button>
        <a
          href={`tel:${organization.phone}`}
          className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-brand-navy/15 px-6 py-3 text-base font-bold text-brand-navy transition hover:border-brand-gold hover:text-brand-gold md:col-span-3 lg:col-span-2"
        >
          Call Now: {organization.phone}
        </a>
      </form>
    </div>
  );
}
