<template>
  <div class="flex justify-between font-serif text-white">
    <h1>Nuxt OJT</h1>
    <ul class="flex space-x-4 items-center">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog">Blog List</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/travel">Travel List</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/books">Books List</nuxt-link>
      </li>
      <li>
        <NButton class="bg-red-500 text-white" @click.prevent="logout"
          >Logout</NButton
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
const logout = () => {
  const userinfo = useCookie("user");
  userinfo.value = { email: null };
  navigateTo("/login");
};
</script>