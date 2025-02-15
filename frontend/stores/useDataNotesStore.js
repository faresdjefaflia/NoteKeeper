// This store manages the notes data (fetching, adding, editing, and deleting) from the database.
// It interacts with the backend via axios requests and updates the state accordingly.
// Technologies used: Pinia, Vue 3, Axios


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
    async editNote(id, content) {
      console.log(id)
      const dataUpdate = { content: content }
      console.log(dataUpdate)
      
      const token = useCookie('token');
      try {
        const response = await axios.put(`http://localhost:5000/notes/${id}`, dataUpdate, {
          headers: {
            'Authorization': `Bearer ${token.value}`
          }
        })
        this.notes = response.data;
      }
      catch (error) {
        console.log(error.response.data)
      }
    }
  },
})