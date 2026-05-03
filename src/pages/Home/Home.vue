<script setup lang="ts">
import './Home.css'

import Services from './components/Services/Services.vue'
import AboutUs from './components/AboutUs/AboutUs.vue'
import Machinery from './components/Machinery/Machinery.vue'
import Projects from './components/Proyects/Projects.vue'
import Testimonials from './components/Testimonials/Testimonials.vue'
</script>

<template>
  <video
    src="https://www.gruasememca.com/media/videos/video-1.webm"
    class="homepage-video-bg"
    autoplay
    loop
    muted
  ></video>

  <div class="hero-container">
    <section class="hero-content">
      <span>Grúas Ememca SAC</span>
      <h1 class="anton-regular">Alquiler de grúas</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus deserunt debitis.
        Perspiciatis, veniam sequi!
      </p>

      <div class="d-flex gap-10">
        <a href="/nosotros/" class="button-link button-link-1">
          <span class="material-symbols-outlined">group</span>
          <p class="button-link-text">Sobre nosotros</p>
        </a>

        <a href="" class="button-link button-link-2">
          <span class="material-symbols-outlined">call</span>
          <p class="button-link-text">Llamar ahora</p>
        </a>
      </div>
    </section>
  </div>

  <Services />

  <AboutUs />

  <Machinery />

  <div class="block-container homepage-msg-1">
    <section class="block-content homepage-msg-1-content">
      <div class="d-flex-column">
        <div class="d-flex-center-center">
          <span class="material-symbols-outlined">add</span>
          <span>15</span>
        </div>
        <p class="d-flex margin-left">Años</p>
      </div>
      <div class="d-flex">
        <p class="hpg-msg-1-text">Garantizando seguridad y compromiso en tus proyectos</p>
      </div>
    </section>
  </div>

  <Projects />

  <div class="homepage-last-banner">
    <img src="https://equipospesados.pe/wp-content/uploads/2025/06/EP-CamionesGrua.webp" alt="" />

    <div class="block-content">
      <div class="homepage-last-banner-text">
        <p class="title">¿Por qué Grúas Ememca?</p>
        <p class="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, in?</p>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem, maiores aperiam
          veritatis inventore porro iusto voluptatem, delectus ut architecto iste odit explicabo
          voluptas ab dolor officiis labore? Itaque quas inventore voluptatum, maxime atque minus
          debitis commodi?
        </p>

        <a href="/nosotros/" class="link">
          <p>Ver más</p>
          <span class="material-symbols-outlined">chevron_right</span>
        </a>
      </div>
    </div>
  </div>

  <Testimonials />
</template>
