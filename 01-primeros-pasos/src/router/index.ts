import { createRouter, createWebHistory } from 'vue-router';
// Pages
import HomePage from '@/modules/shared/pages/HomePage.vue';
import AboutPage from '@/modules/shared/pages/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },

    // Characters
    {
      path: '/characters',
      name: 'characters',
      component: () => import('@/modules/characters/layouts/CharacterIdLayout.vue')
    },

    // Default
    { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
  ]
});

export default router;
