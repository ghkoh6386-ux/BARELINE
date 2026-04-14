import { useSelector } from 'react-redux';
import Section from '../components/Section';
import { selectContactPageContent } from '../store/selectors/contentSelectors';

export default function ContactPage() {
  const contactPageContent = useSelector(selectContactPageContent);

  return (
    <div className="space-y-16 px-6 py-12 md:px-8 md:py-16">
      <header className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-sm uppercase tracking-[0.3em] text-outline">{contactPageContent.hero.eyebrow}</p>
          <h1 className="mt-6 text-6xl font-semibold tracking-tight md:text-7xl">{contactPageContent.hero.title}</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-on-surface-variant">
            {contactPageContent.hero.description}
          </p>
        </div>
        <div className="space-y-12 lg:col-span-4 lg:col-start-9">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-outline">{contactPageContent.contact.label}</p>
            <a href={`mailto:${contactPageContent.contact.email}`} className="border-b border-outline-variant/30 pb-2 text-3xl font-semibold transition-colors hover:border-accent">
              {contactPageContent.contact.email}
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-outline">{contactPageContent.address.label}</p>
              <p className="text-sm leading-relaxed">
                {contactPageContent.address.lines[0]}
                <br />
                {contactPageContent.address.lines[1]}
              </p>
            </div>
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-outline">{contactPageContent.channels.label}</p>
              <div className="flex flex-col gap-3 text-sm">
                {contactPageContent.channels.items.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-accent">
                    {item.label} <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative overflow-hidden rounded-none bg-surface-container-low px-0 py-14">
          <img src={contactPageContent.heroCard.image} alt={contactPageContent.heroCard.imageAlt} className="absolute inset-0 h-full w-full object-cover object-bottom" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center text-on-surface">
          <div className="mx-auto inline-block rounded-none border border-outline-variant/30 bg-background/85 px-12 py-8 backdrop-blur-sm">
            <p className="text-xl font-semibold italic">{contactPageContent.heroCard.quote}</p>
          </div>
        </div>
      </div>

      <Section title={contactPageContent.formSection.title}>
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <form className="space-y-10">
              <label className="block space-y-3">
                <span className="text-sm uppercase tracking-[0.28em] text-outline">{contactPageContent.formSection.fields.name.label}</span>
                <input className="w-full border-b border-outline-variant bg-transparent py-3 outline-none placeholder:text-outline-variant/40" placeholder={contactPageContent.formSection.fields.name.placeholder} type="text" />
              </label>
              <label className="block space-y-3">
                <span className="text-sm uppercase tracking-[0.28em] text-outline">{contactPageContent.formSection.fields.inquiry.label}</span>
                <input className="w-full border-b border-outline-variant bg-transparent py-3 outline-none placeholder:text-outline-variant/40" placeholder={contactPageContent.formSection.fields.inquiry.placeholder} type="text" />
              </label>
              <label className="block space-y-3">
                <span className="text-sm uppercase tracking-[0.28em] text-outline">{contactPageContent.formSection.fields.message.label}</span>
                <textarea className="w-full resize-none border-b border-outline-variant bg-transparent py-3 outline-none placeholder:text-outline-variant/40" placeholder={contactPageContent.formSection.fields.message.placeholder} rows={4} />
              </label>
              <button className="rounded-none bg-on-surface px-12 py-4 text-sm uppercase tracking-[0.28em] text-surface transition-colors hover:bg-accent">
                {contactPageContent.formSection.submitLabel}
              </button>
            </form>
          </div>
          <div className="hidden md:block">
            <div className="aspect-square border border-outline-variant/10 bg-surface-container p-12">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined mb-6 text-6xl text-accent">fingerprint</span>
                <h3 className="mb-4 text-xl font-semibold">{contactPageContent.infoCard.title}</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {contactPageContent.infoCard.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
