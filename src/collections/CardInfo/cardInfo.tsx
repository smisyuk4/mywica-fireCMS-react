import { buildCollection } from '@firecms/core';
import { dataUkSubCollection } from './dataUk';
import { dataEnSubCollection } from './dataEn';
import { dataHeSubCollection } from './dataHe';
import { reuseIdCallbacks } from '../../customCallbacks';


export const cardInfoCollection = buildCollection({
	name: 'CardInfo',
	singularName: 'CardInfo',
	id: 'cardInfo',
	path: 'cardInfo',
	group: 'Main content',
	 // pagination: 5,
	icon: 'info',
	customId: true,
	callbacks: reuseIdCallbacks,
	propertiesOrder: ['id', 'subcollection:dataUk', 'subcollection:dataEn', 'subcollection:dataHe', 'createdAt', 'updatedAt'],
	description: 'Description for cards and testing (Q/A)',
	subcollections: [dataUkSubCollection, dataEnSubCollection, dataHeSubCollection],
	properties: {
		id: {
			name: 'id',
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
