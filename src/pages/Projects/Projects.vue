<script setup lang="ts">
import './Projects.css'

// import Services from '../Home/components/Services/Services.vue'
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

  <!-- <Services /> -->
</template>
