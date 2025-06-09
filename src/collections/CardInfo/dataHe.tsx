import { buildCollection } from '@firecms/core';
import { customCardInfoIds } from '../../customEnums';
import { reuseIdWithCleanCallbacks } from '../../customCallbacks';
import { basicProperties } from './basic';

export const dataHeSubCollection = buildCollection({
	id: 'dataHe',
	path: 'dataHe',
	name: 'dataHe',
	singularName: 'dataHe',
	customId: customCardInfoIds,
	callbacks: reuseIdWithCleanCallbacks,
	textSearchEnabled: true,
	properties: basicProperties
});




	