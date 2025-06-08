import { buildCollection } from '@firecms/core';
import { setsSubCollection } from './sets';
import { navigationSubCollection } from './navigation';
import { cardsSubCollection } from './cards';
import { reuseIdCallbacks } from '../../customCallbacks';
import { imageProperty } from './image';
export const adventuresCollection = buildCollection({
	name: 'Adventures',
	singularName: 'Adventure',
	id: 'adventures',
	path: 'adventures',
	group: 'Main content',
	customId: true,
	description: 'Bg for adventures, basic cards, navigation, sets',
	callbacks: reuseIdCallbacks,
	initialSort: ['createdAt', "desc"],
	subcollections: [navigationSubCollection, cardsSubCollection, setsSubCollection],
	propertiesOrder: ['id', 'mainImagesSet', 'subcollection:navigation', 'subcollection:cards', 'subcollection:sets', 'createdAt', 'updatedAt'],
	permissions: ({ authController }) => ({
			read: true,
			edit: true,
			create: true,
			delete: true
	}),
	properties: {
		mainImagesSet: {
			name: 'Images Set',
			validation: { required: true },
			dataType: 'map',
			properties: {
				...imageProperty('mobile'),
				...imageProperty('sm'),
				...imageProperty('lg'),
				...imageProperty('lg-h'),
				...imageProperty('xl-h'),
				...imageProperty('2xl'),
			}
		},
		id: {
			name: 'id',
			dataType: 'string',
		},
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
