<template>
  <section class="flex justify-center items-center py-32">
    <form @submit.prevent="sendData">
      <h1 class="text-01 font-medium text-3xl">Register</h1>
      <h1 class="mt-3">{{ dataRes.message }} </h1>
      <input v-model="dataRegister.name" class="border border-01 rounded-md px-2 py-2 block mt-4" placeholder="Name"
        type="text">
      <input v-model="dataRegister.email" class="border border-01 rounded-md px-2 py-2 block mt-4" placeholder="Email"
        type="email">
      <input v-model="dataRegister.password" class="border border-01 rounded-md px-2 py-2 block mt-4"
        placeholder="password" type="password">
      <button class="bg-01 text-02 w-[266px] rounded-md px-2 py-2 block mt-4" type="submit">Register</button>
    </form>
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import axios from 'axios';
////////////////

  const login = ref('');


  const dataRegister = ref(
    {
      name: '',
      email: '',
      password: ''
    }
  )
  const dataRes = ref('');

  async function sendData() {
    try {
      const response = await axios.post('http://localhost:5000/register', dataRegister.value);
      dataRes.value = response.data;
      console.log(response.data)
    } catch (error) {
      dataRes.value = error.response.data
      console.log(error.response)
    }
  }
</script>