import { buildCollection } from '@firecms/core';
import { reviewsSubCollection } from './reviews';
import { ordersSubCollection } from './orders';
import { paymentTypes } from '../../customEnums';

export const paymentsCollection = buildCollection({
	name: 'Payments',
	singularName: 'Payment',
	id: 'payments',
	path: 'payments',
	group: 'Users',
	description: 'all purchases by users',
	textSearchEnabled: true,
	// Here you can override the user permissions
	// permissions: ({ authController }) => ({
	//     read: true,
	//     edit: true,
	//     create: true,
	//     delete: true
	// }),
	subcollections: [reviewsSubCollection, ordersSubCollection],
	properties: {
		type: {
			name: 'type',
			validation: { required: true },
			dataType: 'string',
			enumValues: paymentTypes
		},
		sum: {
			name: 'sum',
			validation: { required: true },
			dataType: 'number',
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
