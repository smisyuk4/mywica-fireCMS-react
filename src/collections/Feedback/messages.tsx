import { buildCollection, buildEnumValues } from '@firecms/core';

const roles = buildEnumValues({
  'adult': 'adult',
  'support': 'support',
  'admin': 'admin',
});

export const messagesSubCollection = buildCollection({
	id: 'messages',
	path: 'messages',
	name: 'messages',
	  //customId: roles,
	singularName: 'messages',
	properties: {
		message: {
			name: 'message',
			validation: { required: true },
			dataType: 'string',
		},
		images: {
			name: 'images',
			validation: { required: false },
			dataType: 'array',
			of: {
					dataType: "string",
					},
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
		role: {
			name: 'role',
			validation: { required: true },
			dataType: 'string', 
			enumValues: roles,
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
