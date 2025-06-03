import { buildCollection } from '@firecms/core';

export const ukSubCollection = buildCollection({
	id: 'uk',
	path: 'uk',
	name: 'uk',
	singularName: 'uk',
	properties: {
		id: {
			name: 'id',
			validation: { required: true },
			dataType: 'number',
		},
		title: {
			name: 'title',
			validation: { required: true },
			dataType: 'string',
		},
		text: {
			name: 'text',
			validation: { required: true },
			dataType: 'string',
		},
		image: {
			name: 'image',
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
