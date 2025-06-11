import { buildCollection } from '@firecms/core';
import { locales } from '../../customEnums';
import { adventureSetsCallbacks } from '../../customCallbacks';

export const setsSubCollection = buildCollection({
	id: 'sets',
	path: 'sets',
	name: 'sets',
	singularName: 'set',
	customId: locales,
	callbacks: adventureSetsCallbacks,
	properties: {
		banner: {
			name: 'image (1280 x 120)', 
			validation: { required: true }, 
			dataType: 'string',
			storage: {
				storagePath: ({ path }) => {
					const id = path?.split('/')[1];
					return id ? `adventures/${id}/` : 'adventures/unknown/';
				},
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
		},
		title: {
			name: 'title',
			validation: { required: true, trim: true },
			dataType: 'string',
		},
		description: {
			name: 'description',
			validation: { required: true, trim: true },
			dataType: 'string',
		},
		id: {
			name: 'id',
			dataType: 'number',
			readOnly: true,
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
