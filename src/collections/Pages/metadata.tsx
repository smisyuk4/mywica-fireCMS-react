import { buildCollection } from '@firecms/core';

export const buildMetadataCollection = (basePath: string, groupName: string) => buildCollection({
	name: 'metadata',
	singularName: 'Pages',
	id: `${basePath}/metadata`,
	path: `${basePath}/metadata`,
	group: groupName,
	icon: 'menu_book',
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
