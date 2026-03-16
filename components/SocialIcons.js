const icons = [
  {
    label: "Facebook",
    href: "#",
    path: "M14 8h3V3.2A38.9 38.9 0 0 0 12.6 3C8.2 3 5 5.7 5 10.7V14H1v5h4v12h5V19h4.2l.8-5H10v-2.8c0-1.5.4-3.2 3-3.2Z"
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1Zm6.1-8.1a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM21 8.1a7.7 7.7 0 0 0-.2-2.7 5.5 5.5 0 0 0-3.2-3.2A7.7 7.7 0 0 0 15 2H9a7.7 7.7 0 0 0-2.7.2 5.5 5.5 0 0 0-3.2 3.2A7.7 7.7 0 0 0 3 8.1V15.9a7.7 7.7 0 0 0 .2 2.7 5.5 5.5 0 0 0 3.2 3.2A7.7 7.7 0 0 0 9 22h6a7.7 7.7 0 0 0 2.7-.2 5.5 5.5 0 0 0 3.2-3.2 7.7 7.7 0 0 0 .2-2.7Zm-1.9 7.7a5.9 5.9 0 0 1-.1 2 3.7 3.7 0 0 1-2.1 2.1 5.9 5.9 0 0 1-2 .1H9a5.9 5.9 0 0 1-2-.1 3.7 3.7 0 0 1-2.1-2.1 5.9 5.9 0 0 1-.1-2V8.2a5.9 5.9 0 0 1 .1-2A3.7 3.7 0 0 1 7 4.1 5.9 5.9 0 0 1 9 4h6a5.9 5.9 0 0 1 2 .1 3.7 3.7 0 0 1 2.1 2.1 5.9 5.9 0 0 1 .1 2Z"
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31.8 31.8 0 0 0 2 12a31.8 31.8 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 22 12a31.8 31.8 0 0 0-.4-4.8ZM9.8 15.4V8.6L15.7 12Z"
  }
];

export default function SocialIcons({ dark = false }) {
  return (
    <div className="flex items-center gap-3">
      {icons.map((icon) => (
        <a
          key={icon.label}
          href={icon.href}
          aria-label={icon.label}
          className={`rounded-full p-2 transition hover:-translate-y-0.5 ${
            dark ? "bg-brand-navy text-white hover:bg-brand-gold" : "bg-white/10 text-white hover:bg-brand-gold"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d={icon.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
