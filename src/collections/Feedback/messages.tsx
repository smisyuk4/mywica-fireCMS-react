import { buildCollection } from '@firecms/core';
import { roles } from '../../customEnums';
import { reuseIdAndUserIdCallbacks } from '../../customCallbacks';

export const messagesSubCollection = buildCollection({
	id: 'messages',
	path: 'messages',
	name: 'messages',
	singularName: 'messages',
	callbacks: reuseIdAndUserIdCallbacks,
	initialSort: ['updatedAt', "desc"],
	properties: {
		message: {
			name: 'message',
			validation: { required: true },
			dataType: 'string',
		},
		photos: {
			name: 'photos',
			validation: { required: false },
			dataType: 'array',
			of: {
				dataType: "string",
				storage: {
				storagePath: (context) => {
					console.log('context.path ', context.path);
							console.log('context ', context);
					
						//if (context.values.collectionKey)
						//return `avatars/${context.values.collectionKey}/`;

						//return "feedback/userId/feedbackId/messageId/file.img";
						// userId = jrKVIW5HblVtbGHQ2OLxjTeLcJl1
						// 
						//feedback/U0o4RgbhrzwRErbmmZFB/messages/WFkHKqqbfJ2oceD0fFZ7
						return "feedback/";
        },
        fileName: (context) => {
            return context.file.name;
        },
				acceptedFiles: ["image/*"],
				metadata: {
						cacheControl: "max-age=1000000"
				},
				storeUrl: true
			}
			},
		},
		role: {
			name: 'role', // якщо можливо то враховуючи роль авторизованого користувача - підставляти ролі автоматично
			validation: { required: true },
			dataType: 'string', 
			enumValues: roles,
		},
		id: {
			name: 'id',
			dataType: 'string',
			hideFromCollection: true,
			readOnly: true,
		},
		userId: {
			name: 'userId',
			dataType: 'string',
			readOnly: true,
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
