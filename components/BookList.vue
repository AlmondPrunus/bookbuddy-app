<template>
  <div>
    <BookFilters 
      v-model:search="searchTerm"
      v-model:genre="selectedGenre"
      v-model:year="selectedYear"
      :available-years="availableYears"
    />

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center items-center py-12">
      <Icon icon="lucide:loader-2" class="w-8 h-8 animate-spin text-blue-600" />
    </div>

    <!-- Books Grid -->
    <div v-else>
      <BookGrid 
        :books="currentBooks"
        @view="$emit('view-book', $event)"
        @edit="$emit('edit-book', $event)"
        @delete="$emit('delete-book', $event)"
      />

      <!-- No books found -->
      <div v-if="filteredBooks.length === 0" class="text-center py-12">
        <Icon icon="lucide:book-open" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 class="text-lg font-medium text-gray-900 mb-2">No books found</h3>
        <p class="text-gray-600">Try adjusting your search criteria</p>
      </div>

      <BookPagination 
        v-if="totalPages > 1"
        :current-page="currentPage"
        :total-pages="totalPages"
        :start-index="startIndex"
        :books-per-page="booksPerPage"
        :total-books="filteredBooks.length"
        @page-change="currentPage = $event"
      />
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'

const props = defineProps({
  books: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

defineEmits(['view-book', 'edit-book', 'delete-book'])

const searchTerm = ref('')
const selectedGenre = ref('')
const selectedYear = ref('')
const currentPage = ref(1)
const booksPerPage = 12

const filteredBooks = computed(() => {
  return props.books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.value.toLowerCase())
    const matchesGenre = !selectedGenre.value || book.genre === selectedGenre.value
    const matchesYear = !selectedYear.value || book.published_year.toString() === selectedYear.value
    return matchesSearch && matchesGenre && matchesYear
  })
})

const availableYears = computed(() => {
  return [...new Set(props.books.map(book => book.published_year))]
    .sort((a, b) => b - a)
})

const totalPages = computed(() => Math.ceil(filteredBooks.value.length / booksPerPage))
const startIndex = computed(() => (currentPage.value - 1) * booksPerPage)
const currentBooks = computed(() => {
  return filteredBooks.value.slice(startIndex.value, startIndex.value + booksPerPage)
})
</script>