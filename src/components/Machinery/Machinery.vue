<script setup lang="ts">
import './Machinery.css'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import machineryData from '../../pages/Machinery/Machinery.json'

export interface Machine {
  id: number
  name: string
  slug: string
  categoria: string
  short: string

  images: {
    img: string
    alt: string
  }[]

  largeImage: {
    src: string
    alt: string
  }[]

  video: {
    url: string
    alt: string
  }[]

  texts: string[]

  details: {
    uno: string
    dos: string
  }[]

  technicalSheet: {
    unouno: string
    dosdos: string
  }[]
}

interface MachineryData {
  machinery: Machine[]
}

const route = useRoute()

const data: MachineryData = machineryData

const machinery = computed(() => {
  const categoria = route.params.categoria as string | undefined

  if (!categoria) {
    return data.machinery
  }

  return data.machinery.filter(
    (machine) => machine.categoria.toLowerCase() === categoria.toLowerCase(),
  )
})

const spanTitle = computed(() => {
  return 'Maquinaria en'
})

const pageTitle = computed(() => {
  const categoria = route.params.categoria as string | undefined

  if (!categoria) {
    return 'Grúas Ememca'
  }

  return categoria.charAt(0).toUpperCase() + categoria.slice(1)
})
</script>

<template>
  <div class="block-container">
    <section class="block-content">
      <div class="block-title-container margin-bottom-20">
        <span>{{ spanTitle }}</span>
        <h1 class="block-title">{{ pageTitle }}</h1>
      </div>

      <ul class="machinery-page-products">
        <li v-for="machine in machinery" :key="machine.id" class="machinery-card">
          <a :href="`/maquinaria/${machine.categoria}/${machine.slug}/`" title="" target="_blank">
            <span class="machinery-card-category" :class="machine.categoria">{{
              machine.categoria
            }}</span>

            <div class="machinery-page-products-image">
              <img :src="machine.images[0]?.img" :alt="machine.images[0]?.alt" />
            </div>

            <div class="d-flex-column gap-10">
              <h2 class="machinery-card-title">{{ machine.name }}</h2>
              <p class="text">{{ machine.short }}</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
