<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const myState = useState('myKey', () => ({ count: 0 })) // ✅
const props = defineProps({
  books: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    // ...
  }
})
</script>