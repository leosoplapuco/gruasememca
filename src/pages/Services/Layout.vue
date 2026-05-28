<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import servicesData from './Services.json'

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
  <div v-if="service" class="block-container">
    <section class="block-content">
      <div class="block-title-container">
        <span>Servicios</span>

        <h1 class="block-title">
          {{ service.name }}
        </h1>
      </div>

      <p class="text">
        {{ service.content }}
      </p>
    </section>
  </div>

  <div v-else class="block-container">
    <section class="block-content">
      <h1>Servicio no encontrado</h1>
    </section>
  </div>
</template>
