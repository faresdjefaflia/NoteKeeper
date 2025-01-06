<template>
  <div v-for="note in notes" class="border border-01 rounded-md min-w-56 min-h-36 p-3">
    <div class="bg-01 mt-3 px-2 rounded-md flex justify-between">
      <p class="font-medium text-lg text-02 ">ID: {{ note.id }}</p>
      <div class="flex items-center">
        <img class="w-[20px] h-[20px] cursor-pointer" src="../assets/img/Vector4.png" alt="">
      </div>
    </div>
    <textarea class=" min-h-36 max-h-36 mt-3">{{ note.content }}</textarea>
    <button class="bg-01 w-full text-02 rounded-md py-1">Save</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const notes = ref(
    [
      // { id: 1, content: 'Meeting at 10 AM tomorrow for project discussion.' },
      // { id: 2, content: 'Reminder to submit the report by Friday evening.' },
      // { id: 3, content: 'Don\'t forget to send the email to the client.' },
      // { id: 4, content: 'Check the new feature on the app for the bug fix.' },
      // { id: 5, content: 'Update the website homepage design according to feedback.' },
      // { id: 6, content: 'Schedule a call with John regarding the new partnership.' },
      // { id: 7, content: 'Test the payment gateway integration before launch.' },
      // { id: 8, content: 'Buy groceries after work – milk, eggs, and bread.' },
      // { id: 9, content: 'Prepare slides for the presentation next week.' },
      // { id: 10, content: 'Update the server with the latest security patches.' }
    ]
)

const login = ref('')

  
</script>