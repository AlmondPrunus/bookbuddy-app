<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader :current-view="'list'" @navigate="handleNavigation" />

    <main class="max-w-8xl mx-auto px-4 sm:px-10 py-8">
      <BookList
        :books="books"
        :loading="loading"
        @view-book="viewBook"
        @edit-book="editBook"
        @delete-book="deleteBook"
      />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { useBooks } from "~/composables/useBooks";
import { useRouter } from "vue-router";
import api from "~/services/api";

const { books, loading, error, deleteBook: deleteBookComposable } = useBooks();

const router = useRouter();

const handleNavigation = () => {
  router.back();
};

const viewBook = (book) => {
  router.push("/book/" + book._id);
};

const editBook = (book) => {
  router.push("/edit/" + book._id);
};

const deleteBook = async (bookId) => {
  try {
    deleteBookComposable();
    await api.delete(`/delete/book/${bookId}`);
  } catch (e) {}
};

const fetchBooks = async () => {
  await api.get("/get/books");
};

onMounted(() => {
  fetchBooks();
});

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