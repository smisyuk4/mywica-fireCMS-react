import { buildCollection } from '@firecms/core';

export const pagesCollection = buildCollection({
	name: 'Pages doc',
	id: 'pages',
	path: 'pages',
	group: 'Secondary content',
	icon: 'menu_book',
	initialSort: ['createdAt', "asc"],
	permissions: ({ authController }) => ({
		read: true,
		edit: true,
		create: false,
		delete: false
	}),
	properties: {
		link: {
			name: 'link',
			dataType: 'string',
			  validation: {
				matches: /^https?:\/\/.+$/i,
				matchesMessage: "Link must start with http:// or https://",
			}
		},
		isNeedSend: {
			name: 'isNeedSend',
			dataType: 'boolean',
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
