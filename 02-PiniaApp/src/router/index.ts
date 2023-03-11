import { createRouter, createWebHistory } from 'vue-router'
import CounterOptionsPage from '@/modules/counter/pages/CounterOptionsPage.vue'
import CounterSetupPage from '@/modules/counter/pages/CounterSetupPage.vue'

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
  ]
})

export default router
