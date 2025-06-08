import { buildProperties } from "@firecms/core";

export const basicProperties = buildProperties({
		title: ({ entityId }) => {
			return {
				name: 'page title',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? false : true,
				validation: { trim: true },
			}
		},
		text: ({ entityId }) => {
			return {
				name: 'page description',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? false : true,
				validation: { trim: true },
			}
		},
		id: {
			name: 'id',
			dataType: 'string',
			readOnly: true
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
});