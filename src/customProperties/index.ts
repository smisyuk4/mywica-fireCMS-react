import { buildProperty } from "@firecms/core";

export const description = buildProperty({
		name: 'description',
		validation: { required: true },
			dataType: 'map',
			properties: {
				uk: {
					name: 'uk',
					dataType: 'string',
					validation: { required: true },
					multiline: true,
				},
				en: {
					name: 'en',
					dataType: 'string',
					validation: { required: true },
					multiline: true,
				},
				he: {
					name: 'he',
					dataType: 'string',
					validation: { required: true },
					multiline: true,
				},
		}
});

export const name = buildProperty({
		name: 'name',
		validation: { required: true },
			dataType: 'map',
			properties: {
				uk: {
					name: 'uk',
					validation: { required: true, trim: true, max: 12 },
					dataType: 'string',
				},
				en: {
					name: 'en',
					validation: { required: true, trim: true, max: 12 },
					dataType: 'string',
				},
				he: {
					name: 'he',
					validation: { required: true, trim: true, max: 12 },
					dataType: 'string',
				},
		}
});
