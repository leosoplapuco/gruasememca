<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import './Header.css'

interface Props {
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Grúas ememca',
})

const isMenuOpen = ref(false)
const isSubMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleSubMenu = () => {
  isSubMenuOpen.value = !isSubMenuOpen.value
}

let handleScroll: () => void

onMounted(() => {
  const header = document.querySelector('header')

  handleScroll = () => {
    if (window.scrollY > 50) {
      header?.classList.add('active')
    } else {
      header?.classList.remove('active')
    }
  }

  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header>
    <div class="header">
      <a href="/" title="www.gruasememca.com" class="header-logo">
        <img src="https://www.gruasememca.com/media/img/logo-original-sin-fondo.webp" alt="Logo" />
      </a>

      <nav class="header-nav" :class="{ active: isMenuOpen }">
        <ul class="header-nav-ul">
          <li>
            <a href="/">
              <span class="material-symbols-outlined menu-sub-icon">home</span>
              <h2>Inicio</h2>
            </a>
          </li>

          <li>
            <button
              type="button"
              class="header-sub-menu-button"
              :class="{ active: isSubMenuOpen }"
              @click="toggleSubMenu"
            >
              <span class="material-symbols-outlined menu-sub-icon">home_work</span>
              <h2>Servicios</h2>
              <span class="material-symbols-outlined menu-button-link-arrow">
                keyboard_arrow_down
              </span>
            </button>

            <div class="sub-menu-container" :class="{ active: isSubMenuOpen }">
              <nav class="sub-menu">
                <div class="sub-menu-target-1 d-flex-column gap-10">
                  <p class="title">Más de 15 años de experiencia en servicios de grúas.</p>
                  <p class="text">
                    Soluciones confiables para proyectos industriales y de construcción.
                  </p>
                  <a href="/nosotros/" class="button-link button-link-3 margin-left">
                    <span class="material-symbols-outlined">person</span>
                    <p class="button-link-text">Más de nosotros</p>
                  </a>
                </div>

                <div class="sub-menu-target-2">
                  <nav class="sub-menu-target-menu">
                    <ul>
                      <li>
                        <a href="/servicios/alquiler-de-gruas/">
                          <p class="title">Alquiler de grúas</p>
                          <p class="text">Equipos modernos y seguros.</p>
                        </a>
                      </li>
                      <li>
                        <a href="/servicios/izaje/">
                          <p class="title">Servicios de izaje</p>
                          <p class="text">Operaciones de alta precisión.</p>
                        </a>
                      </li>
                      <li>
                        <a href="/servicios/montaje-y-desmontaje/">
                          <p class="title">Montaje y desmontaje</p>
                          <p class="text">Ejecución técnica especializada.</p>
                        </a>
                      </li>
                      <li>
                        <a href="/servicios/eliminacion-de-tierra/">
                          <p class="title">Eliminación de tierra</p>
                          <p class="text">Movimiento y retiro de material.</p>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </nav>
            </div>
          </li>

          <li>
            <a href="/nosotros/">
              <span class="material-symbols-outlined menu-sub-icon">diversity_3</span>
              <h2>Nosotros</h2>
            </a>
          </li>

          <li>
            <a href="/maquinaria/">
              <span class="material-symbols-outlined menu-sub-icon">auto_towing</span>
              <h2>Maquinaria</h2>
            </a>
          </li>

          <li>
            <a href="/proyectos/">
              <span class="material-symbols-outlined menu-sub-icon">breaking_news</span>
              <h2>Proyectos</h2>
            </a>
          </li>
        </ul>
      </nav>

      <div class="d-flex-center-center gap-10">
        <a href="/" class="button-link button-link-1 header-call-button">
          <span class="material-symbols-outlined">call</span>
          <p>Llamar ahora</p>
        </a>

        <button
          type="button"
          class="menu-button"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
        >
          <span class="material-symbols-outlined">menu</span>
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  </header>
</template>
