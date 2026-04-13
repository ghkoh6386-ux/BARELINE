import { createSelector } from '@reduxjs/toolkit';
import {
  selectArchiveCategoryContentById,
  selectArchiveEntries,
  selectArchiveList,
  selectContentState,
} from './contentSelectors';

export const selectArchiveDetailsMap = createSelector(
  [selectContentState],
  (content) => content.archiveDetails,
);

const buildArchiveDetail = (entries, list, detailsMap, entryId) => {
  const archiveListEntry = list.find((item) => item.ref === entryId);
  const normalizedArchiveListEntry = archiveListEntry
    ? {
        id: archiveListEntry.ref,
        categoryId: archiveListEntry.categoryId,
        category: archiveListEntry.category,
        title: archiveListEntry.title,
        year: archiveListEntry.year,
        images: {
          hero: archiveListEntry.image,
          related: archiveListEntry.image,
        },
      }
    : null;

  const entry = [
    ...entries,
    ...(normalizedArchiveListEntry ? [normalizedArchiveListEntry] : []),
  ].find((item) => item.id === entryId);

  if (!entry) {
    return null;
  }

  return {
    ...entry,
    ...detailsMap[entryId],
    images: {
      ...entry.images,
      ...detailsMap[entryId]?.images,
    },
  };
};

const buildArchiveNavigationTarget = (entries, detailsMap, item, fallbackQuery = '') => {
  const linkedEntry = entries.find((entry) => entry.categoryId === item.categoryId);

  if (detailsMap[item.ref]) {
    return `/archive/${item.ref}`;
  }

  if (linkedEntry) {
    return `/archive/${linkedEntry.id}`;
  }

  return `/archive${fallbackQuery}`;
};

export const selectArchiveDetailById = createSelector(
  [selectArchiveEntries, selectArchiveList, selectArchiveDetailsMap, (_, entryId) => entryId],
  (entries, list, detailsMap, entryId) => buildArchiveDetail(entries, list, detailsMap, entryId),
);

export const selectRelatedArchiveDetails = createSelector(
  [selectArchiveEntries, selectArchiveList, selectArchiveDetailsMap, (_, entryId) => entryId],
  (entries, list, detailsMap, entryId) => {
    const detail = detailsMap[entryId];

    if (!detail?.relatedIds) {
      return [];
    }

    return detail.relatedIds
      .map((relatedId) => buildArchiveDetail(entries, list, detailsMap, relatedId))
      .filter(Boolean);
  },
);

export const selectEnrichedArchiveList = createSelector(
  [
    selectArchiveEntries,
    selectArchiveList,
    selectArchiveDetailsMap,
    selectArchiveCategoryContentById,
    (_, categoryId) => categoryId,
  ],
  (entries, list, detailsMap, categoryContent, categoryId) => {
    const fallbackQuery = categoryId ? `?category=${categoryId}` : '';
    const filteredList = categoryId
      ? list.filter((item) => item.categoryId === categoryId)
      : list;

    return filteredList.map((item) => {
      const detail = buildArchiveDetail(entries, list, detailsMap, item.ref);

      return {
        ...item,
        to: buildArchiveNavigationTarget(entries, detailsMap, item, fallbackQuery),
        image: detail?.images?.related ?? detail?.images?.hero ?? item.image,
        subtitle: detail?.subtitle ?? '',
        description: detail?.description ?? categoryContent?.featured.description ?? '',
      };
    });
  },
);

export const selectFeaturedArchiveItems = createSelector(
  [
    selectArchiveEntries,
    selectArchiveDetailsMap,
    selectEnrichedArchiveList,
    selectArchiveCategoryContentById,
    (_, categoryId) => categoryId,
  ],
  (entries, detailsMap, enrichedList, categoryContent, categoryId) => {
    const filteredEntries = categoryId
      ? entries.filter((entry) => entry.categoryId === categoryId)
      : entries;

    if (filteredEntries.length > 0) {
      return filteredEntries.map((entry) => {
        const detail = {
          ...entry,
          ...detailsMap[entry.id],
          images: {
            ...entry.images,
            ...detailsMap[entry.id]?.images,
          },
        };

        return {
          id: entry.id,
          category: detail?.category ?? entry.category,
          title: detail?.title ?? entry.title,
          year: detail?.year ?? entry.year,
          to: `/archive/${entry.id}`,
          image: detail?.images?.hero ?? detail?.images?.related ?? '/assets/archive-card.svg',
          description: detail?.description ?? categoryContent?.featured.description ?? '',
        };
      });
    }

    return enrichedList.slice(0, 2).map((item) => ({
      id: item.ref,
      category: item.category,
      title: item.title,
      year: item.year,
      to: item.to,
      image: item.image,
      description: item.description,
    }));
  },
);
