import { defineStore } from 'pinia';

export const useAddNotesStore = defineStore('addNotes', {
  state: () => {
    boxInputNewNotes: false;
  },
  actions: {
    showBox() {
      this.boxInputNewNotes = !this.boxInputNewNotes;
    }
  }
})