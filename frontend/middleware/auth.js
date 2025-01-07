export default defineNuxtRouteMiddleware(async(to, from) => {
    const auth = useAuthStore();
    const token = useCookie('token');
    
    if (token.value) {
      auth.login = true
      if (to.path !== '/notes') {
        return navigateTo('/notes');
      }
    }
    else {
      auth.login = false;
      if (to.path == '/notes') {
        return navigateTo('/login')
      }
    }
});