<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const myState = useState('myKey', () => ({ count: 0 })) 
</script>