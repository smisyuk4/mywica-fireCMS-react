import { buildCollection } from '@firecms/core';
import { reuseIdWithCleanCallbacks } from '../../customCallbacks';

export const buildDataEnCollection = (basePath: string, groupName: string) => buildCollection({
	name: 'data En',
	id: `${basePath}/dataEn`,
	path: `${basePath}/dataEn`,
	group: groupName,
	icon: 'format_underlined',
	customId: true,
	callbacks: reuseIdWithCleanCallbacks,
	textSearchEnabled: true,
	permissions: ({ authController }) => ({
		read: true,
		edit: true,
		create: true,
		delete: true
}),
	properties: {
		title: ({ entityId, path }) => {
			console.log(path); // pages/publicOffer/dataEn
			const pathId = path.split('/')[1];
			console.log(pathId); // publicOffer
			
			
			return {
				name: 'page title',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? false : true,
			}
		},
		text: ({ entityId }) => {
			return {
				name: 'page text',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? false : true,
			}
		},	
		avatar: ({ entityId }) => {
			return {
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
				},
				readOnly: entityId === 'paragraph' ? true : false,
			}
		},
		name: ({ entityId }) => {
			return {
				name: 'name',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? true : false,
			}
		},	
		role: ({ entityId }) => {
			return {
				name: 'role',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? true : false,
			}
		},	
		socialLink: ({ entityId }) => {
			return {
				name: 'social link',
				dataType: 'string',
				url: true,
				validation: {
					matches: /^https?:\/\/.+$/i,
					matchesMessage: "Link must start with http:// or https://",
				},
				readOnly: entityId === 'paragraph' ? true : false,
			}
		},
		orderProperty: ({ entityId }) => {
			return {
				name: 'order',
				dataType: 'number',
				readOnly: entityId === 'paragraph' ? true : false,
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
