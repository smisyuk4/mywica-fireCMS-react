import { buildCollection } from '@firecms/core';
import { reuseIdCallbacks } from '../../customCallbacks';

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
    //icon: pageId === 'video' ? 'ondemand_video' : 'menu_book',
    customId: true,
    callbacks: reuseIdCallbacks,
    textSearchEnabled: true,
    permissions: ({ authController }) => ({
      read: true,
      edit: true,
      create: true,
      delete: true,
    }),
    properties: {
      name: {
        name: 'name',
        dataType: 'string',
      },
      oldPrice: {
        name: 'old price',
        dataType: 'number',
      },
      price: {
        name: 'Price',
        dataType: 'number',
      },
      recommended: {
        name: 'recommended',
        dataType: 'boolean',
        defaultValue: false,
      },
      value: {
        name: 'value',
        dataType: 'number',
      },
      id: {
        name: 'id',
        dataType: 'string',
        readOnly: true,
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
