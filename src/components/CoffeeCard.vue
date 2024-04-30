<script setup lang="ts">
import IconStar from '@/components/icons/IconStar.vue'
import IconStarFill from '@/components/icons/IconStarFill.vue'
import type { CoffeeData } from '@/types'

defineProps<CoffeeData>()
</script>

<template>
  <div>
    <div class="relative text-center">
      <span v-if="popular" class="absolute top-2 left-2 bg-yellow text-xs px-5 rounded-xl"
        >Popular</span
      >
      <img :src="image" alt="Coffee" class="rounded-xl" />
    </div>
    <div class="flex flex-col mt-2">
      <div class="flex flex-row justify-between items-center">
        <h2 class="text-white text-base font-bold">{{ name }}</h2>
        <h3 class="text-black-dark text-xs font-medium py-1 px-2.5 rounded-md bg-green">
          {{ price }}
        </h3>
      </div>
      <div class="flex flex-row items-center mt-2">
        <template v-if="votes > 0">
          <IconStarFill />
          <p class="text-white text-sm font-semibold ml-1">
            {{ rating }} <span class="text-gray"> ({{ votes }} votes)</span>
          </p>
        </template>
        <template v-else>
          <IconStar />
          <p class="text-gray text-sm font-semibold ml-1">No ratings</p>
        </template>
        <span v-show="!available" class="ml-auto text-red text-sm font-semibold">Sold Out</span>
      </div>
    </div>
  </div>
</template>
