import { buildCollection } from '@firecms/core';
import { reviewsSubCollection } from './reviews';
import { ordersSubCollection } from './orders';
import { paymentTypes } from '../../customEnums';

export const paymentsCollection = buildCollection({
	name: 'Payments',
	singularName: 'Payments',
	id: 'payments',
	path: 'payments',
	group: 'Shop',
	//description: 'data: uk, en, he',
	textSearchEnabled: true,
	// Here you can override the user permissions
	// permissions: ({ authController }) => ({
	//     read: true,
	//     edit: true,
	//     create: true,
	//     delete: true
	// }),
	subcollections: [reviewsSubCollection, ordersSubCollection],
	entityViews: [
		//{
		//  key: 'preview',
		//  name: 'Sample preview',
		//  Builder: ProductDetailPreview,
		//},
	],
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
