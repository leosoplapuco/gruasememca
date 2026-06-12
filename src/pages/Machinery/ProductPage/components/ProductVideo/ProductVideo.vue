<script setup lang="ts">
import './ProductVideo.css'
</script>

<template>
  <button class="button-play-video">
    <span class="material-symbols-outlined">play_circle</span>
  </button>

  <div class="product-page-layer"></div>

  <div class="product-page-video">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/L0AuNQEh5DM?si=uU9NononVhsVqpv9"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>
