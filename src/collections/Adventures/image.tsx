import { buildProperties } from "@firecms/core";

export const imageProperty = (propName : string)=>{
	return buildProperties({
				[propName]: {
					name: propName, 
					validation: { required: true }, 
					dataType: 'string',
					storage: {
						storagePath: ({ entityId }) => `adventures/${entityId}/`,
						fileName: ({ file }) => {
								return file.name;
						},
						acceptedFiles: ["image/webp"],
						metadata: {
								cacheControl: "max-age=1000000"
						},
						storeUrl: true,
						maxSize: 250 * 1024 // 🔺 Обмеження: 250 КБ
					},
				},
	})
};