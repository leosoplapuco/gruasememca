<script setup lang="ts">
import { ref } from 'vue'
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

const testimonials = ref<Testimonial[]>(
  data.testimonials.map((item: any) => ({
    ...item,
    companyName: item['company-name'],
  })),
)

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const prev = () => {
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
          <li v-if="testimonials.length" class="homepage-testimonial">
            <div class="homepage-testimonial-content d-flex gap-20">
              <div class="d-flex-column gap-10">
                <span class="hp-testimonial-service">{{ testimonials[currentIndex].service }}</span>

                <p class="title">{{ testimonials[currentIndex].title }}</p>
                <p class="resume">{{ testimonials[currentIndex].resume }}</p>

                <a
                  :href="testimonials[currentIndex].link"
                  class="button-link button-link-1 margin-top-10"
                >
                  <p class="button-link-text">Ver proyecto</p>
                  <span class="material-symbols-outlined"> arrow_outward </span>
                </a>
              </div>

              <div class="hp-testimonial-gallery">
                <ul>
                  <li v-for="img in testimonials[currentIndex].galery" :key="img.id">
                    <img :src="img.src" :alt="img.alt" />
                  </li>
                </ul>
              </div>
            </div>

            <div class="hp-testimonial-float-tag">
              <p class="hp-testimonial-company">
                {{ testimonials[currentIndex].companyName }}
              </p>

              <p class="hp-testimonial-text">
                {{ testimonials[currentIndex].testimonial }}
              </p>

              <div class="d-flex-column gap-5">
                <span class="person">
                  {{ testimonials[currentIndex].person }}
                </span>
                <span class="workstation">
                  {{ testimonials[currentIndex].workstation }}
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
