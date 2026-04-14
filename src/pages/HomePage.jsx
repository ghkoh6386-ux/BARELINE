import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Section from '../components/Section';
import {
  selectCategoryItems,
  selectHomePageContent,
} from '../store/selectors/contentSelectors';
import { selectEnrichedArchiveList, selectFeaturedArchiveCards } from '../store/selectors/archiveSelectors';

export default function HomePage() {
  const categoryItems = useSelector(selectCategoryItems);
  const homePageContent = useSelector(selectHomePageContent);
  const featuredCards = useSelector(selectFeaturedArchiveCards);
  const homeArchiveList = useSelector((state) => selectEnrichedArchiveList(state, null));

  return (
    <div className="space-y-0">
      <section className="grid min-h-[60vh] grid-cols-1 border-b border-outline-variant/20 md:min-h-[72vh] md:grid-cols-12">
        <div className="order-2 flex flex-col justify-end gap-6 px-6 py-10 sm:px-8 md:order-1 md:col-span-6 md:gap-8 md:px-12 md:py-20">
          <span className="text-base uppercase tracking-[0.22em] text-outline">{homePageContent.hero.eyebrow}</span>
          <h1 className="max-w-[10ch] text-4xl font-semibold leading-[0.92] tracking-tight sm:text-5xl md:max-w-none md:text-[5.5rem]">
            {homePageContent.hero.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl">
            {homePageContent.hero.description}
          </p>
          <Link
            to={homePageContent.hero.ctaTo}
            className="inline-flex w-full items-center justify-center rounded-none bg-on-surface px-8 py-4 text-base uppercase tracking-[0.22em] text-surface transition hover:bg-accent sm:w-auto"
          >
            {homePageContent.hero.ctaLabel}
          </Link>
        </div>
        <div className="order-1 relative h-[360px] border-b border-outline-variant/20 sm:h-[420px] md:order-2 md:col-span-6 md:h-auto md:border-b-0 md:border-l md:border-t-0">
          <img
            src={homePageContent.hero.image}
            alt={homePageContent.hero.imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-bottom contrast-[1.05]"
          />
        </div>
      </section>

      <section className="hidden border-b border-outline-variant/20 md:grid md:grid-cols-5">
        {categoryItems.map((item, index) => (
          <article
            key={item.id}
            className="group border-b border-outline-variant/10 px-6 py-6 transition-colors hover:bg-surface-container-low sm:px-8 sm:py-7 sm:[&:nth-last-child(-n+2)]:border-b-0 md:border-b-0 md:border-r md:p-8 md:last:border-r-0"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold uppercase tracking-[0.16em]">{item.title}</h3>
                <p className="mt-3 max-w-[26ch] text-base leading-relaxed text-on-surface-variant">{item.caption}</p>
              </div>
              <div className="shrink-0 text-base uppercase tracking-[0.24em] text-accent">0{index + 1}</div>
            </div>
          </article>
        ))}
      </section>

      <Section title={homePageContent.featuredSection.title} caption={homePageContent.featuredSection.caption} className="px-6 pt-16 sm:px-8 md:px-0 md:pt-24">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
          <div className="order-1 border-b border-outline-variant/20 md:order-1 md:col-span-8 md:border-b-0 md:border-r">
            <div className="relative h-[320px] overflow-hidden bg-surface sm:h-[460px] md:h-[700px]">
              <img
                src={homePageContent.featuredSection.image}
                alt={homePageContent.featuredSection.imageAlt}
                className="h-full w-full object-cover object-center md:object-contain md:object-left"
              />
            </div>
          </div>
          <div className="order-2 flex flex-col justify-between gap-8 py-8 sm:py-10 md:order-2 md:col-span-4 md:gap-10 md:p-10">
            <div className="space-y-8 md:space-y-10">
              <p className="text-base uppercase tracking-[0.24em] text-accent">{homePageContent.featuredSection.label}</p>
              <div className="space-y-3 sm:space-y-4">
                {featuredCards.map((item) => (
                  <Link
                    key={item.title}
                    to={item.to}
                    className="group block cursor-pointer border border-outline-variant/20 bg-background/50 px-4 py-4 transition-colors hover:border-accent/30 hover:bg-surface sm:px-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <span className="text-base uppercase tracking-[0.22em] text-outline">{item.intro}</span>
                        <h3 className="mt-3 text-xl font-semibold transition-colors group-hover:text-accent">{item.title}</h3>
                        <p className="mt-3 text-base leading-7 text-on-surface-variant">{item.description}</p>
                      </div>
                      <span className="material-symbols-outlined shrink-0 text-[18px] text-outline/60 transition-colors group-hover:text-accent">
                        arrow_outward
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <Link to={homePageContent.featuredSection.ctaTo} className="text-base uppercase tracking-[0.22em] text-outline underline underline-offset-8 transition-colors hover:text-on-surface">
              {homePageContent.featuredSection.ctaLabel}
            </Link>
          </div>
        </div>
      </Section>

      <Section title={homePageContent.spaceSection.title} caption={homePageContent.spaceSection.caption} className="px-6 pt-16 sm:px-8 md:px-0 md:pt-24">
        <div className="grid gap-7 md:grid-cols-12 md:items-center md:gap-16">
          <div className="order-2 max-w-2xl md:order-1 md:col-span-5 md:max-w-none md:text-left">
            <h2 className="mb-6 text-4xl font-semibold leading-tight sm:text-5xl md:mb-8 md:text-7xl">{homePageContent.spaceSection.heading}</h2>
            <p className="mb-8 max-w-xl text-base leading-7 text-on-surface-variant sm:text-lg md:mb-12 md:max-w-none">
              {homePageContent.spaceSection.description}
            </p>
            <Link
              to={homePageContent.spaceSection.ctaTo}
              className="inline-flex w-full items-center justify-center rounded-none border border-outline-variant/30 px-10 py-4 text-base uppercase tracking-[0.22em] text-on-surface transition-colors hover:border-accent sm:w-auto md:py-5"
            >
              {homePageContent.spaceSection.ctaLabel}
            </Link>
          </div>
          <div className="order-1 md:order-2 md:col-span-7">
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              <div className="h-[420px] w-full overflow-hidden sm:h-[560px] md:h-[800px]">
                <img src={homePageContent.spaceSection.image} alt={homePageContent.spaceSection.imageAlt} className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title={homePageContent.latestSection.title} className="px-6 pt-16 sm:px-8 md:px-0 md:pt-10">
        <div className="mb-12 flex flex-col gap-4 border-b border-on-surface/10 pb-8 md:flex-row md:items-end md:justify-between">
          <p className="text-base uppercase tracking-[0.18em] text-outline">{homePageContent.latestSection.caption}</p>
        </div>
        <div className="overflow-x-auto">
          <div className="hidden grid-cols-12 gap-4 border-b border-on-surface/10 px-6 pb-4 text-base uppercase tracking-[0.2em] text-outline md:grid">
            <div className="col-span-1">{homePageContent.latestSection.columns[0]}</div>
            <div className="col-span-4">{homePageContent.latestSection.columns[1]}</div>
            <div className="col-span-2">{homePageContent.latestSection.columns[2]}</div>
            <div className="col-span-3">{homePageContent.latestSection.columns[3]}</div>
            <div className="col-span-2 text-right">{homePageContent.latestSection.columns[4]}</div>
          </div>
          <div className="space-y-3 md:space-y-0 md:divide-y md:divide-outline-variant/10">
            {homeArchiveList.slice(0, homePageContent.latestSection.limit).map((item) => (
              <Link
                key={item.ref}
                to={item.to}
                className="group block border border-outline-variant/20 bg-background/70 px-6 py-5 transition-colors hover:border-accent/25 hover:bg-surface sm:px-8 md:grid md:grid-cols-12 md:items-center md:gap-4 md:border-0 md:bg-transparent md:px-6 md:py-6 md:hover:bg-surface-container-low"
              >
                <div className="flex items-start justify-between gap-4 md:contents">
                  <div className="space-y-2 md:space-y-0">
                    <div className="text-base uppercase tracking-[0.18em] text-outline md:col-span-1">{item.ref}</div>
                    <div className="text-base uppercase tracking-[0.16em] text-on-surface-variant md:hidden">{item.category}</div>
                  </div>
                  <div className="flex items-center gap-2 md:hidden">
                    <span className="text-base uppercase tracking-[0.16em] text-outline">{item.year}</span>
                    <span className="material-symbols-outlined text-[18px] text-outline/60 transition-colors group-hover:text-accent">
                      arrow_outward
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-start gap-4 md:col-span-4 md:mt-0 md:items-center">
                  <div className="h-16 w-16 overflow-hidden bg-surface-container">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-lg font-semibold transition-colors group-hover:text-accent">{item.title}</span>
                    {item.subtitle ? (
                      <span className="mt-1 block truncate text-base text-on-surface-variant">{item.subtitle}</span>
                    ) : null}
                  </div>
                </div>
                <div className="mt-3 hidden text-base uppercase tracking-[0.18em] text-on-surface-variant md:col-span-2 md:mt-0 md:block">{item.category}</div>
                <div className="mt-3 md:col-span-3 md:mt-0">
                  <div className="text-base uppercase tracking-[0.18em] text-on-surface-variant">{item.creator}</div>
                  {item.description ? (
                    <p className="mt-2 line-clamp-2 text-base leading-7 normal-case tracking-normal text-on-surface-variant">
                      {item.description}
                    </p>
                  ) : null}
                </div>
                <div className="mt-3 hidden text-base uppercase tracking-[0.18em] text-outline md:col-span-2 md:mt-0 md:text-right">{item.year}</div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
