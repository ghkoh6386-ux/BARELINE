import { createSelector } from '@reduxjs/toolkit';

export const selectContentState = (state) => state.content;

export const selectNavItems = createSelector(
  [selectContentState],
  (content) => content.navItems,
);

export const selectCategoryItems = createSelector(
  [selectContentState],
  (content) => content.categoryItems,
);

export const selectArchiveCategoryContent = createSelector(
  [selectContentState],
  (content) => content.archiveCategoryContent,
);

export const selectArchiveCategoryContentById = createSelector(
  [selectArchiveCategoryContent, (_, categoryId) => categoryId],
  (categoryContent, categoryId) => (categoryId ? categoryContent[categoryId] ?? null : null),
);

export const selectFeaturedCards = createSelector(
  [selectContentState],
  (content) => content.featuredCards,
);

export const selectArchiveEntries = createSelector(
  [selectContentState],
  (content) => content.archiveEntries,
);

export const selectArchiveList = createSelector(
  [selectContentState],
  (content) => content.archiveList,
);

export const selectAboutSections = createSelector(
  [selectContentState],
  (content) => content.aboutSections,
);

export const selectAboutPageContent = createSelector(
  [selectContentState],
  (content) => content.aboutPageContent,
);
