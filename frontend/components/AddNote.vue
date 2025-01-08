<template>
  <section class="w-full h-screen flex justify-center items-center absolute top-0">
    <div class="border border-01 rounded-md bg-[#fff] p-[50px]">
      <div class="w-full flex justify-center">
        <textarea v-model="newNote.content" class="m-auto w-[500px] p-3 border border-01 rounded-md min-h-[200px]" placeholder="add your note here"></textarea>
      </div>
      <div class="flex justify-center mt-3">
        <button @click="add(newNote)" class="bg-01 p-2 text-02 w-[240px] mr-[10px] rounded-md">Add</button>
        <button @click="showBox" class="bg-01 p-2 text-02 w-[240px] ml-[10px] rounded-md">Cancel</button>
      </div>
    </div>
  </section>
</template>

<script setup>
// This code handles adding a new note: it triggers the addNote action to save the note 
// and then closes the input box.
// Technologies used: Vue 3, Pinia


// CLICK FOR CLOSE BOX
const useAddNotes = useAddNotesStore()
const showBox = useAddNotes.showBox

// CLICK FOR ADD NOTE
const newNote = {content: ''}
const useDataNote = useDataNotesStore();
const addNote = useDataNote.addNote;
async function add(content) {
  await addNote(content)
  showBox()
}
</script>