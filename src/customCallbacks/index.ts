import type { EntityCallbacks } from "@firecms/core";

export const feedbackCallbacks: EntityCallbacks<any> = {
  onPreSave: async ({ values, entityId, context }) => {	
    const user = context.authController?.user;
		
		const rolesArr = user?.roles;
		const isSupport = rolesArr?.find(role => role.id === 'support' || role.id === 'editor');
		const isAdmin = rolesArr?.find(role => role.id === 'admin');
		
    return {
      ...values,
      id: entityId ?? values.id,
      userId: user?.email ?? "невідомо",
			role: isSupport ? "support" : isAdmin ? "admin" : "???",
    };
  },
};

export const reuseIdCallbacks: EntityCallbacks<any> = {
  onPreSave: async ({ values, entityId }) => {	
    return {
      ...values,
      id: entityId ?? values.id,
    };
  },
};