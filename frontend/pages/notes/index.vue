<template>
  <section class="flex justify-center items-center py-7">
    <Notes />
    <AddNote v-if="boxDisplay" />
  </section>
</template>

<script setup>
import { computed } from "vue";

definePageMeta({
  middleware: ["auth"]
})


const useAddNotes = useAddNotesStore()
const boxDisplay = computed(() => useAddNotes.boxInputNewNotes)
const showBox = useAddNotes.showBox
</script>