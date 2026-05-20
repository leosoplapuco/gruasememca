<script setup lang="ts">
import './About.css'

import Testimonials from '../Home/components/Testimonials/Testimonials.vue'
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
</script>

<template>
  <div class="block-container about-us-page-banner">
    <img src="https://www.gruasememca.com/media/img/gruas/PPM-40-PPM-ATT-400.webp" alt="" />

    <section class="block-content d-flex-column">
      <div class="block-title-container">
        <span>Grúas Ememca</span>
        <h1 class="block-title">Nosotros</h1>
      </div>

      <div class="d-flex-column w-auto margin-auto">
        <p class="text color-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa dicta numquam velit
          voluptates quis cumque aperiam ipsum, aliquam nemo natus provident? Officiis, excepturi
          neque?
        </p>
      </div>
    </section>
  </div>

  <div class="block-container">
    <section class="block-content">
      <div class="block-title-container">
        <span>Confían en nosotros</span>
        <h3 class="block-title">Clientes frecuentes</h3>
      </div>

      <div class="customers-container">
        <ul class="customers-content">
          <li v-for="customer in data.customers" :key="customer.id">
            <a :href="customer.customerLink" target="_blank">
              <img :src="customer.customerImage" :alt="customer.customerName" />
              <!-- <span>{{ customer.customerName }}</span> -->
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>

  <div class="block-container">
    <section class="block-content">
      <div class="d-grid-2-to-1fr gap-20">
        <div class="d-flex-column gap-10">
          <div class="block-title-container">
            <span>Alquiler de grúas en Lima</span>
            <h3 class="block-title">Grúas Ememca SAC</h3>
          </div>

          <ul class="d-flex-column gap-10">
            <li>
              <p class="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, esse!
              </p>
            </li>
            <li>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima amet fugit iure
                molestias quos labore voluptatum veniam nihil laudantium sed.
              </p>
            </li>
            <li>
              <p class="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fuga
                consectetur labore.
              </p>
            </li>
          </ul>

          <div class="vis-mis-container">
            <div class="d-flex-column gap-5">
              <div class="d-flex gap-5">
                <span class="material-symbols-outlined">verified</span>
                <p class="title-upercase">Misión</p>
              </div>

              <p class="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odit?
              </p>
            </div>

            <div class="d-flex-column gap-5">
              <div class="d-flex gap-5">
                <span class="material-symbols-outlined">visibility</span>
                <p class="title-upercase">Visión</p>
              </div>

              <p class="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odit?
              </p>
            </div>
          </div>
        </div>

        <img
          src="https://www.gruasanjose.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-05-26-at-1.41.08-PM-6.jpeg"
          alt=""
          class="w-100-img"
        />
      </div>
    </section>
  </div>

  <Testimonials />
</template>
