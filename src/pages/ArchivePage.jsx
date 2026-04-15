import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useIsMobile from '../hooks/useIsMobile';
import Section from '../components/Section';
import CategoryNav from '../components/CategoryNav';
import { selectArchivePageData } from '../store/selectors/archiveSelectors';
import { selectArchivePageUiSettings } from '../store/selectors/contentSelectors';

export default function ArchivePage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const activeCategory = searchParams.get('category');
  const { mobileBreakpoint, mobileItemsPerPage, swipeThreshold } = useSelector(selectArchivePageUiSettings);
  const {
    pageContent,
    categoryContent,
    filteredArchiveList,
    featuredItems,
    totalLabel,
    listTitle,
    listCaption,
  } = useSelector((state) => selectArchivePageData(state, activeCategory, submittedQuery));

  const isMobile = useIsMobile(mobileBreakpoint);
  const itemsPerPage = isMobile ? mobileItemsPerPage : pageContent.list.itemsPerPage;
  const pageCount = Math.max(1, Math.ceil(filteredArchiveList.length / itemsPerPage));
  const pageGroups = Array.from({ length: pageCount }, (_, index) => (
    filteredArchiveList.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
  ));

  useEffect(() => {
    if (pageIndex >= pageCount) {
      setPageIndex(pageCount - 1);
    }
  }, [pageCount, pageIndex]);

  useEffect(() => {
    setPageIndex(0);
  }, [activeCategory, submittedQuery]);

  const handleSearchSubmit = () => {
    setSubmittedQuery(query);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    touchDeltaX.current = event.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchDeltaX.current <= -swipeThreshold && pageIndex < pageCount - 1) {
      setPageIndex((current) => Math.min(current + 1, pageCount - 1));
    }

    if (touchDeltaX.current >= swipeThreshold && pageIndex > 0) {
      setPageIndex((current) => Math.max(current - 1, 0));
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <div className="space-y-10">
      <header className="border-b border-outline-variant/20 bg-background/80 px-6 py-10 md:px-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-base uppercase tracking-[0.3em] text-outline">{pageContent.hero.eyebrow}</p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">{pageContent.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              {pageContent.hero.description}
            </p>
          </div>
        </div>
      </header>

      <CategoryNav />

      <Section
        className="px-6 md:px-8"
        title={categoryContent ? categoryContent.title : pageContent.list.featuredFallbackTitle}
        caption={categoryContent ? pageContent.list.categoryCaption : pageContent.list.featuredFallbackCaption}
      >
        {categoryContent ? (
          <div className="mb-12 flex flex-col gap-5 border-b border-outline-variant/20 pb-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">{categoryContent.description}</p>
            <div className="text-base uppercase tracking-[0.3em] text-outline">{totalLabel}</div>
          </div>
        ) : null}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredItems.slice(0, 2).map((entry) => (
            <Link key={entry.id} to={entry.to} className="group block space-y-4">
              <div className="aspect-[4/5] overflow-hidden bg-surface-container-low">
                <img src={entry.image} alt={entry.title} className="h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-105" />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="text-base uppercase tracking-[0.3em] text-accent">Entry #{entry.id} / {entry.category}</span>
                  <h2 className="mt-3 text-2xl font-semibold">{entry.title}</h2>
                </div>
                <span className="text-base uppercase tracking-[0.3em] text-outline">{entry.year}</span>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-on-surface-variant">
                {entry.description || categoryContent?.featured.description || '재료와 침묵, 구조와 여백에 대한 짧은 기록을 담은 아카이브 노트.'}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <div id="archive-list" className="scroll-mt-24">
        <Section className="px-6 md:px-8">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                {listTitle}
              </h2>
              <p className="text-base uppercase tracking-[0.22em] text-outline mb-3 mt-5">
                {listCaption}
              </p>
            </div>
            <div className="flex w-full items-stretch gap-2 sm:max-w-md md:w-auto md:gap-3">
              <div className="relative min-w-0 flex-1">
                <input
                  className="h-full min-h-[48px] w-full border-b border-outline-variant/30 bg-transparent px-1 py-3 text-[16px] outline-none transition-colors placeholder:text-outline-variant/60 focus:border-on-surface md:text-base"
                  placeholder={pageContent.list.searchPlaceholder}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleSearchSubmit();
                    }
                  }}
                />
              </div>
              <button
                type="button"
                className="shrink-0 whitespace-nowrap border border-outline-variant/20 bg-surface px-4 py-3 text-base uppercase tracking-[0.2em] text-outline transition-colors hover:border-outline hover:text-on-surface sm:px-5"
                onClick={handleSearchSubmit}
              >
                {pageContent.list.searchButtonLabel}
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="hidden grid-cols-12 gap-4 border-b border-on-surface/10 pb-4 px-4 text-base uppercase tracking-[0.3em] text-outline md:grid md:px-6">
              <div className="col-span-1">{pageContent.list.columns[0]}</div>
              <div className="col-span-4">{pageContent.list.columns[1]}</div>
              <div className="col-span-2">{pageContent.list.columns[2]}</div>
              <div className="col-span-3">{pageContent.list.columns[3]}</div>
              <div className="col-span-2 text-right">{pageContent.list.columns[4]}</div>
            </div>
            {filteredArchiveList.length === 0 ? (
              <div className="py-16 text-center text-base text-on-surface-variant">
                {pageContent.list.emptyMessage}
              </div>
            ) : (
              <>
                <div
                  className="relative overflow-hidden overscroll-x-contain"
                  style={{ touchAction: isMobile ? 'pan-y' : 'auto' }}
                  onTouchStart={isMobile ? handleTouchStart : undefined}
                  onTouchMove={isMobile ? handleTouchMove : undefined}
                  onTouchEnd={isMobile ? handleTouchEnd : undefined}
                >
                  <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${pageIndex * 100}%)` }}
                  >
                    {pageGroups.map((group, groupIndex) => (
                      <div key={groupIndex} className="min-w-full">
                        <div className="space-y-3 md:space-y-0 md:divide-y md:divide-outline-variant/10">
                          {group.map((item) => (
                            <Link
                              key={item.ref}
                              to={item.to}
                              className="group block border border-outline-variant/20 bg-background/70 px-4 py-5 transition-colors hover:border-accent/25 hover:bg-surface md:grid md:grid-cols-12 md:items-center md:gap-4 md:border-0 md:bg-transparent md:px-6 md:py-6 md:hover:bg-surface-container-low"
                            >
                              <div className="flex items-start justify-between gap-4 md:contents">
                                <div className="space-y-2 md:space-y-0">
                                  <div className="text-base uppercase tracking-[0.24em] text-outline md:col-span-1">{item.ref}</div>
                                  <div className="text-base uppercase tracking-[0.16em] text-on-surface-variant md:hidden">{item.category}</div>
                                </div>
                                <div className="flex items-center gap-2 md:hidden">
                                  <span className="text-base uppercase tracking-[0.16em] text-outline">{item.year}</span>
                                  <span className="material-symbols-outlined text-[18px] text-outline/60 transition-colors group-hover:text-accent">
                                    arrow_outward
                                  </span>
                                </div>
                              </div>
                              <div className="mt-3 flex items-center gap-4 md:col-span-4 md:mt-0">
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
                              <div className="mt-3 hidden text-base uppercase tracking-[0.22em] text-on-surface-variant md:col-span-2 md:mt-0 md:block">{item.category}</div>
                              <div className="mt-3 md:col-span-3 md:mt-0">
                                <div className="text-base uppercase tracking-[0.22em] text-on-surface-variant">{item.creator}</div>
                                {item.description ? (
                                  <p className="mt-2 line-clamp-2 text-base normal-case tracking-normal text-on-surface-variant">
                                    {item.description}
                                  </p>
                                ) : null}
                              </div>
                              <div className="mt-3 hidden text-base uppercase tracking-[0.22em] text-outline md:col-span-2 md:mt-0 md:flex md:justify-end md:text-right">
                                {item.year}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    className="rounded-full px-4 py-2 text-base uppercase tracking-[0.24em] text-outline transition hover:text-accent disabled:opacity-40"
                    onClick={() => setPageIndex((current) => Math.max(current - 1, 0))}
                    disabled={pageIndex === 0}
                  >
                    {pageContent.list.previousLabel}
                  </button>
                  <div className="flex items-center gap-2 rounded-full px-4 py-2 text-base uppercase tracking-[0.24em] text-outline">
                    <span>{pageIndex + 1}</span>
                    <span>/</span>
                    <span>{pageCount}</span>
                  </div>
                  <button
                    type="button"
                    className="rounded-full px-4 py-2 text-base uppercase tracking-[0.24em] text-outline transition hover:text-accent disabled:opacity-40"
                    onClick={() => setPageIndex((current) => Math.min(current + 1, pageCount - 1))}
                    disabled={pageIndex === pageCount - 1}
                  >
                    {pageContent.list.nextLabel}
                  </button>
                </div>
              </>
            )}
          </div>
        </Section>
      </div>
    </div>
  );
}
