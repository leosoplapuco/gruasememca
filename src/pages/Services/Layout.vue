<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import './Layout.css'

import servicesData from './Services.json'

import Customers from '../../components/Customers/Customers.vue'
import Stack from '../../components/Stack/Stack.vue'

interface Service {
  id: number
  name: string
  slug: string
  title: string
  metaDescription: string
  content: string
}

interface ServicesData {
  servicios: Service[]
}

const route = useRoute()

const data: ServicesData = servicesData

const service = computed(() => {
  return data.servicios.find((item) => item.slug === route.params.slug)
})

watchEffect(() => {
  if (service.value) {
    document.title = service.value.title

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute('content', service.value.metaDescription)
    }
  }
})
</script>

<template>
  <div class="p-services-hero-container" v-if="service">
    <img src="https://www.gruasememca.com/media/img/gruas/PPM-40-PPM-ATT-400.webp" alt="" />
    <section class="block-content p-services-hero-content">
      <span class="p-s-hero-span">Servicios</span>
      <h1 class="block-title">{{ service.name }}</h1>
    </section>
  </div>

  <div v-else class="block-container">
    <section class="block-content">
      <h1>Servicio no encontrado</h1>
    </section>
  </div>

  <Stack />

  <Customers />
</template>
