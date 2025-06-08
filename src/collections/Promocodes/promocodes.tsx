import { buildCollection } from '@firecms/core';
import { reuseIdCallbacks } from '../../customCallbacks';

export const promocodesCollection = buildCollection({
	name: 'Promocodes',
	singularName: 'Promocode',
	id: 'promocodes',
	path: 'promocodes',
	description: 'discounts for users by subscriptions and souvenirs',
	group: 'Users',
	callbacks: reuseIdCallbacks,
	textSearchEnabled: true,
	initialSort: ['createdAt', "desc"],
	permissions: ({ authController }) => ({
			read: true,
			edit: true,
			create: true,
			delete: true
	}),
	properties: {
		discount: {
			name: 'discount',
			validation: { required: true, min: 5, max: 100 },
			dataType: 'number',
		},
		counter: {
			name: 'counter',
			validation: { required: true, min: 0 },
			dataType: 'number',
		},
		promocode: {
			name: 'promocode',
			validation: {
				required: true,
				trim: true,
				matches: /^[A-Za-z0-9_-]+$/,
				matchesMessage: "Only Latin letters, numbers, _ or -"
			},
			dataType: 'string',
		},
		isActual: {
			name: 'isActual',
			validation: { required: true },
			dataType: 'boolean',
			defaultValue: true
		},
		description: {
			name: 'description',
			validation: { required: true, trim: true },	
			dataType: 'string',
		},
		validityPeriod: {
			name: 'validity Period',
			validation: { required: true },
			dataType: 'date',
			defaultValue: (() => {
				const date = new Date();
				date.setMonth(date.getMonth() + 1);
				return date;
		})()
		},
		id: {
			name: 'id',
			dataType: 'string',
			readOnly: true,
			hideFromCollection: true
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
