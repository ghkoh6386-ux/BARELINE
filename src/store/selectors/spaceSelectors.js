import { createSelector } from '@reduxjs/toolkit';
import { selectContentState } from './contentSelectors';

export const selectSpaceRelatedEntries = createSelector(
  [selectContentState],
  (content) => content.spaceEntries,
);

export const selectSpacePageContent = createSelector(
  [selectContentState, (_, entryId) => entryId],
  (content, entryId) => content.spaceContentById[entryId] ?? content.spaceContentById[content.spaceDefaultEntryId],
);

export const selectSpaceDefaultEntryId = createSelector(
  [selectContentState],
  (content) => content.spaceDefaultEntryId,
);
