// This store manages the authentication state of the user (login status).
// It uses Pinia for state management and Vue's Composition API.
// Technologies used: Pinia, Vue 3

import { defineStore } from 'pinia';

export const useAuthStore = defineStore('useAuth', {
  state: () => {
    return {
      login: null,
    }
  },
})