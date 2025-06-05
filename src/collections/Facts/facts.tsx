import { buildCollection } from '@firecms/core';
import { ukSubCollection } from './uk';
import { enSubCollection } from './en';
import { heSubCollection } from './he';


export const factsCollection = buildCollection({
  name: 'Facts modal',
  singularName: 'Facts',
  id: 'facts',
  path: 'facts',
	group: 'Secondary content',
	icon:'fact_check',
  description: 'data: uk, en, he',
  textSearchEnabled: true,
	permissions: ({ authController }) => ({
			read: true,
			edit: false,
			create: false,
			delete: false
	}),
  subcollections: [ukSubCollection, enSubCollection, heSubCollection],
  properties: {},
});
