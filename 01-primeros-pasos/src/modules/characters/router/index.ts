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
      path: 'by/id',
      name: 'character-id',
      component: CharacterIdPage,
      props: { title: 'Por id' }
    },
    {
      path: 'list',
      name: 'character-list',
      component: CharacterListPage,
      props: { title: 'Lista' }
    },
    {
      path: 'search',
      name: 'character-search',
      component: CharacterSerchPage,
      props: { title: 'Busqueda' }
    }
  ]
};

export default charactersRoute;
