import { buildCollection } from '@firecms/core';
import { customCardInfoIds } from '../../customEnums';
import { reuseIdCallbacks } from '../../customCallbacks';

export const dataEnSubCollection = buildCollection({
	id: 'dataEn',
	path: 'dataEn',
	name: 'dataEn',
	singularName: 'dataEn',
	customId: customCardInfoIds,
	callbacks: reuseIdCallbacks,
	textSearchEnabled: true,
	properties: {
		text: {
			name: 'text',
			dataType: 'string',
			multiline: true,
		},
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
					name: 'text',
					dataType: 'string',
					validation:{ trim: true },
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
					name: 'text',
					dataType: 'string',
					validation:{ trim: true },
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
					name: 'text',
					dataType: 'string',
					validation:{ trim: true },
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
					name: 'text',
					dataType: 'string',
					validation:{ trim: true },
				},
			}
		},
		id: {
			name: 'id',
			dataType: 'string',
			readOnly: true,
			validation:{ unique: true },
			hideFromCollection: true,
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
