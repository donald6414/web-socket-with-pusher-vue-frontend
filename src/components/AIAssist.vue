<script setup lang="ts">
import { ref } from 'vue'

const userInput = ref('')
const showSuggestions = ref(true)

const suggestions = [
  'Generate Summary',
  'Are they a good fit for my job post?',
  'What is their training style?'
]

const handleSubmit = () => {
  if (userInput.value.trim()) {
    // Handle message submission here
    userInput.value = ''
  }
}
</script>

<template>
  <div class="ai-assist-container">
    <div class="ai-assist-card">
      <div class="header">
        <span class="title">🤖 AI Assist</span>
        <button class="close-button">×</button>
      </div>

      <div class="content">
        <div class="ai-orb">
          <div class="orb"></div>
        </div>

        <div class="question-text">
          What do you want to know?
        </div>

        <div v-if="showSuggestions" class="suggestions">
          <button
            v-for="suggestion in suggestions"
            :key="suggestion"
            class="suggestion-button"
          >
            {{ suggestion }}
          </button>
          <button class="show-more">Show more</button>
        </div>

        <div class="input-container">
          <input
            type="text"
            v-model="userInput"
            placeholder="Ask me anything..."
            @keyup.enter="handleSubmit"
          />
          <button class="topics-button">
            Topics
          </button>
          <button class="send-button">
            ↗
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ai-assist-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.ai-assist-card {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.title {
  font-weight: 500;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.content {
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.ai-orb {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.orb {
  width: 60px;
  height: 60px;
  background: linear-gradient(120deg, #00ff88, #00cc88);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
}

.question-text {
  color: #333;
  font-size: 1.1rem;
  text-align: center;
}

.suggestions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.suggestion-button {
  background: white;
  border: 1px solid #eee;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;
}

.suggestion-button:hover {
  background: #f9f9f9;
  border-color: #ddd;
}

.show-more {
  background: none;
  border: none;
  color: #666;
  padding: 0.5rem;
  cursor: pointer;
}

.input-container {
  display: flex;
  gap: 0.5rem;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 0.5rem;
}

input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0.5rem;
}

.topics-button, .send-button {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #666;
}

.send-button {
  color: #00cc88;
}
</style>
