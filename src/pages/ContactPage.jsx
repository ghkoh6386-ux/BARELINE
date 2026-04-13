import Section from '../components/Section';

export default function ContactPage() {
  return (
    <div className="space-y-16 px-6 py-12 md:px-8 md:py-16">
      <header className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-[10px] uppercase tracking-[0.3em] text-outline">VOLUME 04 / ARCHIVE / 2024</p>
          <h1 className="mt-6 text-6xl font-semibold tracking-tight md:text-7xl">협업 및 문의</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-on-surface-variant">
            기능적인 구조와 시적인 침묵이 만나는 지점을 함께 탐색할 브랜드, 스튜디오, 개인의 제안을 기다립니다.
          </p>
        </div>
        <div className="space-y-12 lg:col-span-4 lg:col-start-9">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-outline">contact 이메일</p>
            <a href="mailto:studio@bareline.design" className="border-b border-outline-variant/30 pb-2 text-3xl font-semibold transition-colors hover:border-accent">
              studio@bareline.design
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-outline">스튜디오</p>
              <p className="text-sm leading-relaxed">
                48 Archival Way
                <br />
                Copenhagen, DK 1202
              </p>
            </div>
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-outline">소셜 채널</p>
              <div className="flex flex-col gap-3 text-sm">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-accent">
                  Instagram <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-accent">
                  LinkedIn <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative overflow-hidden rounded-none bg-surface-container-low px-0 py-10">
        <img src="/assets/contact-hero.svg" alt="Contact studio" className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center text-on-surface">
          <div className="mx-auto inline-block rounded-none border border-outline-variant/30 bg-background/85 px-12 py-8 backdrop-blur-sm">
            <p className="text-xl font-semibold italic">"The space between the notes."</p>
          </div>
        </div>
      </div>

      <Section title="우리의 비전과 연결하기">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <form className="space-y-10">
              <label className="block space-y-3">
                <span className="text-[10px] uppercase tracking-[0.28em] text-outline">이름</span>
                <input className="w-full border-b border-outline-variant bg-transparent py-3 outline-none placeholder:text-outline-variant/40" placeholder="성함 또는 소속" type="text" />
              </label>
              <label className="block space-y-3">
                <span className="text-[10px] uppercase tracking-[0.28em] text-outline">문의 유형</span>
                <input className="w-full border-b border-outline-variant bg-transparent py-3 outline-none placeholder:text-outline-variant/40" placeholder="에디토리얼 / 디자인 / 파트너십" type="text" />
              </label>
              <label className="block space-y-3">
                <span className="text-[10px] uppercase tracking-[0.28em] text-outline">메시지</span>
                <textarea className="w-full resize-none border-b border-outline-variant bg-transparent py-3 outline-none placeholder:text-outline-variant/40" placeholder="간단한 소개와 문의 내용을 남겨주세요" rows={4} />
              </label>
              <button className="rounded-none bg-on-surface px-12 py-4 text-xs uppercase tracking-[0.28em] text-surface transition-colors hover:bg-accent">
                메시지 전송
              </button>
            </form>
          </div>
          <div className="hidden md:block">
            <div className="aspect-square border border-outline-variant/10 bg-surface-container p-12">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined mb-6 text-6xl text-accent">fingerprint</span>
                <h3 className="mb-4 text-xl font-semibold">의도 확인</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  모든 문의는 개별적인 맥락 속에서 검토됩니다. 우리의 구조적 철학과 결이 맞는 제안에는 48시간 이내로 답변드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}