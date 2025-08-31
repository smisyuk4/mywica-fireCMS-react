import { buildCollection } from '@firecms/core';
import { reuseIdCallbacks } from '../../customCallbacks';
import { plansVariants, subscriptionPeriods } from '../../customEnums';

export const buildPlansCollection = (
  basePath: string,
  groupName: string,
  pageId: string
) => {
  if (pageId !== 'subscriptions') {
    return buildCollection({
      name: 'plans',
      id: `${basePath}/plans`,
      path: `${basePath}/plans`,
      permissions: ({ authController }) => ({
        read: false,
        edit: false,
        create: false,
        delete: false,
      }),
      properties: {},
    });
  }

  return buildCollection({
    name: 'plans',
    id: `${basePath}/plans`,
    path: `${basePath}/plans`,
    description: 'subscriptions plans',
    group: groupName,
    icon: 'paid',
    callbacks: reuseIdCallbacks,
    initialSort: ['cycleInMonths', 'asc'],
    permissions: ({ authController }) => ({
      read: true,
      edit: true,
      create: false,
      delete: false,
    }),
    properties: {
      variant: {
        name: 'Variant',
        dataType: 'string',
        validation: { required: true },
        enumValues: plansVariants,
        readOnly: true,
      },
      cycleInMonths: {
        name: 'cycle In Months',
        dataType: 'number',
        validation: { required: true, min: 0 },
        enumValues: subscriptionPeriods,
        readOnly: true,
      },
      oldPrice: {
        name: 'Old price',
        dataType: 'number',
        validation: { required: true, min: 0 },
      },
      price: {
        name: 'Price',
        dataType: 'number',
        validation: { required: true, min: 0 },
      },
      recommended: {
        name: 'Recommended',
        dataType: 'boolean',
        defaultValue: false,
      },
      id: {
        name: 'id',
        dataType: 'string',
        readOnly: true,
        hideFromCollection: true,
      },
      createdAt: {
        name: 'createdAt',
        dataType: 'date',
        autoValue: 'on_create',
      },
      updatedAt: {
        name: 'updatedAt',
        dataType: 'date',
        autoValue: 'on_update',
      },
    },
  });
};
