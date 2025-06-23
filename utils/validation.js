export const validateBook = (bookData) => {
  const errors = []
  
  if (!bookData.title?.trim()) {
    errors.push('Title is required')
  }
  
  if (!bookData.author?.trim()) {
    errors.push('Author is required')
  }
  
  if (!bookData.published_year) {
    errors.push('Published year is required')
  }
  
  if (!bookData.genre) {
    errors.push('Genre is required')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

export const sanitizeBookData = (bookData) => {
  return {
    title: bookData.title?.trim() || '',
    author: bookData.author?.trim() || '',
    published_year: parseInt(bookData.published_year) || 0,
    genre: bookData.genre || ''
  }
}