import { defineStore } from 'pinia';

export const useDataNotesStore = defineStore('useDataNotes', {
  state: () => {
    return {
      notes: null,
    }
  },
})