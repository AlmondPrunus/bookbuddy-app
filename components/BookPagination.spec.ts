import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BookPagination from '@/components/BookPagination.vue'

describe('BookPagination.vue', () => {
  it('renders correct number of pages', () => {
    const wrapper = mount(BookPagination, {
      props: {
        totalPages: 3,
        currentPage: 1
      }
    })
    const buttons = wrapper.findAll('button')
    // Expect Prev + 3 Pages + Next = 5 buttons
    expect(buttons.length).toBe(5)
  })

  it('emits "update:currentPage" when next/prev is clicked', async () => {
    const wrapper = mount(BookPagination, {
      props: {
        totalPages: 3,
        currentPage: 2
      }
    })
    const nextBtn = wrapper.get('button:last-of-type')
    await nextBtn.trigger('click')
    expect(wrapper.emitted('update:currentPage')).toBeTruthy()
    expect(wrapper.emitted('update:currentPage')![0][0]).toBe(3)
  })

  // Additional test cases for better coverage
  it('disables prev button when on first page', () => {
    const wrapper = mount(BookPagination, {
      props: {
        totalPages: 3,
        currentPage: 1
      }
    })
    const prevBtn = wrapper.get('button:first-of-type')
    expect(prevBtn.attributes('disabled')).toBeDefined()
  })

  it('disables next button when on last page', () => {
    const wrapper = mount(BookPagination, {
      props: {
        totalPages: 3,
        currentPage: 3
      }
    })
    const nextBtn = wrapper.get('button:last-of-type')
    expect(nextBtn.attributes('disabled')).toBeDefined()
  })

  it('emits correct page number when prev button is clicked', async () => {
    const wrapper = mount(BookPagination, {
      props: {
        totalPages: 3,
        currentPage: 2
      }
    })
    const prevBtn = wrapper.get('button:first-of-type')
    await prevBtn.trigger('click')
    expect(wrapper.emitted('update:currentPage')![0][0]).toBe(1)
  })

  it('emits correct page number when specific page button is clicked', async () => {
    const wrapper = mount(BookPagination, {
      props: {
        totalPages: 5,
        currentPage: 1
      }
    })
    // Click on page 3 button (index 3: Prev=0, Page1=1, Page2=2, Page3=3)
    const page3Btn = wrapper.findAll('button')[3]
    await page3Btn.trigger('click')
    expect(wrapper.emitted('update:currentPage')![0][0]).toBe(3)
  })

  it('applies active/current styling to current page button', () => {
    const wrapper = mount(BookPagination, {
      props: {
        totalPages: 3,
        currentPage: 2
      }
    })
    const buttons = wrapper.findAll('button')
    // Page 2 button should have active styling (button at index 2)
    const currentPageBtn = buttons[2]
    expect(currentPageBtn.classes()).toContain('active') // or whatever class name is used
  })

  it('handles edge case with single page', () => {
    const wrapper = mount(BookPagination, {
      props: {
        totalPages: 1,
        currentPage: 1
      }
    })
    const buttons = wrapper.findAll('button')
    // Should still render prev + 1 page + next = 3 buttons
    expect(buttons.length).toBe(3)
    // Both prev and next should be disabled
    expect(buttons[0].attributes('disabled')).toBeDefined() // prev
    expect(buttons[2].attributes('disabled')).toBeDefined() // next
  })

  it('handles large number of pages correctly', () => {
    const wrapper = mount(BookPagination, {
      props: {
        totalPages: 100,
        currentPage: 50
      }
    })
    // This test depends on your pagination logic
    // You might show ellipsis or limit visible pages
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThan(2) // At least prev and next
  })

  it('does not emit when clicking disabled buttons', async () => {
    const wrapper = mount(BookPagination, {
      props: {
        totalPages: 3,
        currentPage: 1
      }
    })
    const prevBtn = wrapper.get('button:first-of-type')
    await prevBtn.trigger('click')
    // Should not emit when prev is disabled on first page
    expect(wrapper.emitted('update:currentPage')).toBeFalsy()
  })

  it('displays correct aria labels for accessibility', () => {
    const wrapper = mount(BookPagination, {
      props: {
        totalPages: 3,
        currentPage: 2
      }
    })
    const buttons = wrapper.findAll('button')
    const prevBtn = buttons[0]
    const nextBtn = buttons[buttons.length - 1]
    
    expect(prevBtn.attributes('aria-label')).toContain('Previous')
    expect(nextBtn.attributes('aria-label')).toContain('Next')
  })
})