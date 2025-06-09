import { buildCollection } from '@firecms/core';
import { dataUkSubCollection } from './dataUk';
import { dataEnSubCollection } from './dataEn';
import { dataHeSubCollection } from './dataHe';
import { reuseIdforCardInfoCallbacks } from '../../customCallbacks';


export const cardInfoCollection = buildCollection({
	name: 'CardInfo',
	singularName: 'CardInfo',
	id: 'cardInfo',
	path: 'cardInfo',
	group: 'Main content',
	pagination: 20,
	icon: 'info',
	customId: true,
	callbacks: reuseIdforCardInfoCallbacks,
	subcollections: [dataUkSubCollection, dataEnSubCollection, dataHeSubCollection],
	initialSort: ['createdAt', "desc"],
	propertiesOrder: ['adventureId', 'id', 'subcollection:dataUk', 'subcollection:dataEn', 'subcollection:dataHe', 'createdAt', 'updatedAt'],
	description: 'Description for cards and testing (Q/A)',
	properties: {
		adventureId: {
			name: 'adventure Id',
			dataType: 'string',
			readOnly: true,
			validation:{ unique: true },
		},
		id: {
			name: 'card id',
			dataType: 'string',
			readOnly: true,
			validation:{ unique: true },
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
	}
});
