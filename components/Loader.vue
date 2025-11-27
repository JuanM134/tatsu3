<template>
  <Transition name="fade">
    <div v-if="isLoading" class="loader-overlay">
      <div class="loader-text">TATSU</div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useLoading } from '@/composables/useLoading'

const { isLoading } = useLoading()
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader-text {
  font-family: 'Bernoru';
  font-weight: 900;
  font-size: 4rem;
  color: #fff;
  letter-spacing: -0.1rem;
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
