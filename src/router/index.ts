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
      meta: {
        title: 'Alquiler de grúas telescópicas | Gruas Ememca',
      },
    },
    {
      path: '/nosotros',
      name: 'about',
      component: About,
      meta: {
        title: 'Nosotros | Gruas Ememca',
      },
    },
  ],
})
router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'Gruas Ememca'
})

export default router
