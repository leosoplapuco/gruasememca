import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home/Home.vue'
import About from '@/pages/About/About.vue'
import Machinery from '@/pages/Machinery/Machinery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Alquiler de grúas telescópicas | Gruas Ememca',
        description:
          'Servicio de alquiler de grúas telescópicas para proyectos industriales, construcción y maniobras de carga en Perú.',
      },
    },
    {
      path: '/nosotros',
      name: 'about',
      component: About,
      meta: {
        title: 'Nosotros | Gruas Ememca',
        description:
          'Conoce la experiencia, trayectoria y compromiso de Gruas Ememca en soluciones de izaje y maquinaria pesada.',
      },
    },
    {
      path: '/maquinaria',
      name: 'machinery',
      component: Machinery,
      meta: {
        title: 'Maquinaria | Gruas Ememca',
        description:
          'Explora nuestra flota de grúas y maquinaria pesada disponible para alquiler en proyectos de construcción e industria.',
      },
    },
  ],
})

router.afterEach((to) => {
  // TITLE
  document.title = (to.meta.title as string) || 'Gruas Ememca'

  // DESCRIPTION
  const description =
    (to.meta.description as string) ||
    'Gruas Ememca - Alquiler de grúas y maquinaria pesada.'

  let metaDescription = document.querySelector(
    'meta[name="description"]',
  )

  // Si no existe, la crea
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }

  metaDescription.setAttribute('content', description)
})

export default router
