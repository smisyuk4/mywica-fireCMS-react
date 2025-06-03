import { buildCollection, buildEnumValues } from '@firecms/core';

const variants = buildEnumValues({
	'other': 'other',
	'asian': 'asian',
	'african': 'african',
	'european': 'european',
});

const sexVariants = buildEnumValues({
	'boy': 'boy',
	'girl': 'girl',
	'other': 'other',
});

export const avatarsCollection = buildCollection({
	name: 'Avatars',
	singularName: 'Avatars',
	id: 'avatars',
	path: 'avatars',
	description: 'avatars for children',
	textSearchEnabled: true,
	// Here you can override the user permissions
	// permissions: ({ authController }) => ({
	//     read: true,
	//     edit: true,
	//     create: true,
	//     delete: true
	// }),
	subcollections: [],
	entityViews: [
		//{
		//  key: 'preview',
		//  name: 'Sample preview',
		//  Builder: ProductDetailPreview,
		//},
	],
	properties: {
		avatarVariant: {
			name: 'avatarVariant',
			validation: { required: true },
			dataType: 'string',
			enumValues: variants,
		},
		sex: {
			name: 'sex',
			validation: { required: true },
			dataType: 'string',
			enumValues: sexVariants,
		},
		description: {
			name: 'description',
			validation: { required: true },
			dataType: 'string',
		},
		link: {
			name: 'link',
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
