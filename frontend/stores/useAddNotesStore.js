// This store manages the visibility of the note input box by toggling its state.
// It uses Pinia for state management and Vue's Composition API.
// Technologies used: Pinia, Vue 3


import { defineStore } from 'pinia';

export const useAddNotesStore = defineStore('addNotes', {
  state: () => {
    return {
    boxInputNewNotes: false
    }
  },
  actions: {
    showBox() {
      this.boxInputNewNotes = !this.boxInputNewNotes;
    }
  }
})