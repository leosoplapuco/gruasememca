<script setup lang="ts">
import { ref, onMounted } from 'vue'
import './Footer.css'

interface Network {
  id: number
  app: string
  link: string
  icon: string
  username: string
  title: string
}

interface DatosGenerales {
  tel1: string
  tel2: string
  mail1: string
  mail2: string
  direccion: string
  networks: Network[]
}

const datos = ref<DatosGenerales | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const response = await fetch('/JSON/datos-generales.json')
    if (!response.ok) throw new Error('Error al cargar los datos')
    datos.value = await response.json()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Error desconocido'
    console.error('Error:', error.value)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <footer>
    <div v-if="loading" class="footer-loading">Cargando...</div>

    <div v-else-if="error" class="footer-error">Error al cargar datos</div>

    <div v-else class="footer">
      <nav>
        <ul>
          <li class="footer-target footer-target-1">
            <a href="/" class="footer-logo">
              <img
                src="https://www.gruasememca.com/media/img/logo-original-sin-fondo.webp"
                alt="Logo de gruasememca.com"
              />
            </a>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, corporis! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Hic quae consequatur natus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Nihil odit sint, atque culpa magnam
              soluta saepe, amet, corrupti maiores voluptates hic ut perspiciatis commodi repellat.
            </p>

            <a href="/nosotros/" class="button-link button-link-4 margin-left">
              <p class="button-link-text">Saber más</p>
              <span class="material-symbols-outlined">arrow_outward</span>
            </a>
          </li>

          <li class="footer-target footer-target-2">
            <span class="footer-target-title">Nuestras redes</span>
            <ul class="social-networks">
              <li v-for="network in datos?.networks" :key="network.id">
                <a :href="network.link" target="_blank" :title="network.title">
                  <i :class="network.icon"></i>
                  <span>{{ network.username }}</span>
                </a>
              </li>
            </ul>
          </li>

          <li class="footer-target footer-target-3">
            <span class="footer-target-title">Contacto</span>
            <ul class="footer-contact-list">
              <li>
                <a :href="'tel:' + datos?.tel1">
                  <i class="fa-solid fa-phone-volume"></i>
                  <span>{{ datos?.tel1 }}</span>
                </a>
              </li>

              <li v-if="datos?.tel2">
                <a :href="'tel:' + datos?.tel2">
                  <i class="fa-solid fa-phone-volume"></i>
                  <span>{{ datos?.tel2 }}</span>
                </a>
              </li>

              <li>
                <a :href="'mailto:' + datos?.mail1">
                  <i class="fa-solid fa-envelope"></i>
                  <span>{{ datos?.mail1 }}</span>
                </a>
              </li>

              <li v-if="datos?.mail2">
                <a :href="'mailto:' + datos?.mail2">
                  <i class="fa-solid fa-envelope"></i>
                  <span>{{ datos?.mail2 }}</span>
                </a>
              </li>

              <li>
                <a href="">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>{{ datos?.direccion }}</span>
                </a>
              </li>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1949.4516293757451!2d-76.91916411130899!3d-12.254825634792683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bb17b653d613%3A0x3d72e660c7045fea!2sGr%C3%BAas%20Ememca%20SAC!5e0!3m2!1ses-419!2spe!4v1775615146295!5m2!1ses-419!2spe"
                width="400"
                height="150"
                style="border: 0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="footer-map"
              ></iframe>
            </ul>
          </li>
        </ul>
      </nav>

      <a href="/" class="footer-final-link" title="gruasememca.com">
        <p>www.gruasememca.com</p>
      </a>
    </div>
  </footer>
</template>
