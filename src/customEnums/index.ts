import { buildEnumValues } from '@firecms/core';

export const locales = buildEnumValues({
	'uk': 'uk',
	'en': 'en',
	'he': 'he',
});

export const roles = buildEnumValues({
	'adult': {
		id: 'adult',
		label: 'adult',
		color: 'purpleLight',
		disabled: true
	},
	'support': 'support',
	'admin': 'admin',
});

export const customCardInfoIds = buildEnumValues({
	'paragraph':  {
		id: 'paragraph',
		label: 'paragraph',
		color: 'redLight'
	},
	'01':  {
		id: '01',
		label: '01',
		color: 'blueLight'
	},
	'02':  {
		id: '02',
		label: '02',
		color: 'yellowLight'
	},
	'03':  {
		id: '03',
		label: '03',
		color: 'greenLight'
	},
	'04':  {
		id: '04',
		label: '04',
		color: 'orangeLight'
	},
	'05':  {
		id: '05',
		label: '05',
		color: 'purpleLight'	
	},
});

export const subscriptionStatus = buildEnumValues({
	'active':  {
		id: 'active',
		label: 'active',
		color: 'greenLight'
	},
	'inactive':  {
		id: 'inactive',
		label: 'inactive',
		color: 'orangeLight'
	},
	'failed':  {
		id: 'failed',
		label: 'failed',
		color: 'purpleLight'	
	},
});

export const paymentTypes = buildEnumValues({
	'subscription':  {
		id: 'subscription',
		label: 'subscription',
		color: 'greenLight'
	},
	'souvenir':  {
		id: 'souvenir',
		label: 'souvenir',
		color: 'orangeLight'
	},
});

export const deliveryСompanies = buildEnumValues({
	'nova post':  {
		id: 'nova post',
		label: 'nova post',
		color: 'greenLight'
	},
	'ukrposhta':  {
		id: 'ukrposhta',
		label: 'ukrposhta',
		color: 'orangeLight'
	},
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
		'warrior':  {
				id: "warrior",
				label: "warrior",
				color: 'purpleLight'
		},
		'defender':  {
				id: "defender",
				label: "defender",
				color: 'orangeLight'
		},
		'wizard':  {
				id: "wizard",
				label: "wizard",
				color: 'greenLight'
		},
		'exile':  {
				id: "exile",
				label: "exile",
				color: 'yellowLight'
		},
});

export const customBasicCardId = buildEnumValues({
	'mywica': 'mywica',
});