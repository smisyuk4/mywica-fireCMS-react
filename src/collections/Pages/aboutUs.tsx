import { buildProperties } from "@firecms/core";

export const aboutUsProperties = buildProperties({
		title: ({ entityId }) => {
			return {
				name: 'page title',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? false : true,
			}
		},
		text: ({ entityId }) => {
			return {
				name: 'page description',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? false : true,
			}
		},
		image: ({ entityId }) => {		
			return {
				name: 'image',
				dataType: 'string',
				storage: {
					storagePath: (context) => 'avatars/aboutUs/',
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
		orderProperty: ({ entityId, path }) => {
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
});