import type { RouteRecordRaw } from 'vue-router';
import CharacterLayout from '@/modules/characters/layouts/CharacterLayout.vue';

import CharacterIdPage from '@/modules/characters/pages/CharacterIdPage.vue';
import CharacterSerchPage from '@/modules/characters/pages/CharacterSerchPage.vue';
import CharacterListPage from '@/modules/characters/pages/CharacterListPage.vue';

const charactersRoute: RouteRecordRaw = {
	path: '/characters',
	redirect: '/characters/list',
	component: CharacterLayout,
	children: [
		{
			path: 'by/:id',
			name: 'character-id',
			component: CharacterIdPage,
			props: { title: 'Por id', visible: false }
		},
		{
			path: '/characters/list',
			name: 'character-list',
			component: CharacterListPage,
			props: { title: 'Lista', visible: true }
		},
		{
			path: 'search',
			name: '/characters/character-search',
			component: CharacterSerchPage,
			props: { title: 'Busqueda', visible: true }
		}
	]
};

export default charactersRoute;
