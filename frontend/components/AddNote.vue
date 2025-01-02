<template>
  <section class="w-full h-screen flex justify-center items-center absolute top-0">
    <div class="border border-01 rounded-md bg-[#fff] p-[50px]">
      <div class="w-full flex justify-center">
        <textarea class="m-auto w-[500px] p-3 border border-01 rounded-md min-h-[200px]" placeholder="add your note here"></textarea>
      </div>
      <div class="flex justify-center mt-3">
        <button class="bg-01 p-2 text-02 w-[240px] mr-[10px] rounded-md">Add</button>
        <button @click="showBox" class="bg-01 p-2 text-02 w-[240px] ml-[10px] rounded-md">Cancel</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const useAddNotes = useAddNotesStore()
const showBox = useAddNotes.showBox
</script>