import { buildCollection } from '@firecms/core';

export const metadataSubCollection = buildCollection({
	id: 'metadata',
	path: 'metadata',
	name: 'Metadata',
	singularName: 'Metadata',
	permissions: ({ authController }) => ({
		read: true,
		edit: true,
		create: false,
		delete: false
	}),
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
