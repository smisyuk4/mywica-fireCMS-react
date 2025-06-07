import { buildCollection } from '@firecms/core';
import { customCardInfoIds } from '../../customEnums';
import { reuseIdWithCleanCallbacks } from '../../customCallbacks';

export const dataHeSubCollection = buildCollection({
	id: 'dataHe',
	path: 'dataHe',
	name: 'dataHe',
	singularName: 'dataHe',
	customId: customCardInfoIds,
	callbacks: reuseIdWithCleanCallbacks,
	textSearchEnabled: true,
	properties: {
		text: ({ entityId }) => {
			return {
				name: 'about card',
				dataType: 'string',
				multiline: true,
				validation: { required: entityId === 'paragraph' ? true : false },
				readOnly: entityId === 'paragraph' ? false : true,
			}
		},
		question: ({ entityId }) => {
			return {
				name: 'question',
				dataType: 'string',
				validation: { required: entityId === 'paragraph' ? false : true },
				readOnly: entityId === 'paragraph' ? true : false,
			}
		},
		answers: ({ entityId }) => {
			return {
				name: 'answers',
				dataType: 'array',
				readOnly: entityId === 'paragraph' ? true : false,
				validation: {
					min: entityId === 'paragraph' ? 0 : 4, 
					max: 4, 
					required: entityId === 'paragraph' ? false : true 
				},
				of: {
					name: 'answer',
					dataType: 'map',
					properties: {
						isCorrect: {
							name: 'isCorrect',
							dataType: 'boolean',
							validation: { required: entityId === 'paragraph' ? false : true },
						},
						text: {
							name: 'answer',
							dataType: 'string',
							validation: { required: entityId === 'paragraph' ? false : true },
						},
					}
				}
			}
		},
		id: {
			name: 'id',
			dataType: 'string',
			validation:{ unique: true },
			hideFromCollection: true,
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




	