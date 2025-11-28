<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
</script>

<template>
  <Header />
  <main class="main-container">
    <RouterView />
    <!-- Aquí se mostrará Home.vue u otras páginas -->
  </main>
</template>

<style scoped>
.main-container {
  padding: 2rem;
}
</style>
