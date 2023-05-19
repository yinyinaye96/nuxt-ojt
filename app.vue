<template>
  <div>
    <h1>Hello Mongo DB</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
<script setup>
  // const userData = reactive({
  //   name: 'Jhon smith',
  //   email: 'jhonsmith@gmail.com'
  // });
  // await useFetch('/api/user/create', { method: 'POST', body: userData });
  const { data: users } = await useFetch('/api/user');
  console.log('user', users);
</script>
