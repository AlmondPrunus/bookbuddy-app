<template>
  <div>
    <!-- Pagination -->
    <div class="flex justify-center items-center space-x-2 mt-8">
      <button
        @click="$emit('page-change', Math.max(1, currentPage - 1))"
        :disabled="currentPage === 1"
        class="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Icon icon="lucide:chevron-left" class="w-4 h-4" />
      </button>
      
      <button
        v-for="page in Array.from({ length: totalPages }, (_, i) => i + 1)"
        :key="page"
        @click="$emit('page-change', page)"
        :class="[
          'px-3 py-2 rounded-lg font-medium',
          page === currentPage
            ? 'bg-blue-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        ]"
      >
        {{ page }}
      </button>
      
      <button
        @click="$emit('page-change', Math.min(totalPages, currentPage + 1))"
        :disabled="currentPage === totalPages"
        class="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Icon icon="lucide:chevron-right" class="w-4 h-4" />
      </button>
    </div>

    <!-- Results info -->
    <div class="text-center mt-8 text-sm text-gray-500">
      Showing {{ startIndex + 1 }}-{{ Math.min(startIndex + booksPerPage, totalBooks) }} of {{ totalBooks }} books
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  startIndex: {
    type: Number,
    required: true
  },
  booksPerPage: {
    type: Number,
    required: true
  },
  totalBooks: {
    type: Number,
    required: true
  }
})

defineEmits(['page-change'])
</script>