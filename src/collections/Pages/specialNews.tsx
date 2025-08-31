import { buildProperties } from '@firecms/core';

export const specialNewsProperties = buildProperties({
  isPublished: ({ entityId }) => {
    return {
      name: 'Published',
      dataType: 'boolean',
      defaultValue: entityId === 'paragraph' ? true : false,
      readOnly: entityId === 'paragraph' ? true : false,
    };
  },
  key: ({ entityId }) => {
    return {
      name: 'key',
      dataType: 'string',
      readOnly: entityId === 'paragraph' ? true : false,
    };
  },
  title: () => {
    return {
      name: 'title',
      dataType: 'string',
      validation: { trim: true, max: 50 },
    };
  },
  text: ({ entityId }) => {
    return {
      name: 'text (HTML)',
      dataType: 'string',
      readOnly: entityId === 'paragraph' ? true : false,
      validation: { trim: true, max: 800 },
      multiline: true,
    };
  },
  label: ({ entityId }) => {
    return {
      name: 'label',
      dataType: 'string',
      readOnly: entityId === 'paragraph' ? true : false,
      validation: { trim: true, max: 15 },
    };
  },
  image: ({ entityId }) => {
    return {
      name: 'image (340 x 340)',
      readOnly: entityId === 'paragraph' ? true : false,
      dataType: 'string',
      storage: {
        storagePath: ({ values }) => `news/special/${values.key}/`,
        fileName: ({ file }) => {
          return file.name;
        },
        acceptedFiles: ['image/webp'],
        metadata: {
          cacheControl: 'max-age=1000000',
        },
        storeUrl: true,
        maxSize: 150 * 1024, // 🔺 Обмеження: 150 КБ
      },
    };
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
});
