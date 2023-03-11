import { createRouter, createWebHistory } from 'vue-router'
import CounterOnePage from '@/modules/counter/pages/CounterOnePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counte-one',
      component: CounterOnePage
    },    
  ]
})

export default router
