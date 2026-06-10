<script setup lang="ts">
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
</script>

<template>
  <div class="block-container">
    <section class="block-content">
      <div class="block-title-container margin-bottom-20">
        <span>Nos respaldan</span>
        <p class="block-title">Clientes frecuentes</p>
      </div>

      <div class="customers-container">
        <ul class="customers-track">
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
