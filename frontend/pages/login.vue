<template>
  <section>
    <LoginForm />
  </section>
</template>

<script setup>

definePageMeta({
  middleware: ["auth"]
})
</script>