<template>
  <button @click="showNotes" class="text-02 bg-01 p-2">show notes</button>
  <h1 v-if="show === true" v-for="note in dataNotes">{{ note.content }}</h1>
  <h1 v-else>please click button</h1>
</template>

<script setup>
  import { computed } from 'vue'
  const useObject = useObjectStore()
  const dataNotes = useObject.notes
  const show = computed(()=>useObject.show)

  const showNotes = useObject.showNotes
</script>