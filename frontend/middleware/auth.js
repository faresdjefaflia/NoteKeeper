export default defineNuxtRouteMiddleware(async(to, from) => {
  const auth = useAuthStore();
  await auth.checkToken();

  const token = auth.login;
  console.log(token)
  if (!token && to.path == '/notes') {
    return navigateTo('/login');
  }
  else if(token && to.path !== '/notes') {
    return navigateTo('/notes');
  }
});