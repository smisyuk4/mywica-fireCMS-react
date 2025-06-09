import { buildCollection } from '@firecms/core';
import { customCardInfoIds } from '../../customEnums';
import { reuseIdWithCleanCallbacks } from '../../customCallbacks';
import { basicProperties } from './basic'

export const dataUkSubCollection = buildCollection({
	id: 'dataUk',
	path: 'dataUk',
	name: 'dataUk',
	singularName: 'dataUk',
	customId: customCardInfoIds,
	callbacks: reuseIdWithCleanCallbacks,
	textSearchEnabled: true,
	properties: basicProperties
});




	