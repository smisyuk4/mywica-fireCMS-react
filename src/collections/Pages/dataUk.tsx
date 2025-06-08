import { buildCollection } from '@firecms/core';
import { reuseIdWithCleanCallbacks } from '../../customCallbacks';
import { guildProperties } from './guild';
import { aboutUsProperties } from './aboutUs';
import { basicProperties } from './basic';
import { generalNewsProperties } from './generalNews';
import { specialNewsProperties } from './specialNews';

export const buildDataUkCollection = (basePath: string, groupName: string) => buildCollection({
	name: 'data Uk',
	id: `${basePath}/dataUk`,
	path: `${basePath}/dataUk`,
	group: groupName,
	icon: 'format_underlined',
	customId: 'optional',
	callbacks: reuseIdWithCleanCallbacks,
	textSearchEnabled: true,
	initialSort: ['createdAt', "desc"],
	permissions: ({ authController }) => ({
		read: true,
		edit: true,
		create: true,
		delete: true
}),
		properties: basePath === 'pages/guild' ?
								guildProperties : basePath === 'pages/aboutUs' ? 
								aboutUsProperties : basePath === 'pages/generalNews' ? 
								generalNewsProperties : basePath === 'pages/specialNews' ? 
								specialNewsProperties : basicProperties
});
