import { defineStore } from 'pinia';

export const useAuthStore = defineStore('useAuth', {
  state: () => {
    return {
      login: null,
    }
  },
})