<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import './ProductPage.css'

// Importar JSON y forzar tipo any para evitar conflictos
import machineryDataRaw from '../Machinery.json'
const machineryData = machineryDataRaw as any

const route = useRoute()

const machine = computed(() => {
  return machineryData.machinery.find(
    (item: any) => item.slug === route.params.slug && item.categoria === route.params.categoria,
  )
})

const currentImageIndex = ref(0)

const currentImage = computed(() => {
  if (!machine.value?.images?.length) return null
  return machine.value.images[currentImageIndex.value]
})

const nextImage = () => {
  if (!machine.value?.images?.length) return
  currentImageIndex.value = (currentImageIndex.value + 1) % machine.value.images.length
}

const prevImage = () => {
  if (!machine.value?.images?.length) return
  currentImageIndex.value =
    (currentImageIndex.value - 1 + machine.value.images.length) % machine.value.images.length
}

const flattenedDetails = computed(() => {
  if (!machine.value?.details) return []

  const result: Array<{ key: string; value: any }> = []
  machine.value.details.forEach((detail: any) => {
    Object.entries(detail).forEach(([key, value]) => {
      result.push({ key, value })
    })
  })
  return result
})

const flattenedTechnicalSheet = computed(() => {
  if (!machine.value?.technicalSheet) return []

  const result: Array<{ key: string; value: any }> = []
  machine.value.technicalSheet.forEach((sheet: any) => {
    Object.entries(sheet).forEach(([key, value]) => {
      result.push({ key, value })
    })
  })
  return result
})
</script>

<template>
  <div v-if="machine" class="block-container">
    <div class="block-content">
      <section class="machinery-page-container">
        <div class="machinery-page-tag machinery-page-tag-1">
          <img
            v-if="currentImage"
            :src="currentImage.img"
            :alt="currentImage.alt || machine.name"
          />

          <button
            v-if="machine.images?.length > 1"
            type="button"
            class="machinery-page-images-button machinery-page-images-button-left"
            @click="prevImage"
          >
            <span class="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            v-if="machine.images?.length > 1"
            type="button"
            class="machinery-page-images-button machinery-page-images-button-right"
            @click="nextImage"
          >
            <span class="material-symbols-outlined">chevron_right</span>
          </button>

          <div class="machinery-page-images-list">
            <ul v-if="machine.images?.length">
              <li
                v-for="(image, index) in machine.images"
                :key="index"
                :class="{ active: currentImageIndex === index }"
                @click="currentImageIndex = index"
              >
                <img :src="image.img" :alt="image.alt || machine.name" />
              </li>
            </ul>
          </div>
        </div>

        <div class="machinery-page-tag machinery-page-tag-2">
          <h1 class="block-title">{{ machine.name }}</h1>

          <div v-if="machine.video?.length && machine.video[0].url">play video</div>

          <p v-for="(text, index) in machine.texts" :key="index" class="text">{{ text }}</p>

          <p class="title" v-if="flattenedDetails.length">Detalles</p>
          <ul v-if="flattenedDetails.length">
            <li v-for="(item, index) in flattenedDetails" :key="`detail-${index}`">
              <strong>{{ item.key }}:</strong>
              <p>{{ item.value }}</p>
            </li>
          </ul>

          <p class="title" v-if="flattenedTechnicalSheet.length">Ficha Técnica</p>
          <ul v-if="flattenedTechnicalSheet.length">
            <li v-for="(item, index) in flattenedTechnicalSheet" :key="`sheet-${index}`">
              <strong>{{ item.key }}:</strong>
              <p>{{ item.value }}</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>

  <div v-else class="block-container">
    <section class="block-content">
      <h1>Producto no encontrado</h1>
    </section>
  </div>
</template>
