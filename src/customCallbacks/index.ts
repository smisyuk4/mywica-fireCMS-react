import type { EntityCallbacks } from "@firecms/core";

export const reuseIdCallbacks: EntityCallbacks<any> = {
  onPreSave: async ({ values, entityId, context }) => {	
    const user = context.authController?.user;
    return {
      ...values,
      id: entityId ?? values.id,
      userId: user?.email ?? "невідомо",
    };
  },
};