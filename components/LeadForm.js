import { organization, whatsappMessages } from "../data/siteData";

const branches = ["CSE", "AI/ML", "Data Science", "ECE", "EEE", "Mechanical"];
const budgets = ["Below 3 Lakhs", "3-5 Lakhs", "5-8 Lakhs", "8 Lakhs+"];

export default function LeadForm({ compact = false, title, description }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const message = encodeURIComponent(
      `${whatsappMessages.predictor}\n\nName: ${payload.name}\nPhone: ${payload.phone}\nRank: ${payload.rank}\nBranch: ${payload.branch}\nBudget: ${payload.budget}`
    );
    window.location.href = `https://wa.me/91${organization.whatsapp}?text=${message}`;
  }

  return (
    <div className="rounded-3xl border border-brand-navy/10 bg-white p-5 shadow-soft sm:p-7">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">Free Rank Predictor</p>
        <h2 className={`${compact ? "text-2xl" : "text-3xl"} font-bold leading-tight text-brand-navy`}>
          {title || "Find the Best Engineering Colleges Based on Your Rank"}
        </h2>
        <p className="leading-7 text-brand-slate">
          {description ||
            "Get personalized college suggestions for CSE, AI/ML, ECE and more based on your EAMCET/JEE rank, budget and preferences."}
        </p>
      </div>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" required className="lead-input" />
        <input name="phone" type="tel" placeholder="Phone Number" required className="lead-input" />
        <input name="rank" type="number" placeholder="EAMCET/JEE Rank" required className="lead-input" />
        <select name="branch" required defaultValue="" className="lead-input">
          <option value="" disabled>
            Select Preferred Branch
          </option>
          {branches.map((branch) => (
            <option key={branch}>{branch}</option>
          ))}
        </select>
        <select name="budget" defaultValue="" className="lead-input">
          <option value="" disabled>
            Budget Range
          </option>
          {budgets.map((budget) => (
            <option key={budget}>{budget}</option>
          ))}
        </select>
        <button
          type="submit"
          className="min-h-12 rounded-2xl bg-brand-gold px-6 py-3 text-base font-bold text-brand-navy transition hover:-translate-y-0.5"
        >
          Get My College Options
        </button>
        <p className="text-sm leading-6 text-brand-slate">
          After submitting, WhatsApp opens with your details so you can talk directly with a counselor.
        </p>
      </form>
    </div>
  );
}
