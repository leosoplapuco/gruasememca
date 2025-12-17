<!-- <script setup lang="ts">
import './Services.css'
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
          <li>
            <button class="h-p-button h-p-button-1 active">
              <span>1</span>
              <p>Alquiler de grúas</p>
            </button>
          </li>
          <li>
            <button class="h-p-button h-p-button-2">
              <span>2</span>
              <p>Izaje</p>
            </button>
          </li>
          <li>
            <button class="h-p-button h-p-button-3">
              <span>3</span>
              <p>Montaje y desmontaje</p>
            </button>
          </li>
          <li>
            <button class="h-p-button h-p-button-4">
              <span>4</span>
              <p>Eliminación de tierra</p>
            </button>
          </li>
        </ul>
      </div>

      <div class="homepage-services-targets">
        <div class="homepage-services-target homepage-services-target-1">
          <img src="{image}" alt="" />
        </div>

        <div class="homepage-services-target homepage-services-target-2">
          <span class="service-des-title">{title}</span>

          <p class="">{slogan}</p>

          <ul>
            <li>
              <p>{description}</p>
            </li>
          </ul>

          <a href="" class="button-link button-link-1">
            <p class="button-link- text">Cotizar</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template> -->

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import './Services.css'

interface Service {
  id: number
  title: string
  image: string
  imageAlt: string
  slogan: string
  description: string[]
  link: string
}

const services = ref<Service[]>([])
const activeServiceId = ref<number | null>(null)

// obtener servicio activo
const activeService = computed(() => services.value.find((s) => s.id === activeServiceId.value))

// cargar JSON desde /public
onMounted(async () => {
  try {
    const response = await fetch('/JSON/Pages/homepage.json')
    const data = await response.json()

    services.value = data.services
    activeServiceId.value = data.services[0]?.id ?? null
  } catch (error) {
    console.error('Error cargando servicios:', error)
  }
})
</script>

<template>
  <div class="block-container">
    <section class="block-content">
      <div class="block-title-container">
        <span class="block-title-span">Nuestros</span>
        <p class="block-title">Servicios</p>
      </div>

      <!-- BOTONES -->
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

      <!-- CONTENIDO -->
      <div v-if="activeService" class="homepage-services-targets">
        <!-- IMAGEN -->
        <div class="homepage-services-target homepage-services-target-1">
          <img :src="activeService.image" :alt="activeService.imageAlt" />
        </div>

        <!-- TEXTO -->
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

          <a :href="activeService.link" class="button-link button-link-1">
            <p class="button-link-text">Cotizar</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
