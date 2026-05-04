<script setup lang="ts">
import { ref, computed } from 'vue'
import './Services.css'
import data from './Services.json'

interface Service {
  id: number
  title: string
  image: string
  imageAlt: string
  slogan: string
  description: string[]
  link: string
}

const services = ref<Service[]>(data.services)
const activeServiceId = ref<number | null>(data.services[0]?.id ?? null)

const activeService = computed(() => services.value.find((s) => s.id === activeServiceId.value))
</script>

<template>
  <div class="block-container">
    <section class="block-content">
      <div class="block-title-container">
        <span class="block-title-span">Nuestros</span>
        <p class="block-title">Servicios</p>
      </div>

      <div class="homepage-services-buttons-container">
        <ul>
          <li v-for="service in services" :key="service.id">
            <button
              class="h-p-button"
              :class="['h-p-button-' + service.id, { active: service.id === activeServiceId }]"
              @click="activeServiceId = service.id"
            >
              <span>{{ service.id }}</span>
              <p>{{ service.title }}</p>
            </button>
          </li>
        </ul>
      </div>

      <div v-if="activeService" class="homepage-services-targets">
        <div class="homepage-services-target homepage-services-target-1">
          <img :src="activeService.image" :alt="activeService.imageAlt" />
        </div>

        <div class="homepage-services-target homepage-services-target-2">
          <span class="service-des-title">
            {{ activeService.title }}
          </span>

          <p>{{ activeService.slogan }}</p>

          <ul>
            <li v-for="(item, index) in activeService.description" :key="index">
              <p>{{ item }}</p>
            </li>
          </ul>

          <a :href="activeService.link" class="button-link button-link-1 margin-right">
            <p class="button-link-text">Cotizar servicio</p>
            <span class="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
