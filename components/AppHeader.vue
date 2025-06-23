<template>
  <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center space-x-3">
          <button
            v-if="currentView !== 'list'"
            @click="$emit('navigate', 'list')"
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon icon="lucide:arrow-left" class="w-5 h-5" />
          </button>
          <Icon icon="lucide:book-open" class="w-8 h-8 text-blue-600" />
          <h1 class="text-2xl font-bold text-gray-900">BookBuddy</h1>
        </div>
        
        <button
          v-if="currentView === 'list'"
          @click="$emit('navigate', 'add')"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <Icon icon="lucide:plus" class="w-4 h-4" />
          <span>Add New Book</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  currentView: {
    type: String,
    required: true
  }
})

defineEmits(['navigate'])
</script>