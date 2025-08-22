import { buildProperties } from '@firecms/core';

export const generalNewsProperties = buildProperties({
  version: ({ entityId }) => {
    return {
      name: 'version',
      dataType: 'string',
      readOnly: entityId === 'paragraph' ? true : false,
      validation: { trim: true },
    };
  },
  title: () => {
    return {
      name: 'title',
      dataType: 'string',
      validation: { trim: true },
    };
  },
  text: ({ entityId }) => {
    return {
      name: 'text (HTML)',
      dataType: 'string',
      readOnly: entityId === 'paragraph' ? true : false,
      validation: { trim: true },
      multiline: true,
    };
  },
  images: ({ entityId }) => {
    return {
      name: 'images',
      dataType: 'map',
      readOnly: entityId === 'paragraph' ? true : false,
      properties: {
        mobile: {
          name: 'mobile (330 x 190)',
          readOnly: entityId === 'paragraph' ? true : false,
          dataType: 'string',
          storage: {
            storagePath: ({ values }) => `news/general/${values.version}/`,
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
        },
        md: {
          name: 'md (690 x 190)',
          readOnly: entityId === 'paragraph' ? true : false,
          dataType: 'string',
          storage: {
            storagePath: ({ values }) => `news/general/${values.version}/`,
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
        },
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
