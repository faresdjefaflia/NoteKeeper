<template>
  <header class="bg-01 flex justify-between items-center py-6 px-4">
    <NuxtLink class="text-02 font-semibold text-2xl" to="/">NoteKeeper</NuxtLink>

    <div class="flex">
      <NuxtLink class="px-8 py-2 text-lg text-02 font-normal rounded-md  " to="/login" >Log in</NuxtLink>
      <NuxtLink class="px-8 py-2 text-lg text-02 font-normal rounded-md  " to="/register" >Register</NuxtLink>
      <NuxtLink class="px-8 py-2 text-lg text-02 font-normal rounded-md  " to="/notes" >My notes</NuxtLink>
    </div>
  </header>
</template>