import { buildCollection } from '@firecms/core';
import { guilds, themes } from '../../customEnums';

export const cardsSubCollection = buildCollection({
	name: 'Cards',
	singularName: 'Card',
	id: 'cards',
	path: 'cards',
	description: 'child private cards',
	textSearchEnabled: true,
	initialSort: ['createdAt', "desc"],
	permissions: ({ authController }) => ({
			read: true,
			edit: false,
			create: false,
			delete: false
	}),
	properties: {
		power: {
			name: 'power',
			dataType: 'number',
		},
		imageLink: {
			name: 'image Link',
			dataType: 'string',
			url: 'image'
		},
		name: {
			name: 'name',  // зробити масив з мовами ???????
			validation: { required: true },
			dataType: 'string',
		},
		guild: {
			name: 'guild',
			validation: { required: true },
			dataType: 'string',
			enumValues: guilds
		},
		theme: {
			name: 'theme',
			validation: { required: true },
			dataType: 'string',
			enumValues: themes
		},

		basicCardId: {
			name: 'basic Card Id',
			dataType: 'string',
		},
		userId: {
			name: 'user Id',
			dataType: 'string',
			hideFromCollection: true
		},
		id: {
			name: 'id',
			dataType: 'string',
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
