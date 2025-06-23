<template>
  <div class="text-center mt-8 text-sm text-gray-500">
    Showing {{ startIndex + 1 }}-{{ endIndex }} of {{ total }} books
  </div>
</template>

<script setup>
defineProps({
  startIndex: {
    type: Number,
    required: true
  },
  endIndex: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})
</script>