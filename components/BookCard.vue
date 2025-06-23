<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
    <div class="aspect-w-3 aspect-h-4 bg-gray-200 relative">
      <div class="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <Icon icon="lucide:book-open" class="w-12 h-12 text-gray-400" />
      </div>
      <div class="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-xs font-medium text-gray-600">
        {{ book.published_year }}
      </div>
    </div>
    
    <div class="p-4">
      <h3 class="font-semibold text-gray-900 mb-1 line-clamp-2">{{ book.title }}</h3>
      <p class="text-sm text-blue-600 mb-1">{{ book.genre }}</p>
      <p class="text-sm text-gray-600 mb-3">{{ book.author }}</p>
      
      <div class="flex space-x-2">
        <button
          @click="$emit('view', book)"
          class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm font-medium transition-colors"
        >
          View
        </button>
        <button
          @click="$emit('edit', book)"
          class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
        >
          <Icon icon="lucide:edit-3" class="w-4 h-4" />
        </button>
        <button
          @click="$emit('delete', book._id)"
          class="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
        >
          <Icon icon="lucide:trash-2" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  book: {
    type: Object,
    required: true
  }
})

defineEmits(['view', 'edit', 'delete'])
</script>