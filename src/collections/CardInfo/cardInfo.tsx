import { buildCollection } from '@firecms/core';
import { dataUkSubCollection } from './dataUk';
import { dataEnSubCollection } from './dataEn';
import { dataHeSubCollection } from './dataHe';


export const cardInfoCollection = buildCollection({
	name: 'CardInfo',
	singularName: 'CardInfo',
	id: 'cardInfo',
	path: 'cardInfo',
	group: 'Main content',
	//collectionGroup: true,
	customId: true,
	//initialSort: ['id', "desc"],
	description: 'Description for cards and testing (Q/A)',
	//permissions: ({ authController }) => ({
	//		read: true,
	//		edit: true,
	//		create: true,
	//		delete: true
	//}),
	subcollections: [dataUkSubCollection, dataEnSubCollection, dataHeSubCollection],
	entityViews: [
		//{
		//  key: 'preview',
		//  name: 'Sample preview',
		//  Builder: ProductDetailPreview,
		//},
	],
	properties: {
		//	checkRef: {
		//	name: 'checkRef',
		//	dataType: 'reference',
		//	path: "cardInfo/8/dataUk",
		//	//includeId: true
		//},
	},
});
