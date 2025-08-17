import { buildCollection } from '@firecms/core';
import { pagesCallbacks } from '../../customCallbacks';

export const pagesCollection = buildCollection({
  name: 'Pages info',
  id: 'pages',
  path: 'pages',
  group: 'Secondary content',
  description: 'video, privacy policy, public offer',
  icon: 'menu_book',
  initialSort: ['createdAt', 'asc'],
  callbacks: pagesCallbacks,
  permissions: ({ authController }) => ({
    read: true,
    edit: true,
    create: false,
    delete: false,
  }),
  properties: {
    link: ({ entityId }) => {
      return {
        name: 'video id',
        dataType: 'string',
        validation: { required: true, trim: true },
        readOnly: entityId === 'video' ? false : true,
      };
    },
    isNeedSend: ({ entityId }) => {
      if (entityId === 'privacyPolicy' || entityId === 'publicOffer') {
        return {
          name: 'isNeedSend',
          dataType: 'boolean',
          readOnly: false,
        };
      }

      return {
        name: 'isNeedSend',
        dataType: 'boolean',
        readOnly: true,
      };
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
