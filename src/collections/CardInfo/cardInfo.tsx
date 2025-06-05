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
	customId: true,
	description: 'Description for cards and testing (Q/A)',
	permissions: ({ authController }) => ({
			read: true,
			edit: true,
			create: true,
			delete: true
	}),
	subcollections: [dataUkSubCollection, dataEnSubCollection, dataHeSubCollection],
	entityViews: [
		//{
		//  key: 'preview',
		//  name: 'Sample preview',
		//  Builder: ProductDetailPreview,
		//},
	],
	properties: {},
});
