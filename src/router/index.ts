import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import About from '@/pages/About/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/nosotros/',
      name: 'about',
      component: About,
    },
  ],
})

export default router
