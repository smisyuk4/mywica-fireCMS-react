import { buildCollection } from '@firecms/core';

export const dataEnSubCollection = buildCollection({
	id: 'dataEn',
	path: 'dataEn',
	name: 'dataEn',
	singularName: 'dataEn',
	properties: {
		id: {
			name: 'id',
			validation: { required: true },
			dataType: 'string',
		},
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
		name: {
			name: 'name',
			validation: { required: true },
			dataType: 'string',
		},
		orderProperty: {
			name: 'orderProperty',
			validation: { required: true },
			dataType: 'number',
		},
		role: {
			name: 'role',
			validation: { required: true },
			dataType: 'string',
		},
		socialLink: {
			name: 'socialLink',
			validation: { required: true },
			dataType: 'string',
		},
		avatar: {
			name: 'avatar',
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
