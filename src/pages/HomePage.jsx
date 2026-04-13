import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Section from '../components/Section';
import { clothHome, heroHome, spaceHome } from '../assets/images';
import {
  selectCategoryItems,
  selectFeaturedCards,
} from '../store/selectors/contentSelectors';
import { selectEnrichedArchiveList } from '../store/selectors/archiveSelectors';

export default function HomePage() {
  const categoryItems = useSelector(selectCategoryItems);
  const featuredCards = useSelector(selectFeaturedCards);
  const homeArchiveList = useSelector((state) => selectEnrichedArchiveList(state, null));

  return (
    <div className="space-y-0">
      <section className="grid min-h-[72vh] grid-cols-1 border-b border-outline-variant/20 md:grid-cols-12">
        <div className="flex flex-col justify-end gap-8 px-6 py-12 md:col-span-6 md:px-12 md:py-20">
          <span className="text-[10px] uppercase tracking-[0.28em] text-outline">VOLUME NO. 04 / ARCHIVE / 2026</span>
          <h1 className="text-6xl font-semibold leading-[0.9] tracking-tight md:text-[5.5rem]">BARE LINE</h1>
          <p className="max-w-xl text-xl leading-relaxed text-on-surface-variant">
            가공되지 않은 질감과 절제된 구조 사이의 장면을 기록합니다.
          </p>
          <Link
            to="/archive"
            className="inline-flex items-center justify-center rounded-none bg-on-surface px-8 py-4 text-xs uppercase tracking-[0.32em] text-surface transition hover:bg-accent"
          >
            아카이브
          </Link>
        </div>
        <div className="relative h-[520px] border-t border-outline-variant/20 md:col-span-6 md:h-auto md:border-l md:border-t-0">
          <img
            src={heroHome}
            alt="Editorial object"
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

      <Section title="패션: 본질의 실루엣" caption="추천 콘텐츠" className='pt-24'>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
          <div className="border-b border-outline-variant/20 md:col-span-8 md:border-b-0 md:border-r">
            <div className="relative h-[700px] overflow-hidden bg-surface">
              <img src={clothHome} alt="Fashion detail" className="h-full w-full object-contain object-left" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 p-10 md:col-span-4">
            <div className="space-y-10">
              <p className="text-[12px] uppercase tracking-[0.35em] text-accent">추천 콘텐츠</p>
              <div className="space-y-8">
                {featuredCards.map((item) => (
                  <div key={item.title} className="group space-y-3">
                    <span className="text-[12px] uppercase tracking-[0.32em] text-outline">{item.intro}</span>
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/archive?category=fashion" className="text-sm uppercase tracking-[0.32em] text-outline underline underline-offset-8 transition-colors hover:text-on-surface">
              컬렉션 보러가기
            </Link>
          </div>
        </div>
      </Section>

      <Section title="공간: 여백의 미학" caption="갤러리 에세이" className='pt-24'>
        <div className="grid gap-16 md:grid-cols-12 md:items-center">
          <div className="order-2 md:order-1 md:col-span-5">
            <h2 className="mb-8 text-5xl font-semibold leading-tight md:text-7xl">Space: 공백</h2>
            <p className="mb-12 text-lg leading-relaxed text-on-surface-variant">
              빛과 그림자가 머무는 장면 속에서 공간은 하나의 감정이 됩니다. 비워낸 구조가 어떻게 분위기를 만드는지 따라가 보세요.
            </p>
            <Link
              to="/archive?category=space"
              className="inline-flex items-center rounded-none border border-outline-variant/30 px-10 py-5 text-[12px] uppercase tracking-[0.32em] text-on-surface transition-colors hover:border-accent"
            >
              갤러리 탐색
            </Link>
          </div>
          <div className="order-1 md:order-2 md:col-span-7">
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              <div className="h-[800px] w-full overflow-hidden">
                <img src={spaceHome} alt="Interior" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="최신 아카이브" className="pt-0 px-6 md:px-0">
        <div className="mb-12 flex flex-col gap-4 border-b border-on-surface/10 pb-8 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl font-normal">목록</h2>
          <span className="text-[10px] uppercase tracking-[0.32em] text-outline">기록 120-125</span>
        </div>
        <div className="overflow-x-auto">
          <div className="hidden grid-cols-12 gap-4 border-b border-on-surface/10 pb-4 text-[10px] uppercase tracking-[0.3em] text-outline md:grid">
            <div className="col-span-1">참조</div>
            <div className="col-span-4">제목</div>
            <div className="col-span-2">카테고리</div>
            <div className="col-span-3">크리에이터 / 스튜디오</div>
            <div className="col-span-2 text-right">연도</div>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {homeArchiveList.map((item) => (
              <Link
                key={item.ref}
                to={item.to}
                className="grid grid-cols-12 items-center gap-4 px-2 py-6 transition-colors hover:bg-surface-container-low md:px-0"
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
