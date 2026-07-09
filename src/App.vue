<script setup lang="ts">
import Layer from '@/components/Layer/Layer.vue'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import Wsp from '@/components/Wsp/Wsp.vue'
</script>

<template>
  <Layer />
  <Header />
  <main class="main-container">
    <RouterView />
  </main>
  <Footer />
  <Wsp />
</template>
