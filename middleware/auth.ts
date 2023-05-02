export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie("user");
  if (user.value == undefined || !user.value.email) {
    return navigateTo('/login');
  }
})