<template>
  <section>
    <h1>{{ auth }}</h1>
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
</script>