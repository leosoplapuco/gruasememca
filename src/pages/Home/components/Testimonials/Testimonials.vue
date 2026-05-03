<script setup lang="ts">
import { ref, computed } from 'vue'
import './Testimonials.css'
import data from './Testimonial.json'

type GalleryItem = {
  id: number
  type: string
  src: string
  alt: string
}

type Testimonial = {
  id: number
  service: string
  title: string
  resume: string
  link: string
  galery: GalleryItem[]
  companyName: string
  testimonial: string
  person: string
  workstation: string
}

// Normalización del JSON (sin any)
const testimonials = ref<Testimonial[]>(
  data.testimonials.map((item) => ({
    id: item.id,
    service: item.service,
    title: item.title,
    resume: item.resume,
    link: item.link,
    galery: item.galery,
    companyName: item['company-name'],
    testimonial: item.testimonial,
    person: item.person,
    workstation: item.workstation,
  })),
)

const currentIndex = ref(0)

const currentTestimonial = computed<Testimonial | null>(() => {
  if (!testimonials.value.length) return null

  return testimonials.value[currentIndex.value] ?? null
})

const next = () => {
  if (!testimonials.value.length) return
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const prev = () => {
  if (!testimonials.value.length) return
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
}
</script>

<template>
  <div class="block-container homepage-testimonials-block-container">
    <section class="block-content">
      <div class="block-title-container">
        <span class="block-title-span">Clientes frecuentes</span>
        <p class="block-title">Testimonios</p>
      </div>

      <div class="homepage-testimonials">
        <ul class="homepage-testimonials-list">
          <li v-if="currentTestimonial" class="homepage-testimonial">
            <div class="homepage-testimonial-content d-flex gap-20">
              <div class="d-flex-column gap-10">
                <span class="hp-testimonial-service">
                  {{ currentTestimonial.service }}
                </span>

                <p class="title">
                  {{ currentTestimonial.title }}
                </p>

                <p class="resume">
                  {{ currentTestimonial.resume }}
                </p>

                <a :href="currentTestimonial.link" class="button-link button-link-1 margin-top-10">
                  <p class="button-link-text">Ver proyecto</p>
                  <span class="material-symbols-outlined"> arrow_outward </span>
                </a>
              </div>

              <div class="hp-testimonial-gallery">
                <ul>
                  <li v-for="img in currentTestimonial.galery" :key="img.id">
                    <img :src="img.src" :alt="img.alt" />
                  </li>
                </ul>
              </div>
            </div>

            <div class="hp-testimonial-float-tag">
              <p class="hp-testimonial-company">
                {{ currentTestimonial.companyName }}
              </p>

              <p class="hp-testimonial-text">
                {{ currentTestimonial.testimonial }}
              </p>

              <div class="d-flex-column gap-5">
                <span class="person">
                  {{ currentTestimonial.person }}
                </span>
                <span class="workstation">
                  {{ currentTestimonial.workstation }}
                </span>
              </div>
            </div>

            <div class="hp-testimonial-buttons gap-10">
              <button type="button" @click="prev">
                <span class="material-symbols-outlined"> arrow_back </span>
              </button>

              <div class="d-flex">
                <span
                  v-for="(item, index) in testimonials"
                  :key="item.id"
                  :class="{ active: index === currentIndex }"
                ></span>
              </div>

              <button type="button" @click="next">
                <span class="material-symbols-outlined"> arrow_forward </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
