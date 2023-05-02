<template>
  <NuxtLayout name="page">
    <template #content>
      <div class="content">
        <h2 class="text-3xl my-5 text-center">
          This is Travel Page (Static Page)
        </h2>
        <div v-if="pending" class="text-center">Loading</div>
        <div
          v-else
          class="grid gap-4 grid-cols-3 blog-content mx-auto text-center"
        >
          <div
            class="bg-red-400 text-white cursor-pointer rounded-lg"
            v-for="travel in travels"
            :key="travel.id"
          >
            <nuxt-link :to="`/travel/${travel.slug}`" class="block p-4">
              <p class="mb-2">{{ travel.title }}</p>
              <img :src="`/images/${travel.image}`" :alt="`${travel.image}`" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
  layout: false
});
const { pending, data: travels } = useLazyFetch("/api/travels");
console.log(travels);
</script>
<style scoped>
.content {
  height: calc(100vh - 120px);
}
.blog-content {
  width: 80%;
}
</style>