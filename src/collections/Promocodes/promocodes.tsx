import { buildCollection } from '@firecms/core';

export const promocodesCollection = buildCollection({
	name: 'Promocodes',
	singularName: 'Promocode',
	id: 'promocodes',
	path: 'promocodes',
	description: 'discounts for users by subscriptions and souvenirs',
	group: 'Users',
	textSearchEnabled: true,
	// Here you can override the user permissions
	// permissions: ({ authController }) => ({
	//     read: true,
	//     edit: true,
	//     create: true,
	//     delete: true
	// }),
	properties: {
		isActual: {
			name: 'isActual',
			validation: { required: true },
			dataType: 'boolean',
		},
				description: {
			name: 'description',
			validation: { required: true },
			dataType: 'string',
		},
		discount: {
			name: 'discount',
			validation: { required: true },
			dataType: 'number',
		},
		counter: {
			name: 'counter',
			validation: { required: true },
			dataType: 'number',
		},
		promocode: {
			name: 'promocode',
			validation: { required: true },
			dataType: 'string',
		},
		validityPeriod: {
			name: 'validityPeriod',
			validation: { required: true },
			dataType: 'date',
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
