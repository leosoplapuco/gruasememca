<script setup lang="ts">
import './Layout.css'

import Customers from '../../components/Customers/Customers.vue'
import Stack from '../../components/Stack/Stack.vue'
import Machinery from '../../components/Machinery/Machinery.vue'
</script>

<template>
  <div class="p-services-hero-container">
    <img src="https://www.gruasememca.com/media/img/gruas/PPM-40-PPM-ATT-400.webp" alt="" />
    <section class="block-content p-services-hero-content">
      <span class="p-s-hero-span">Servicios</span>
      <h1 class="block-title">Alquiler de grúas</h1>

      <p class="text color-white margin-top-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, amet.
      </p>
      <p class="text color-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi.
      </p>

      <a href="/" title="" class="button-link button-link-1 margin-top-20">
        <span class="material-symbols-outlined">phone_in_talk</span>
        <p class="button-link-text">Cotizar ahora</p>
      </a>
    </section>
  </div>

  <Stack />

  <Customers />

  <div class="block-container">
    <section class="block-content">
      <div class="block-title-container margin-bottom-20">
        <span>Servicios</span>
        <h1 class="block-title">Alquiler de grúas</h1>
      </div>

      <div class="d-grid-2-to-1fr gap-10">
        <div class="d-flex-column gap-10">
          <p class="title uppercase color-gray">
            Contamos con maquinaria para cargas de hasta las 220 toneladas
          </p>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eligendi magni quaerat
            aliquam ipsum consequuntur.
          </p>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque.
          </p>

          <div class="list-container">
            <ul class="list">
              <li>
                <p></p>
              </li>
            </ul>
          </div>

          <a href="" class="button-link button-link-1 margin-top-10 margin-left">
            <span class="material-symbols-outlined">phone_in_talk</span>
            <p class="button-link">Cotizar ahora</p>
          </a>
        </div>

        <div class="d-flex-column gap-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjGILUq4npy3XvJn2tFkAndZ4NLneKM_UEr4PacWHBhGq9lpbl0Q4aiQ&s=10"
            alt=""
            class="d-flex w-100 border-r-5"
          />
        </div>
      </div>
    </section>
  </div>

  <Machinery />
</template>
