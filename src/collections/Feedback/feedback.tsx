import { buildCollection } from '@firecms/core';
import { messagesSubCollection } from './messages';
import { locales } from '../../customEnums';

export const feedbackCollection = buildCollection({
	name: 'Feedback',
	singularName: 'Pages',
	id: 'feedback',
	path: 'feedback',
	group: 'Users',
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
			dataType: 'string',
			enumValues: locales,
		},
		id: {
			name: 'id',
			dataType: 'string',
			hideFromCollection: true,
			readOnly: true
		},
		userId: {
			name: 'userId',
			dataType: 'string',
			readOnly: true
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
