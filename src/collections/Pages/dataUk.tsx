import { buildCollection } from '@firecms/core';
import { reuseIdWithCleanCallbacks } from '../../customCallbacks';
import { guilds } from '../../customEnums';

export const buildDataUkCollection = (basePath: string, groupName: string) => buildCollection({
	name: 'data Uk',
	id: `${basePath}/dataUk`,
	path: `${basePath}/dataUk`,
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
		title: ({ entityId }) => {
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
		// guild
		description: ({ entityId, path }) => {
			if (path.split('/')[1] !== 'guild') {
				return {
					name: 'description',
					dataType: 'string',
					readOnly: true,
				}
			}

			return {
				name: 'description',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? true : false,
			}
		},	
		guild: ({ entityId, path }) => {
				const pathId = path.split('/')[1]
				const isReadOnly = entityId === 'paragraph' ?
											true :	pathId === 'guild' ? 
											false : true;
				return {
					name: 'guild',
					dataType: 'string',
					enumValues: guilds,
					readOnly: isReadOnly,
				}
		},
		image: ({ entityId, path }) => {
			const pathId = path.split('/')[1]
			const storagePath = pathId === 'guild' ? 
													'guilds/' : pathId === 'aboutUs' ? 
													'avatars/aboutUs/' : 'unknown/';

			const isReadOnly = entityId === 'paragraph' ?
													true :	pathId === 'guild' ? 
													false : pathId === 'aboutUs' ? 
													false : true;
			
			return {
				name: 'image',
				dataType: 'string',
				storage: {
					storagePath: (context) => storagePath,
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
				readOnly: isReadOnly,
			}
		},
		// about us
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
