import { buildCollection } from '@firecms/core';
import { reuseIdCallbacks } from '../../customCallbacks';

export const buildDataEnCollection = (basePath: string, groupName: string) => buildCollection({
	name: 'data En',
	singularName: 'Pages',
	id: `${basePath}/dataEn`,
	path: `${basePath}/dataEn`,
	group: groupName,
	icon: 'spellcheck',
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
			name: 'page title',
			dataType: 'string',
		},
		text: {
			name: 'page text',
			dataType: 'string',
			markdown: true
		},
		avatar: {
			name: 'avatar',
			dataType: 'string',
			storage: {
				storagePath: (context) => `avatars/aboutUs/`,
        fileName: (context) => {
            return context.file.name;
        },
				acceptedFiles: ["image/webp"],
				metadata: {
						cacheControl: "max-age=1000000"
				},
				storeUrl: true,
				maxSize: 150 * 1024 // 🔺 Обмеження: 150 КБ
			}
		},
		name: {
			name: 'name',
			dataType: 'string',
		},
		role: {
			name: 'role',
			dataType: 'string',
		},
		socialLink: {
			name: 'socialLink',
			dataType: 'string',
			url: true,
			  validation: {
				matches: /^https?:\/\/.+$/i,
				matchesMessage: "Link must start with http:// or https://",
			}
		},
		orderProperty: {
			name: 'orderProperty',
			dataType: 'number',
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
