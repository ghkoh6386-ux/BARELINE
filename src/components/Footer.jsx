import { useSelector } from "react-redux";
import { selectFooterContent } from "../store/selectors/contentSelectors";

export default function Footer() {
  const footerContent = useSelector(selectFooterContent);

  return (
    <footer className="mt-20 border-t border-outline-variant/20 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-12">
        <div className="grid gap-0 border-y border-outline-variant/20 md:grid-cols-3 md:border-y-0">
          <div className="space-y-6 border-b border-outline-variant/20 py-8 md:border-b-0 md:py-0">
            <div className="text-2xl font-medium tracking-[0.12em] uppercase">
              {footerContent.brand}
            </div>
            <p className="max-w-sm text-base leading-7 text-on-surface-variant">
              {footerContent.description}
            </p>
          </div>

          <div className="space-y-6 border-b border-outline-variant/20 py-8 md:border-b-0 md:px-8 md:py-0">
            <div>
              <span className="block text-xl uppercase tracking-[0.18em]">
                Focus
              </span>
              <h3 className="mt-4 max-w-xs whitespace-pre-line text-lg font-light leading-[1.45] text-on-surface">
                {footerContent.focusTitle}
              </h3>
              <div className="mt-5 space-y-2 text-base text-on-surface-variant">
                {footerContent.focusItems.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="block text-xl uppercase tracking-[0.18em]">
                {footerContent.socialLabel}
              </span>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-on-surface/70">
                {footerContent.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                  >
                    {link.label}
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_outward
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 py-8 md:items-end md:py-0 md:text-left">
            <p className="max-w-[280px] text-base uppercase leading-6 tracking-[0.18em] text-on-surface">
              {footerContent.quote}
            </p>
            <div className="border-t border-outline-variant/20 pt-5 md:border-t-0 md:pt-0">
              <p className="text-base uppercase tracking-[0.24em] text-outline">
                {footerContent.meta.volume}
              </p>
              <p className="mt-3 text-base text-on-surface/70">
                {footerContent.meta.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
