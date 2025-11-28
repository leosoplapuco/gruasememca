import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // ruta principal
      name: 'home',
      component: Home, // se renderiza dentro del RouterView de App.vue
    },
  ],
})

export default router
