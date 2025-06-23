export const useBookFilters = (books) => {
  const searchTerm = ref('')
  const selectedGenre = ref('')
  const selectedYear = ref('')
  const currentPage = ref(1)
  const booksPerPage = 8

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

  const totalPages = computed(() => Math.ceil(filteredBooks.value.length / booksPerPage))
  const startIndex = computed(() => (currentPage.value - 1) * booksPerPage)
  const currentBooks = computed(() => {
    return filteredBooks.value.slice(startIndex.value, startIndex.value + booksPerPage)
  })

  const resetFilters = () => {
    searchTerm.value = ''
    selectedGenre.value = ''
    selectedYear.value = ''
    currentPage.value = 1
  }

  return {
    searchTerm,
    selectedGenre,
    selectedYear,
    currentPage,
    booksPerPage,
    filteredBooks,
    availableYears,
    totalPages,
    startIndex,
    currentBooks,
    resetFilters
  }
}