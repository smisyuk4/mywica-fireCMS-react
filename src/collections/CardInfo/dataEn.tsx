import { buildCollection } from '@firecms/core';
import { customCardInfoIds } from '../../customEnums';

export const dataEnSubCollection = buildCollection({
	id: 'dataEn',
	path: 'dataEn',
	name: 'dataEn',
	singularName: 'dataEn',
	customId: customCardInfoIds,
	textSearchEnabled: true,
	properties: {
		question: {
			name: 'question',
			dataType: 'string',
		},
		'a1': {
			name: 'a1',
			dataType: 'map',
			properties: {
				isCorrect: {
					name: 'isCorrect',
					dataType: 'boolean',
				},
				text: {
					name: 'isCorrect',
					dataType: 'string',
				},
			}
		},
		'a2': {
			name: 'a2',
			dataType: 'map',
			properties: {
				isCorrect: {
					name: 'isCorrect',
					dataType: 'boolean',
				},
				text: {
					name: 'isCorrect',
					dataType: 'string',
				},
			}
		},
		'a3': {
			name: 'a3',
			dataType: 'map',
			properties: {
				isCorrect: {
					name: 'isCorrect',
					dataType: 'boolean',
				},
				text: {
					name: 'isCorrect',
					dataType: 'string',
				},
			}
		},
		'a4': {
			name: 'a4',
			dataType: 'map',
			properties: {
				isCorrect: {
					name: 'isCorrect',
					dataType: 'boolean',
				},
				text: {
					name: 'isCorrect',
					dataType: 'string',
				},
			}
		},
		'a5': {
			name: 'a5',
			dataType: 'map',
			properties: {
				isCorrect: {
					name: 'isCorrect',
					dataType: 'boolean',
				},
				text: {
					name: 'isCorrect',
					dataType: 'string',
				},
			}
		},

		text: {
			name: 'text',
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
