import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Archive", to: "/archive" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Space", to: "/space" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-outline-variant/20 bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-10 md:grid-cols-3 md:px-8">
        <div className="space-y-6">
          <div className="text-xl tracking-[0.18em] uppercase">BARE LINE</div>
          <p className="max-w-xs text-sm leading-7 text-on-surface-variant">
            구조적 미니멀리즘과 재료의 명료함, 그리고 현대적 형태가 지닌 고요한
            리듬을 따라가는 디지털 아카이브이자 저널. 본질을 드러내는 디자인과
            절제된 미감을 통해, 형태와 공간에 대한 새로운 시선을 제안한다.
          </p>
        </div>

        <div className="grid gap-8 text-sm">
          <div className="space-y-3">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-on-surface">
              Explore
            </span>
            <div className="grid gap-2 text-on-surface/70">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-on-surface">
              Social
            </span>
            <div className="grid gap-2 text-on-surface/70">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 text-sm text-on-surface/70 md:items-end md:text-right">
          <p className="max-w-[240px] text-xs uppercase leading-6 tracking-[0.18em] text-on-surface">
            The curated silence is not the absence of noise, but the presence of
            intent.
          </p>
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-outline">
              Volume No. 04 / 2024
            </p>
            <p className="mt-3">© 2024 BARE LINE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
