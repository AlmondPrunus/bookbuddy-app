<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader :current-view="currentView" @navigate="handleNavigation" />

    <main class="mmt-6 mb-2 text-sm text-gray-700">
      <BookDetail
        :book="books.find((book) => book._id === route.params.id)"
        :loading="loading"
        @edit="editBook"
        @delete="deleteBook"
      />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { useBooks } from "~/composables/useBooks";
import { useRouter, useRoute } from "vue-router";
import api from "~/services/api";

const { books, loading, error, deleteBook: deleteBookComposable } = useBooks();

const router = useRouter();
const route = useRoute();

const handleNavigation = () => {
  router.push("/");
};

const editBook = () => {
  router.push("/edit/" + route.params.id);
};

const deleteBook = async () => {
  try {
    deleteBookComposable();
    await api.delete(`/delete/books/${route.params.id}`);
    router.push("/");
  } catch (e) {
    router.push("/");
  }
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