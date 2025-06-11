import { buildCollection } from '@firecms/core';
import { imageProperty } from './image';
import { adventureNavigationCallbacks } from '../../customCallbacks';

export const navigationSubCollection = buildCollection({
	id: 'navigation',
	path: 'navigation',
	name: 'navigation',
	singularName: 'navigation',
	customId: true,
	callbacks: adventureNavigationCallbacks,
	properties: {
		...imageProperty('navigation image (300 x 300)'),
		title: {
			name: 'title',
			dataType: 'string',
			readOnly: true
		},
		id: {
			name: 'id',
			dataType: 'number',
			readOnly: true,
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
