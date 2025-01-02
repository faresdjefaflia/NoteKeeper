import { defineStore } from "pinia";

export const useObjectStore = defineStore('object', {
  state: () => {
    return {
      notes: [
        { id: 1, content: 'Meeting at 10 AM tomorrow for project discussion.' },
        { id: 2, content: 'Reminder to submit the report by Friday evening.' },
        { id: 3, content: 'Don\'t forget to send the email to the client.' },
        { id: 4, content: 'Check the new feature on the app for the bug fix.' },
        { id: 5, content: 'Update the website homepage design according to feedback.' },
        { id: 6, content: 'Schedule a call with John regarding the new partnership.' },
        { id: 7, content: 'Test the payment gateway integration before launch.' },
        { id: 8, content: 'Buy groceries after work – milk, eggs, and bread.' },
        { id: 9, content: 'Prepare slides for the presentation next week.' },
        { id: 10, content: 'Update the server with the latest security patches.' }
      ],
      show: false,
    }
  },
  actions: {
    showNotes() {
      console.log(this.show)
      this.show = !this.show
    }
  }
})