import { Link, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Section from '../components/Section';
import CategoryNav from '../components/CategoryNav';
import { selectArchiveCategoryContentById } from '../store/selectors/contentSelectors';
import {
  selectEnrichedArchiveList,
  selectFeaturedArchiveItems,
} from '../store/selectors/archiveSelectors';

export default function ArchivePage() {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get('category');
  const categoryContent = useSelector((state) => selectArchiveCategoryContentById(state, activeCategory));
  const enrichedArchiveList = useSelector((state) => selectEnrichedArchiveList(state, activeCategory));
  const featuredItems = useSelector((state) => selectFeaturedArchiveItems(state, activeCategory));
  const totalLabel = `Total (${enrichedArchiveList.length})`;

  return (
    <div className="space-y-10">
      <header className="border-b border-outline-variant/20 bg-background/80 px-6 py-10 md:px-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-outline">VOLUME NO. 04 / INDEX ISSUE / 2026</p>
            <h1 className="mt-6 text-6xl font-semibold tracking-tight md:text-7xl">아카이브</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              형태와 물성의 관계를 기록하는 아카이브 인덱스입니다. 공간, 패션, 오브제, 에디토리얼을 가로지르며 조용한 구조의 결을 수집합니다.
            </p>
          </div>
          <div className="max-w-sm">
            <div className="relative">
              <input
                className="w-full border-b border-outline-variant/30 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-outline-variant/60"
                placeholder="아카이브 검색"
                type="text"
              />
              <span className="absolute bottom-3 right-0 text-sm text-outline">search</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-outline">
              <span>키워드 또는 연도로 정렬</span>
              <span>정렬 기준: 최신순</span>
            </div>
          </div>
        </div>
      </header>

      <CategoryNav />

      <Section
        className="px-6 md:px-8"
        title={categoryContent ? categoryContent.title : '주목할 항목'}
        caption={categoryContent ? '카테고리' : '에디터 셀렉션'}
      >
        {categoryContent ? (
          <div className="mb-12 flex flex-col gap-5 border-b border-outline-variant/20 pb-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">{categoryContent.description}</p>
            <div className="text-[10px] uppercase tracking-[0.3em] text-outline">{totalLabel}</div>
          </div>
        ) : null}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredItems.slice(0, 2).map((entry) => (
            <Link key={entry.id} to={entry.to} className="group block space-y-4">
              <div className="aspect-[4/5] overflow-hidden bg-surface-container-low">
                <img src={entry.image} alt={entry.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent">Entry #{entry.id} / {entry.category}</span>
                  <h2 className="mt-3 text-2xl font-semibold">{entry.title}</h2>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-outline">{entry.year}</span>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-on-surface-variant">
                {entry.description || categoryContent?.featured.description || '재료와 침묵, 구조와 여백에 대한 짧은 기록을 담은 아카이브 노트.'}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <div id="archive-list" className="scroll-mt-24">
      <Section
        className="px-6 md:px-8"
        title={categoryContent?.listLabel ?? '아카이브 인덱스'}
        caption={activeCategory ? '선택한 카테고리 기록' : '모든 기록 둘러보기'}
      >
        <div className="overflow-x-auto">
          <div className="hidden grid-cols-12 gap-4 border-b border-on-surface/10 pb-4 text-[10px] uppercase tracking-[0.3em] text-outline md:grid">
            <div className="col-span-1">참조</div>
            <div className="col-span-4">제목</div>
            <div className="col-span-2">카테고리</div>
            <div className="col-span-3">크리에이터 / 스튜디오</div>
            <div className="col-span-2 text-right">연도</div>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {enrichedArchiveList.map((item) => (
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
    </div>
  );
}
