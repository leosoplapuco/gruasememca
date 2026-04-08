<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>

<template>
  <Header />
  <main class="main-container">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
.main-container {
  padding: 2rem;
}
</style>
