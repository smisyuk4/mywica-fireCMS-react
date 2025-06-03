import { buildCollection, buildEnumValues } from '@firecms/core';

const companies = buildEnumValues({
	'nova post': 'nova post',
	'ukrposhta': 'ukrposhta',
});

export const ordersSubCollection = buildCollection({
	id: 'orders',
	path: 'orders',
	name: 'orders',
	singularName: 'orders',
	properties: {
		dates: {
			name: 'dates',
			validation: { required: true },
			dataType: 'map',
			properties: {
				estimatedDate: {
					name: 'estimatedDate',
					dataType: 'date',
				},
				payd: {
					name: 'payd',
					dataType: 'date',
				},
				processed: {
					name: 'processed',
					dataType: 'date',
				},
				received: {
					name: 'payd',
					dataType: 'date',
				},
				sent: {
					name: 'sent',
					dataType: 'date',
				},
			}

		},

		destination:{
			name: 'destination',
			validation: { required: true },
			dataType: 'map',
			properties: {
				company: {
					name: 'company',
					validation: { required: true },
					dataType: 'string',
					enumValues: companies
				},
				address: {
					name: 'address',
					validation: { required: true },
					dataType: 'string',
				},
				city: {
					name: 'city',
					validation: { required: true },
					dataType: 'string',
				},
				country: {
					name: 'country',
					dataType: 'string',
				},
				name: {
					name: 'name',
					validation: { required: true },
					dataType: 'string',
				},
				phone: {
					name: 'phone',
					validation: { required: true },
					dataType: 'string',
				},
				postCode: {
					name: 'postCode',
					dataType: 'string',
				},
			}
		},

		products: {
			name: 'products',
			validation: { required: true },
			dataType: 'array',
			of: {
				dataType: 'map',
				properties: {
					productId: {
						name: 'productId',
						validation: { required: true },
						dataType: 'string',
					},
						image: {
						name: 'image',
						validation: { required: true },
						dataType: 'string',
					},
					title: {
						name: 'title',
						validation: { required: true },
						dataType: 'string',
					},
					tag: {
						name: 'tag',
						validation: { required: true },
						dataType: 'string',
					},
					cost: {
						name: 'cost',
						validation: { required: true },
						dataType: 'number',
					},
					count: {
						name: 'count',
						validation: { required: true },
						dataType: 'number',
					},
				}
			}
		},
		
		userId: {
			name: 'userId',
			validation: { required: true },
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
