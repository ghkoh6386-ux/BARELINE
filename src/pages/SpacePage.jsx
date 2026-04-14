import { useSearchParams } from 'react-router-dom';
import Section from '../components/Section';
import { useSelector } from 'react-redux';
import {
  selectSpaceDefaultEntryId,
  selectSpacePageContent,
  selectSpaceRelatedEntries,
} from '../store/selectors/spaceSelectors';

export default function SpacePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultEntryId = useSelector(selectSpaceDefaultEntryId);
  const activeEntryId = searchParams.get('entry') ?? defaultEntryId;
  const content = useSelector((state) => selectSpacePageContent(state, activeEntryId));
  const relatedEntries = useSelector(selectSpaceRelatedEntries);

  const handleSelectEntry = (entryId) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('entry', entryId);
    setSearchParams(nextParams, { replace: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="space-y-16 px-6 py-12 md:space-y-24 md:px-8 md:py-16">
      <header className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <p className="text-sm uppercase tracking-[0.3em] text-outline">{content.header.eyebrow}</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl md:mt-8 md:text-7xl">{content.header.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface/80 md:mt-6 md:text-xl">{content.header.description}</p>
        </div>
        <div className="lg:col-span-6">
          <div className="relative aspect-[21/9] overflow-hidden rounded-none bg-surface-container-low">
            <img src={content.header.image} alt={content.header.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-on-background/10">
              <div className="mx-4 rounded-none border border-outline-variant/20 bg-background/40 px-6 py-5 text-center md:px-12 md:py-8">
                <p className="text-lg italic md:text-xl">"{content.header.quote}"</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section title={content.intro.title} caption={content.intro.caption}>
        <div className="max-w-4xl space-y-12 text-lg leading-[1.85] text-on-surface-variant">
          {content.intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <div className="grid gap-8 lg:grid-cols-12">
        <div className="border-b border-outline-variant/20 pb-8 lg:hidden">
          <h4 className="mb-4 text-sm uppercase tracking-[0.24em] text-accent">Space List</h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedEntries.map((item) => {
              const isActive = item.id === activeEntryId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectEntry(item.id)}
                  className={`block w-full border px-4 py-3 text-left transition-colors ${
                    isActive
                      ? 'border-accent/30 bg-accent/5 text-accent'
                      : 'border-outline-variant/20 bg-background/40 text-on-surface-variant hover:border-accent/20 hover:bg-surface hover:text-accent'
                  }`}
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-outline/70">{item.label}</p>
                  <p className="mt-1 text-sm font-medium">{item.title}</p>
                </button>
              );
            })}
          </div>
        </div>
        <aside className="hidden h-fit lg:sticky lg:top-32 lg:col-span-3 lg:block lg:self-start">
          <div className="border-l border-accent/30 pl-6">
            <div className="space-y-12">
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-[0.24em] text-accent">{content.sidebar.title}</h4>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  {content.sidebar.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-[0.24em] text-accent">{content.sidebar.curatorLabel}</h4>
                <p className="text-sm text-on-surface-variant">{content.sidebar.curator}</p>
              </div>
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-[0.24em] text-accent">Space List</h4>
                <div className="space-y-2">
                  {relatedEntries.map((item) => {
                    const isActive = item.id === activeEntryId;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectEntry(item.id)}
                        className={`block w-full border px-4 py-3 text-left transition-colors ${
                          isActive
                            ? 'border-accent/30 bg-accent/5 text-accent'
                            : 'border-outline-variant/20 bg-background/40 text-on-surface-variant hover:border-accent/20 hover:bg-surface hover:text-accent'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm uppercase tracking-[0.24em] text-outline/70">{item.label}</p>
                            <p className="mt-1 text-sm font-medium">{item.title}</p>
                          </div>
                          <span className={`material-symbols-outlined text-[15px] ${isActive ? 'text-accent' : 'text-outline/60'}`}>
                            arrow_outward
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="space-y-24 lg:col-span-8 lg:col-start-5">
          <div className="space-y-8 md:space-y-12">
            <p className="text-2xl font-light leading-relaxed text-on-surface/90">{content.lead}</p>
            <div className="h-[1px] w-24 bg-accent/30"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {content.figures.map((figure, index) => (
              <figure key={figure.caption} className={`space-y-4 ${index === 1 ? 'md:mt-16' : ''}`}>
                <div className="aspect-[4/5] overflow-hidden bg-surface-container-low">
                  <img
                    src={figure.image}
                    alt={figure.alt}
                    className={`h-full w-full object-cover ${figure.grayscale ? 'grayscale' : ''}`}
                  />
                </div>
                <figcaption className="text-sm uppercase tracking-[0.3em] text-outline/60 italic">{figure.caption}</figcaption>
              </figure>
            ))}
          </div>

          <blockquote className="border-y border-outline-variant/10 py-12 text-2xl font-semibold italic leading-tight text-accent sm:text-3xl md:py-16 md:text-4xl">
            "{content.blockquote.text}"
            <cite className="mt-8 block text-sm uppercase tracking-[0.32em] text-outline">{content.blockquote.source}</cite>
          </blockquote>

          <div className="max-w-3xl space-y-8">
            <h3 className="text-3xl font-semibold tracking-tight">{content.sections[0].title}</h3>
            <p className="text-lg leading-[1.8] text-on-surface-variant">{content.sections[0].body}</p>
          </div>

          <figure className="space-y-4">
            <div className="aspect-video overflow-hidden bg-surface-container-low">
              <img src={content.feature.image} alt={content.feature.caption} className="h-full w-full object-cover" />
            </div>
            <div className="flex items-start justify-between text-sm uppercase tracking-[0.28em] text-outline">
              <figcaption>{content.feature.caption}</figcaption>
              <span>{content.feature.location}</span>
            </div>
          </figure>

          <div className="border-t border-outline-variant/20 pt-12">
            <div className="grid gap-8 md:grid-cols-[280px_1fr]">
              <div>
                <h3 className="mb-4 text-xl font-semibold tracking-tight">{content.sections[1].title}</h3>
              </div>
              <p className="text-lg leading-[1.8] text-on-surface-variant">{content.sections[1].body}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {content.gallery.map((item, index) => (
              <img
                key={item.alt}
                src={item.image}
                alt={item.alt}
                className={`aspect-square h-full w-full object-cover transition-transform duration-700 hover:scale-105 ${item.grayscale ? 'grayscale' : ''} ${index === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="bg-surface-container-low px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-sm uppercase tracking-[0.32em] text-accent">{content.relatedTitle}</p>
          <div className="grid gap-10 md:grid-cols-3">
            {relatedEntries.map((item) => {
              const isActive = item.id === activeEntryId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectEntry(item.id)}
                  className={`group space-y-4 text-left transition ${isActive ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-surface-container-highest">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-outline/70">{item.label}</p>
                    <h4 className={`text-xl font-semibold tracking-tight transition-colors ${isActive ? 'text-accent' : 'group-hover:text-accent'}`}>
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{item.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
