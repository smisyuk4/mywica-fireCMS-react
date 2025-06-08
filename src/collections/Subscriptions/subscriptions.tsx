import { buildCollection, EntityOnFetchProps } from '@firecms/core';
import { subscriptionStatus } from '../../customEnums';

export const subscriptionsCollection = buildCollection({
	name: 'Subscriptions',
	singularName: 'Subscription',
	id: 'subscriptions',
	path: 'subscriptions',
	group: 'Users',
	description: 'list users for CRON payment',
	textSearchEnabled: true,
	initialSort: ['createdAt', "desc"],
	propertiesOrder: ['status', 'amount', 'userId', 'invoiceId', 'monobankToken', 'paymentDate', 'expiresDate', 'createdAt', 'updatedAt'],
	// permissions: ({ authController }) => ({
	//     read: true,
	//     edit: false,
	//     create: false,
	//     delete: false
	// }),
	//callbacks: {
	//	onFetch({ entity }) {
	//		const values = { ...entity.values };
	//		values.userId = `users/${values.userId}`;

	//		const modified = {
	//			...entity,
	//			values
	//		}

	//		console.log('modified', modified);
		
	//		return modified;
	//	}
	//},
	properties: {
		status: {
			name: 'status',
			dataType: 'string',
			enumValues: subscriptionStatus,
		},
		amount: {
			name: 'amount',
			dataType: 'number',
		},
		invoiceId: {
			name: 'invoiceId',
			dataType: 'string',
		},
		monobankToken: {
			name: 'monobankToken',
			dataType: 'string',
		},
		userId: {
			name: 'user Id',
			dataType: 'string',
			//dataType: 'reference',
			//path: 'users',
		},
		paymentDate: {
			name: 'paymentDate',
			dataType: 'date',
		},
		expiresDate: {
			name: 'expiresDate',
			dataType: 'date',
		},
		createdAt: {
			name: 'createdAt',
			dataType: 'date',
			autoValue: "on_create",
		},
		updatedAt: {
			name: 'updatedAt',
			dataType: 'date',
			autoValue: "on_update",
		},
	},
});
