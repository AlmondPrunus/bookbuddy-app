<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Book Details</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg">
            <div class="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center rounded-lg">
              <Icon icon="lucide:book-open" class="w-16 h-16 text-gray-400" />
            </div>
          </div>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Book Title</label>
              <div class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                {{ book?.title }}
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Author</label>
              <div class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                {{ book?.author }}
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Published Year</label>
              <div class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                {{ book?.published_year }}
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Genre</label>
              <div class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                {{ book?.genre }}
              </div>
            </div>
            
            <div class="flex space-x-3 pt-4">
              <button
                @click="$emit('edit', book)"
                class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
              >
                EDIT
              </button>
              <button
                @click="$emit('delete', book._id)"
                :disabled="loading"
                class="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Icon v-if="loading" icon="lucide:loader-2" class="w-4 h-4 animate-spin" />
                <span>{{ loading ? 'Deleting...' : 'DELETE' }}</span>
              </button>
            </div>
          </div>
        </div>
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
  },
  loading: {
    type: Boolean,
    default: false
  }
})

defineEmits(['edit', 'delete'])
</script>