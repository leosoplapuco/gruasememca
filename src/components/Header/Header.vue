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
  const header = document.querySelector('header')

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

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header?.classList.add('active')
    } else {
      header?.classList.remove('active')
    }
  }

  window.addEventListener('scroll', handleScroll)
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
              <span class="material-symbols-outlined menu-button-link-arrow"
                >keyboard_arrow_down</span
              >
            </button>

            <div class="sub-menu-container">
              <nav class="sub-menu">
                <div class="sub-menu-target-1 d-flex-column gap-10">
                  <p class="title">
                    Más de 15 años Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                    rerum.
                  </p>
                  <p class="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nobis quis
                    autem cum aspernatur ullam repellat reiciendis impedit. Quod animi dignissimos
                    minima cumque nostrum accusamus iure libero aut modi eum!
                  </p>
                  <a href="" class="button-link button-link-3 margin-right">
                    <p class="button-link-text">Más de nosotros</p>
                  </a>
                </div>
                <div class="sub-menu-target-2"></div>
              </nav>
            </div>
          </li>

          <li>
            <a href="/nosotros/" title="Nosotros | Grúas Ememca">
              <span class="material-symbols-outlined menu-sub-icon">diversity_3</span>
              <h2>Nosotros</h2>
            </a>
          </li>

          <li>
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

      <a href="/" title="Llamar ahora" class="button-link button-link-1 header-call-button">
        <span class="material-symbols-outlined">call</span>
        <p>Llamar ahora</p>
      </a>

      <button type="button" class="menu-button-open">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </header>

  <button type="button" class="menu-button-close">
    <span class="material-symbols-outlined">close</span>
  </button>
</template>
