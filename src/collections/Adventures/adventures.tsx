import { buildCollection } from '@firecms/core';
import { setsSubCollection } from './sets';
import { navigationSubCollection } from './navigation';
import { cardsSubCollection } from './cards';

export const adventuresCollection = buildCollection({
	name: 'Adventures',
	singularName: 'Adventures',
	id: 'adventures',
	path: 'adventures',
	group: 'Main content',
	customId: true,
	description: 'Bg for adventures, basic cards, navigation, sets',
	 permissions: ({ authController }) => ({
	     read: true,
	     edit: true,
	     create: true,
	     delete: true
	 }),
	subcollections: [setsSubCollection, navigationSubCollection, cardsSubCollection],
	entityViews: [
		//{
		//  key: 'preview',
		//  name: 'Sample preview',
		//  Builder: ProductDetailPreview,
		//},
	],
	properties: {
		title: {
			name: 'title',
			validation: { required: true },
			dataType: 'string',
		},
		navigation: {
			name: 'navigation',
			validation: { required: true },
			dataType: 'string',
		},
		mainImagesSet: {
			name: 'mainImagesSet',
			validation: { required: true },
			dataType: 'map',
			properties: {
				mobile: {
					name: 'mobile',
					validation: { required: true },
					dataType: 'string',
				},
				sm: {
					name: 'sm',
					validation: { required: true },
					dataType: 'string',
				},
				lg: {
					name: 'lg',
					validation: { required: true },
					dataType: 'string',
				},
				'lg-h': {
					name: 'lg-h',
					validation: { required: true },
					dataType: 'string',
				},
				'xl-h': {
					name: 'xl-h',
					validation: { required: true },
					dataType: 'string',
				},
				'2xl': {
					name: '2xl',
					validation: { required: true },
					dataType: 'string',
				},
			}
		},
		id: {
			name: 'id',
			validation: { required: true },
			dataType: 'string',
		},
		createdAt: {
			name: 'createdAt',
			validation: { required: true },
			dataType: 'date',
			autoValue: "on_create"
		},
		updatedAt: {
			name: 'updatedAt',
			validation: { required: true },
			dataType: 'date',
			autoValue: "on_update"
		},
	},
});
