<script setup lang="ts">
import { onMounted } from 'vue'

import './Header.css'

interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Grúas ememca',
})

onMounted(() => {
  const btnOpen = document.querySelector('.menu-button-open') as HTMLButtonElement
  const btnClose = document.querySelector('.menu-button-close') as HTMLButtonElement
  const nav = document.querySelector('.header-nav') as HTMLElement

  if (btnOpen && btnClose && nav) {
    btnOpen.addEventListener('click', () => {
      nav.classList.add('active')
      btnClose.classList.add('active')
    })

    btnClose.addEventListener('click', () => {
      nav.classList.remove('active')
      btnClose.classList.remove('active')
    })
  }
})
</script>

<template>
  <header>
    <div class="header">
      <a href="/" class="header-logo">
        <img src="https://www.gruasememca.com/media/img/logo-original-sin-fondo.webp" alt="" />
      </a>

      <nav class="header-nav">
        <ul class="header-nav-ul">
          <li>
            <a href="/" title="Grúas Ememca">
              <span class="material-symbols-outlined menu-sub-icon">home</span>
              <h2>Inicio</h2>
            </a>
          </li>
          <li>
            <button type="button">
              <span class="material-symbols-outlined menu-sub-icon">home_work</span>
              <h2>Servicios</h2>
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>

            <ul>
              <li>
                <a href="/servicios/alquiler-de-gruas-telescopicas/">
                  <span class="material-symbols-outlined">auto_towing</span>
                  <h3>Alquiler de grúas telescópicas</h3>
                </a>
              </li>
              <li>
                <a href="/servicios/izaje/" title="Servicios de izaje">
                  <span class="material-symbols-outlined">gondola_lift</span>
                  <h3>Izaje</h3>
                </a>
              </li>
              <li>
                <a href="/servicios/eliminacion-de-tierra/">
                  <span class="material-symbols-outlined">front_loader</span>
                  <h3>Eliminación de tierra</h3>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/nosotros/" title="Nosotros | Grúas Ememca">
              <span class="material-symbols-outlined menu-sub-icon">diversity_3</span>
              <h2>Nosotros</h2>
            </a>
          </li>
          <li>
            <!-- <button type="button">
              <span class="material-symbols-outlined">auto_towing</span>
              <h2>Maquinaria</h2>
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>

            <ul>
              <li>
                <a href="/maquinaria/gruas-telescopicas/" title="Grúas telescópicas | Grúas Ememca">
                  <h2>Grúas telescópicas</h2>
                </a>
              </li>
              <li>
                <a href="/maquinaria/excavadoras/" title="Excavadoras | Grúas Ememca">
                  <h2>Excavadoras</h2>
                </a>
              </li>
            </ul> -->
            <a href="/maquinaria/" title="Maquinaria | Grúas Ememca">
              <span class="material-symbols-outlined menu-sub-icon">auto_towing</span>
              <h2>Maquinaria</h2>
            </a>
          </li>
          <li>
            <a href="/proyectos/" title="Proyectos | Grúas Ememca">
              <span class="material-symbols-outlined menu-sub-icon">breaking_news</span>
              <h2>Proyectos</h2>
            </a>
          </li>
        </ul>
      </nav>

      <a href="" title="Llamar ahora" class="button-link button-link-1 header-call-button">
        <span class="material-symbols-outlined">call</span>
        <p>Llamar ahora</p>
      </a>

      <button type="button" class="menu-button-open">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </header>

  <button type="button" class="menu-button-close">
    <span class="material-symbols-outlined"> close</span>
  </button>
</template>
