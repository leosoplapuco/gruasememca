<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import Wsp from '@/components/Wsp/Wsp.vue'
</script>

<template>
  <Header />
  <main class="main-container">
    <RouterView />
  </main>
  <Footer />
  <Wsp />
</template>
