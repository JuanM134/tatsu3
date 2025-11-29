<template>
  <Transition name="fade">
    <div v-if="isLoading" class="loader-overlay">
      <div class="loader-text">Awakening the dragon . . .<span class="progress-text">{{ progress }}%</span></div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useLoading } from '@/composables/useLoading'

const { isLoading, progress } = useLoading()
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #DDD9DA;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader-text {
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 1.2em;
  color: #1B1818;
  letter-spacing: 14%;
  animation: pulse 1.5s ease-in-out infinite;
}

.progress-text {
  margin-left: 10px;
  font-weight: 300;
  font-family: 'Roboto';
  font-size: 1.2em;
  color: #1B1818;
  letter-spacing: 14%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

