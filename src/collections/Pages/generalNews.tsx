import { buildProperties } from "@firecms/core";

export const generalNewsProperties = buildProperties({
		title: ({ entityId }) => {
			return {
				name: 'title',
				dataType: 'string',
				//readOnly: entityId === 'paragraph' ? false : true,
			}
		},
		text: ({ entityId }) => {
			return {
				name: 'text',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? true : false,
			}
		},
		images: ({ entityId }) => {		
			return {
				name: 'images',
				dataType: 'map',
				readOnly: entityId === 'paragraph' ? true : false,
				properties: {
					mobile: {
						name: 'mobile',
						readOnly: entityId === 'paragraph' ? true : false,
						dataType: 'string',
						storage: {
							storagePath: (context) => `news/general/${context.entityId}/`,
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
					},
					md: {
						name: 'md',
						readOnly: entityId === 'paragraph' ? true : false,
						dataType: 'string',
						storage: {
							storagePath: (context) => `news/general/${context.entityId}/`,
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
				},
			}
			
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