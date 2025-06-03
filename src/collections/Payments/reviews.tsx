import { buildCollection } from '@firecms/core';

export const reviewsSubCollection = buildCollection({
	id: 'reviews',
	path: 'reviews',
	name: 'reviews',
	singularName: 'reviews',
	properties: {
		looked: {
			name: 'looked',
			validation: { required: true },
			dataType: 'boolean',
		},
		review: {
			name: 'review',
			validation: { required: true },
			dataType: 'string',
		},
		tags: {
			name: 'tags',
			validation: { required: true },
			dataType: 'array',
			of: {
				dataType: "string",
			}
		},
		userId: {
			name: 'userId',
			validation: { required: true },
			dataType: 'string',
		},
		id: {
			name: 'id',
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
