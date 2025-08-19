import { buildCollection } from '@firecms/core';
import { factsCallbacks } from '../../customCallbacks';

export const heSubCollection = buildCollection({
  id: 'he',
  path: 'he',
  name: 'he',
  singularName: 'he',
  initialSort: ['id', 'desc'],
  customId: true,
  callbacks: factsCallbacks,
  textSearchEnabled: true,
  properties: {
    title: {
      name: 'title',
      dataType: 'string',
      validation: { required: true },
    },
    text: {
      name: 'text',
      dataType: 'string',
      validation: { required: true },
      multiline: true,
    },
    image: {
      name: 'image',
      dataType: 'string',
      validation: { required: true },
      storage: {
        storagePath: () => 'facts/',
        fileName: (context) => {
          return context.file.name;
        },
        acceptedFiles: ['image/webp'],
        metadata: {
          cacheControl: 'max-age=1000000',
        },
        storeUrl: true,
        maxSize: 150 * 1024, // 🔺 Обмеження: 150 КБ
      },
    },
    id: {
      name: 'id',
      dataType: 'number',
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
