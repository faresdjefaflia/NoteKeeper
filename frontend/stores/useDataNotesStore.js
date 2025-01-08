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
    //GET ALL NOTES
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
    },

    // ADD NOTE
    async addNote(content) {
      const token = useCookie('token');
      try {
        const response = await axios.post(`http://localhost:5000/notes`, content ,
        {
          headers: {
            'Authorization': `Bearer ${token.value}`
          }
        })
        this.notes = response.data;
      }
      catch (error) {
        console.log(error.response.data)
      }
    },

    // DELETE NOTE
    async deleteNote(id) {
    const token = useCookie('token');
      try {
        const response = await axios.delete(`http://localhost:5000/notes/${id}`, {
          headers: {
            'Authorization': `Bearer ${token.value}`
          }
        })
        this.notes = response.data;
      }
      catch (error) {
        console.log(error)
      }
    },

    // EDIT NOTE
  },
})