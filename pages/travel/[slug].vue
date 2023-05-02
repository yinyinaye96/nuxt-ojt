<template>
  <NuxtLayout name="page">
    <template #content>
      <div class="content max-w-screen-sm mx-auto">
        <h2 class="text-3xl my-5 text-center">{{ travel.title }}</h2>
        <img :src="`/images/${travel.image}`" :alt="`${travel.image}`" />
        <p class="mt-5">{{ travel.description }}</p>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
  layout: false
});
const route = useRoute();
const { data: travel } = await useFetch(`/api/travels/${route.params.slug}`);
</script>
<style scoped>
.content {
  height: calc(100vh - 120px);
}
</style>