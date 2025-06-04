import { buildCollection } from '@firecms/core';
import { factsCallbacks } from '../../customCallbacks';

export const ukSubCollection = buildCollection({
	id: 'uk',
	path: 'uk',
	name: 'uk',
	singularName: 'uk',
	initialSort: ['id', "desc"],
	customId: true,
	callbacks: factsCallbacks,
	properties: {
		title: {
			name: 'title',
			validation: { required: true },
			dataType: 'string',
		},
		text: {
			name: 'text',
			validation: { required: true },
			dataType: 'string',
		},
		image: {
			name: 'image',
			validation: { required: true },
			dataType: 'string',
			storage: {
				storagePath: () => "facts/",
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
		id: {
			name: 'id',
			dataType: 'number',
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
