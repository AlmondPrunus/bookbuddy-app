<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <BookCard
      v-for="book in books"
      :key="book._id"
      :book="book"
      @view="$emit('view', $event)"
      @edit="$emit('edit', $event)"
      @delete="$emit('delete', $event)"
    />
  </div>
</template>

<script setup>
defineProps({
  books: {
    type: Array,
    required: true
  }
})

defineEmits(['view', 'edit', 'delete'])
</script>