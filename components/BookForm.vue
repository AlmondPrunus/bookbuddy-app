<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">
          {{ mode === 'add' ? 'Add New Book' : 'Edit Book' }}
        </h2>
        
        <!-- Error message -->
        <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
          <Icon icon="lucide:alert-circle" class="w-5 h-5 text-red-600" />
          <span class="text-red-700">{{ error }}</span>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg">
            <div class="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center rounded-lg">
              <Icon icon="lucide:book-open" class="w-16 h-16 text-gray-400" />
            </div>
          </div>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Book Title</label>
              <input
                v-model="formData.title"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter book title"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Author</label>
              <input
                v-model="formData.author"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter author name"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Published Year</label>
              <select
                v-model="formData.published_year"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Year</option>
                <option v-for="year in yearOptions" :key="year" :value="year.toString()">
                  {{ year }}
                </option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Genre</label>
              <select
                v-model="formData.genre"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Genre</option>
                <option v-for="genre in genres" :key="genre" :value="genre">
                  {{ genre }}
                </option>
              </select>
            </div>
            
            <div class="flex space-x-3 pt-4">
              <button
                @click="$emit('cancel')"
                class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                @click="handleSave"
                :disabled="loading || !isFormValid"
                class="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Icon v-if="loading" icon="lucide:loader-2" class="w-4 h-4 animate-spin" />
                <span>{{ loading ? 'Processing...' : (mode === 'add' ? 'ADD BOOK' : 'UPDATE BOOK') }}</span>
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
import { ref, computed, watch } from 'vue'

const genres = [
  "Agile",
  "Computer Science",
  "DevOps",
  "Programming",
  "Software Engineering",
  "Web Development"
]

const props = defineProps({
  mode: {
    type: String,
    required: true
  },
  book: {
    type: Object,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['save', 'cancel'])

const formData = ref({
  title: '',
  author: '',
  published_year: '',
  genre: ''
})

const yearOptions = computed(() => {
  const currentYear = new Date().getFullYear()
  return Array.from(
    { length: currentYear - 1900 + 1 },
    (_, i) => currentYear - i
  )
})

const isFormValid = computed(() => {
  return formData.value.title && 
         formData.value.author && 
         formData.value.published_year && 
         formData.value.genre
})

const handleSave = () => {
  if (!isFormValid.value) return
  
  emit('save', {
    title: formData.value.title,
    author: formData.value.author,
    published_year: formData.value.published_year,
    genre: formData.value.genre
  }, props.mode)
}

// Watch for book prop changes (when editing)
watch(() => props.book, (newBook) => {
  if (newBook && props.mode === 'edit') {
    formData.value = {
      title: newBook.title,
      author: newBook.author,
      published_year: newBook.published_year.toString(),
      genre: newBook.genre
    }
  } else {
    formData.value = {
      title: '',
      author: '',
      published_year: '',
      genre: ''
    }
  }
}, { immediate: true })
</script>