<template>
  <div class="container mx-auto">
    <header class="bg-red-400 p-4">
      <Header />
    </header>
    <div class="content max-w-screen-sm mx-auto">
      <h2 class="text-3xl my-5 text-center">{{ travel.title }}</h2>
      <img :src="`/images/${travel.image}`" :alt="`${travel.image}`" />
      <p class="mt-5">{{ travel.description }}</p>
    </div>
    <footer class="bg-red-400 p-2">
      <Footer />
    </footer>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
});
const route = useRoute();
const { data: travel } = await useFetch(`/api/travels/${route.params.slug}`);
console.log(travel);
</script>
<style scoped>
.content {
  height: calc(100vh - 130px);
}
</style>