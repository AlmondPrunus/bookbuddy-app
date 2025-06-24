<template>
  <div class="grid [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] gap-6">
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