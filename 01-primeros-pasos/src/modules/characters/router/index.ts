import type { RouteRecordRaw } from 'vue-router';
import CharacterLayout from '@/modules/characters/layouts/CharacterLayout.vue';

import CharacterIdPage from '@/modules/characters/pages/CharacterIdPage.vue';
import CharacterSerchPage from '@/modules/characters/pages/CharacterSerchPage.vue';

const charactersRoute: RouteRecordRaw = {
  path: '/characters',
  redirect: '/characters/list',
  component: CharacterLayout,
  children: [
    {
      path: 'by/id',
      name: 'character-id',
      component: CharacterIdPage
    },
    {
      path: 'list',
      name: 'character-list',
      component: CharacterIdPage
    },
    {
      path: 'search',
      name: 'character-search',
      component: CharacterSerchPage
    }
  ]
};

export default charactersRoute;
