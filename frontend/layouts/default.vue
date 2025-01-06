<template>
  <div>
    <HeaderNotes v-if="login" />
    <Header v-else />
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";
const useAuth = useAuthStore()
const login = computed(() => useAuth.login)
</script>