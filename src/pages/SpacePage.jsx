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
    <article className="space-y-24 px-6 py-12 md:px-8 md:py-16">
      <header className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-outline">{content.header.eyebrow}</p>
          <h1 className="mt-8 text-6xl font-semibold tracking-tight md:text-7xl">{content.header.title}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-on-surface/80">{content.header.description}</p>
        </div>
        <div className="lg:col-span-6">
          <div className="relative aspect-[21/9] overflow-hidden rounded-none bg-surface-container-low">
            <img src={content.header.image} alt={content.header.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-on-background/10">
              <div className="rounded-none border border-outline-variant/20 bg-background/40 px-12 py-8 text-center">
                <p className="text-xl italic">"{content.header.quote}"</p>
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
        <aside className="hidden h-fit lg:sticky lg:top-32 lg:col-span-3 lg:block lg:self-start">
          <div className="border-l border-accent/30 pl-6">
            <div className="space-y-12">
              <div>
                <h4 className="mb-4 text-[10px] uppercase tracking-[0.24em] text-accent">{content.sidebar.title}</h4>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  {content.sidebar.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-[10px] uppercase tracking-[0.24em] text-accent">{content.sidebar.curatorLabel}</h4>
                <p className="text-sm text-on-surface-variant">{content.sidebar.curator}</p>
              </div>
            </div>
          </div>
        </aside>
        <div className="space-y-24 lg:col-span-8 lg:col-start-5">
          <div className="space-y-12">
            <p className="text-2xl font-light leading-relaxed text-on-surface/90">{content.lead}</p>
            <div className="h-[1px] w-24 bg-accent/30"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {content.figures.map((figure, index) => (
              <figure key={figure.caption} className={`space-y-4 ${index === 1 ? 'md:mt-16' : ''}`}>
                <div className="aspect-[4/5] overflow-hidden bg-surface-container-low">
                  <img
                    src={figure.image}
                    alt={figure.alt}
                    className={`h-full w-full object-cover ${figure.grayscale ? 'grayscale' : ''}`}
                  />
                </div>
                <figcaption className="text-[10px] uppercase tracking-[0.3em] text-outline/60 italic">{figure.caption}</figcaption>
              </figure>
            ))}
          </div>

          <blockquote className="border-y border-outline-variant/10 py-16 text-4xl font-semibold italic leading-tight text-accent">
            "{content.blockquote.text}"
            <cite className="mt-8 block text-xs uppercase tracking-[0.32em] text-outline">{content.blockquote.source}</cite>
          </blockquote>

          <div className="max-w-3xl space-y-8">
            <h3 className="text-3xl font-semibold tracking-tight">{content.sections[0].title}</h3>
            <p className="text-lg leading-[1.8] text-on-surface-variant">{content.sections[0].body}</p>
          </div>

          <figure className="space-y-4">
            <div className="aspect-video overflow-hidden bg-surface-container-low">
              <img src={content.feature.image} alt={content.feature.caption} className="h-full w-full object-cover" />
            </div>
            <div className="flex items-start justify-between text-[11px] uppercase tracking-[0.28em] text-outline">
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

          <div className="grid gap-4 md:grid-cols-3">
            {content.gallery.map((item, index) => (
              <img
                key={item.alt}
                src={item.image}
                alt={item.alt}
                className={`aspect-square h-full w-full object-cover transition-transform duration-700 hover:scale-105 ${item.grayscale ? 'grayscale' : ''} ${index === 2 ? 'hidden md:block' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="bg-surface-container-low px-6 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-[10px] uppercase tracking-[0.32em] text-accent">{content.relatedTitle}</p>
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
                    <p className="text-[10px] uppercase tracking-[0.28em] text-outline/70">{item.label}</p>
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
