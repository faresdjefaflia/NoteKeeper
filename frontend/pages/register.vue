<template>
  <section>
    <RegisterForm />
  </section>
</template>

<script setup>
  definePageMeta({
  middleware: ["auth"]
})
</script>