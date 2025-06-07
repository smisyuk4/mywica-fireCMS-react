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

const cleanObject =(obj: any): any=> {
  if (Array.isArray(obj)) {
    const cleanedArray = obj
      .map(cleanObject)
      .filter(item => item !== undefined && item !== null);
    return cleanedArray.length > 0 ? cleanedArray : undefined;
  }

  if (typeof obj === "object" && obj !== null) {
    const cleaned: any = {};
    for (const key in obj) {
      const value = cleanObject(obj[key]);

      const isEmptyString = typeof value === "string" && value.trim() === "";

      if (
        value !== undefined &&
        value !== null &&
        !isEmptyString
      ) {
        cleaned[key] = value;
      }
    }
    return Object.keys(cleaned).length > 0 ? cleaned : undefined;
  }

  const isEmptyString = typeof obj === "string" && obj.trim() === "";
  if (obj === null || obj === undefined || isEmptyString) return undefined;

  return obj;
}

export const reuseIdWithCleanCallbacks: EntityCallbacks<any> = {
    onPreSave: async ({ values, entityId }) => {
    const cleaned = cleanObject(values) ?? {};

    return {
      ...cleaned,
      id: entityId ?? cleaned.id,
    };
  },
};

export const factsCallbacks: EntityCallbacks<any> = {
  onPreSave: async ({ values, entityId }) => {			
    return {
      ...values,
      id: entityId ? Number(entityId) : values.id,
    };
  },
};