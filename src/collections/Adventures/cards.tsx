import { buildCollection } from '@firecms/core';
import { customBasicCardId, guilds, customGIDX } from '../../customEnums';
import { adventureCardsCallbacks } from '../../customCallbacks';
import { name } from '../../customProperties'

export const cardsSubCollection = buildCollection({
	id: 'cards',
	path: 'cards',
	name: 'cards',
	singularName: 'card',
	customId: true,
	textSearchEnabled: true,
	callbacks: adventureCardsCallbacks,
	initialSort: ['createdAt', "desc"],
	pagination: 10,
	properties: {
		guild: {
			name: 'guild',
			validation: { required: true },
			dataType: 'string',
			enumValues: guilds
		},
		gidx: ({ values }) => ({
			name: 'gidx',
			dataType: 'string',
			enumValues: customGIDX(values.guild),
		}),
		name,
		imageLink: {
			name: 'image (500 x 780)',
			validation: { required: true },
			dataType: 'string',
			storage: {
			storagePath: ({ path }) => {
					const id = path?.split('/')[1];
					return id ? `adventures/${id}/cards` : 'adventures/unknown/';
				},
				fileName: ({ file }) => {
						return file.name;
				},
				acceptedFiles: ["image/webp"],
				metadata: {
						cacheControl: "max-age=1000000"
				},
				storeUrl: true,
				maxSize: 150 * 1024 // 🔺 Обмеження: 150 КБ
			},
		},
		userId: {
			name: 'userId',
			dataType: 'string',
			enumValues: customBasicCardId,
			hideFromCollection: true,
			readOnly: true
		},
		adventureId: {
			name: 'adventureId',
			dataType: 'string',
			hideFromCollection: true,
			readOnly: true
		},
		id: {
			name: 'id',
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
