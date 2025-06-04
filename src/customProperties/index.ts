import { buildProperty } from "@firecms/core";

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