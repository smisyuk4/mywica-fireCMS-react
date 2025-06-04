import { buildCollection } from '@firecms/core';
import { roles } from '../../customEnums';
import { feedbackCallbacks } from '../../customCallbacks';

export const messagesSubCollection = buildCollection({
	id: 'messages',
	path: 'messages',
	name: 'messages',
	singularName: 'messages',
	callbacks: feedbackCallbacks,
	initialSort: ['updatedAt', "desc"],
	properties: {
		message: {
			name: 'message',
			validation: { required: true },
			dataType: 'string',
		},
		photos: {
			name: 'photos',
			dataType: 'array',
			  validation: {
				max: 3 // 🔺 максимум 3 файли
			},
			of: {
				dataType: "string",
				storage: {
				storagePath: (context) => {
						if (context.path){
							const dataBasePath = context.path.split('/');
							const ticketId = dataBasePath[1];
							const messageId = context.entityId;
							return `feedback/${ticketId}/${messageId}/`;
						}

						return "feedback/";
        },
        fileName: (context) => {
            return context.file.name;
        },
				acceptedFiles: ["image/webp"],
				metadata: {
						cacheControl: "max-age=1000000"
				},
				storeUrl: true,
				maxSize: 250 * 1024 // 🔺 Обмеження: 250 КБ
			}
			},
		},
		role: {
			name: 'role', // якщо можливо то враховуючи роль авторизованого користувача - підставляти ролі автоматично
			//validation: { required: true },
			dataType: 'string', 
			enumValues: roles,
			readOnly: true,
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
