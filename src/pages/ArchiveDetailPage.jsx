import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectArchiveDetailById,
  selectRelatedArchiveDetails,
} from '../store/selectors/archiveSelectors';

export default function ArchiveDetailPage() {
  const { entryId } = useParams();
  const entry = useSelector((state) => selectArchiveDetailById(state, entryId));
  const relatedEntries = useSelector((state) => selectRelatedArchiveDetails(state, entryId));

  const mobileMetaItems = entry
    ? [
        ['Category', entry.category],
        ['Year', entry.year],
        ['Material', entry.material],
        ['creater', entry.curator],
      ]
    : [];

  if (!entry) {
    return (
      <div className="px-6 py-20 md:px-8">
        <p className="text-base uppercase tracking-[0.3em] text-outline">Archive Detail</p>
        <h1 className="mt-6 text-3xl font-semibold">존재하지 않는 아카이브입니다.</h1>
        <Link
          to="/archive"
          className="mt-8 inline-flex border border-outline-variant/30 px-6 py-3 text-base uppercase tracking-[0.28em] text-on-surface transition-colors hover:border-accent hover:text-accent"
        >
          Archive Index
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20 md:pb-24">
      <section className="border-b border-outline-variant/20 px-6 py-12 sm:px-8 md:px-8 md:py-16">
        <div className="mb-12 flex flex-col gap-4 text-base uppercase tracking-[0.2em] text-outline md:flex-row md:items-start md:justify-between">
          <span>Volume No. 04 / Archive</span>
          <span className="text-left md:text-right">
            {entry.issue}
            <br />
            {entry.issn}
          </span>
        </div>

        <nav className="mb-12 flex flex-wrap items-center gap-3 text-base uppercase tracking-[0.18em] text-outline">
          <Link to="/archive" className="transition-colors hover:text-accent">
            Archive
          </Link>
          <span>/</span>
          <span>{entry.category}</span>
          <span>/</span>
          <span className="text-accent">{entry.title}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-5">
            <span className="text-base font-semibold uppercase tracking-[0.18em] text-accent">{entry.eyebrow}</span>
            <h1 className="mt-5 max-w-[12ch] text-3xl font-semibold leading-[0.95] tracking-tight sm:text-4xl md:max-w-none md:text-5xl">
              {entry.title}
            </h1>
            <p className="mt-4 text-lg text-on-surface/70 sm:text-xl md:mt-6 md:text-2xl">{entry.subtitle}</p>
            <p className="mt-8 max-w-xl text-base leading-7 text-on-surface-variant sm:text-lg">{entry.description}</p>
            <div className="mt-8 text-3xl tracking-tight text-on-surface md:mt-10 md:text-4xl">{entry.year}</div>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-[4/5] overflow-hidden bg-surface-container md:aspect-[3/2]">
              <img src={entry.images?.hero ?? entry.heroImage} alt={entry.title} className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/20 px-6 py-10 sm:px-8 md:px-8 md:py-16">
        <div className="grid gap-3 sm:grid-cols-2 md:gap-0 md:border-t md:border-outline-variant/20 md:grid-cols-5">
          <div className="border border-outline-variant/20 bg-surface-container-low px-4 py-5 md:border-b-0 md:border-l-0 md:border-r md:border-t-0 md:bg-transparent md:px-0 md:py-8 md:pr-4">
            <span className="block text-base uppercase tracking-[0.14em] text-outline">Category</span>
            <span className="mt-3 block text-base font-medium">{entry.category}</span>
          </div>
          <div className="border border-outline-variant/20 bg-surface-container-low px-4 py-5 md:border-b-0 md:border-l-0 md:border-r md:border-t-0 md:bg-transparent md:px-4 md:py-8">
            <span className="block text-base uppercase tracking-[0.14em] text-outline">Year</span>
            <span className="mt-3 block text-base font-medium">{entry.year}</span>
          </div>
          <div className="border border-outline-variant/20 bg-surface-container-low px-4 py-5 sm:col-span-2 md:col-span-1 md:border-b-0 md:border-l-0 md:border-r md:border-t-0 md:bg-transparent md:px-4 md:py-8">
            <span className="block text-base uppercase tracking-[0.14em] text-outline">Keywords</span>
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-base uppercase tracking-[0.14em] text-on-surface-variant md:block md:space-y-1">
              {entry.keywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </div>
          <div className="border border-outline-variant/20 bg-surface-container-low px-4 py-5 md:border-b-0 md:border-l-0 md:border-r md:border-t-0 md:bg-transparent md:px-4 md:py-8">
            <span className="block text-base uppercase tracking-[0.14em] text-outline">Material</span>
            <span className="mt-3 block text-base font-medium">{entry.material}</span>
          </div>
          <div className="border border-outline-variant/20 bg-surface-container-low px-4 py-5 md:border-0 md:bg-transparent md:px-4 md:py-8">
            <span className="block text-base uppercase tracking-[0.14em] text-outline">creater</span>
            <span className="mt-3 block text-base font-medium">{entry.curator}</span>
          </div>
        </div>
      </section>

      <section className="grid gap-10 px-6 py-14 sm:px-8 md:gap-12 md:py-16 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="space-y-5 border-b border-outline-variant/20 pb-8 lg:hidden">
          <div className="grid grid-cols-2 gap-3">
            {mobileMetaItems.map(([label, value]) => (
              <div key={label} className="border border-outline-variant/20 bg-surface-container-low px-4 py-4">
                <span className="block text-base uppercase tracking-[0.14em] text-outline">{label}</span>
                <span className="mt-2 block text-base font-medium">{value}</span>
              </div>
            ))}
          </div>

          <div className="border border-outline-variant/20 bg-background px-5 py-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-base uppercase tracking-[0.18em] text-accent">Contents</h2>
                <p className="mt-2 max-w-[26ch] text-base leading-7 text-on-surface-variant">이 아카이브의 주요 단락을 먼저 살펴보세요.</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-base text-on-surface-variant">
              {entry.sections.map((section, index) => (
                <li key={section.heading} className="flex items-start gap-3 border-t border-outline-variant/10 pt-3 first:border-t-0 first:pt-0">
                  <span className="shrink-0 text-base uppercase tracking-[0.18em] text-outline">0{index + 1}</span>
                  <span>{section.heading}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-32 border-l border-accent/30 pl-6">
            <div className="space-y-12">
              <div>
                <h2 className="text-base uppercase tracking-[0.18em] text-accent">Contents</h2>
                <ul className="mt-8 space-y-5 text-base text-on-surface-variant">
                  {entry.sections.map((section) => (
                    <li key={section.heading}>{section.heading}</li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-outline-variant/20 pt-6">
                <Link
                  to="/archive#archive-list"
                  className="inline-flex border border-outline-variant/30 px-4 py-3 text-base uppercase tracking-[0.24em] text-on-surface transition-colors hover:border-accent hover:text-accent"
                >
                  목록으로 가기
                </Link>
              </div>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-7 lg:col-start-5">
          {entry.sections.map((section) => (
            <article key={section.heading} className="mb-16 md:mb-24 last:mb-0">
              <h2 className="text-2xl text-on-surface sm:text-3xl">{section.heading}</h2>
              <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-[1.9] text-on-surface-variant sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}

          <blockquote className="my-14 border-y border-outline-variant/20 px-4 py-10 text-center text-xl leading-snug text-on-surface sm:my-16 sm:text-3xl md:my-24 md:px-12 md:py-16 md:text-4xl">
            {entry.quote}
          </blockquote>

          <div className="grid gap-8 border-t border-outline-variant/20 py-16 md:grid-cols-2 xl:grid-cols-4">
            {entry.notes.map((note) => (
              <div key={note.label}>
                <span className="block text-base uppercase tracking-[0.18em] text-accent">{note.label}</span>
                <h3 className="mt-4 text-lg font-semibold">{note.title}</h3>
                <p className="mt-3 text-base leading-7 text-on-surface-variant">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-8 sm:px-8 md:px-8">
        <div className="mb-10 flex items-end justify-between border-b border-outline-variant/20 pb-4">
          <h2 className="text-base uppercase tracking-[0.22em] text-accent">다른 아카이브</h2>
          <Link to="/archive" className="text-base uppercase tracking-[0.2em] text-outline transition-colors hover:text-accent">
            목록보기
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {relatedEntries.map((relatedEntry) => (
            <Link
              key={relatedEntry.id}
              to={`/archive/${relatedEntry.id}`}
              className="group block"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-container">
                <img
                  src={relatedEntry.images?.related ?? relatedEntry.images?.hero ?? relatedEntry.heroImage}
                  alt={relatedEntry.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="block text-base uppercase tracking-[0.22em] text-outline">
                    Archive {relatedEntry.id}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold transition-colors group-hover:text-accent">
                    {relatedEntry.title}
                  </h3>
                </div>
                <span className="text-base uppercase tracking-[0.18em] text-outline">{relatedEntry.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
