import { defineStore } from 'pinia';

export const useAuthStore = defineStore('useAuth', {
  state: () => {
    return {
      login: null,
    }
  },
  actions: {
    checkToken() {
      if (process.client) {
        const token = sessionStorage.getItem('token');
        this.login = !!token
      }
    },
  }
})