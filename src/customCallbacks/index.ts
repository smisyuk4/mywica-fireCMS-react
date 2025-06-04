import { EntityCallbacks } from "@firecms/core";

export const reuseIdCallbacks: EntityCallbacks = {
	onPreSave: ({ values, entityId }) => {
		return {
			...values,
			id: entityId ?? values.id,
		};
	},
};