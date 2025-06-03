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
  textSearchEnabled: true,
  // Here you can override the user permissions
  // permissions: ({ authController }) => ({
  //     read: true,
  //     edit: true,
  //     create: true,
  //     delete: true
  // }),
  subcollections: [metadataSubCollection, dataUkSubCollection, dataEnSubCollection, dataHeSubCollection],
  entityViews: [
    //{
    //  key: 'preview',
    //  name: 'Sample preview',
    //  Builder: ProductDetailPreview,
    //},
  ],
  properties: {},
});
