<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import './ProductPage.css'

import machineryData from '../Machinery.json'

const route = useRoute()

const machine = computed(() => {
  return machineryData.machinery.find(
    (item) => item.slug === route.params.slug && item.categoria === route.params.categoria,
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

          <p v-for="(text, index) in machine.texts" :key="index" class="text">
            {{ text }}
          </p>

          <ul v-if="machine.details?.length">
            <li v-for="(detail, index) in machine.details" :key="index">
              <strong>{{ detail.uno }}</strong> {{ detail.dos }}
            </li>
          </ul>

          <ul v-if="machine.technicalSheet?.length">
            <li v-for="(sheet, index) in machine.technicalSheet" :key="index">
              <strong>{{ sheet.unouno }}</strong> {{ sheet.dosdos }}
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
