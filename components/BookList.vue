<template>
  <div>
    <BookFilters
      :search="searchTerm"
      @update:search="searchTerm = $event"
      :genre="selectedGenre"
      @update:genre="selectedGenre = $event"
      :year="selectedYear"
      @update:year="selectedYear = $event"
      :available-years="availableYears"
      :genres="genres"
    />

    <div v-if="loading" class="flex justify-center items-center py-12">
      <Icon name="lucid:loader-2" class="w-8 h-8 animate-spin text-blue-600" />
    </div>

    <div v-else>
      <BookGrid
        v-if="currentBooks.length > 0"
        :books="currentBooks"
        @view="$emit('view', $event)"
        @edit="$emit('edit', $event)"
        @delete="$emit('delete', $event)"
      />

      <BookEmptyState v-else />

      <BookPagination
        v-if="totalPages > 1"
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="currentPage = $event"
      />

      <BookResultsInfo
        :start-index="startIndex"
        :end-index="Math.min(startIndex + booksPerPage, filteredBooks.length)"
        :total="filteredBooks.length"
      />
    </div>
  </div>
</template>

<script setup>
import { useBookFilters } from '~/composables/useBookFilters'
import { genres } from '~/constants/books'

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

defineEmits(['view', 'edit', 'delete'])

const {
  searchTerm,
  selectedGenre,
  selectedYear,
  currentPage,
  booksPerPage,
  filteredBooks,
  availableYears,
  totalPages,
  startIndex,
  currentBooks
} = useBookFilters(toRef(props, 'books'))
</script>