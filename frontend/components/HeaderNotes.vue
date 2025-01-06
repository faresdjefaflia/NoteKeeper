<template>
  <header class="bg-01 flex justify-between items-center py-6 px-4">
    <NuxtLink class="text-02 font-semibold text-2xl" to="/">NoteKeeper</NuxtLink>
    <div class="flex">
      <button @click="showBox" class="px-8 py-2 text-lg text-02 font-normal rounded-md  ">Add note</button>
      <button @click="logout" class="px-8 py-2 text-lg text-02 font-normal rounded-md  ">Logout</button>
    </div>
  </header>
</template>

<script setup>
const useAddNotes = useAddNotesStore()
const useAuth = useAuthStore();
const showBox = useAddNotes.showBox;

async function logout() {
  sessionStorage.clear()
  useAuth.login = false
  navigateTo('/login')
}
</script>