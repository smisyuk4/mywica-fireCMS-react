import { buildCollection } from '@firecms/core';
import { ukSubCollection } from './uk';
import { enSubCollection } from './en';
import { heSubCollection } from './he';


export const factsCollection = buildCollection({
  name: 'Facts',
  singularName: 'Facts',
  id: 'facts',
  path: 'facts',
  group: 'facts',
  description: 'data: uk, en, he',
  textSearchEnabled: true,
  // Here you can override the user permissions
  // permissions: ({ authController }) => ({
  //     read: true,
  //     edit: true,
  //     create: true,
  //     delete: true
  // }),
  subcollections: [ukSubCollection, enSubCollection, heSubCollection],
  entityViews: [
    //{
    //  key: 'preview',
    //  name: 'Sample preview',
    //  Builder: ProductDetailPreview,
    //},
  ],
  properties: {},
});
