<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import machineryData from '../Machinery.json'

const route = useRoute()

const machine = computed(() => {
  return machineryData.machinery.find(
    (item) => item.slug === route.params.slug && item.categoria === route.params.categoria,
  )
})
</script>

<template>
  <div v-if="machine" class="block-container">
    <section class="block-content">
      <div class="block-title-container">
        <span>{{ machine.categoria }}</span>
        <h1 class="block-title">
          {{ machine.name }}
        </h1>
      </div>

      <!-- Imagen principal -->
      <img
        v-if="machine.largeImage?.length"
        :src="machine.largeImage[0].src"
        :alt="machine.largeImage[0].alt"
        class="product-large-image"
      />

      <!-- Galería -->
      <div v-if="machine.images?.length" class="product-gallery">
        <img
          v-for="(image, index) in machine.images"
          :key="index"
          :src="image.img"
          :alt="image.alt"
        />
      </div>

      <!-- Descripción -->
      <div class="product-description">
        <p v-for="(text, index) in machine.texts" :key="index">
          {{ text }}
        </p>
      </div>

      <!-- Detalles -->
      <div v-if="machine.details?.length" class="product-details">
        <h2>Detalles</h2>

        <ul>
          <li v-for="(detail, index) in machine.details" :key="index">
            <strong>{{ detail.uno }}</strong>
            {{ detail.dos }}
          </li>
        </ul>
      </div>

      <!-- Ficha técnica -->
      <div v-if="machine.technicalSheet?.length" class="product-technical-sheet">
        <h2>Ficha técnica</h2>

        <ul>
          <li v-for="(sheet, index) in machine.technicalSheet" :key="index">
            <strong>{{ sheet.unouno }}</strong>
            {{ sheet.dosdos }}
          </li>
        </ul>
      </div>

      <!-- Video -->
      <div v-if="machine.video?.length" class="product-video">
        <iframe
          :src="machine.video[0].url"
          width="100%"
          height="500"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </section>
  </div>

  <div v-else class="block-container">
    <section class="block-content">
      <h1>Producto no encontrado</h1>
    </section>
  </div>
</template>
