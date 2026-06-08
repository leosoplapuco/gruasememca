import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home/Home.vue'
import About from '@/pages/About/About.vue'
import Machinery from '@/pages/Machinery/Machinery.vue'
import Projects from '@/pages/Projects/Projects.vue'
import ProductPage from '@/pages/Machinery/ProductPage/ProductPage.vue'

import ServicesLayout from '@/pages/Services/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Inicio',
        description: 'Página principal de Grúas Ememca.',
      },
    },

    {
      path: '/nosotros/',
      name: 'about',
      component: About,
      meta: {
        title: 'Nosotros',
        description: 'Conoce más sobre nuestra empresa y trayectoria.',
      },
    },

    {
      path: '/maquinaria/',
      name: 'machinery',
      component: Machinery,
      meta: {
        title: 'Maquinaria',
        description: 'Catálogo de maquinaria pesada disponible.',
      },
    },

    {
      path: '/maquinaria/:categoria/',
      name: 'machinery-category',
      component: Machinery,
    },

    {
      path: '/maquinaria/:categoria/:slug/',
      name: 'product-page',
      component: ProductPage,
    },

    {
      path: '/proyectos/',
      name: 'projects',
      component: Projects,
      meta: {
        title: 'Proyectos',
        description: 'Nuestros proyectos realizados.',
      },
    },

    {
      path: '/servicios/:slug/',
      name: 'service-layout',
      component: ServicesLayout,
    },
  ],
})

router.beforeEach((to, _from, next) => {
  let title = 'Grúas Ememca'
  let description = 'Grúas Ememca'

  if (to.name === 'machinery') {
    title = 'Maquinaria | Grúas Ememca'
    description = 'Catálogo de maquinaria pesada disponible.'
  } else if (to.name === 'machinery-category') {
    const categoria = String(to.params.categoria)

    if (categoria.toLowerCase() === 'venta') {
      title = 'Maquinaria en venta | Grúas Ememca'
      description = 'Maquinaria pesada disponible para venta.'
    } else if (categoria.toLowerCase() === 'alquiler') {
      title = 'Maquinaria en alquiler | Grúas Ememca'
      description = 'Servicio de alquiler de maquinaria pesada.'
    } else {
      title = categoria.charAt(0).toUpperCase() + categoria.slice(1) + ' | Grúas Ememca'
      description = `Maquinaria categoría ${categoria}.`
    }
  } else if (to.name === 'product-page') {
    const slug = String(to.params.slug)

    title = slug.replaceAll('-', ' ') + ' | Grúas Ememca'
    description = `Información técnica y características de ${slug.replaceAll('-', ' ')}.`
  } else {
    title = (to.meta.title as string) || 'Grúas Ememca'
    description = (to.meta.description as string) || 'Grúas Ememca'
  }

  document.title = title

  let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null

  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }

  metaDescription.setAttribute('content', description)

  next()
})

export default router
