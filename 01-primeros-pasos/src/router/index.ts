import { createRouter, createWebHistory } from 'vue-router';
// Pages
import HomePage from '@/modules/shared/pages/HomePage.vue';
import AboutPage from '@/modules/shared/pages/AboutPage.vue';

// Routes
import charactersRoutes from '@/modules/characters/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },

    // Characters
    // {
    //   path: '/characters',
    //   name: 'characters',
    //   component: () => import('@/modules/characters/layouts/CharacterLayout.vue')
    // },
    {
      ...charactersRoutes
    },

    // Default
    { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
  ]
});

// Otra forma de agregar rutas hijas
// path: characters
// router.addRoute(charactersRoutes);

export default router;
