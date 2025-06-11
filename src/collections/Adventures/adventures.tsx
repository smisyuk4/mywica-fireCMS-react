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
	propertiesOrder: ['mainImagesSet', 'subcollection:navigation', 'subcollection:cards', 'subcollection:sets', 'id', 'createdAt', 'updatedAt'],
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
				...imageProperty('mobile', 'mobile (380 x 800)'),
				...imageProperty('sm', 'sm (768 x 1024)'),
				...imageProperty('lg', 'lg (1024 x 768)'),
				...imageProperty('lg-h', 'lg-h (800 x 1280)'),
				...imageProperty('xl-h', 'xl-h (1440 x 900)'),
				...imageProperty('2xl', '2xl (1440 x 1024)'),
			}
		},
		id: {
			name: 'id',
			dataType: 'string',
			readOnly: true
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
