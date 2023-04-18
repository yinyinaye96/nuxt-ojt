<template>
  <div class="container mx-auto">
    <header class="bg-red-400 p-4">
      <Header />
    </header>
    <div class="content text-3xl text-center my-5">
      This is Home Page (Static Page)
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
</script>
<style scoped>
.content {
  height: calc(100vh - 130px);
}
</style>