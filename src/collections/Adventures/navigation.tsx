import { buildCollection } from '@firecms/core';

export const navigationSubCollection = buildCollection({
	id: 'navigation',
	path: 'navigation',
	name: 'navigation',
	singularName: 'navigation',
	properties: {
		id: {
			name: 'id',
			validation: { required: true },
			dataType: 'number',
		},
		image: {
			name: 'image',
			validation: { required: true },
			dataType: 'string',
		},
		title: {
			name: 'title',
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
