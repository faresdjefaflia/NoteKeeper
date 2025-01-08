// This Nuxt.js route middleware checks if the user is authenticated 
// by verifying the presence of a 'token' cookie. 
// If the token exists, the user is marked as logged in, 
// and if they are not already on '/notes', they are redirected to that page.
// If the token is not found, the user is marked as logged out, 
// and any attempt to access '/notes' will redirect them to the login page.


export default defineNuxtRouteMiddleware(async (to, from) => {
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