import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-gold via-[#f3d46d] to-[#c99518] shadow-[0_10px_24px_rgba(212,167,60,0.28)]">
        <span className="absolute inset-[3px] rounded-[0.8rem] border border-brand-navy/18" />
        <span className="relative text-[0.7rem] font-black uppercase tracking-[0.34em] text-brand-navy">TVV</span>
      </span>
      <span className="block">
        <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">All India Admissions</span>
        <span className="block text-lg font-bold text-white sm:text-xl">Telangana Vidya Vedika</span>
      </span>
    </Link>
  );
}
