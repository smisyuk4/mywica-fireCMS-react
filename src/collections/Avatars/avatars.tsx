import { buildCollection, EntityCallbacks } from '@firecms/core';
import { avatarVariants, sexVariants } from '../../customEnums';
import { reuseIdCallbacks } from '../../customCallbacks';

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
		avatarVariant: {
			name: 'avatarVariant',
			validation: { required: true },
			dataType: 'string',
			enumValues: avatarVariants,
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
			dataType: 'array',
			of: {
				dataType: 'map',
				properties: {
					uk: {
						name: 'uk',
						validation: { required: true },
						dataType: 'string',
					},
					en: {
						name: 'en',
						validation: { required: true },
						dataType: 'string',
					},
					he: {
						name: 'he',
						validation: { required: true },
						dataType: 'string',
					},
				}
			}
		},
		link: {
			name: "link",
			validation: { required: true },
			dataType: "string",
			storage: {
				storagePath: (context) => {
					console.log('context storagePath', context);
				
						return "avatars";
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
		id: {
			name: 'id',
			dataType: 'string',
			readOnly: true,
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
