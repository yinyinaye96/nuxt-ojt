<template>
  <div
    class="max-w-screen-sm mx-auto p-4 mt-5 rounded shadow-md shadow-gray-400"
  >
    <h2 class="text-center text-2xl font-bold">Login Page</h2>
    <form>
      <div>
        <label class="">Email</label>
        <NTextInput v-model="user.email" type="text" />
      </div>
      <div class="mt-3">
        <label class="">Password</label>
        <NTextInput v-model="user.pwd" type="text" />
      </div>
      <div class="text-center mt-5">
        <NButton class="bg-red-500 text-white" @click.prevent="submit"
          >Login</NButton
        >
      </div>
    </form>
  </div>
</template>
<script setup>
const user = ref({
  email: null,
  pwd: null,
});
const userinfo = useCookie("user");
if (userinfo.value.email) {
  navigateTo("/");
}
const submit = () => {
  if (user.value.email && user.value.pwd) {
    userinfo.value = { email: user.value.email };
    navigateTo("/");
  }
  return;
};
</script>