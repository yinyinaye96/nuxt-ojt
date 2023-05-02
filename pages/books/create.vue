<template>
  <NuxtLayout name="page">
    <template #content>
      <div class="content w-3/4 mx-auto my-5">
        <form>
          <div>
            <label class="">Book Name</label>
            <NTextInput type="text" v-model="book.name" />
          </div>
          <div class="mt-3">
            <label class="">Author</label>
            <NTextInput type="text" v-model="book.author" />
          </div>
          <div class="mt-3">
            <label class="">Price</label>
            <NTextInput type="text" v-model="book.price" />
          </div>
          <div class="mt-3">
            <label class="">Date</label>
            <NTextInput type="date" v-model="book.date" />
          </div>
          <div class="text-center mt-5 space-x-5">
            <NButton class="bg-red-500 text-white" @click.prevent="create"
              >Create</NButton
            >
            <NButton class="bg-red-500 text-white" @click.prevent="cancel">Cancel</NButton>
          </div>
        </form>
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
const books = useCookie("books");
const id = ref(null);
const book = reactive({
  id: id,
  name: null,
  author: null,
  price: null,
  date: null,
});
console.log(books);

onMounted(() => {
  id.value = (books.value == undefined) ? 1 : books.value.length + 1;
});
const create = async () => {
  // set Data to SSR (using cookies)
  const { data, error } = await useFetch('/api/books/create', { method: 'POST', body: book });
  if (!error.value) {
    router.push({ path: "/books" });
  }
};
const cancel = () => {
  router.push({
    path: "/books",
  });
};
</script>