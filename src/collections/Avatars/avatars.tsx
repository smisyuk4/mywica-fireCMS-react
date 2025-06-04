import { buildCollection } from '@firecms/core';
import { avatarVariants, sexVariants } from '../../customEnums';
import { reuseIdCallbacks } from '../../customCallbacks';
import { description } from '../../customProperties';

export const avatarsCollection = buildCollection({
	name: 'Avatars',
	singularName: 'Avatars',
	id: 'avatars',
	path: 'avatars',
	group: 'Users',
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
	entityViews: [],
	callbacks: reuseIdCallbacks,
	properties: {
		collectionKey: {
			name: 'collectionKey',
			validation: { required: true },
			dataType: 'string',
		},
		link: {
			name: "link",
			validation: { required: true },
			dataType: "string",
			storage: {
				storagePath: (context) => {
						if (context.values.collectionKey)
						return `avatars/${context.values.collectionKey}/`;

						return "avatars/";
        },
        fileName: (context) => {
            return context.file.name;
        },
				acceptedFiles: ["image/webp"],
				metadata: {
						cacheControl: "max-age=1000000"
				},
				storeUrl: true
			}
		},
		avatarVariant: {
			name: 'avatarVariant',
			dataType: 'string',
			validation: { required: true },
			enumValues: avatarVariants,
		},
		sex: {
			name: 'sex',
			validation: { required: true },
			dataType: 'string',
			enumValues: sexVariants,
		},
		description,
		id: {
			name: 'id',
			dataType: 'string',
			readOnly: true,
			hideFromCollection: true
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
