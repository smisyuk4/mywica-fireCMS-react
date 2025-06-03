import { buildCollection } from '@firecms/core';
import { locales } from '../../customEnums';


export const setsSubCollection = buildCollection({
	id: 'sets',
	path: 'sets',
	name: 'sets',
	singularName: 'sets',
	customId: locales,
	properties: {
		banner: {
			name: 'banner',
			validation: { required: true },
			dataType: 'string',
		},
		description: {
			name: 'description',
			validation: { required: true },
			dataType: 'string',
		},
		title: {
			name: 'title',
			validation: { required: true },
			dataType: 'string',
		},
		createdAt: {
			name: 'createdAt',
			validation: { required: true },
			dataType: 'date',
			autoValue: "on_create"
		},
		updatedAt: {
			name: 'updatedAt',
			validation: { required: true },
			dataType: 'date',
			autoValue: "on_update"
		},
	},
});
