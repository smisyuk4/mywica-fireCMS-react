import { buildCollection } from '@firecms/core';

export const metadataSubCollection = buildCollection({
	id: 'metadata',
	path: 'metadata',
	name: 'Metadata',
	singularName: 'Metadata',
	properties: {
		title: {
			name: 'title',
			validation: { required: true },
			dataType: 'string',
		},
		description: {
			name: 'description',
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
