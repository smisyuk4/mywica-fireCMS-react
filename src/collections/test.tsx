import { buildCollection } from '@firecms/core';
import { localeCollection } from './locales';
import { Test } from '../types';
import { ProductDetailPreview } from './entity_views/ProductDetailPreview';

export const testCollection = buildCollection<Test>({
  name: 'Test',
  singularName: 'Test',
  id: 'test',
  path: 'test',
  group: 'My-test',
  //icon: 'shopping_cart',
  //description: 'List of the products currently sold in our shop',
  textSearchEnabled: true,
  // Here you can override the user permissions
  // permissions: ({ authController }) => ({
  //     read: true,
  //     edit: true,
  //     create: true,
  //     delete: true
  // }),
  subcollections: [localeCollection],
  entityViews: [
    //{
    //  key: 'preview',
    //  name: 'Sample preview',
    //  Builder: ProductDetailPreview,
    //},
  ],
  properties: {
    name: {
      dataType: 'string',
      name: 'Name',
      description: 'Name of this test',
      clearable: true,
      validation: {
        required: false,
      },
    },
  },
});
