<!-- <script setup lang="ts">
import './Timeline.css'
</script>

<template>
  <div class="block-container">
    <section class="block-content">
      <div class="block-title-container margin-bottom-20">
        <span>A lo largo del tiempo</span>
        <p class="block-title">Nosotros</p>
      </div>

      <div class="timeline-container">
        <div class="timeline-content">
          <div class="timeline-tag timeline-tag-1">
            <span class="timeline-tag-year">1999</span>

            <div class="d-flex-column gap-10">
              <p class="title">leosoplapuco</p>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, hic! Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Rem, ad.
              </p>
            </div>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoef6SCPFFLFbZwy2OP74fxitkMkKCHhxcg&s"
              alt=""
            />
          </div>

          <div class="timeline-tag timeline-tag-2">
            <span class="timeline-tag-year">1999</span>

            <div class="d-flex-column gap-10">
              <p class="title">leosoplapuco</p>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, hic! Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Rem, ad.
              </p>
            </div>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoef6SCPFFLFbZwy2OP74fxitkMkKCHhxcg&s"
              alt=""
            />
          </div>

          <div class="timeline-tag timeline-tag-3">
            <div class="d-flex-column gap-10">
              <p class="title">leosoplapuco</p>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, hic! Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Rem, ad.
              </p>
            </div>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoef6SCPFFLFbZwy2OP74fxitkMkKCHhxcg&s"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template> -->

<script setup lang="ts">
import './Timeline.css'
import timelineData from './Timeline.json'

interface TimelineItem {
  id: number
  year: number
  title: string
  text: string
  image: string
  imageAlt: string
  link: string
  linkTitle: string
}

interface TimelineData {
  timeline: TimelineItem[]
}

const data: TimelineData = timelineData
</script>

<template>
  <div class="block-container">
    <section class="block-content">
      <div class="block-title-container margin-bottom-20">
        <span>A lo largo del tiempo</span>
        <p class="block-title">Nosotros</p>
      </div>

      <div class="timeline-container">
        <div class="timeline-content">
          <div
            v-for="(item, index) in data.timeline"
            :key="item.id"
            class="timeline-tag"
            :class="`timeline-tag-${index + 1}`"
          >
            <span v-if="item.year" class="timeline-tag-year">
              {{ item.year }}
            </span>

            <div class="d-flex-column gap-10">
              <p class="title">{{ item.title }}</p>
              <p class="text">{{ item.text }}</p>
            </div>

            <img :src="item.image" :alt="item.imageAlt" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
