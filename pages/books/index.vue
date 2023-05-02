<template>
  <NuxtLayout name="page">
    <template #content>
      <div class="content w-3/4 mx-auto my-10">
        <div class="text-right mb-3">
          <NButton class="bg-red-500 text-white">
            <nuxt-link to="/books/create">Create Book</nuxt-link>
          </NButton>
        </div>
        <table class="w-full border-collapse border border-slate-400">
          <thead>
            <tr>
              <th class="border border-slate-300 py-2 px-3">Book Name</th>
              <th class="border border-slate-300 py-2 px-3">Author</th>
              <th class="border border-slate-300 py-2 px-3">Price</th>
              <th class="border border-slate-300 py-2 px-3">Date</th>
              <th colspan="2" class="border border-slate-300 py-2 px-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books" :key="book.id">
              <td class="border border-slate-300 py-2 px-3">
                {{ book.name }}
              </td>
              <td class="border border-slate-300 py-2 px-3">
                {{ book.author }}
              </td>
              <td class="border border-slate-300 py-2 px-3">
                {{ book.price }}
              </td>
              <td class="border border-slate-300 py-2 px-3">{{ book.date }}</td>
              <td class="border border-slate-300 py-2 px-3 text-center">
                <NButton
                  class="bg-blue-600 text-white"
                  @click="updateBook(book.id)"
                  >Edit</NButton
                >
              </td>
              <td class="border border-slate-300 py-2 px-3 text-center">
                <NButton
                  class="bg-red-600 text-white"
                  @click="deleteBook(book.id)"
                  >Delete</NButton
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
  layout: false,
});

const router = useRouter();

const { data: books } = await useFetch("/api/books"); // get data from SSR (by using cookies)
// const books = useCookie("books");

const deleteBook = async (id) => {
  const { data: success } = await useFetch(`/api/books/delete`, {
    method: "POST",
    body: {
      id: `${id}`,
    },
  });
  if (success.value) {
    window.location.reload();
  }
  console.log(success);
};

const updateBook = (id) => {
  router.push({
    path: `/books/edit/${id}`,
  });
};
</script>