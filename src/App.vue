<template>
  <div class="bg-black-dark min-h-screen pb-11">
    <img src="./assets/bg-cafe.jpg" alt="Cafe" class="w-full h-96 object-cover" />
    <main
      class="bg-black xl:max-w-6xl md:max-w-3xl sm:max-w-sm px-8 py-20 mx-auto rounded-xl flex flex-col items-center -mt-44 z-10 relative"
    >
      <div class="relative">
        <img src="./assets/vector.svg" alt="" class="absolute -z-10 right-0 -top-11" />
        <h1 class="text-white text-3xl font-semibold tracking-wider text-center">Our Collection</h1>
        <p class="text-gray text-base mt-4 font-medium max-w-md text-center mb-3">
          Introducing our Coffee Collection, a selection of unique coffees from different roast
          types and origins, expertly roasted in small batches and shipped fresh weekly.
        </p>
      </div>

      <div class="flex-row text-white text-sm justify-center items-center mb-7">
        <button
          type="button"
          :class="{ 'mx-6 bg-gray px-3 py-2 rounded-xl': filter === 'all' }"
          @click="toggleFilter('all')"
        >
          All Products
        </button>
        <button
          type="button"
          @click="toggleFilter('available')"
          :class="{ 'mx-6 bg-gray px-3 py-2 rounded-xl': filter !== 'all' }"
        >
          Available Now
        </button>
      </div>

      <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-14">
        <CoffeeCard v-for="coffee in filteredCoffees" :key="coffee.id" v-bind="coffee" />
      </div>
    </main>
    <!-- <CoffeeCard name="Coffee 1" /> -->
  </div>
</template>

<script setup lang="ts">
import CoffeeCard from '@/components/CoffeeCard.vue'
import type { CoffeeData } from './types'
import { ref } from 'vue'
import { onMounted, computed } from 'vue'

const coffees = ref<CoffeeData[]>([])

const filter = ref('all')

const filteredCoffees = computed(() => {
  if (filter.value === 'all') {
    return coffees.value
  }
  return coffees.value.filter((coffee) => coffee.available)
})
const toggleFilter = (value: string) => {
  filter.value = value
}

function isCoffeeData(data: unknown): data is CoffeeData[] {
  return Array.isArray(data) && data.every((item) => 'name' in item)
}

async function fetchCoffeeData() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
    )
    const data = await response.json()
    if (!isCoffeeData(data)) {
      throw new Error('Invalid data')
    }
    coffees.value = data
    console.log(coffees.value)
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchCoffeeData)
</script>

<style global>
body {
  font-family: 'DM Sans Variable', sans-serif;
}
</style>
