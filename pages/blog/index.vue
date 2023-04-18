<template>
  <div class="container mx-auto">
    <header class="bg-red-400 p-4">
      <Header />
    </header>
    <div class="content">
      <h2 class="text-3xl my-5 text-center">This is Blog Page (Static Page)</h2>
      <div class="grid gap-4 grid-cols-3 blog-content mx-auto text-center">
        <div
          class="bg-red-400 text-white cursor-pointer"
          v-for="blog in blogs"
          :key="blog.id"
        >
          <nuxt-link :to="`/blog/${blog.id}`" class="block py-28">{{
            blog.text
          }}</nuxt-link>
        </div>
      </div>
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
const blogs = reactive([
  { id: 1, text: "Blog1" },
  { id: 2, text: "Blog2" },
  { id: 3, text: "Blog3" },
  { id: 4, text: "Blog4" },
  { id: 5, text: "Blog5" },
  { id: 6, text: "Blog6" },
]);
const { pending, data: posts } = useLazyFetch("/api/blogs");
console.log(posts);
</script>
<style scoped>
.content {
  height: calc(100vh - 110px);
}
.blog-content {
  width: 80%;
}
</style>