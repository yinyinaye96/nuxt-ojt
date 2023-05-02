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
            <NButton class="bg-red-500 text-white" @click.prevent="update"
              >Create</NButton
            >
            <NButton class="bg-red-500 text-white" @click.prevent="cancel"
              >Cancel</NButton
            >
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
const route = useRoute();
const bookID = route.params.id;

const { data: book } = await useFetch(`/api/books/${bookID}`, {
  method: "GET",
});
const update = async () => {
  const { data: success } = await useFetch(`/api/books/${bookID}`, {
    method: "POST",
    params: book
  });
  if (success.value) {
    router.push({
      path: "/books",
    });
  }

  console.log("testing", success);
};
const cancel = () => {
  router.push({
    path: "/books",
  });
};
</script>