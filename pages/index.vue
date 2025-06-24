<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader 
      :current-view="currentView" 
      @navigate="handleNavigation"
    />

    <main class="mx-auto px-4 sm:px-6 lg:px-8">
      <!-- List View -->
      <BookList 
        v-if="currentView === 'list'"
        :books="books"
        :loading="loading"
        @view-book="viewBook"
        @edit-book="editBook"
        @delete-book="deleteBook"
      />

      <!-- Add/Edit Form -->
      <BookForm 
        v-if="currentView === 'add' || currentView === 'edit'"
        :mode="currentView"
        :book="selectedBook"
        :loading="loading"
        :error="error"
        @save="handleSave"
        @cancel="currentView = 'list'"
      />

      <!-- View Book -->
      <BookDetail 
        v-if="currentView === 'view'"
        :book="selectedBook"
        :loading="loading"
        @edit="editBook"
        @delete="deleteBook"
      />
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useBooks } from '~/composables/useBooks'

const {
  books,
  loading,
  error,
  addBook: addBookComposable,
  updateBook: updateBookComposable,
  deleteBook: deleteBookComposable
} = useBooks()

const currentView = ref('list')
const selectedBook = ref(null)
const formData = ref({
  title: '',
  author: '',
  published_year: '',
  genre: ''
})

const handleNavigation = (view) => {
  currentView.value = view
}

const viewBook = (book) => {
  selectedBook.value = book
  currentView.value = 'view'
}

const editBook = (book) => {
  selectedBook.value = book
  currentView.value = 'edit'
}

const deleteBook = async (bookId) => {
  try {
    await deleteBookComposable(bookId)
    currentView.value = 'list'
  } catch (e) {
    // error.value is already set by composable
  }
}

const handleSave = async (bookData, mode) => {
  try {
    if (mode === 'add') {
      await addBookComposable(bookData)
    } else {
      await updateBookComposable(selectedBook.value._id, bookData)
    }
    selectedBook.value = null
    currentView.value = 'list'
  } catch (e) {
    // error.value is already set by composable
  }
}

watch(currentView, () => {
  error.value = ''
  if (currentView.value !== 'edit') {
    selectedBook.value = null
  }
})

useHead({
  title: 'BookBuddy - Book Management System',
  meta: [
    { name: 'description', content: 'A comprehensive book management system built with Nuxt.js' }
  ]
})
</script>