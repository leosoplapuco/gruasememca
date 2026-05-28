import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home/Home.vue'
import About from '@/pages/About/About.vue'
import Machinery from '@/pages/Machinery/Machinery.vue'
import Projects from '@/pages/Projects/Projects.vue'

import ServicesLayout from '@/pages/Services/Layout.vue'

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

    {
      path: '/maquinaria/',
      name: 'machinery',
      component: Machinery,
    },

    {
      path: '/proyectos/',
      name: 'projects',
      component: Projects,
    },

    {
      path: '/servicios/:slug/',
      name: 'service-layout',
      component: ServicesLayout,
    },
  ],
})

export default router
