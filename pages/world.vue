<template>
  <div class="background">
    <navbar style="z-index: 4;" />
    <Dropupbttn class="dropupbttn" style="top: 88.5%; position: fixed; z-index: 8;" />  
    <home class="dropupbttn" style="z-index: 5;  position: fixed;"/> 
    <menubttn style="z-index: 4;" /> 
    <navbar2 style="z-index: 11;" />

    <!-- Contenedor scrollable del mapa -->
    <div class="scroll-wrapper">
      <div class="map-container" ref="mapContainer">

        <picture>
                <source srcset="@/assets/images/map3.jpeg" media="(min-width: 677px)">
                <source srcset="@/assets/images/map.jpg" media="(min-width: 377px)">
                <img class="map" src="@/assets/images/map.jpg"> <!-- imagen principal -->
            </picture>

        <div
          v-for="pin in pins"
          :key="pin.id"
          class="pin"
          :style="{ top: pin.y + '%', left: pin.x + '%' }"
        >
          <img
            class="pin-icon"
            :src="getPinImage(pin.id)"
            alt="Pin"
            :class="{ rotated: activePin === pin.id }"
            @click="toggleLabel(pin.id)"
          />
          <div class="pin-label" :class="{ visible: activePin === pin.id }">
            {{ pin.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useLoading } from '@/composables/useLoading'
import { useAssetLoading } from '@/composables/useAssetLoading'
import mapImg from '@/assets/images/map.jpg'

import pinOff from '@/assets/images/icons/pinOffff.png'
import pinOn from '@/assets/images/icons/pinOnn.png'

interface Pin {
  id: number
  name: string
  x: number
  y: number
}

/* Estado para detectar si es móvil */
const isMobile = ref(false)

/* Detectar tamaño de pantalla dinámicamente */
function updateIsMobile() {
  isMobile.value = window.innerWidth <= 600
}

const { startLoading, stopLoading } = useLoading()

onMounted(async () => {
  startLoading()
  
  const { waitForImages, waitForFonts } = useAssetLoading()
  await Promise.all([
    waitForImages([mapImg]),
    waitForFonts()
  ])
  
  stopLoading()

  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile)
})

/* PINS versión escritorio */
const desktopPins = ref<Pin[]>([
  { id: 1, name: 'YUREI MTN', x: 25, y: 67 },
  { id: 2, name: 'KURIN', x: 68.5, y: 49 },
  { id: 3, name: 'DRAGON HEADS', x: 39.5, y: 30 },
  { id: 4, name: 'NOHIRAMA', x: 71.3, y: 55.5 },
  { id: 5, name: 'CITY OF HOKAN', x: 71.3, y: 42.5 },
  { id: 6, name: 'TOBIRAMA', x: 51.5, y: 41.5 },
  { id: 7, name: 'CAPITAL OF UMI', x: 56, y: 94.5 },
  { id: 8, name: 'FOREST OF HAI', x: 81.5, y: 23 },
  { id: 9, name: 'YOGAN CASTLE', x: 73.5, y: 25 },
])

/* PINS versión móvil */
const mobilePins = ref<Pin[]>([
  { id: 1, name: 'YUREI MTN', x: 17, y: 67 },
  { id: 2, name: 'KURIN', x: 76.5, y: 48 },
  { id: 3, name: 'DRAGON HEADS', x: 37, y: 29 },
  { id: 4, name: 'NOHIRAMA', x: 80, y: 56 },
  { id: 5, name: 'CITY OF HOKAN', x: 80, y: 42 },
  { id: 6, name: 'TOBIRAMA', x: 54, y: 42 },
  { id: 7, name: 'CAPITAL OF UMI', x: 60, y: 95 },
  { id: 8, name: 'FOREST OF HAI', x: 92, y: 23 },
  { id: 9, name: 'YOUNG CASTLE', x: 81.5, y: 25 },
])

/* Selección automática */
const pins = computed(() => (isMobile.value ? mobilePins.value : desktopPins.value))

/* Lógica del pin */
const activePin = ref<number | null>(null)
function toggleLabel(id: number) {
  activePin.value = activePin.value === id ? null : id
}

function getPinImage(id: number) {
  return activePin.value === id ? pinOn : pinOff
}
</script>


<style scoped>
/* ===== CONTENEDOR BASE ===== */
.background {
  background-color: #c4c4c4;
  background-image: url('@/assets/images/sea.jpeg');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  /* ✅ Overflow habilitado */
  overflow-x: auto;
  overflow-y: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE & Edge */
  scrollbar-width: none; /* Firefox */
}

.background::-webkit-scrollbar {
  display: none;
}

/* ===== WRAPPER SCROLL (mapa) ===== */
.scroll-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto; /* scroll dentro del mapa también */
  display: flex;
  justify-content: center;
  align-items: center;
  touch-action: pan-x pan-y pinch-zoom;
}

/* ===== MAPA ===== */
.map-container {
  position: relative;
  width: 1600px;
  height: 900px;
  flex-shrink: 0;
}

.map {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

/* ===== PINS ===== */
.pin {
  position: absolute;
  transform: translate(-50%, -100%);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pin-icon {
  width: 2.5vw;
  min-width: 10px;
  max-width: 15px;
  transition: transform 0.4s ease;
}

.pin-icon.rotated {
  transform: rotate(-85deg);
}

.pin-label {
  background-color: #F47A7A;
  color: #1B1818;
  width: 125px;
  height: 14px;
  font-family: Montserrat;
  font-size: 0.55rem;
  padding: 2px 10px 15px;
  margin-left: -15px;
  border-radius: 8px;
  letter-spacing: 2.04px;
  text-align: center;
  opacity: 0;
  transform: translateX(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
  white-space: nowrap;
  pointer-events: none;
}

.pin-label.visible {
  opacity: 1;
  transform: translateX(10px);
  pointer-events: auto;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .map-container {
    width: 1100px;
    height: 645px;
  }
}

@media (max-width: 768px) {
  .map-container {
    width: 1000px;
    height: 562px;
  }

  .pin-icon {
    width: 5vw;
    
  }

  .pin-label {
    font-size: 0.4rem;
    padding: 3px 8px;
  }
}

@media (max-width: 600px) {
  .navbar,
  .dropupbttn {
    display: none;
  }

  .background {
    flex-direction: column;
  }

  .map-container {
    width: max-content;
    height: 756px;

    left: 70%;                /* ✅ centrado base */
    transform: translateX(-0%); /* ✅ centrado exacto */
  }
}
</style>
