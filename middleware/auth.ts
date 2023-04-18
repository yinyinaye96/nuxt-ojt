export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie("user");
  const { email } = user.value;
  if (!email) {
    return navigateTo('/login');
  }
})