<template>
  <NuxtLayout name="page">
    <template #content>
      <div class="content text-3xl my-5 text-center">
        This is Dynamic Page - Blog {{ route.params.id }}
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
</script>
<style scoped>
.content {
  height: calc(100vh - 140px);
}
</style>