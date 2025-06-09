import { buildCollection } from '@firecms/core';
import { avatarVariants, guilds, roles, sexVariants } from '../../customEnums';
import { cardsSubCollection } from './cards';
import { destinationAddressesSubCollection } from './destinationAddresses';
import { parentRefCallbacks } from '../../customCallbacks';

export const usersCollection = buildCollection({
	name: 'Users',
	singularName: 'User',
	id: 'users',
	path: 'users',
	group: 'Users',
	icon: 'people',
	description: 'Adults and children (cards, addresses), team of project',
	textSearchEnabled: true,
	//callbacks: reuseIdCallbacks,
	initialSort: ['createdAt', "desc"],
	subcollections: [cardsSubCollection, destinationAddressesSubCollection],	
	callbacks: parentRefCallbacks,
	//propertiesOrder: ['userId', 'role', 'language', 'sex', 'guild', 'avatarLink', 'createdAt', 'updatedAt'],
	permissions: ({ authController }) => ({
			read: true,
			edit: false,
			create: false,
			delete: false
	}),
	properties: {
		//collectionKey: {
		//	name: 'collection key',
		//	validation: { required: true },
		//	dataType: 'string',
		//},
		//link: {
		//	name: "image",
		//	validation: { required: true },
		//	dataType: "string",
		//	storage: {
		//		storagePath: (context) => {
		//				if (context.values.collectionKey)
		//				return `avatars/${context.values.collectionKey}/`;

		//				return "avatars/";
		//		},
		//		fileName: (context) => {
		//				return context.file.name;
		//		},
		//		acceptedFiles: ["image/webp"],
		//		metadata: {
		//				cacheControl: "max-age=1000000"
		//		},
		//		storeUrl: true,
		//		maxSize: 150 * 1024 // 🔺 Обмеження: 150 КБ
		//	}
		//},
		//avatarVariant: {
		//	name: 'variant',
		//	dataType: 'string',
		//	validation: { required: true },
		//	enumValues: avatarVariants,
		//},
		//sex: {
		//	name: 'sex',
		//	validation: { required: true },
		//	dataType: 'string',
		//	enumValues: sexVariants,
		//},
		//description,
		userId: {
			name: 'user Id',
			dataType: 'string',
		},
		role: {
			name: 'role',
			dataType: 'string',
			enumValues: roles,
		},
		cookieConsent: {
			name: 'cookie Consent',
			dataType: 'boolean',
			hideFromCollection: true
		},
		language: {
			name: 'lang',
			dataType: 'string',
		},
		email: {
			name: 'email',
			dataType: 'string',
			email: true
		},
		subscriptionPlan: {
			name: 'subscription',
			dataType: 'string',
		},
		expiredDate: {
			name: 'expired Date',
			dataType: 'date',
		},
		parentId: {
			name: 'parent Id',
			dataType: 'reference',
			path: 'users'
		},
		name: {
			name: 'name',
			dataType: 'string',
		},
		energy: {
			name: 'energy',
			dataType: 'string',
		},
		birthDate: {
			name: 'birth Date',
			//dataType: 'date',
			dataType: 'string', // проблема з форматом дати
		},
		avatarLink: {
			name: 'avatar',
			dataType: 'string',
			url: 'image'
		},
		avatarVariant: {
			name: 'avatar variant',
			dataType: 'string',
			enumValues: avatarVariants
		},
		sex: {
			name: 'sex',
			dataType: 'string',
			enumValues: sexVariants
		},
		isOnline: {
			name: 'is online',
			dataType: 'boolean',
			hideFromCollection: true
		},
		secret: {
			name: 'secret',
			dataType: 'string',
			hideFromCollection: true
		},
		friends: {
			name: 'friends',
			dataType: 'array',
			of: {
				dataType: 'string'
			}
		},
		money: {
			name: 'money',
			dataType: 'number',
		},
		stones: {
			name: 'stones',
			dataType: 'number',
		},
		power: {
			name: 'power',
			dataType: 'number',
		},
		progress: {
			name: 'progress',
			dataType: 'number',
		},
		guild: {
			name: 'guild',
			dataType: 'string',
			enumValues: guilds,
		},
		countOfCards: {
			name: 'cards',
			dataType: 'number',
		},
		activeCollectionId: {
			name: 'active Collection Id',
			dataType: 'number',
		},
		openedCollections: {
			name: 'opened Collections',
			dataType: 'number',
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
