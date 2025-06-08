import { buildProperties } from "@firecms/core";

export const specialNewsProperties = buildProperties({
		key: ({ entityId }) => {
			return {
				name: 'key',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? true : false,
			}
		},
		title: () => {
			return {
				name: 'title',
				dataType: 'string',
				validation: { trim: true },
			}
		},
		text: ({ entityId }) => {
			return {
				name: 'text',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? true : false,
				validation: { trim: true },
			}
		},
		label: ({ entityId }) => {
			return {
				name: 'label',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? true : false,
				validation: { trim: true },
			}
		},
		image: ({ entityId }) => {		
			return {
				name: 'image',
				readOnly: entityId === 'paragraph' ? true : false,
				dataType: 'string',
				storage: {
					storagePath: ({ values }) => `news/special/${values.key}/`,
					fileName: ({ file }) => {
							return file.name;
					},
					acceptedFiles: ["image/webp"],
					metadata: {
							cacheControl: "max-age=1000000"
					},
					storeUrl: true,
					maxSize: 150 * 1024 // 🔺 Обмеження: 150 КБ
				},

			
			}
		},	
		id: {
			name: 'id',
			dataType: 'string',
			readOnly: true,
			hideFromCollection: true
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