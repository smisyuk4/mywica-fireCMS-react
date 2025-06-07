import { buildCollection } from '@firecms/core';
import { reuseIdCallbacks } from '../../customCallbacks';

export const buildMetadataCollection = (basePath: string, groupName: string, pageId: string) => buildCollection({
	name: pageId === 'video' ? 'Video' : 'metadata',
	id: `${basePath}/metadata`,
	path: `${basePath}/metadata`,
	description: pageId === 'video' ? 'page metadata' : '',
	group: pageId === 'video' ? 'Secondary content' : groupName,
	icon: pageId === 'video' ? 'ondemand_video' : 'menu_book',
	customId: true,
	callbacks: reuseIdCallbacks,
	textSearchEnabled: true,
	permissions: ({ authController }) => ({
		read: true,
		edit: true,
		create: true,
		delete: true
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
