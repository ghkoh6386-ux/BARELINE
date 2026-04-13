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
      <section className="grid min-h-[72vh] grid-cols-1 border-b border-outline-variant/20 md:grid-cols-12">
        <div className="flex flex-col justify-end gap-8 px-6 py-12 md:col-span-6 md:px-12 md:py-20">
          <span className="text-[10px] uppercase tracking-[0.28em] text-outline">{homePageContent.hero.eyebrow}</span>
          <h1 className="text-6xl font-semibold leading-[0.9] tracking-tight md:text-[5.5rem]">{homePageContent.hero.title}</h1>
          <p className="max-w-xl text-xl leading-relaxed text-on-surface-variant">
            {homePageContent.hero.description}
          </p>
          <Link
            to={homePageContent.hero.ctaTo}
            className="inline-flex items-center justify-center rounded-none bg-on-surface px-8 py-4 text-xs uppercase tracking-[0.32em] text-surface transition hover:bg-accent"
          >
            {homePageContent.hero.ctaLabel}
          </Link>
        </div>
        <div className="relative h-[520px] border-t border-outline-variant/20 md:col-span-6 md:h-auto md:border-l md:border-t-0">
          <img
            src={homePageContent.hero.image}
            alt={homePageContent.hero.imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-bottom contrast-[1.05]"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 border-b border-outline-variant/20 md:grid-cols-5">
        {categoryItems.map((item, index) => (
          <article
            key={item.id}
            className="group border-b border-outline-variant/10 p-8 transition-colors hover:bg-surface-container-low last:border-b-0 md:border-r md:last:border-b-0 md:last:border-r-0"
          >
            <div className="mb-4 text-[10px] uppercase tracking-[0.35em] text-accent">0{index + 1}</div>
            <h3 className="mb-2 text-lg font-semibold uppercase tracking-[0.16em]">{item.title}</h3>
            <p className="text-xs leading-relaxed text-on-surface-variant">{item.caption}</p>
          </article>
        ))}
      </section>

      <Section title={homePageContent.featuredSection.title} caption={homePageContent.featuredSection.caption} className="pt-24">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
          <div className="border-b border-outline-variant/20 md:col-span-8 md:border-b-0 md:border-r">
            <div className="relative h-[700px] overflow-hidden bg-surface">
              <img src={homePageContent.featuredSection.image} alt={homePageContent.featuredSection.imageAlt} className="h-full w-full object-contain object-left" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 p-10 md:col-span-4">
            <div className="space-y-10">
              <p className="text-[12px] uppercase tracking-[0.35em] text-accent">{homePageContent.featuredSection.label}</p>
              <div className="space-y-8">
                {featuredCards.map((item) => (
                  <Link
                    key={item.title}
                    to={item.to}
                    className="group block space-y-3 cursor-pointer transition-colors"
                  >
                    <span className="text-[12px] uppercase tracking-[0.32em] text-outline">{item.intro}</span>
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <Link to={homePageContent.featuredSection.ctaTo} className="text-sm uppercase tracking-[0.32em] text-outline underline underline-offset-8 transition-colors hover:text-on-surface">
              {homePageContent.featuredSection.ctaLabel}
            </Link>
          </div>
        </div>
      </Section>

      <Section title={homePageContent.spaceSection.title} caption={homePageContent.spaceSection.caption} className="pt-24">
        <div className="grid gap-16 md:grid-cols-12 md:items-center">
          <div className="order-2 md:order-1 md:col-span-5">
            <h2 className="mb-8 text-5xl font-semibold leading-tight md:text-7xl">{homePageContent.spaceSection.heading}</h2>
            <p className="mb-12 text-lg leading-relaxed text-on-surface-variant">
              {homePageContent.spaceSection.description}
            </p>
            <Link
              to={homePageContent.spaceSection.ctaTo}
              className="inline-flex items-center rounded-none border border-outline-variant/30 px-10 py-5 text-[12px] uppercase tracking-[0.32em] text-on-surface transition-colors hover:border-accent"
            >
              {homePageContent.spaceSection.ctaLabel}
            </Link>
          </div>
          <div className="order-1 md:order-2 md:col-span-7">
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              <div className="h-[800px] w-full overflow-hidden">
                <img src={homePageContent.spaceSection.image} alt={homePageContent.spaceSection.imageAlt} className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title={homePageContent.latestSection.title} className="pt-0 px-6 md:px-0">
        <div className="mb-12 flex flex-col gap-4 border-b border-on-surface/10 pb-8 md:flex-row md:items-end md:justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-outline">{homePageContent.latestSection.caption}</p>
        </div>
        <div className="overflow-x-auto">
          <div className="hidden grid-cols-12 gap-4 border-b border-on-surface/10 pb-4 px-4 text-[10px] uppercase tracking-[0.3em] text-outline md:grid md:px-6">
            <div className="col-span-1">{homePageContent.latestSection.columns[0]}</div>
            <div className="col-span-4">{homePageContent.latestSection.columns[1]}</div>
            <div className="col-span-2">{homePageContent.latestSection.columns[2]}</div>
            <div className="col-span-3">{homePageContent.latestSection.columns[3]}</div>
            <div className="col-span-2 text-right">{homePageContent.latestSection.columns[4]}</div>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {homeArchiveList.slice(0, homePageContent.latestSection.limit).map((item) => (
              <Link
                key={item.ref}
                to={item.to}
                className="grid grid-cols-12 items-center gap-4 px-4 py-6 transition-colors hover:bg-surface-container-low md:px-6"
              >
                <div className="col-span-2 text-[11px] uppercase tracking-[0.24em] text-outline md:col-span-1">{item.ref}</div>
                <div className="col-span-8 flex items-center gap-4 md:col-span-4">
                  <div className="h-16 w-16 overflow-hidden bg-surface-container">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-lg font-semibold transition-colors hover:text-accent">{item.title}</span>
                    {item.subtitle ? (
                      <span className="mt-1 block truncate text-sm text-on-surface-variant">{item.subtitle}</span>
                    ) : null}
                  </div>
                </div>
                <div className="col-span-2 hidden text-[11px] uppercase tracking-[0.22em] md:block">{item.category}</div>
                <div className="col-span-3 hidden md:block">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-on-surface-variant">{item.creator}</div>
                  {item.description ? (
                    <p className="mt-2 line-clamp-2 text-sm normal-case tracking-normal text-on-surface-variant">
                      {item.description}
                    </p>
                  ) : null}
                </div>
                <div className="col-span-2 text-right text-[11px] uppercase tracking-[0.22em] text-outline">{item.year}</div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
