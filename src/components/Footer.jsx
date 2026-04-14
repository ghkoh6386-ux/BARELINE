import { useSelector } from 'react-redux';
import { selectFooterContent } from '../store/selectors/contentSelectors';

export default function Footer() {
  const footerContent = useSelector(selectFooterContent);

  return (
    <footer className="mt-20 border-t border-outline-variant/20 bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-10 md:grid-cols-3 md:px-8">
        <div className="space-y-6">
          <div className="text-xl tracking-[0.18em] uppercase">{footerContent.brand}</div>
          <p className="max-w-xs text-base leading-7 text-on-surface-variant">
            {footerContent.description}
          </p>
        </div>

        <div className="space-y-4 text-base">
          <div className="flex min-h-[168px] flex-col justify-between py-1">
            <div>
              <h3 className="max-w-xs whitespace-pre-line text-xl font-medium leading-[1.45] text-on-surface">
                {footerContent.focusTitle}
              </h3>
              <div className="mt-5 space-y-2 text-base text-on-surface-variant">
                {footerContent.focusItems.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <span className="block text-base font-semibold uppercase tracking-[0.24em] text-on-surface">
              {footerContent.socialLabel}
            </span>
            <div className="flex flex-wrap gap-4 text-on-surface/70">
              {footerContent.socialLinks.map((link) => (
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

        <div className="flex flex-col justify-between gap-8 text-base text-on-surface/70 md:items-end md:text-left">
          <p className="max-w-[240px] text-base uppercase leading-6 tracking-[0.18em] text-on-surface">
            {footerContent.quote}
          </p>
          <div>
            <p className="text-base uppercase tracking-[0.24em] text-outline">
              {footerContent.meta.volume}
            </p>
            <p className="mt-3">{footerContent.meta.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
