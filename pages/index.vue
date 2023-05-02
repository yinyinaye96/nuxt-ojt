<template>
  <NuxtLayout name="page">
    <template #content> 
      <div class="content text-3xl text-center my-5">
        This is Home Page (Static Page)
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
  layout: false,
});
</script>
<style scoped>
.content {
  height: calc(100vh - 140px);
}
</style>