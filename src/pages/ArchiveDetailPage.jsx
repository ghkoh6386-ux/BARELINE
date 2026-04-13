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

  if (!entry) {
    return (
      <div className="px-6 py-20 md:px-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-outline">Archive Detail</p>
        <h1 className="mt-6 text-4xl font-semibold">존재하지 않는 아카이브입니다.</h1>
        <Link
          to="/archive"
          className="mt-8 inline-flex border border-outline-variant/30 px-6 py-3 text-xs uppercase tracking-[0.28em] text-on-surface transition-colors hover:border-accent hover:text-accent"
        >
          Archive Index
        </Link>
      </div>
    );
  }
  return (
    <div className="pb-24">
      <section className="border-b border-outline-variant/20 px-6 py-12 md:px-8 md:py-16">
        <div className="mb-12 flex flex-col gap-4 text-[10px] uppercase tracking-[0.28em] text-outline md:flex-row md:items-start md:justify-between">
          <span>Volume No. 04 / Archive</span>
          <span className="text-left md:text-right">
            {entry.issue}
            <br />
            {entry.issn}
          </span>
        </div>

        <nav className="mb-12 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-outline">
          <Link to="/archive" className="transition-colors hover:text-accent">
            Archive
          </Link>
          <span>/</span>
          <span>{entry.category}</span>
          <span>/</span>
          <span className="text-accent">{entry.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">{entry.eyebrow}</span>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              {entry.title}
            </h1>
            <p className="mt-6 text-2xl italic text-on-surface/70">{entry.subtitle}</p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-on-surface-variant">{entry.description}</p>
            <div className="mt-10 text-4xl tracking-tight text-on-surface">{entry.year}</div>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-[4/5] overflow-hidden bg-surface-container md:aspect-[3/2]">
              <img src={entry.images?.hero ?? entry.heroImage} alt={entry.title} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant/20 px-6 py-12 md:px-8 md:py-16">
        <div className="grid gap-0 border-t border-outline-variant/20 md:grid-cols-5">
          <div className="border-b border-outline-variant/20 py-8 pr-4 md:border-b-0 md:border-r">
            <span className="block text-[10px] uppercase tracking-[0.16em] text-outline">Category</span>
            <span className="mt-3 block text-sm font-medium">{entry.category}</span>
          </div>
          <div className="border-b border-outline-variant/20 py-8 pr-4 md:border-b-0 md:border-r md:px-4">
            <span className="block text-[10px] uppercase tracking-[0.16em] text-outline">Year</span>
            <span className="mt-3 block text-sm font-medium">{entry.year}</span>
          </div>
          <div className="border-b border-outline-variant/20 py-8 pr-4 md:border-b-0 md:border-r md:px-4">
            <span className="block text-[10px] uppercase tracking-[0.16em] text-outline">Keywords</span>
            <ul className="mt-3 space-y-1 text-[11px] uppercase tracking-[0.16em] text-on-surface-variant">
              {entry.keywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </div>
          <div className="border-b border-outline-variant/20 py-8 pr-4 md:border-b-0 md:border-r md:px-4">
            <span className="block text-[10px] uppercase tracking-[0.16em] text-outline">Material</span>
            <span className="mt-3 block text-sm font-medium">{entry.material}</span>
          </div>
          <div className="py-8 md:px-4">
            <span className="block text-[10px] uppercase tracking-[0.16em] text-outline">Curator</span>
            <span className="mt-3 block text-sm font-medium italic">{entry.curator}</span>
          </div>
        </div>
      </section>

      <section className="grid gap-16 px-6 py-16 lg:grid-cols-12 lg:px-8">
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-32 border-l border-accent/30 pl-6">
            <h2 className="text-[10px] uppercase tracking-[0.24em] text-accent">Contents</h2>
            <ul className="mt-8 space-y-5 text-sm text-on-surface-variant">
              {entry.sections.map((section) => (
                <li key={section.heading}>{section.heading}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-7 lg:col-start-5">
          {entry.sections.map((section) => (
            <article key={section.heading} className="mb-24 last:mb-0">
              <h2 className="text-3xl italic text-on-surface">{section.heading}</h2>
              <div className="mt-10 space-y-6">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-[1.9] text-on-surface-variant">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}

          <blockquote className="my-24 border-y border-outline-variant/20 px-4 py-16 text-center text-3xl leading-snug text-on-surface md:px-12 md:text-4xl">
            {entry.quote}
          </blockquote>

          <div className="mb-16 flex justify-center">
            <Link
              to="/archive#archive-list"
              className="inline-flex border border-outline-variant/30 px-5 py-2 text-[12px] uppercase tracking-[0.28em] text-on-surface transition-colors hover:border-accent hover:text-accent"
            >
              목록으로 돌아가기
            </Link>
          </div>

          <div className="grid gap-8 border-t border-outline-variant/20 py-16 md:grid-cols-2 xl:grid-cols-4">
            {entry.notes.map((note) => (
              <div key={note.label}>
                <span className="block text-[10px] uppercase tracking-[0.24em] text-accent">{note.label}</span>
                <h3 className="mt-4 text-lg font-semibold">{note.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-8 md:px-8">
        <div className="mb-10 flex items-end justify-between border-b border-outline-variant/20 pb-4">
          <h2 className="text-2xl font-semibold">Related Entries</h2>
          <Link to="/archive" className="text-[10px] uppercase tracking-[0.28em] text-outline transition-colors hover:text-accent">
            View Index
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
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-outline">
                    Archive {relatedEntry.id}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold transition-colors group-hover:text-accent">
                    {relatedEntry.title}
                  </h3>
                </div>
                <span className="text-xs uppercase tracking-[0.24em] text-outline">{relatedEntry.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
