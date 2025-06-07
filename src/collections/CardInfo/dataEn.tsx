import { buildCollection } from '@firecms/core';
import { customCardInfoIds } from '../../customEnums';
import { reuseIdCallbacks, reuseIdWithCleanCallbacks } from '../../customCallbacks';

export const dataEnSubCollection = buildCollection({
	id: 'dataEn',
	path: 'dataEn',
	name: 'dataEn',
	singularName: 'dataEn',
	customId: customCardInfoIds,
	callbacks: reuseIdWithCleanCallbacks,
	textSearchEnabled: true,
	properties: {
		text: ({ entityId }) => {
			return {
				name: 'text',
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
				validation: { max: 4 },
				of: {
					name: 'answer',
					dataType: 'map',
					
					properties: {
						isCorrect: {
							name: 'isCorrect',
							dataType: 'boolean',
						},
						text: {
							name: 'text',
							dataType: 'string',
							//validation: { required: entityId === 'paragraph' ? false : true },
						},
					}
				}
				//validation: { required: entityId === 'paragraph' ? false : true },
				//readOnly: entityId === 'paragraph' ? true : false,
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




	