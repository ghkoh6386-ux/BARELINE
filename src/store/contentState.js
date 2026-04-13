import {
  aboutPageContent,
  aboutSections,
  archiveCategoryContent,
  archiveEntries,
  archiveList,
  archivePageContent,
  categoryItems,
  categoryNavContent,
  contactPageContent,
  footerContent,
  homePageContent,
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
  archiveEntries,
  archiveList,
  aboutSections,
  aboutPageContent,
  homePageContent,
  archivePageContent,
  categoryNavContent,
  footerContent,
  contactPageContent,
  spaceEntries,
  spaceContentById,
  spaceDefaultEntryId,
  archiveDetails: archiveDetailsMap,
};
