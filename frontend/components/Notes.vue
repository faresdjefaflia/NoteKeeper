<template>
  <section class="flex justify-center items-center py-7">
    <div v-if="notes.length > 0" class="w-4/5 grid grid-cols-4 gap-4">
      <div v-for="note in notes" :key="note.key" class="border border-01 rounded-md min-w-56 min-h-36 p-3">
      <div class="bg-01 mt-3 px-2 rounded-md flex justify-between">
        <p class="font-medium text-lg text-02 ">ID: {{ note.id }}</p>
        <div @click="deleteNote(note.id)" class="flex items-center">
          <img class="w-[20px] h-[20px] cursor-pointer" src="../assets/img/Vector4.png" alt="">
        </div>
      </div>
      <textarea v-model="note.content" class=" min-h-36 max-h-36 mt-3"></textarea>
      <button @click="editNote(note.id, note.content)" class="bg-01 w-full text-02 rounded-md py-1">Save</button>
      </div>
    </div>
    <h1 v-else> please add notes </h1>
  </section>
</template>

<script setup>
// This code interacts with the state management store to retrieve, delete, and edit notes in the database.
// It uses computed properties to fetch the notes and functions for handling note deletion and editing.
// Technologies used: Vue 3, pinia (store management), Computed Properties

import { computed } from "vue";


const useDataNotes = useDataNotesStore();
// GET ALL NOTES FROM DATABASE
const getNotes = useDataNotes.getNotes;
getNotes();
const notes = computed(() => useDataNotes.notes);

// DELETE NOTE FROM DATABASE
const deleteNote = useDataNotes.deleteNote;

// EDIT AND SAVE NOTE TO DATABASE
const editNote = useDataNotes.editNote;

</script>