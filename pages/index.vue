<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-3">
            <button
              v-if="currentView !== 'list'"
              @click="currentView = 'list'"
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Icon name="lucide:arrow-left" class="w-5 h-5" />
            </button>
            <Icon name="lucide:book-open" class="w-8 h-8 text-blue-600" />
            <h1 class="text-2xl font-bold text-gray-900">BookBuddy</h1>
          </div>
          
          <button
            v-if="currentView === 'list'"
            @click="currentView = 'add'"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <Icon name="lucide:plus" class="w-4 h-4" />
            <span class="hidden sm:inline">Add Book</span>
          </button>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- List View -->
      <div v-if="currentView === 'list'">
        <!-- Search and Filters -->
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="relative">
              <Icon name="lucide:search" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                v-model="searchTerm"
                type="text"
                placeholder="Search books..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              v-model="selectedYear"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Years</option>
              <option v-for="year in availableYears" :key="year" :value="year.toString()">
                {{ year }}
              </option>
            </select>
            
            <select
              v-model="selectedGenre"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Genres</option>
              <option v-for="genre in genres" :key="genre" :value="genre">
                {{ genre }}
              </option>
            </select>
          </div>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="flex justify-center items-center py-12">
          <Icon name="lucide:loader-2" class="w-8 h-8 animate-spin text-blue-600" />
        </div>

        <!-- Books Grid -->
        <div v-else>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div
              v-for="book in currentBooks"
              :key="book._id"
              class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div class="aspect-w-3 aspect-h-4 bg-gray-200 relative">
                <div class="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <Icon name="lucide:book-open" class="w-12 h-12 text-gray-400" />
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
                    @click="viewBook(book)"
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm font-medium transition-colors"
                  >
                    View
                  </button>
                  <button
                    @click="editBook(book)"
                    class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    <Icon name="lucide:edit-3" class="w-4 h-4" />
                  </button>
                  <button
                    @click="deleteBook(book._id)"
                    class="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <Icon name="lucide:trash-2" class="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- No books found -->
          <div v-if="filteredBooks.length === 0" class="text-center py-12">
            <Icon name="lucide:book-open" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 class="text-lg font-medium text-gray-900 mb-2">No books found</h3>
            <p class="text-gray-600">Try adjusting your search criteria</p>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="flex justify-center items-center space-x-2 mt-8">
            <button
              @click="currentPage = Math.max(1, currentPage - 1)"
              :disabled="currentPage === 1"
              class="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="lucide:chevron-left" class="w-4 h-4" />
            </button>
            
            <button
              v-for="page in Array.from({ length: totalPages }, (_, i) => i + 1)"
              :key="page"
              @click="currentPage = page"
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
              @click="currentPage = Math.min(totalPages, currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="lucide:chevron-right" class="w-4 h-4" />
            </button>
          </div>

          <!-- Results info -->
          <div class="text-center mt-8 text-sm text-gray-500">
            Showing {{ startIndex + 1 }}-{{ Math.min(startIndex + booksPerPage, filteredBooks.length) }} of {{ filteredBooks.length }} books
          </div>
        </div>
      </div>

      <!-- Add/Edit Form -->
      <div v-if="currentView === 'add' || currentView === 'edit'" class="max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              {{ currentView === 'add' ? 'Add New Book' : 'Edit Book' }}
            </h2>
            
            <!-- Error message -->
            <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
              <Icon name="lucide:alert-circle" class="w-5 h-5 text-red-600" />
              <span class="text-red-700">{{ error }}</span>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div class="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg">
                <div class="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center rounded-lg">
                  <Icon name="lucide:book-open" class="w-16 h-16 text-gray-400" />
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
                    <option v-for="year in formYearOptions" :key="year" :value="year.toString()">
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
                
                <button
                  @click="currentView === 'add' ? addBook() : updateBook()"
                  :disabled="loading"
                  class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Icon v-if="loading" name="lucide:loader-2" class="w-4 h-4 animate-spin" />
                  <span>{{ loading ? 'Processing...' : (currentView === 'add' ? 'ADD BOOK' : 'UPDATE BOOK') }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View Book -->
      <div v-if="currentView === 'view'" class="max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Book Details</h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div class="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg">
                <div class="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center rounded-lg">
                  <Icon name="lucide:book-open" class="w-16 h-16 text-gray-400" />
                </div>
              </div>
              
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Book Title</label>
                  <div class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                    {{ selectedBook?.title }}
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Author</label>
                  <div class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                    {{ selectedBook?.author }}
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Published Year</label>
                  <div class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                    {{ selectedBook?.published_year }}
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Genre</label>
                  <div class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                    {{ selectedBook?.genre }}
                  </div>
                </div>
                
                <div class="flex space-x-3 pt-4">
                  <button
                    @click="editBook(selectedBook)"
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    EDIT
                  </button>
                  <button
                    @click="deleteBook(selectedBook._id)"
                    :disabled="loading"
                    class="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <Icon v-if="loading" name="lucide:loader-2" class="w-4 h-4 animate-spin" />
                    <span>{{ loading ? 'Deleting...' : 'DELETE' }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <footer class="text-center py-6 text-sm text-gray-500 border-t border-gray-200 bg-white">
      Copyright © 2016–2025 Vontify
    </footer>
  </div>
</template>

<script setup>
// Sample data
const initialBooks = [
  {
    _id: "A001",
    title: "Clean Code",
    author: "Robert C. Martin",
    published_year: 2008,
    genre: "Programming",
    created_at: "2025-06-16T12:00:00Z",
    updated_at: "2025-06-16T12:00:00Z"
  },
  {
    _id: "A002",  
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    published_year: 1999,
    genre: "Programming",
    created_at: "2025-06-15T10:30:00Z",
    updated_at: "2025-06-15T10:30:00Z"
  },
  {
    _id: "A003",
    title: "Design Patterns",
    author: "Gang of Four",
    published_year: 1994,
    genre: "Programming",
    created_at: "2025-06-14T14:20:00Z",
    updated_at: "2025-06-14T14:20:00Z"
  },
  {
    _id: "A004",
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    published_year: 2008,
    genre: "Programming",
    created_at: "2025-06-13T09:15:00Z",
    updated_at: "2025-06-13T09:15:00Z"
  },
  {
    _id: "A005",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    published_year: 2014,
    genre: "Programming",
    created_at: "2025-06-12T16:45:00Z",
    updated_at: "2025-06-12T16:45:00Z"
  },
  {
    _id: "A006",
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    published_year: 2011,
    genre: "Programming",
    created_at: "2025-06-11T11:30:00Z",
    updated_at: "2025-06-11T11:30:00Z"
  },
  {
    _id: "A007",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published_year: 1925,
    genre: "Fiction",
    created_at: "2025-06-10T08:20:00Z",
    updated_at: "2025-06-10T08:20:00Z"
  },
  {
    _id: "A008",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    published_year: 1960,
    genre: "Fiction",
    created_at: "2025-06-09T15:30:00Z",
    updated_at: "2025-06-09T15:30:00Z"
  },
  {
    _id: "A009",
    title: "1984",
    author: "George Orwell",
    published_year: 1949,
    genre: "Fiction",
    created_at: "2025-06-08T11:45:00Z",
    updated_at: "2025-06-08T11:45:00Z"
  },
  {
    _id: "A010",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    published_year: 1813,
    genre: "Fiction",
    created_at: "2025-06-07T13:20:00Z",
    updated_at: "2025-06-07T13:20:00Z"
  },
  {
    _id: "A011",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    published_year: 1951,
    genre: "Fiction",
    created_at: "2025-06-06T09:15:00Z",
    updated_at: "2025-06-06T09:15:00Z"
  },
  {
    _id: "A012",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    published_year: 2011,
    genre: "Non-Fiction",
    created_at: "2025-06-05T16:30:00Z",
    updated_at: "2025-06-05T16:30:00Z"
  },
  {
    _id: "A013",
    title: "The Lean Startup",
    author: "Eric Ries",
    published_year: 2011,
    genre: "Non-Fiction",
    created_at: "2025-06-04T10:45:00Z",
    updated_at: "2025-06-04T10:45:00Z"
  },
  {
    _id: "A014",
    title: "Atomic Habits",
    author: "James Clear",
    published_year: 2018,
    genre: "Non-Fiction",
    created_at: "2025-06-03T14:20:00Z",
    updated_at: "2025-06-03T14:20:00Z"
  },
  {
    _id: "A015",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    published_year: 2012,
    genre: "Non-Fiction",
    created_at: "2025-06-02T12:15:00Z",
    updated_at: "2025-06-02T12:15:00Z"
  },
  {
    _id: "A016",
    title: "Dune",
    author: "Frank Herbert",
    published_year: 1965,
    genre: "Fantasy",
    created_at: "2025-06-01T17:30:00Z",
    updated_at: "2025-06-01T17:30:00Z"
  },
  {
    _id: "A017",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    published_year: 1954,
    genre: "Fantasy",
    created_at: "2025-05-31T11:20:00Z",
    updated_at: "2025-05-31T11:20:00Z"
  },
  {
    _id: "A018",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    published_year: 1997,
    genre: "Fantasy",
    created_at: "2025-05-30T08:45:00Z",
    updated_at: "2025-05-30T08:45:00Z"
  },
  {
    _id: "A019",
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    published_year: 2005,
    genre: "Mystery",
    created_at: "2025-05-29T15:10:00Z",
    updated_at: "2025-05-29T15:10:00Z"
  },
  {
    _id: "A020",
    title: "Gone Girl",
    author: "Gillian Flynn",
    published_year: 2012,
    genre: "Mystery",
    created_at: "2025-05-28T13:25:00Z",
    updated_at: "2025-05-28T13:25:00Z"
  },
  {
    _id: "A021",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    published_year: 2003,
    genre: "Mystery",
    created_at: "2025-05-27T09:40:00Z",
    updated_at: "2025-05-27T09:40:00Z"
  }
]

const genres = ["Programming", "Fiction", "Non-Fiction", "Science", "History", "Biography", "Fantasy", "Mystery"]

// Reactive state
const books = ref([...initialBooks])
const currentView = ref('list')
const selectedBook = ref(null)
const searchTerm = ref('')
const selectedGenre = ref('')
const selectedYear = ref('')
const currentPage = ref(1)
const loading = ref(false)
const error = ref('')
const formData = ref({
  title: '',
  author: '',
  published_year: '',
  genre: ''
})

const booksPerPage = 8

// Computed properties
const filteredBooks = computed(() => {
  return books.value.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.value.toLowerCase())
    const matchesGenre = !selectedGenre.value || book.genre === selectedGenre.value
    const matchesYear = !selectedYear.value || book.published_year.toString() === selectedYear.value
    return matchesSearch && matchesGenre && matchesYear
  })
})

