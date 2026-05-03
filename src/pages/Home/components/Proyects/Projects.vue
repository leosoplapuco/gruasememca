<script setup lang="ts">
import './Projects.css'
import projectsData from './Projects.json'

type Project = {
  id: number
  title: string
  resume: string
  link: string
  image: string
}

const projects: Project[] = projectsData.projects
</script>

<template>
  <div class="block-container">
    <section class="block-content">
      <div class="homepage-projects">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="homepage-project"
          :class="`homepage-project-${index + 1}`"
        >
          <div class="homepage-project-tag homepage-project-tag-1">
            <div class="homepage-project-tag-title">
              <span>{{ String(index + 1).padStart(2, '0') }}.-</span>
              <p>{{ project.title }}</p>
            </div>

            <p>{{ project.resume }}</p>

            <a :href="project.link" class="homepage-project-tag-link">
              <p>Ver más</p>
            </a>
          </div>

          <div class="homepage-project-tag homepage-project-tag-2">
            <img :src="project.image" :alt="project.title" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
