import { buildProperties } from "@firecms/core";
import { guilds } from "../../customEnums";

export const guildProperties = buildProperties({
		title: ({ entityId }) => {
			return {
				name: 'page title',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? false : true,
				validation: { trim: true },
			}
		},
		guild: ({ entityId }) => {
			return {
					name: 'guild',
					dataType: 'string',
					enumValues: guilds,
					readOnly: entityId === 'paragraph' ? true : false,
			}
		},
		image: ({ entityId }) => {			
			return {
				name: 'image',
				dataType: 'string',
				storage: {
					storagePath: (context) => 'guilds/',
					fileName: (context) => {
							return context.file.name;
					},
					acceptedFiles: ["image/webp"],
					metadata: {
							cacheControl: "max-age=1000000"
					},
					storeUrl: true,
					maxSize: 150 * 1024 // 🔺 Обмеження: 150 КБ
				},
				readOnly: entityId === 'paragraph' ? true : false,
			}
		},
		description: ({ entityId }) => {
			return {
				name: 'description',
				dataType: 'string',
				readOnly: entityId === 'paragraph' ? true : false,
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