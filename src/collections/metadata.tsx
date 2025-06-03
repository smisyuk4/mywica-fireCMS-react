import { buildCollection, buildEnumValues } from '@firecms/core';

//const locales = buildEnumValues({
//	'en-US': 'English (United States)',
//	'es-ES': 'Spanish (Spain)',
//	'de-DE': 'German',
//});

export const metadataSubCollection = buildCollection({
	id: 'metadata',
	path: 'metadata',
	//customId: locales,
	//customId: true, // If you want to use custom ids
	name: 'Metadata',
	singularName: 'Metadata',
	properties: {
		title: {
			name: 'title',
			validation: { required: true },
			dataType: 'string',
		},
		description: {
			name: 'description',
			validation: { required: true },
			dataType: 'string',
		},
		createdAt: {
			name: 'createdAt',
			validation: { required: true },
			dataType: 'string',
		},
		updatedAt: {
			name: 'updatedAt',
			validation: { required: true },
			dataType: 'string',
		},
		//selectable: {
		//	name: 'Selectable',
		//	description: 'Is this locale selectable',
		//	dataType: 'boolean',
		//},
	},
});