const availableYears = computed(() => {
  return [...new Set(books.value.map(book => book.published_year))]
    .sort((a, b) => b - a)
})

const formYearOptions = computed(() => {
  const currentYear = new Date().getFullYear()
  return Array.from(
    { length: currentYear - 1899 + 1 }, 
    (_, i) => currentYear - i + 1
  ).slice(1)
})

const totalPages = computed(() => Math.ceil(filteredBooks.value.length / booksPerPage))

const startIndex = computed(() => (currentPage.value - 1) * booksPerPage)

const currentBooks = computed(() => {
  return filteredBooks.value.slice(startIndex.value, startIndex.value + booksPerPage)
})

// Methods
const generateId = () => {
  const prefix = 'A'
  const number = String(books.value.length + 1).padStart(3, '0')
  return prefix + number
}

const simulateLoading = (callback, duration = 800) => {
  loading.value = true
  error.value = ''
  setTimeout(() => {
    try {
      callback()
      loading.value = false
    } catch (err) {
      error.value = 'Something went wrong. Please try again.'
      loading.value = false
    }
  }, duration)
}

const addBook = () => {
  if (!formData.value.title || !formData.value.author || !formData.value.published_year || !formData.value.genre) {
    error.value = 'Please fill in all fields'
    return
  }

  simulateLoading(() => {
    const newBook = {
      _id: generateId(),
      title: formData.value.title,
      author: formData.value.author,
      published_year: parseInt(formData.value.published_year),
      genre: formData.value.genre,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    books.value.push(newBook)
    formData.value = { title: '', author: '', published_year: '', genre: '' }
    currentView.value = 'list'
  })
}

const updateBook = () => {
  if (!formData.value.title || !formData.value.author || !formData.value.published_year || !formData.value.genre) {
    error.value = 'Please fill in all fields'
    return
  }

  simulateLoading(() => {
    const index = books.value.findIndex(book => book._id === selectedBook.value._id)
    if (index !== -1) {
      books.value[index] = {
        ...books.value[index],
        title: formData.value.title,
        author: formData.value.author,
        published_year: parseInt(formData.value.published_year),
        genre: formData.value.genre,
        updated_at: new Date().toISOString()
      }
    }

    selectedBook.value = null
    formData.value = { title: '', author: '', published_year: '', genre: '' }
    currentView.value = 'list'
  })
}

const deleteBook = (bookId) => {
  simulateLoading(() => {
    books.value = books.value.filter(book => book._id !== bookId)
    currentView.value = 'list'
  }, 500)
}

const viewBook = (book) => {
  selectedBook.value = book
  currentView.value = 'view'
}

const editBook = (book) => {
  selectedBook.value = book
  currentView.value = 'edit'
}

// Watchers
watch(currentView, () => {
  error.value = ''
  formData.value = { title: '', author: '', published_year: '', genre: '' }
})

watch([selectedBook, currentView], () => {
  if (selectedBook.value && currentView.value === 'edit') {
    formData.value = {
      title: selectedBook.value.title,
      author: selectedBook.value.author,
      published_year: selectedBook.value.published_year.toString(),
      genre: selectedBook.value.genre
    }
  }
})

// Meta tags
useHead({
  title: 'BookBuddy - Book Management System',
  meta: [
    { name: 'description', content: 'A comprehensive book management system built with Nuxt.js' }
  ]
})
</script>

<style scoped>
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>