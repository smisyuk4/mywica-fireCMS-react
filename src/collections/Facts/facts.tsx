import { buildCollection } from '@firecms/core';
import { ukSubCollection } from './uk';
import { enSubCollection } from './en';
import { heSubCollection } from './he';


export const factsCollection = buildCollection({
  name: 'Facts modal',
  singularName: 'Fact',
  id: 'facts',
  path: 'facts',
	group: 'Secondary content',
	icon:'fact_check',
  description: 'data: uk, en, he',
	propertiesOrder: ['subcollection:uk', 'subcollection:en', 'subcollection:he'],
	permissions: ({ authController }) => ({
			read: true,
			edit: false,
			create: false,
			delete: false
	}),
  subcollections: [ukSubCollection, enSubCollection, heSubCollection],
  properties: {
		createdAt: {
			name: 'createdAt',
			dataType: 'date',
			autoValue: "on_create"
		},
		updatedAt: {
			name: 'updatedAt',
			dataType: 'date',
			autoValue: "on_update"
		},
	},
});
