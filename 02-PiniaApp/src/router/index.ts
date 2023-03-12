import { createRouter, createWebHistory } from 'vue-router';
// Counter Pages
import CounterOptionsPage from '@/modules/counter/pages/CounterOptionsPage.vue';
import CounterSetupPage from '@/modules/counter/pages/CounterSetupPage.vue';
// Clients Pages
import ClientPage from '@/modules/clients/pages/ClientPage.vue';
import ListPage from '@/modules/clients/pages/ListPage.vue';
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
        { path: '/clients/list', name: 'client-list', component: ListPage },
        { path: '/clients/:id', name: 'client-id', component: ClientPage }
      ]
    }
  ]
});

export default router;
