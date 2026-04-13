import { useState } from 'react';
import { useSelector } from 'react-redux';
import Section from '../components/Section';
import {
  selectAboutPageContent,
  selectAboutSections,
} from '../store/selectors/contentSelectors';

export default function AboutPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const aboutSections = useSelector(selectAboutSections);
  const aboutPageContent = useSelector(selectAboutPageContent);

  return (
    <div className="space-y-16 px-6 py-12 md:px-8 md:py-16">
      <header className="max-w-4xl">
        <p className="text-[10px] uppercase tracking-[0.3em] text-outline">
          {aboutPageContent.intro.eyebrow}
        </p>
        <h1 className="mt-8 text-6xl font-semibold tracking-tight md:text-7xl">
          {aboutPageContent.intro.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
          {aboutPageContent.intro.description}
        </p>
      </header>

      <Section title={aboutPageContent.manifestoTitle} className="border-t border-outline-variant/20 pt-16">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div>
            <h2 className="text-xs uppercase tracking-[0.32em] text-outline">Manifesto</h2>
          </div>
          <div className="space-y-6">
            {aboutSections.map((item) => (
              <article key={item.label} className="group border-b border-outline-variant/20 pb-10 last:border-b-0">
                <h3 className={`text-3xl font-semibold md:text-5xl ${item.accent ? 'text-accent' : ''}`}>
                  {item.label}
                </h3>
                <p className="mt-4 max-w-xl text-sm uppercase leading-relaxed tracking-[0.24em] text-outline">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section title={aboutPageContent.vision.title} caption={aboutPageContent.vision.caption}>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6 lg:col-start-7">
            {aboutPageContent.vision.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-8 text-lg leading-relaxed text-on-surface-variant">
                {paragraph}
              </p>
            ))}

            {isExpanded ? null : (
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-3 border-b border-outline pb-1 text-xs uppercase tracking-[0.32em] transition-colors hover:border-accent"
              >
                {aboutPageContent.vision.cta}
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            )}
          </div>
        </div>
      </Section>

      {isExpanded ? (
        <Section title="About" className="border-t border-outline-variant/20 pt-20">
          <div className="space-y-28">
            <div>
              <div className="mb-14 flex flex-col gap-3 border-b border-outline-variant/20 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-outline">
                    {aboutPageContent.readMore.principles.caption}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                    {aboutPageContent.readMore.principles.title}
                  </h3>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {aboutPageContent.readMore.principles.items.map((item) => (
                  <article key={item.label} className="border-t border-outline-variant/20 pt-6">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-accent">{item.label}</p>
                    <h4 className="mt-4 text-2xl font-semibold">{item.title}</h4>
                    <p className="mt-4 text-base leading-relaxed text-on-surface-variant">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-14 flex flex-col gap-3 border-b border-outline-variant/20 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-outline">
                    {aboutPageContent.readMore.process.caption}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                    {aboutPageContent.readMore.process.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-12">
                {aboutPageContent.readMore.process.steps.map((step) => (
                  <article
                    key={step.year}
                    className="grid gap-5 border-b border-outline-variant/20 pb-12 md:grid-cols-[140px_1fr]"
                  >
                    <div className="text-sm uppercase tracking-[0.28em] text-accent">{step.year}</div>
                    <div>
                      <h4 className="text-2xl font-semibold">{step.title}</h4>
                      <p className="mt-3 max-w-3xl text-base leading-relaxed text-on-surface-variant">
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-14 flex flex-col gap-3 border-b border-outline-variant/20 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-outline">
                    {aboutPageContent.readMore.archivePerspective.caption}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                    {aboutPageContent.readMore.archivePerspective.title}
                  </h3>
                </div>
              </div>

              <div className="grid gap-10 border-b border-outline-variant/20 pb-14 md:grid-cols-3">
                {aboutPageContent.readMore.archivePerspective.stats.map((item) => (
                  <article key={item.label}>
                    <div className="text-5xl font-semibold leading-none text-accent md:text-6xl">{item.value}</div>
                    <h4 className="mt-4 text-lg font-semibold">{item.label}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{item.description}</p>
                  </article>
                ))}
              </div>

              <p className="mt-8 max-w-4xl text-lg leading-relaxed text-on-surface-variant">
                {aboutPageContent.readMore.archivePerspective.summary}
              </p>
            </div>
          </div>
        </Section>
      ) : null}
    </div>
  );
}
