import {
  aboutPageContent,
  aboutSections,
  archiveCategoryContent,
  archiveEntries,
  archiveList,
  archivePageContent,
  categoryItems,
  contactPageContent,
  footerContent,
  homePageContent,
  navItems,
  uiContent,
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
  archiveEntries,
  archiveList,
  aboutSections,
  aboutPageContent,
  homePageContent,
  archivePageContent,
  uiContent,
  footerContent,
  contactPageContent,
  spaceEntries,
  spaceContentById,
  spaceDefaultEntryId,
  archiveDetails: archiveDetailsMap,
};
