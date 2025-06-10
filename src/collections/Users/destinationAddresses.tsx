import { buildCollection } from '@firecms/core';

export const destinationAddressesSubCollection = buildCollection({
	name: 'Addresses',
	id: 'destinationAddresses',
	path: 'destinationAddresses',
	//description: 'child private cards',
	textSearchEnabled: true,
	// Here you can override the user permissions
	// permissions: ({ authController }) => ({
	//     read: true,
	//     edit: true,
	//     create: true,
	//     delete: true
	// }),
	properties: {
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
