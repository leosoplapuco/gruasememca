<script setup lang="ts">
import './Header.css'

interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Grúas ememca',
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
            <a href="">
              <h2>Inicio</h2>
            </a>
          </li>
          <li>
            <button type="button">
              <h2>Servicios</h2>
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>

            <ul>
              <li>
                <a href="">
                  <h2>Alquiler de grúas telescópicas</h2>
                </a>
              </li>
              <li>
                <a href="">
                  <h2>Izaje</h2>
                </a>
              </li>
              <li>
                <a href="">
                  <h2>Eliminación de tierra</h2>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">
              <h2>Nosotros</h2>
            </a>
          </li>
          <li>
            <button type="button">
              <h2>Maquinaria</h2>
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>

            <ul>
              <li>
                <a href="">
                  <h2>Grúas telescópicas</h2>
                </a>
              </li>
              <li>
                <a href="">
                  <h2>Excavadoras</h2>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">
              <h2>Proyectos</h2>
            </a>
          </li>
        </ul>
      </nav>

      <a href="" class="button-link button-link-1">
        <span class="material-symbols-outlined">call</span>
        <p>Llamar ahora</p>
      </a>
    </div>
  </header>
</template>
