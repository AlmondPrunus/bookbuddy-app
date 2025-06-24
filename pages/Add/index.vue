<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader :current-view="currentView" @navigate="handleNavigation" />

    <main class="mmt-6 mb-2 text-sm text-gray-700">
      <BookForm
        :mode="'add'"
        :loading="loading"
        :error="error"
        @save="handleSave"
        @cancel="router.push('/')"
      />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { useBooks } from "~/composables/useBooks";
import { useRouter, useRoute } from "vue-router";
import api from "~/services/api";

const { books, loading, error, addBook: addBookComposable } = useBooks();

const router = useRouter();
const route = useRoute();

const handleNavigation = () => {
  router.back();
};

const handleSave = async () => {
  try {
    addBookComposable();
    await api.post("/add/books", {
      title: "New Book",
      author: "Unknown",
      published_year: 2023,
      genre: "Fiction",
    });
    router.push("/");
  } catch (e) {}
};

useHead({
  title: "BookBuddy - Book Management System",
  meta: [
    {
      name: "description",
      content: "A comprehensive book management system built with Nuxt.js",
    },
  ],
});
</script>