<!-- <script setup lang="ts">
import './Projects.css'

import Services from '../Home/components/Services/Services.vue'
</script>

<template>
  <div class="block-container">
    <section class="block-content">
      <div class="block-title-container margin-bottom-20">
        <span>Nuestros</span>
        <h2 class="block-title">Proyectos</h2>
      </div>

      <ul class="projects-list">
        <li>
          <a href="" title="" class="project-card">
            <span class="material-symbols-outlined">arrow_outward</span>

            <img
              src="https://gruasymaniobras.com/wp-content/themes/gm/images/set-infraestructuras-mineras.jpg"
              alt=""
            />

            <div class="d-flex-column gap-10">
              <span class="project-card-category">Categoría</span>
              <p class="title">Nombre del proyecto</p>
              <p class="text">Nombre de la empresa | Año 2003</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>

  <Services />
</template> -->

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import './Projects.css'

// Definir interfaces para el tipado
interface Image {
  id: number
  src: string
  alt: string
}

interface Project {
  id: number
  category: string
  'project-name': string
  'project-owner': string
  year: number
  link: string
  texts: string[]
  images: Image[]
}

// Estado reactivo
const projects = ref<Project[]>([])

// Función para cargar los proyectos
const loadProjects = async () => {
  try {
    // Importar el JSON de manera dinámica
    const data = await import('./Projects.json')
    projects.value = data.default.projects || data.projects
  } catch (error) {
    console.error('Error al cargar los proyectos:', error)
  }
}

// Cargar datos al montar el componente
onMounted(() => {
  loadProjects()
})
</script>

<template>
  <div class="block-container">
    <section class="block-content">
      <div class="block-title-container margin-bottom-20">
        <span>Nuestros</span>
        <h2 class="block-title">Proyectos</h2>
      </div>

      <ul class="projects-list">
        <li v-for="project in projects" :key="project.id">
          <a :href="project.link" title="" class="project-card">
            <span class="material-symbols-outlined">arrow_outward</span>

            <!-- Mostrar la primera imagen del array images -->
            <img
              v-if="project.images && project.images.length > 0"
              :src="project.images[0].src"
              :alt="project.images[0].alt"
            />

            <div class="d-flex-column gap-10">
              <span class="project-card-category">{{ project.category }}</span>
              <p class="title">{{ project['project-name'] }}</p>
              <p class="text">{{ project['project-owner'] }} | Año {{ project.year }}</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>

  <!-- <Services /> -->
</template>
