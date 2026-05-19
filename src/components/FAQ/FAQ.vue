<script setup lang="ts">
import { ref } from 'vue'
import './FAQ.css'
import faqData from './Faq.json'

interface FaqItem {
  id: number
  title: string
  texts: string[]
  link?: string
}

interface FaqData {
  faq: FaqItem[]
}

const data: FaqData = faqData

const activeFaq = ref<number | null>(data.faq[0]?.id ?? null)

const toggleFaq = (id: number) => {
  if (activeFaq.value === id) {
    activeFaq.value = null
  } else {
    activeFaq.value = id
  }
}
</script>

<template>
  <div class="block-container">
    <section class="block-content">
      <div class="d-grid-2-1fr gap-20">
        <div class="d-flex-column">
          <div class="block-title-container margin-bottom-10">
            <span class="block-title-span">Preguntas frecuentes</span>
            <h2 class="block-title">FAQ</h2>
          </div>

          <div class="faq-content">
            <div
              v-for="item in data.faq"
              :key="item.id"
              class="faq-target"
              :class="{ active: activeFaq === item.id }"
              @click="toggleFaq(item.id)"
            >
              <div class="faq-target-title">
                <p>{{ item.title }}</p>

                <span class="material-symbols-outlined"> keyboard_arrow_down </span>
              </div>

              <div class="d-flex-column">
                <p v-for="(text, index) in item.texts" :key="index" class="text">
                  {{ text }}
                </p>
                <a v-if="item.link" :href="item.link" class="button-link button-link-5 margin-left">
                  <p class="button-link-text">Ver más</p>
                  <span class="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex w-100">
          <img
            src="https://elebia.com/wp-content/uploads/2021/01/gruas-de-construccion.jpg"
            alt=""
            class="d-flex w-100-img"
          />
        </div>
      </div>
    </section>
  </div>
</template>
