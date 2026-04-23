<script setup lang="ts">
import './Testimonials.css'
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
          <li class="homepage-testimonial homepage-testimonial-1">
            <div class="homepage-testimonial-content d-flex gap-20">
              <div class="d-flex-column gap-10">
                <span class="hp-testimonial-service">Izaje</span>
                <p class="title">Izaje a 30 metros de altura</p>
                <p class="resume">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ad? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Ducimus minima aliquid,
                  necessitatibus voluptate repellendus atque vel illum eaque ab iste.
                </p>
                <a href="" class="button-link button-link-1 margin-top-10">
                  <p class="button-link-text">Ver proyecto</p>
                  <span class="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>

              <div class="hp-testimonial-gallery">
                <ul>
                  <li>
                    <img src="https://www.gruasememca.com/media/img/gallery-2.webp" alt="" />
                  </li>
                </ul>

                <div class="hp-testimonial-gallery-buttons">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <div class="hp-testimonial-float-tag">
              <a href="" class="hp-testimonial-float-tag-link d-flex-center-center gap-5" title="">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4f_4-ivYZ7dAWlF5DMFOyz6O-tBydWXQ0g&s"
                  alt=""
                />
                <p class="hp-testimonial-company">Sem Ingenieros SAC</p>
              </a>
              <p class="hp-testimonial-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente
                tempora minus tempore obcaecati quidem cumque facilis deserunt facere animi?
              </p>
              <div class="d-flex-column gap-5">
                <span class="person">Javier Soplapuco</span>
                <span class="workstation">Supervisor</span>
              </div>
            </div>

            <div class="hp-testimonial-buttons gap-10">
              <button type="button">
                <span class="material-symbols-outlined">arrow_back</span>
              </button>

              <div class="d-flex">
                <span class="active"></span>
                <span></span>
                <span></span>
              </div>

              <button type="button">
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
