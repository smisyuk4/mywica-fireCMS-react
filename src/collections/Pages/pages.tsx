import { buildCollection } from '@firecms/core';
import { metadataSubCollection } from './metadata';
import { dataUkSubCollection } from './dataUk';
import { dataEnSubCollection } from './dataEn';
import { dataHeSubCollection } from './dataHe';

export const pagesCollection = buildCollection({
  name: 'Pages',
  singularName: 'Pages',
  id: 'pages',
  path: 'pages',
	group: 'Pages',
  description: 'metadata, dataUk, dataEn, dataHe',
	icon: 'menu_book',
  textSearchEnabled: true,
   permissions: ({ authController }) => ({
       read: true,
       edit: false,
       create: false,
       delete: false
   }),
  subcollections: [metadataSubCollection, dataUkSubCollection, dataEnSubCollection, dataHeSubCollection],
  properties: {},
});
