<template>
  <section class="flex justify-center items-center py-32">
    <form @submit.prevent="sendData">
      <h1 class="text-01 font-medium text-3xl">Log in</h1>
      <h1 class="mt-3">{{ resData.message }} </h1>
      <input v-model="dataLogin.email" class="border border-01 rounded-md px-2 py-2 block mt-4" placeholder="Email"
        type="email">
      <input v-model="dataLogin.password" class="border border-01 rounded-md px-2 py-2 block mt-4" placeholder="password"
        type="password">
      <button class="bg-01 text-02 w-[266px] rounded-md px-2 py-2 block mt-4" type="submit">Log in</button>
    </form>
  </section>

</template>

<script setup>
import { ref,  } from "vue";
import  axios  from "axios";


const login = ref('');


// login
const dataLogin = ref(
  {
    email: '',
    password: ''
  }
)

const resData = ref('')

async function sendData() {
  try {
    const response = await axios.post('http://localhost:5000/login', dataLogin.value);
    sessionStorage.setItem('token', response.data.token);
    window.location.href = '/notes/'
  }
  catch (error) {
    resData.value = error.response.data;
  }
}
</script>