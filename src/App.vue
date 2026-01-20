<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
</script>

<template>
  <Header />
  <main class="main-container">
    <RouterView />
  </main>
</template>

<style scoped>
.main-container {
  padding: 2rem;
}
</style>
