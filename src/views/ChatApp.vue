<template>
  <div class="min-h-screen flex flex-col items-center bg-gray-50">
    <div class="w-full max-w-3xl px-4 py-8 flex flex-col flex-grow">
      <header class="text-center mb-8 pb-4 border-b border-gray-200">
        <h1 class="text-3xl font-bold text-gray-800">RustyChat</h1>
      </header>

      <div class="flex-grow">
        <div v-for="message in messages" :key="message.id">
          {{ message.message }}
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div class="flex gap-3">
          <input
            type="text"
            v-model="message"
            @keyup.enter="sendMessage"
            placeholder="Type your message..."
            class="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            @click="sendMessage"
            class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Pusher from 'pusher-js'
import { ref } from 'vue'
// import echo from '../js/echo.js'

const messages = ref([])

const message = ref('')

const fetchMessages = async () => {
  const response = await fetch('http://localhost:8001/api/messages', {
    method: 'GET',
  })

  const data = await response.json()
  messages.value = data
}

const sendMessage = async () => {
  const response = await fetch('http://localhost:8001/api/message', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ message: message.value }),
  })
  message.value = ''
  return response
}

const pusher = new Pusher('aaa0bef97e7a5bd86f38', {
  cluster: 'eu',
})

const channel = pusher.subscribe('public-messages')
channel.bind('MessagingEvent', function (data) {
  messages.value.push(data)
})

// onMounted(() => {
//   echo.channel('public-messages').listen('MessagingEvent', (event: { id: number, message: string, created_at: string, updated_at: string }) => {
//     messages.value.push(event)
//     console.log("Here is the event: ");
//     console.log(event);
//   })
//   .error(error => {
//       console.log('Echo error:', error); // If there's an error listening to the channel
//     });

//     // Check if Echo is successfully connected
//   echo.connector.pusher.connection.bind('connected', function() {
//     console.log('Echo connected to Pusher');
//   });

//   echo.connector.pusher.connection.bind('disconnected', function() {
//     console.log('Echo disconnected from Pusher');
//   });
// })

fetchMessages()
</script>
