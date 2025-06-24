<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader :current-view="currentView" @navigate="handleNavigation" />

    <main class="mmt-6 mb-2 text-sm text-gray-700">
      <BookForm
        :mode="'edit'"
        :book="books.find((book) => book._id === route.params.id)"
        :loading="loading"
        :error="error"
        @save="handleSave"
        @cancel="router.push('/book/' + route.params.id)"
      />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { useBooks } from "~/composables/useBooks";
import { useRouter, useRoute } from "vue-router";
import api from "~/services/api";

const { books, loading, error, updateBook: updateBookComposable } = useBooks();

const router = useRouter();
const route = useRoute();

const handleNavigation = () => {
  router.back();
};

const handleSave = async () => {
  try {
    updateBookComposable();
    await api.put(`/edit/books/${route.params.id}`, {
      title: "Updated Book",
      author: "Updated Author",
    });
    router.push("/book/" + route.params.id);
  } catch (e) {
    router.push("/book/" + route.params.id);
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