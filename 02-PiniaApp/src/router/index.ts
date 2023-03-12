import { createRouter, createWebHistory } from 'vue-router';
// Counter Pages
import CounterOptionsPage from '@/modules/counter/pages/CounterOptionsPage.vue';
import CounterSetupPage from '@/modules/counter/pages/CounterSetupPage.vue';
// Clients Pages
import ClientIdPage from '@/modules/clients/pages/ClientIdPage.vue';
import ClientListPage from '@/modules/clients/pages/ClientListPage.vue';
// Layouts
import ClientsLayout from '@/modules/clients/layouts/ClientsLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counte-options',
      component: CounterOptionsPage
    },
    {
      path: '/setup',
      name: 'counte-setup',
      component: CounterSetupPage
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsLayout,
      redirect: { name: 'client-list' },
      children: [
        { path: '/clients/list', name: 'client-list', component: ClientListPage },
        { path: '/clients/:id', name: 'client-id', component: ClientIdPage }
      ]
    }
  ]
});

export default router;
