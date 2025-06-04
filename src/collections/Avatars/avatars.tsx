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
	icon: 'Person_pin',
	description: 'avatars for children',
	textSearchEnabled: true,
	callbacks: reuseIdCallbacks,
	initialSort: ['avatarVariant', "asc"],
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
				storeUrl: true,
				maxSize: 150 * 1024 // 🔺 Обмеження: 150 КБ
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
