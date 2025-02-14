<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br />

    <h3>
      {{ message }}
    </h3>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import echo from '../js/echo.js'

const message = ref<string>('')

onMounted(() => {
  echo.channel('public-event-test').listen('TestEvent', (event: { message: string }) => {
    message.value = event.message
    console.log('TestEvent: ', message.value)
  })

  console.log('Listening for test events')
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
