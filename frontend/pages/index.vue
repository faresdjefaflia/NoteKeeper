<template>
  <section>
    <ToNotes v-if="login" />
    <Welcome v-else />
    <h1>{{ login }}</h1>
  </section>
</template>

<script setup>
import { computed } from 'vue';
  definePageMeta({
    middleware: ["auth"]
  })
const login = computed(() => useAuthStore().login)
</script>