<template>
  <section class="w-full  p-28">
    <div class="w-4/5 h-40 bg-01 m-auto mb-7 rounded-lg flex justify-center items-center">
      <p class="text-center font-medium text-4xl text-02">Welcome to NoteKeeper</p>
    </div>
    <div class="flex justify-center items-center">
      <NuxtLink class="px-8 py-2 text-lg text-02 font-normal rounded-md bg-01 mr-2" to="/login">Log in</NuxtLink>
      <NuxtLink class="px-8 py-2 text-lg text-02 font-normal rounded-md bg-01 ml-2" to="/register">Register</NuxtLink>
    </div>
  </section>
</template>