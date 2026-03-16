import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "./Container";
import Logo from "./Logo";
import { navigation } from "../data/siteData";

function NavLink({ href, label, active, mobile = false, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`transition ${
        mobile
          ? `block rounded-2xl px-4 py-3 ${active ? "bg-brand-gold text-brand-navy" : "text-brand-navy hover:bg-brand-navy/5"}`
          : `${active ? "text-brand-gold" : "text-white/90 hover:text-brand-gold"}`
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <NavLink key={item.href} {...item} active={router.pathname === item.href} />
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex items-center justify-center rounded-xl border border-white/15 p-3 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </Container>
      {open && (
        <div className="border-t border-brand-navy/10 bg-white lg:hidden">
          <Container className="py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  {...item}
                  mobile
                  active={router.pathname === item.href}
                  onClick={() => setOpen(false)}
                />
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
