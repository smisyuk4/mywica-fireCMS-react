import { buildEnumValues } from '@firecms/core';

export const locales = buildEnumValues({
	'uk': 'uk',
	'en': 'en',
	'he': 'he',
});

export const roles = buildEnumValues({
	'admin':  {
		id: 'admin',
		label: 'admin',
		color: 'redLight'
	},
	'support':  {
		id: 'support',
		label: 'support',
		color: 'blueLight'
	},
	'adult':  {
		id: 'adult',
		label: 'adult',
		color: 'yellowLight',
		disabled: true
	},
	'child':  {
		id: 'child',
		label: 'child',
		color: 'greenLight',
		disabled: true
	},
});

export const customCardInfoIds = buildEnumValues({
	'paragraph':  {
		id: 'paragraph',
		label: 'paragraph',
		color: 'redLight'
	},
	'q1':  {
		id: 'q1',
		label: 'q1',
		color: 'blueLight'
	},
	'q2':  {
		id: 'q2',
		label: 'q2',
		color: 'yellowLight'
	},
	'q3':  {
		id: 'q3',
		label: 'q3',
		color: 'greenLight'
	},
	'q4':  {
		id: 'q4',
		label: 'q4',
		color: 'orangeLight'
	},
	'q5':  {
		id: 'q5',
		label: 'q5',
		color: 'purpleLight'	
	},
});

export const subscriptionStatus = buildEnumValues({
	'active':  {
		id: 'active',
		label: 'active',
		color: 'greenLight'
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

export const themes = buildEnumValues({
		'math':  {
				id: "math",
				label: "math",
				color: 'purpleLight'
		},
		'reading':  {
				id: "reading",
				label: "reading",
				color: 'orangeLight'
		},
		'typing':  {
				id: "typing",
				label: "typing",
				color: 'greenLight'
		},
		'other':  {
				id: "other",
				label: "other",
				color: 'yellowLight'
		},
});