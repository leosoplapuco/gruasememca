<script setup lang="ts">
import { ref } from 'vue'
import './ProductVideo.css'

const props = defineProps<{
  videoUrl?: string
}>()

const isActive = ref(false)

const openVideo = () => {
  isActive.value = true
}

const closeVideo = () => {
  isActive.value = false
}
</script>

<template v-if="props.videoUrl">
  <button class="button-play-video" @click="openVideo">
    <span class="material-symbols-outlined">play_circle</span>
  </button>

  <div class="product-page-layer" :class="{ active: isActive }"></div>

  <button
    type="button"
    class="button-close-video"
    :class="{ active: isActive }"
    @click="closeVideo"
  >
    <span class="material-symbols-outlined">close</span>
  </button>

  <video
    :src="props.videoUrl"
    class="product-page-video"
    :class="{ active: isActive }"
    controls
  ></video>
</template>
