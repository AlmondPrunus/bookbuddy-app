// vitest.config.js
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom', // or 'jsdom'
    setupFiles: ['./src/test/setup.js']
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})

// src/test/setup.js
import { vi } from 'vitest'

// Mock global objects if needed
global.fetch = vi.fn()

// Setup Vue Test Utils if using it
import { config } from '@vue/test-utils'
// Add any global configuration here