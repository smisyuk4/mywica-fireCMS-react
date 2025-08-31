import { buildCollection } from '@firecms/core';
import { plansVariants, subscriptionStatus } from '../../customEnums';
import { userRefCallbacks } from '../../customCallbacks';

export const subscriptionsCollection = buildCollection({
  name: 'Subscriptions',
  singularName: 'Subscription',
  id: 'subscriptions',
  path: 'subscriptions',
  group: 'Users',
  description: 'list users for CRON payment',
  textSearchEnabled: true,
  initialSort: ['createdAt', 'desc'],
  propertiesOrder: [
    'status',
    'amount',
    'userId',
    'invoiceId',
    'monobankToken',
    'paymentDate',
    'expiresDate',
    'createdAt',
    'updatedAt',
  ],
  callbacks: userRefCallbacks,
  pagination: 10,
  permissions: ({ authController }) => ({
    read: true,
    edit: false,
    create: false,
    delete: false,
  }),
  properties: {
    status: {
      name: 'status',
      dataType: 'string',
      enumValues: subscriptionStatus,
    },
    variant: {
      name: 'Variant',
      dataType: 'string',
      enumValues: plansVariants,
    },
    destination: {
      name: 'Destination',
      dataType: 'string',
    },
    amount: {
      name: 'amount',
      dataType: 'number',
    },
    planId: {
      name: 'Plan Id',
      dataType: 'string',
    },
    invoiceId: {
      name: 'invoiceId',
      dataType: 'string',
    },
    monobankToken: {
      name: 'monobankToken',
      dataType: 'string',
    },
    taskId: {
      name: 'taskId',
      dataType: 'string',
    },
    userId: {
      name: 'user Id',
      dataType: 'reference',
      path: 'users',
    },
    paymentDate: {
      name: 'paymentDate',
      dataType: 'date',
    },
    expiresDate: {
      name: 'expiresDate',
      dataType: 'date',
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
