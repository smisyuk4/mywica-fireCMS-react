import { buildCollection } from '@firecms/core';
import { reuseIdWithCleanCallbacks } from '../../customCallbacks';
import { guilds } from '../../customEnums';

export const buildDataHeCollection = (basePath: string, groupName: string) => buildCollection({
	name: 'data He',
	id: `${basePath}/dataHe`,
	path: `${basePath}/dataHe`,
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
		text: ({ entityId, path }) => {
			const pathId = path.split('/')[1]
			const isReadOnly = pathId === 'guild' ? 
										true : entityId === 'paragraph' ?
										false : true;
			return {
				name: 'page text',
				dataType: 'string',
				readOnly: isReadOnly,
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
		name: ({ entityId, path }) => {
			const pathId = path.split('/')[1]
			const isReadOnly = entityId === 'paragraph' ?
											true :	pathId === 'guild' ? 
											true : pathId === 'aboutUs' ? 
											false : true;
			return {
				name: 'name',
				dataType: 'string',
				readOnly: isReadOnly,
			}
		},	
		role: ({ entityId, path }) => {
			const pathId = path.split('/')[1]
			const isReadOnly = entityId === 'paragraph' ?
											true :	pathId === 'guild' ? 
											true : pathId === 'aboutUs' ? 
											false : true;
			return {
				name: 'role',
				dataType: 'string',
				readOnly: isReadOnly,
			}
		},	
		socialLink: ({ entityId, path }) => {
			const pathId = path.split('/')[1]
			const isReadOnly = entityId === 'paragraph' ?
											true :	pathId === 'guild' ? 
											true : pathId === 'aboutUs' ? 
											false : true;
			return {
				name: 'social link',
				dataType: 'string',
				url: true,
				validation: {
					matches: /^https?:\/\/.+$/i,
					matchesMessage: "Link must start with http:// or https://",
				},
				readOnly: isReadOnly,
			}
		},
		orderProperty: ({ entityId, path }) => {
			const pathId = path.split('/')[1]
			const isReadOnly = entityId === 'paragraph' ?
											true :	pathId === 'guild' ? 
											true : pathId === 'aboutUs' ? 
											false : true;
			return {
				name: 'order',
				dataType: 'number',
				readOnly: isReadOnly,
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
