<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">
          {{ mode === 'add' ? 'Add New Book' : 'Edit Book' }}
        </h2>
        
        <ErrorMessage v-if="error" :message="error" />
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BookCover />
          
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <FormField
              v-model="formData.title"
              label="Book Title"
              placeholder="Enter book title"
              required
            />
            
            <FormField
              v-model="formData.author"
              label="Author"
              placeholder="Enter author name"
              required
            />
            
            <FormSelect
              v-model="formData.published_year"
              label="Published Year"
              :options="yearOptions"
              placeholder="Select Year"
              required
            />
            
            <FormSelect
              v-model="formData.genre"
              label="Genre"
              :options="genreOptions"
              placeholder="Select Genre"
              required
            />
            
            <FormButton
              :loading="loading"
              :text="mode === 'add' ? 'ADD BOOK' : 'UPDATE BOOK'"
              loading-text="Processing..."
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { genres } from '~/constants/books'

const props = defineProps({
  mode: {
    type: String,
    required: true,
    validator: (value) => ['add', 'edit'].includes(value)
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
    { length: currentYear - 1899 }, 
    (_, i) => ({ value: (currentYear - i).toString(), label: currentYear - i })
  )
})

const genreOptions = computed(() => 
  genres.map(genre => ({ value: genre, label: genre }))
)

const handleSubmit = () => {
  if (!formData.value.title || !formData.value.author || 
      !formData.value.published_year || !formData.value.genre) {
    return
  }
  emit('save', { ...formData.value })
}

// Watch for book changes when editing
watch(() => props.book, (book) => {
  if (book && props.mode === 'edit') {
    formData.value = {
      title: book.title,
      author: book.author,
      published_year: book.published_year.toString(),
      genre: book.genre
    }
  }
}, { immediate: true })

// Reset form when mode changes
watch(() => props.mode, () => {
  if (props.mode === 'add') {
    formData.value = {
      title: '',
      author: '',
      published_year: '',
      genre: ''
    }
  }
})
</script>