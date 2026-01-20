<script setup lang="ts">
import './AboutUs.css'
</script>

<template>
  <div class="block-container">
    <section class="block-content about-us-block-content">
      <div class="block-title-container margin-bottom-20-to-10">
        <span class="block-title-span">Acerca de</span>
        <p class="block-title">Nosotros</p>
      </div>

      <div class="d-grid-2-to-1fr gap-10">
        <div class="d-flex-center-center d-flex-column gap-20">
          <ul class="d-flex-start-left d-flex-column gap-10">
            <li>
              <p class="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, atque.
              </p>
            </li>
            <li>
              <p class="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam minima
                adipisci unde labore, ea, voluptatum, a consequatur obcaecati dicta neque maxime?
                Asperiores, non sequi.
              </p>
            </li>
            <li>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa illo error labore
                eveniet reprehenderit corrupti dolores aliquam aperiam totam repellat dicta impedit
                adipisci vel mollitia, praesentium accusantium minus sed aliquid, eum molestiae
                perferendis. Nostrum.
              </p>
            </li>
          </ul>

          <div class="w-100 d-flex gap-10">
            <a href="/nosotros/" class="button-link button-link-3">
              <span class="material-symbols-outlined">group</span>
              <p class="button-link-text">Más sobre nosotros</p>
            </a>

            <a href="/" class="button-link button-link-1">
              <span class="material-symbols-outlined">call</span>
              <p class="button-link-text">Contactar ahora</p>
            </a>
          </div>
        </div>

        <div class="h-p-us-container">
          <div class="h-p-us-content">
            <ul>
              <li>
                <img src="https://www.gruasememca.com/media/img/gallery-1.webp" alt="" />
              </li>
              <li>
                <img src="https://www.gruasememca.com/media/img/gallery-2.webp" alt="" />
              </li>
              <li>
                <img src="https://www.gruasememca.com/media/img/gallery-3.webp" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
