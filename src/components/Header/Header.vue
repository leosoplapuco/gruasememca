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
        <h1>{{ title }}</h1>
      </a>

      <nav>
        <ul>
          <li>
            <a href="">
              <h2>Inicio</h2>
            </a>
          </li>
          <li>
            <button type="button">
              <h2>Servicios</h2>
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
    </div>
  </header>
</template>
