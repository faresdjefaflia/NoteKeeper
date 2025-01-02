<template>
  <section class="flex justify-center items-center py-7">
    <div class="w-4/5 grid grid-cols-4 gap-4">
      <Notes v-if="login === true" />
      <p v-else>you need to login</p>
    </div>
  </section>
  <AddNote v-if="boxDisplay === true" />
</template>

<script setup>
import { computed } from "vue";
definePageMeta({
  layout: 'notes'
})
const login = false;

const useAddNotes = useAddNotesStore()
const boxDisplay = computed(() => useAddNotes.boxInputNewNotes)
const showBox = useAddNotes.showBox
</script>