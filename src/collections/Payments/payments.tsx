import { buildCollection } from '@firecms/core';
import { reviewsSubCollection } from './reviews';
import { ordersSubCollection } from './orders';
import { paymentTypes } from '../../customEnums';
import { userRefCallbacks } from '../../customCallbacks';

export const paymentsCollection = buildCollection({
	name: 'Payments',
	singularName: 'Payment',
	id: 'payments',
	path: 'payments',
	group: 'Users',
	description: 'all purchases by users',
	textSearchEnabled: true,
	initialSort: ['createdAt', "desc"],
	propertiesOrder: ['type', 'sum', 'subcollection:reviews', 'subcollection:orders', 'userId', 'createdAt', 'updatedAt'],
	callbacks: userRefCallbacks,
	pagination: 10,
	permissions: ({ authController }) => ({
			read: true,
			edit: false,
			create: false,
			delete: false
	}),
	subcollections: [reviewsSubCollection, ordersSubCollection],
	properties: {
		type: {
			name: 'type',
			dataType: 'string',
			enumValues: paymentTypes
		},
		sum: {
			name: 'sum',
			dataType: 'number',
		},
		userId: {
			name: 'userId',
			dataType: 'reference',
			path: 'users'
		},
		id: {
			name: 'id',
			dataType: 'string',
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
