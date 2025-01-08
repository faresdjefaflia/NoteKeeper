import { defineStore } from 'pinia';
import axios from "axios";

export const useDataNotesStore = defineStore('useDataNotes', {
  /**
   * Notes data from database.
   * @property {Array} notes - notes data from database.
   */
  state: () => {
    return {
      notes: [],
    }
  },
  actions: {
    async getNotes() {
      const token = useCookie('token');
      try {
        const response = await axios.get('http://localhost:5000/notes/', {
          headers: {
            'Authorization': `Bearer ${token.value}`
          }
        });
        this.notes = response.data
      }
      catch (error) {
        console.log(error.response.data)
      }
    }
  }
})