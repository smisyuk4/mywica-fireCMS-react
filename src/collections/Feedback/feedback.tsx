import { buildCollection } from '@firecms/core';
import { messagesSubCollection } from './messages';

export const feedbackCollection = buildCollection({
	name: 'Feedback',
	singularName: 'Pages',
	id: 'feedback',
	path: 'feedback',
	group: 'feedback',
	description: 'messages by adults and support',
	textSearchEnabled: true,
	// Here you can override the user permissions
	// permissions: ({ authController }) => ({
	//     read: true,
	//     edit: true,
	//     create: true,
	//     delete: true
	// }),
	subcollections: [messagesSubCollection],
	entityViews: [
		//{
		//  key: 'preview',
		//  name: 'Sample preview',
		//  Builder: ProductDetailPreview,
		//},
	],
	properties: {
		isClosed: {
			name: 'isClosed',
			validation: { required: true },
			dataType: 'boolean',
		},
		subject: {
			name: 'subject',
			validation: { required: true },
			dataType: 'string',
		},
		lang: {
			name: 'lang',
			validation: { required: true },
			dataType: 'string', // cпробувати випадаючий список зробити
		},
		id: {
			name: 'id',
			validation: { required: true },
			dataType: 'string',
		},
		userId: {
			name: 'userId',
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
