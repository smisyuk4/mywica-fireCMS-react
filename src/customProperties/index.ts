import { buildProperty, buildProperties } from "@firecms/core";

export const description = buildProperty({
		name: 'description',
		validation: { required: true },
			dataType: 'map',
			properties: {
				uk: {
					name: 'uk',
					validation: { required: true },
					dataType: 'string',
				},
				en: {
					name: 'en',
					validation: { required: true },
					dataType: 'string',
				},
				he: {
					name: 'he',
					validation: { required: true },
					dataType: 'string',
				},
		}
});


// cardInfo
const cardInfoTest0 = buildProperty({
		name: 'question',
		dataType: 'string',
})

const cardInfoTest1 = buildProperty({
		name: 'a1',
		dataType: 'map',
		properties: {
			isCorrect: {
				name: 'isCorrect',
				dataType: 'boolean',
			},
			text: {
				name: 'text',
				dataType: 'string',
			},
		}
})

const cardInfoTest2 = buildProperty({
		name: 'a2',
		dataType: 'map',
		properties: {
			isCorrect: {
				name: 'isCorrect',
				dataType: 'boolean',
			},
			text: {
				name: 'text',
				dataType: 'string',
			},
		}
})

const cardInfoTest3 = buildProperty({
		name: 'a3',
		dataType: 'map',
		properties: {
			isCorrect: {
				name: 'isCorrect',
				dataType: 'boolean',
			},
			text: {
				name: 'text',
				dataType: 'string',
			},
		}
})

const cardInfoTest4 = buildProperty({
		name: 'a4',
		dataType: 'map',
		properties: {
			isCorrect: {
				name: 'isCorrect',
				dataType: 'boolean',
			},
			text: {
				name: 'text',
				dataType: 'string',
			},
		}
})

export const cardInfoTesting = {
		question: cardInfoTest0,
		a1: cardInfoTest1,
		a2: cardInfoTest2,
		a3: cardInfoTest3,
		a4: cardInfoTest4
}

export const cardInfoParagraph = buildProperty({
		name: 'text',
		dataType: 'string',
		multiline: true,
})

export const cardInfoTest = buildProperties({
		question: cardInfoTest0,
		a1: cardInfoTest1,
		a2: cardInfoTest2,
		a3: cardInfoTest3,
		a4: cardInfoTest4
})