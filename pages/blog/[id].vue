<template>
  <div class="container mx-auto">
    <header class="bg-red-400 p-4">
      <Header />
    </header>
    <div class="content text-3xl my-5 text-center">
      This is Dynamic Page - Blog {{ route.params.id }}
    </div>
    <footer class="bg-red-400 p-2">
      <Footer />
    </footer>
  </div>
</template>
<script setup>
  const route = useRoute();
</script>
<style scoped>
.content {
  height: calc(100vh - 130px);
}
</style>