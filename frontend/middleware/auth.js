export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();
  auth.checkToken();
  const token = auth.login;
  if (!token) {
    if (to.path == '/notes') {
      return navigateTo('/login');
    }
  }
  else {
    if (to.path !== '/notes') {
      return navigateTo('/notes');
    }
  }
});