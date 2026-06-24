<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import './Customers.css'

import customersData from './Customers.json'

interface Customer {
  id: number
  customerName: string
  customerLink: string
  customerImage: string
}

interface CustomersData {
  customers: Customer[]
}

const data: CustomersData = customersData
const isHovering = ref(false)
const trackRef = ref<HTMLElement | null>(null)
let animation: Animation | null = null
const startScrollAnimation = () => {
  if (!trackRef.value) return

  if (animation) {
    animation.cancel()
  }

  const trackWidth = trackRef.value.scrollWidth / 2
  const containerWidth = trackRef.value.parentElement?.clientWidth || 0

  if (trackWidth > containerWidth) {
    animation = trackRef.value.animate(
      [{ transform: 'translateX(0)' }, { transform: `translateX(-${trackWidth}px)` }],
      {
        duration: calculateDuration(trackWidth),
        iterations: Infinity,
        easing: 'linear',
      },
    )
  }
}

const calculateDuration = (width: number) => {
  const baseSpeed = 75
  return (width / baseSpeed) * 1000
}

const pauseAnimation = () => {
  if (animation) {
    animation.pause()
  }
}

const resumeAnimation = () => {
  if (animation) {
    animation.play()
  }
}

const handleMouseEnter = () => {
  isHovering.value = true
  pauseAnimation()
}

const handleMouseLeave = () => {
  isHovering.value = false
  resumeAnimation()
}

onMounted(() => {
  startScrollAnimation()

  window.addEventListener('resize', startScrollAnimation)
})

onBeforeUnmount(() => {
  if (animation) {
    animation.cancel()
  }
  window.removeEventListener('resize', startScrollAnimation)
})
</script>

<template>
  <div class="block-container">
    <section class="block-content">
      <div class="block-title-container margin-bottom-20">
        <span>Nos respaldan</span>
        <p class="block-title">Clientes frecuentes</p>
      </div>

      <div
        class="customers-container"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <ul ref="trackRef" class="customers-track" :class="{ paused: isHovering }">
          <li v-for="customer in data.customers" :key="`first-${customer.id}`">
            <a :href="customer.customerLink" target="_blank">
              <img :src="customer.customerImage" :alt="customer.customerName" />
            </a>
          </li>

          <li v-for="customer in data.customers" :key="`second-${customer.id}`">
            <a :href="customer.customerLink" target="_blank">
              <img :src="customer.customerImage" :alt="customer.customerName" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
