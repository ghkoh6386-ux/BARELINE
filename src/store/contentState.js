import {
  aboutPageContent,
  aboutSections,
  archiveCategoryContent,
  archiveEntries,
  archiveList,
  categoryItems,
  featuredCards,
  navItems,
} from '../data/content';
import { archiveDetailsMap } from '../data/archiveDetails';
import {
  spaceContentById,
  spaceDefaultEntryId,
  spaceEntries,
} from '../data/spaceContent';

export const initialContentState = {
  navItems,
  categoryItems,
  archiveCategoryContent,
  featuredCards,
  archiveEntries,
  archiveList,
  aboutSections,
  aboutPageContent,
  spaceEntries,
  spaceContentById,
  spaceDefaultEntryId,
  archiveDetails: archiveDetailsMap,
};
