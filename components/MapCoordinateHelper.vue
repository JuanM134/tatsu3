<template>
  <div class="coordinate-helper">
    <h2>🧭 Herramienta de coordenadas del mapa</h2>
    <p>Haz clic en cualquier punto del mapa para obtener coordenadas exactas.</p>

    <div class="map-wrapper">
      <img
        ref="mapRef"
        class="map-image"
        src="@/assets/images/map3.jpeg"
        alt="Mapa"
        @click="handleMapClick"
        @load="setBaseSize"
      />

      <!-- Mostrar coordenadas -->
      <div v-if="clicked" class="coords">
        <p><strong>X:</strong> {{ coords.x.toFixed(1) }} px</p>
        <p><strong>Y:</strong> {{ coords.y.toFixed(1) }} px</p>
        <button @click="copyCoords">Copiar coordenadas</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mapRef = ref<HTMLImageElement | null>(null)
const coords = ref({ x: 0, y: 0 })
const clicked = ref(false)

const BASE_WIDTH = ref(0)
const BASE_HEIGHT = ref(0)

// Guardar tamaño base al cargar imagen
function setBaseSize() {
  if (mapRef.value) {
    BASE_WIDTH.value = mapRef.value.naturalWidth
    BASE_HEIGHT.value = mapRef.value.naturalHeight
  }
}

// Calcular posición relativa en píxeles
function handleMapClick(event: MouseEvent) {
  if (!mapRef.value) return
  const rect = mapRef.value.getBoundingClientRect()

  const scaleX = BASE_WIDTH.value / rect.width
  const scaleY = BASE_HEIGHT.value / rect.height

  const x = (event.clientX - rect.left) * scaleX
  const y = (event.clientY - rect.top) * scaleY

  coords.value = { x, y }
  clicked.value = true
}

// Copiar al portapapeles
function copyCoords() {
  const text = `{ x: ${coords.value.x.toFixed(1)}, y: ${coords.value.y.toFixed(1)} }`
  navigator.clipboard.writeText(text)
  alert('📋 Coordenadas copiadas: ' + text)
}
</script>

<style scoped>
.coordinate-helper {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #222;
}

.map-wrapper {
  position: relative;
  display: inline-block;
  margin-top: 20px;
}

.map-image {
  width: 80vw;
  max-width: 1200px;
  height: auto;
  border: 2px solid #999;
  cursor: crosshair;
  border-radius: 8px;
  user-select: none;
}

.coords {
  margin-top: 10px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  display: inline-block;
  text-align: left;
}
button {
  margin-top: 5px;
  padding: 6px 10px;
  font-size: 0.9rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #555;
}
</style>
