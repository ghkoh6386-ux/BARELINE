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
  const highlightedPrinciple = aboutPageContent.readMore.principles.items[0];

  return (
    <div className="space-y-24 px-6 py-12 md:px-8 md:py-16">
      <header className="relative overflow-hidden border border-outline-variant/20 bg-surface-container-low px-6 py-12 md:px-10 md:py-16">
        <div className="absolute inset-y-0 right-0 hidden w-[38%] bg-[linear-gradient(180deg,rgba(191,154,102,0.12),rgba(191,154,102,0.02))] lg:block" />
        <div className="absolute right-10 top-10 hidden h-32 w-32 rounded-full border border-outline-variant/10 lg:block" />
        <div className="relative grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-base uppercase tracking-[0.22em] text-outline">
              {aboutPageContent.intro.eyebrow}
            </p>
            <h1 className="mt-8 text-6xl font-semibold tracking-tight md:text-7xl">
              {aboutPageContent.intro.title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-on-surface-variant">
              {aboutPageContent.intro.description}
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border border-outline-variant/20 bg-background/72 p-6 md:p-7 backdrop-blur-sm">
              <p className="text-base uppercase tracking-[0.2em] text-accent">Editorial Focus</p>
              <p className="mt-4 max-w-sm text-[1.65rem] font-semibold leading-tight text-on-surface">
                Quiet structure, material honesty, and the tension that remains after reduction.
              </p>
              <div className="mt-8 space-y-3 border-t border-outline-variant/20 pt-5 text-base uppercase tracking-[0.18em] text-outline/80">
                <p>Archive direction / Contemporary form language</p>
                <p>Volume 04 / 2026</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section title={aboutPageContent.manifestoTitle} className="border-t border-outline-variant/20 pt-16">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <div>
            <h2 className="text-base uppercase tracking-[0.22em] text-outline">Manifesto</h2>
          </div>
          <div className="space-y-5 lg:ml-16">
            {aboutSections.map((item, index) => (
              <article
                key={item.label}
                className="group relative overflow-hidden border border-outline-variant/20 bg-surface-container-low px-6 py-7 transition-all duration-300 hover:bg-surface md:px-8 md:py-8"
              >
                <div className="mb-5 flex items-center justify-between border-b border-outline-variant/15 pb-4 text-base uppercase tracking-[0.18em] text-outline">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>Principle</span>
                </div>
                <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  {item.label}
                </h3>
                <p className="mt-5 max-w-xl text-base uppercase leading-7 tracking-[0.18em] text-outline">
                  {item.description}
                </p>
                <div className="mt-7 h-px w-14 bg-accent/35 transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section title={aboutPageContent.vision.title} caption={aboutPageContent.vision.caption}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="border border-outline-variant/20 bg-surface-container-low p-6 md:p-8 lg:col-span-4">
            <p className="text-base uppercase tracking-[0.22em] text-accent">Current Lens</p>
            <p className="mt-5 text-[2rem] font-semibold leading-tight md:text-[2.3rem]">
              We edit for what remains memorable after the image quiets down.
            </p>
            <div className="mt-8 border-t border-outline-variant/20 pt-6">
              <p className="text-base leading-7 text-on-surface-variant">
                {highlightedPrinciple.description}
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            {aboutPageContent.vision.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                {paragraph}
              </p>
            ))}

            {isExpanded ? null : (
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-3 border-b border-outline pb-1 text-base uppercase tracking-[0.22em] transition-colors hover:border-accent hover:text-accent"
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
          <div className="space-y-24">
            <div>
              <div className="mb-14 flex flex-col gap-3 border-b border-outline-variant/20 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-base uppercase tracking-[0.2em] text-outline">
                    {aboutPageContent.readMore.principles.caption}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                    {aboutPageContent.readMore.principles.title}
                  </h3>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {aboutPageContent.readMore.principles.items.map((item) => (
                  <article
                    key={item.label}
                    className="border border-outline-variant/20 bg-surface-container-low p-6 transition-colors hover:bg-surface md:p-7"
                  >
                    <p className="text-base uppercase tracking-[0.2em] text-accent">{item.label}</p>
                    <h4 className="mt-4 text-2xl font-semibold">{item.title}</h4>
                    <p className="mt-4 text-base leading-7 text-on-surface-variant">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-14 flex flex-col gap-3 border-b border-outline-variant/20 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-base uppercase tracking-[0.2em] text-outline">
                    {aboutPageContent.readMore.process.caption}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                    {aboutPageContent.readMore.process.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-5">
                {aboutPageContent.readMore.process.steps.map((step) => (
                  <article
                    key={step.year}
                    className="grid gap-5 border border-outline-variant/20 bg-surface-container-low p-6 md:grid-cols-[140px_1fr] md:p-7"
                  >
                    <div className="text-base uppercase tracking-[0.2em] text-accent">{step.year}</div>
                    <div>
                      <h4 className="text-2xl font-semibold">{step.title}</h4>
                      <p className="mt-3 max-w-3xl text-base leading-7 text-on-surface-variant">
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
                  <p className="text-base uppercase tracking-[0.2em] text-outline">
                    {aboutPageContent.readMore.archivePerspective.caption}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                    {aboutPageContent.readMore.archivePerspective.title}
                  </h3>
                </div>
              </div>

              <div className="grid gap-6 border-b border-outline-variant/20 pb-14 md:grid-cols-3">
                {aboutPageContent.readMore.archivePerspective.stats.map((item) => (
                  <article key={item.label} className="border border-outline-variant/20 bg-surface-container-low p-6 md:p-7">
                    <div className="text-5xl font-semibold leading-none text-accent md:text-6xl">{item.value}</div>
                    <h4 className="mt-4 text-lg font-semibold">{item.label}</h4>
                    <p className="mt-3 text-base leading-7 text-on-surface-variant">{item.description}</p>
                  </article>
                ))}
              </div>

              <p className="mt-8 max-w-4xl text-lg leading-8 text-on-surface-variant">
                {aboutPageContent.readMore.archivePerspective.summary}
              </p>
            </div>
          </div>
        </Section>
      ) : null}
    </div>
  );
}
