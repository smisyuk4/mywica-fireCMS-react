import { buildCollection } from '@firecms/core';
import { subscriptionStatus } from '../../customEnums';

export const subscriptionsCollection = buildCollection({
	name: 'Subscriptions',
	singularName: 'Subscription',
	id: 'subscriptions',
	path: 'subscriptions',
	group: 'Users',
	description: 'list users for CRON payment',
	textSearchEnabled: true,
	// Here you can override the user permissions
	// permissions: ({ authController }) => ({
	//     read: true,
	//     edit: true,
	//     create: true,
	//     delete: true
	// }),

	properties: {
		status: {
			name: 'status',
			validation: { required: true },
			dataType: 'string',
			enumValues: subscriptionStatus
		},
		amount: {
			name: 'amount',
			validation: { required: true },
			dataType: 'number',
		},
		invoiceId: {
			name: 'invoiceId',
			validation: { required: true },
			dataType: 'string',
		},
		monobankToken: {
			name: 'monobankToken',
			validation: { required: true },
			dataType: 'string',
		},
		userId: {
			name: 'userId',
			validation: { required: true },
			dataType: 'string', // спробувати написати референс щоб переходити на документ цього юзера
		},
		paymentDate: {
			name: 'paymentDate',
			validation: { required: true },
			dataType: 'date',
		},
		expiresDate: {
			name: 'expiresDate',
			validation: { required: true },
			dataType: 'date',
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
