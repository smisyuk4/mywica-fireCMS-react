import { buildCollection } from '@firecms/core';
import { messagesSubCollection } from './messages';
import { locales } from '../../customEnums';
import { userRefCallbacks } from '../../customCallbacks';

export const feedbackCollection = buildCollection({
  name: 'Feedback',
  singularName: 'Feedback',
  id: 'feedback',
  path: 'feedback',
  group: 'Users',
  icon: 'question_answer',
  description: 'messages by adults and support',
  propertiesOrder: [
    'isClosed',
    'subject',
    'lang',
    'subcollection:messages',
    'userId',
    'createdAt',
    'updatedAt',
  ],
  textSearchEnabled: true,
  initialSort: ['updatedAt', 'desc'],
  pagination: 10,
  callbacks: userRefCallbacks,
  permissions: ({ authController }) => ({
    read: true,
    edit: true,
    create: false,
    delete: false,
  }),
  subcollections: [messagesSubCollection],
  properties: {
    isClosed: {
      name: 'is Closed',
      validation: { required: true },
      dataType: 'boolean',
    },
    subject: {
      name: 'subject',
      validation: { required: true },
      dataType: 'string',
    },
    lang: {
      name: 'lang',
      validation: { required: true },
      dataType: 'string',
      enumValues: locales,
      readOnly: true,
    },
    id: {
      name: 'id',
      dataType: 'string',
      hideFromCollection: true,
      readOnly: true,
    },
    userId: {
      name: 'user id',
      dataType: 'reference',
      path: 'users',
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
