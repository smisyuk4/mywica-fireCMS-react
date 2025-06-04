import { buildEnumValues } from '@firecms/core';

export const locales = buildEnumValues({
	'uk': 'uk',
	'en': 'en',
	'he': 'he',
});

export const roles = buildEnumValues({
	'adult': 'adult',
	'support': 'support',
	'admin': 'admin',
});

export const customCardInfoIds = buildEnumValues({
	'paragraph': 'paragraph',
	'01': '01',
	'02': '02',
	'03': '03',
	'04': '04',
	'05': '05',
});

export const subscriptionStatus = buildEnumValues({
	'active': 'active',
	'inactive': 'inactive',
	'failed': 'failed',
});

export const paymentTypes = buildEnumValues({
	'subscription': 'subscription',
	'souvenir': 'souvenir',
});

export const deliveryСompanies = buildEnumValues({
	'nova post': 'nova post',
	'ukrposhta': 'ukrposhta',
});

export const avatarVariants = buildEnumValues({
	'other':  {
				id: "other",
				label: "other",
				color: 'purpleLight'
		},
	'asian':  {
				id: "asian",
				label: "asian",
				color: 'orangeLight'
		},
	'african':  {
				id: "african",
				label: "african",
				color: 'greenLight'
		},
	'european':  {
				id: "european",
				label: "european",
				color: 'yellowLight'
		},
});

export const sexVariants = buildEnumValues({
	'boy':  {
				id: "boy",
				label: "boy",
				color: 'blueLight'
		},
	'girl':  {
				id: "girl",
				label: "girl",
				color: 'pinkLight'
		},
	'other':  {
				id: "other",
				label: "other",
				color: 'orangeLight'
		},
});

export const guilds = buildEnumValues({
	'warrior': 'warrior',
	'defender': 'defender',
	'wizard': 'wizard',
	'exile': 'exile',
});

export const customBasicCardId = buildEnumValues({
	'mywica': 'mywica',
});