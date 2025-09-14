<template>
  <div class="intro">
    <div class="container min-vh-100">
      <div class="d-flex flex-column justify-content-center align-items-center container-content">

        <!-- Texto con video -->
        <div class="title-container">
          <h1 
            class="title" 
            @mouseenter="showVideo = true" 
            @mouseleave="showVideo = false">
            TATSU
            <video 
              v-show="showVideo" 
              autoplay loop muted playsinline 
              class="video-bg">
              <source src="@/assets/videos/finalImage2.mp4" type="video/mp4" />
            </video>
          </h1>
        </div>

        <!-- Botón -->
        <button
          @click="home"
          type="button"
          class="col-md-2 enter-btn enter-btn-normal">
          <div class="enter-btn-text my-1" style="font-family: MontSerrat;">ENTER</div>
        </button>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showVideo = ref(false)

async function home() {
  await router.push('/home')
}
</script>

<style scoped>
.intro {
  background-color: black;
}

.title-container {
  width: 750px;
  max-width: 100%;
  position: relative;
}

.container-content {
  min-height: 80vh;
}

.title {
  font-family: 'Bernoru';
  font-size: clamp(5rem, 20vw, 300px);
  font-weight: 900;
  letter-spacing: -0.05em;
  position: relative;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  overflow: hidden;
  cursor: pointer;
}

.video-bg {
  position: absolute;
  top: 7%;
  left: -21%;
  width: 135%;
  height: 135%;
  object-fit: cover;

  /* Recorte del video al texto */
  -webkit-mask-image: linear-gradient(white, white);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;

  mask-image: linear-gradient(white, white);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;

  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.title:hover .video-bg {
  opacity: 1;
}

.enter-btn {
  width: 250px;
  position: relative;
  border: 0 solid transparent;
  border-radius: 10px;
  background: #4E4E4E;
}

.enter-btn-text {
  color: #0A0101;
  font-size: 11px;
  font-family: Kokoro;
  letter-spacing: 2.04px;
}

@media only screen and (max-width: 600px) {
  .title {
    font-size: 8rem;
    letter-spacing: -0.05em;
  }
}
</style>
