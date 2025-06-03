import { buildCollection, buildEnumValues } from '@firecms/core';

const guilds = buildEnumValues({
	'warrior': 'warrior',
	'defender': 'defender',
	'wizard': 'wizard',
	'exile': 'exile',
});

const customIds = buildEnumValues({
	'mywica': 'mywica',
});

export const cardsSubCollection = buildCollection({
	id: 'cards',
	path: 'cards',
	name: 'cards',
	singularName: 'cards',
	properties: {
		guild: {
			name: 'guild',
			validation: { required: true },
			dataType: 'string',
			enumValues: guilds
		},
		name: {
			name: 'name',  // зробити масив з мовами ???????
			validation: { required: true },
			dataType: 'string',
		},
		imageLink: {
			name: 'imageLink',
			validation: { required: true },
			dataType: 'string',
		},
		userId: {
			name: 'userId',
			validation: { required: true },
			dataType: 'string',
			enumValues: customIds
		},
		adventureId: {
			name: 'adventureId',
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
