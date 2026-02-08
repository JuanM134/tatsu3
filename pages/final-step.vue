<template>
  <div class="background-container">
    <video autoplay muted loop playsinline class="bg-video">
      <source src="@/assets/videos/questfinal.mp4" type="video/mp4" />
      Tu navegador no soporta videos.
    </video>

    <div class="overlay"></div>

    <div class="content-wrapper">
      <div class="text-container">
        <p class="sub-title">YOU ARE NOW A</p>
        <h1 class="main-title">DRAGON'S APPRENTICE</h1>
      </div>

      <a 
        href="https://discord.com/invite/f7FyhRGb" 
        target="_blank" 
        class="enter-btn"
        :class="{ 'enter-btn-active-bg': isActive }"
        @mouseover="mouseOver" 
        @mouseleave="mouseLeave"
      >
        <div 
          class="enter-btn-text" 
          :class="{ 'text-inverted': !isActive, 'text-normal': isActive }"
        >
          ENTER
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)

function mouseOver() {
    isActive.value = true
}

function mouseLeave() {
    isActive.value = false
}
</script>

<style scoped>
.background-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

}

.bg-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -2;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
}

.content-wrapper {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  z-index: 10;
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.sub-title {
  font-family: 'Bernoru', sans-serif;
  font-weight: 900;
  font-size: 62px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 1px;
  /* Reducimos el interlineado para que el cuadro de texto sea más bajo */
  line-height: 0.8; 
}

.main-title {
  font-family: 'Bernoru', sans-serif;
  font-weight: 900;
  font-size: 74px;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: -2px;
  /* Aplicamos un margen negativo para subir el texto y pegarlo al de arriba */
  margin-top: -10px; 
  line-height: 1;
}

.enter-btn {
  width: 268px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  background-color: #DDD9DA;
  border-radius: 50px;
  transition: background-color 0.4s ease;
  overflow: hidden;
}

.enter-btn-active-bg {
  background-color: #4E4E4E;
}

.enter-btn-text {
  font-size: 11px; 
  font-family: 'Montserrat', sans-serif;
  font-weight: 400; 
  letter-spacing: 2.04px;
  color: #0A0101;
  /* La clave es usar scaleY para invertir sin rotar circularmente */
  transition: transform 0.4s ease, color 0.4s ease;
}

/* Estado invertido: Reflejo vertical */
.text-inverted {
  transform: scaleY(-1);
}

/* Estado normal: Tamaño original */
.text-normal {
  transform: scaleY(1);
  color: #FFFFFF;
}

@media (max-width: 768px) {
  .main-title { font-size: 32px; }
  .enter-btn { width: 220px; }
}
</style>