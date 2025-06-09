import { buildCollection } from '@firecms/core';
import { guilds, themes } from '../../customEnums';
//import { basicCardRefCallbacks } from '../../customCallbacks';
import { name } from '../../customProperties'

export const cardsSubCollection = buildCollection({
	name: 'Cards',
	singularName: 'Card',
	id: 'cards',
	path: 'cards',
	description: 'child private cards',
	textSearchEnabled: true,
	initialSort: ['createdAt', "desc"],
	pagination: 10,
	//callbacks: basicCardRefCallbacks,
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
		name,
		guild: {
			name: 'guild',
			dataType: 'string',
			enumValues: guilds
		},
		theme: {
			name: 'theme',
			dataType: 'string',
			enumValues: themes
		},
			basicCardId: {
			name: 'basic Card Id',
			dataType: 'string',
		},
		//basicCardId: {
		//	name: 'basic Card Id',
		//	dataType: 'reference',
		//	path: 'adventures/2/cards'
		//},
		//basicCardId: ({ values }) => { // спробувати написати референс на бейзік карту
		//	console.log('values', values);
			
		//	return {
		//		name: 'basic Card Id',
		//		dataType: 'reference',
		//		path: 'adventures/2/cards'
		//	}
		//},
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
