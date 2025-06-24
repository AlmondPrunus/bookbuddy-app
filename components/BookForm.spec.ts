import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import BookForm from '@/components/BookForm.vue'

describe('BookForm.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(BookForm)
  })

  describe('Component Rendering', () => {
    it('renders all required input fields', () => {
      expect(wrapper.find('input[name="title"]').exists()).toBe(true)
      expect(wrapper.find('input[name="author"]').exists()).toBe(true)
      expect(wrapper.find('input[name="published_year"]').exists()).toBe(true)
      expect(wrapper.find('select[name="genre"]').exists()).toBe(true)
    })

    it('renders form labels correctly', () => {
      expect(wrapper.find('label[for="title"]').exists()).toBe(true)
      expect(wrapper.find('label[for="author"]').exists()).toBe(true)
      expect(wrapper.find('label[for="published_year"]').exists()).toBe(true)
      expect(wrapper.find('label[for="genre"]').exists()).toBe(true)
    })

    it('has proper form structure', () => {
      expect(wrapper.find('form').exists()).toBe(true)
      expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
    })
  })

  describe('Form Submission', () => {
    it('emits submit with correct data and proper type conversion', async () => {
      await wrapper.find('input[name="title"]').setValue('The Pragmatic Programmer')
      await wrapper.find('input[name="author"]').setValue('Andrew Hunt')
      await wrapper.find('input[name="published_year"]').setValue('1999')
      await wrapper.find('select[name="genre"]').setValue('Programming')
      
      await wrapper.find('form').trigger('submit.prevent')
      
      expect(wrapper.emitted('submit')).toBeTruthy()
      expect(wrapper.emitted('submit')).toHaveLength(1)
      expect(wrapper.emitted('submit')![0][0]).toEqual({
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        published_year: 1999, // Should be converted to number
        genre: 'Programming',
      })
    })

    it('handles form submission multiple times', async () => {
      // First submission
      await wrapper.find('input[name="title"]').setValue('Book One')
      await wrapper.find('input[name="author"]').setValue('Author One')
      await wrapper.find('input[name="published_year"]').setValue('2020')
      await wrapper.find('select[name="genre"]').setValue('Fiction')
      await wrapper.find('form').trigger('submit.prevent')

      // Second submission
      await wrapper.find('input[name="title"]').setValue('Book Two')
      await wrapper.find('input[name="author"]').setValue('Author Two')
      await wrapper.find('input[name="published_year"]').setValue('2021')
      await wrapper.find('select[name="genre"]').setValue('Non-Fiction')
      await wrapper.find('form').trigger('submit.prevent')

      expect(wrapper.emitted('submit')).toHaveLength(2)
    })
  })

  describe('Form Validation', () => {
    it('does not submit when all fields are empty', async () => {
      await wrapper.find('form').trigger('submit.prevent')
      expect(wrapper.emitted('submit')).toBeFalsy()
    })

    it('does not submit when title is missing', async () => {
      await wrapper.find('input[name="author"]').setValue('Andrew Hunt')
      await wrapper.find('input[name="published_year"]').setValue('1999')
      await wrapper.find('select[name="genre"]').setValue('Programming')
      
      await wrapper.find('form').trigger('submit.prevent')
      expect(wrapper.emitted('submit')).toBeFalsy()
    })

    it('does not submit when author is missing', async () => {
      await wrapper.find('input[name="title"]').setValue('The Pragmatic Programmer')
      await wrapper.find('input[name="published_year"]').setValue('1999')
      await wrapper.find('select[name="genre"]').setValue('Programming')
      
      await wrapper.find('form').trigger('submit.prevent')
      expect(wrapper.emitted('submit')).toBeFalsy()
    })

    it('shows validation errors for empty required fields', async () => {
      await wrapper.find('form').trigger('submit.prevent')
      
      // Assuming your component shows validation errors
      await wrapper.vm.$nextTick()
      expect(wrapper.find('.error-message').exists()).toBe(true)
    })

    it('validates published year is a valid number', async () => {
      await wrapper.find('input[name="title"]').setValue('Test Book')
      await wrapper.find('input[name="author"]').setValue('Test Author')
      await wrapper.find('input[name="published_year"]').setValue('invalid-year')
      await wrapper.find('select[name="genre"]').setValue('Fiction')
      
      await wrapper.find('form').trigger('submit.prevent')
      expect(wrapper.emitted('submit')).toBeFalsy()
    })

    it('validates published year is within reasonable range', async () => {
      await wrapper.find('input[name="title"]').setValue('Test Book')
      await wrapper.find('input[name="author"]').setValue('Test Author')
      await wrapper.find('input[name="published_year"]').setValue('3000') // Future year
      await wrapper.find('select[name="genre"]').setValue('Fiction')
      
      await wrapper.find('form').trigger('submit.prevent')
      expect(wrapper.emitted('submit')).toBeFalsy()
    })
  })

  describe('User Interactions', () => {
    it('updates input values when user types', async () => {
      const titleInput = wrapper.find('input[name="title"]')
      await titleInput.setValue('New Book Title')
      
      expect(titleInput.element.value).toBe('New Book Title')
    })

    it('resets form after successful submission', async () => {
      // Fill form
      await wrapper.find('input[name="title"]').setValue('Test Book')
      await wrapper.find('input[name="author"]').setValue('Test Author')
      await wrapper.find('input[name="published_year"]').setValue('2023')
      await wrapper.find('select[name="genre"]').setValue('Fiction')
      
      // Submit
      await wrapper.find('form').trigger('submit.prevent')
      
      // Check if form is reset (assuming your component resets after submit)
      await wrapper.vm.$nextTick()
      expect(wrapper.find('input[name="title"]').element.value).toBe('')
      expect(wrapper.find('input[name="author"]').element.value).toBe('')
      expect(wrapper.find('input[name="published_year"]').element.value).toBe('')
    })

    it('handles special characters in input fields', async () => {
      await wrapper.find('input[name="title"]').setValue('Book: "Special Characters" & More')
      await wrapper.find('input[name="author"]').setValue("O'Connor, Mary-Jane")
      await wrapper.find('input[name="published_year"]').setValue('2023')
      await wrapper.find('select[name="genre"]').setValue('Fiction')
      
      await wrapper.find('form').trigger('submit.prevent')
      
      expect(wrapper.emitted('submit')![0][0]).toEqual({
        title: 'Book: "Special Characters" & More',
        author: "O'Connor, Mary-Jane",
        published_year: 2023,
        genre: 'Fiction',
      })
    })
  })

  describe('Genre Selection', () => {
    it('has default genre options', () => {
      const genreSelect = wrapper.find('select[name="genre"]')
      const options = genreSelect.findAll('option')
      
      expect(options.length).toBeGreaterThan(0)
      // Test for specific genre options if you know what they should be
      const optionValues = options.map(option => option.element.value)
      expect(optionValues).toContain('Programming')
      expect(optionValues).toContain('Fiction')
    })
  })

  describe('Accessibility', () => {
    it('has proper aria labels and attributes', () => {
      expect(wrapper.find('input[name="title"]').attributes('aria-label')).toBeDefined()
      expect(wrapper.find('input[name="author"]').attributes('aria-label')).toBeDefined()
    })

    it('associates labels with inputs correctly', () => {
      const titleInput = wrapper.find('input[name="title"]')
      const titleLabel = wrapper.find('label[for="title"]')
      
      expect(titleInput.attributes('id')).toBe('title')
      expect(titleLabel.exists()).toBe(true)
    })
  })

  describe('Props and Initial State', () => {
    it('accepts initial book data as props', () => {
      const initialBook = {
        title: 'Existing Book',
        author: 'Existing Author',
        published_year: 2020,
        genre: 'Fiction'
      }
      
      const wrapperWithProps = mount(BookForm, {
        props: { initialBook }
      })
      
      expect(wrapperWithProps.find('input[name="title"]').element.value).toBe('Existing Book')
      expect(wrapperWithProps.find('input[name="author"]').element.value).toBe('Existing Author')
    })
  })
})