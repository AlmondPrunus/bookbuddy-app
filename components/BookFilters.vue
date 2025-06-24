<template>
  <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="relative">
        <Icon icon="lucide:search" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          :value="search"
          @input="$emit('update:search', $event.target.value)"
          type="text"
          placeholder="Search books..."
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <select
        :value="year"
        @change="$emit('update:year', $event.target.value)"
        class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Years</option>
        <option v-for="year in availableYears" :key="year" :value="year.toString()">
          {{ year }}
        </option>
      </select>
      
      <select
        :value="genre"
        @change="$emit('update:genre', $event.target.value)"
        class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Genres</option>
        <option v-for="genre in genres" :key="genre" :value="genre">
          {{ genre }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const genres = [
  "Agile",
  "Computer Science",
  "DevOps",
  "Programming",
  "Software Engineering",
  "Web Development"
]

defineProps({
  search: String,
  genre: String,
  year: String,
  availableYears: Array
})

defineEmits(['update:search', 'update:genre', 'update:year'])
</script>
