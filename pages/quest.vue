<template>
  <div class="background">
    <p class="title">CHOOSE YOUR CHARACTER</p>

    <div class="teams-container">
      <button
        v-for="team in teams"
        :key="team.id"
        :class="['team-btn', team.class]"
        @click="selectTeam(team.id)"
      >
        <div class="image-wrapper">
          <img :src="team.image" class="img-base" :alt="team.name" />
          <img :src="team.hoverImage" class="img-hover" :alt="team.name" />
        </div>
        </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLoading } from '@/composables/useLoading'
import { useAssetLoading } from '@/composables/useAssetLoading'
import { useQuestStorage } from '@/composables/useQuestStorage' // 1. Importamos el Composable de Almacenamiento

// IMPORTACIÓN DE IMÁGENES
import royBnw from '@/assets/images/quest/roybnw.png'
import royColor from '@/assets/images/quest/roycolor.png'

import mesmerBnw from '@/assets/images/quest/mesmerbnw.png'
import mesmerColor from '@/assets/images/quest/mesmercolor.png'

import agathaBnw from '@/assets/images/quest/agathabnw.png'
import agathaColor from '@/assets/images/quest/agathacolor.png'

import soraBnw from '@/assets/images/quest/sorabnw.png'
import soraColor from '@/assets/images/quest/soracolor.png'

import katsuroBnw from '@/assets/images/quest/katsurobnw.png'
import katsuroColor from '@/assets/images/quest/katsurocolor.png'

const { startLoading, stopLoading } = useLoading()
const { waitForFonts } = useAssetLoading()
const { saveLocal } = useQuestStorage() // 2. Extraemos la función de guardar
const router = useRouter()

onMounted(async () => {
  startLoading()
  await waitForFonts()
  stopLoading()
})

const teams = [
  { id: 'roy',     name: 'Roy',     image: royBnw,     hoverImage: royColor,     class: 'pos-roy' },
  { id: 'mesmer',  name: 'Mesmer',  image: mesmerBnw,  hoverImage: mesmerColor,  class: 'pos-mesmer' },
  { id: 'agatha',  name: 'Agatha',  image: agathaBnw,  hoverImage: agathaColor,  class: 'pos-agatha' },
  { id: 'sora',    name: 'Sora',    image: soraBnw,    hoverImage: soraColor,    class: 'pos-sora' },
  { id: 'katsuro', name: 'Katsuro', image: katsuroBnw, hoverImage: katsuroColor, class: 'pos-katsuro' },
]

// 3. FUNCIÓN MODIFICADA: Guarda en local antes de navegar
const selectTeam = async (teamId: string) => {
  try {
    // A. Guardamos la selección en la "mochila" (LocalStorage)
    // Usamos 'team_id' porque así se llama la columna en tu tabla de Supabase
    saveLocal('team_id', teamId)
    
    console.log(`Character selected: ${teamId}`)

    // B. Navegamos a la siguiente página (username)
    // Ya no es estrictamente necesario pasar el query param (?team=x) porque lo tenemos en local,
    // pero lo dejamos por si quieres usarlo visualmente en la URL.
    await router.push({ path: '/username', query: { team: teamId } })
    
  } catch (error) {
    console.error('Error selecting character:', error)
  }
}
</script>

<style scoped>
.background {
  background-color: #DDD9DA;
  background-image: url('@/assets/images/quest/dragonquest.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  z-index: 0;
}

.title {
  color: #0A0101;
  font-family: 'Bernoru', sans-serif;
  font-weight: 900;
  
  /* CLAMP MÁGICO */
  /* Mínimo 35px (móvil), Ideal 9vw (crece con la pantalla), Máximo 100px (escritorio) */
  font-size: clamp(35px, 9vw, 100px);
  
  /* IMPORTANTE: Usar un valor sin unidad (0.8) en lugar de px */
  /* Esto mantiene las líneas pegadas proporcionalmente sin solaparse mal */
  line-height: 0.85; 
  
  /* El espaciado de letras también se adapta */
  letter-spacing: clamp(-2px, -0.5vw, -6px);
  
  position: absolute;
  bottom: 5%;
  right: 2%;
  text-align: right;
  max-width: 550px;
  margin: 0;
  z-index: 20;
  
  /* Evita que una palabra larga rompa el diseño */
  word-wrap: break-word; 
}

.teams-container {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
}

.team-btn {
  position: absolute;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none; 
  transition: transform 0.3s ease;
}

.image-wrapper {
  position: relative;
  
  /* CAMBIO CLAVE: Usamos 'vw' (Viewport Width) en lugar de px */
  /* Esto hace que la imagen sea siempre el 18% del ancho de la pantalla */
  width: 23vw; 
  
  /* Límites para pantallas muy extremas */
  min-width: 180px; 
  max-width: 450px;
  
  height: auto;
  pointer-events: auto;
}

.team-btn img {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 15px 25px rgba(0,0,0,0.3));
  transition: opacity 0.4s ease;
}

.img-hover {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.team-btn:hover {
  transform: scale(1.08);
}

.team-btn:hover .img-base { opacity: 0; }
.team-btn:hover .img-hover { opacity: 1; }

.pos-roy     { top: 0%;  left: 25%; z-index: 1; }
.pos-mesmer  { top: 20%; left: 25%; z-index: 2; }
.pos-agatha  { top: 30%; left: 30%; z-index: 3; }
.pos-sora    { top: 45%; left: 23%; z-index: 4; }
.pos-katsuro { top: 60%; left: 27%; z-index: 5; }

.team-label {
  display: block;
  font-family: 'MontSerrat', sans-serif;
  font-weight: 900;
  font-size: 20px;
  color: #0A0101;
  text-transform: uppercase;
  background: rgba(221, 217, 218, 0.9);
  padding: 5px 15px;
  margin-top: -60px;
  border: 2px solid #0A0101;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  pointer-events: auto;
}

.team-btn:hover .team-label {
  opacity: 1;
}

@media only screen and (max-width: 1024px) {
  
}

@media only screen and (max-width: 600px) {
.title { 
    /* POSICIONAMIENTO ABSOLUTO CENTRADO */
    position: absolute; /* Aseguramos que sea absoluto */
    left: 0;
    right: 0;
    bottom: 5%;
    margin-left: auto;
    margin-right: auto;

    /* TAMAÑO Y ALINEACIÓN */
    width: 100%;
    max-width: 90%; /* Ocupa el 90%, el resto es margen automático */
    text-align: center;
    padding: 0 15px;

    /* TIPOGRAFÍA */
    /* Ajusté el 4vw a 10vw para que escale mejor en móviles medianos */
    font-size: clamp(40px, 10vw, 80px); 
    letter-spacing: -2px;
    
    /* IMPORTANTE: Para que no se monten las líneas si el texto baja */
    line-height: 0.9; 
  }

  .image-wrapper {
    width: 50vw; /* Más grande en móvil para mejor visibilidad */
    min-width: 150px; /* Asegura que no se vuelva demasiado pequeño */
    max-width: 300px; /* Limita el tamaño en pantallas grandes */
  }

.pos-roy     { top: 17%;  left: 25%; z-index: 1; }
.pos-mesmer  { top: 27%; left: 23%; z-index: 2; }
.pos-agatha  { top: 32%; left: 32%; z-index: 3; }
.pos-sora    { top: 44%; left: 21%; z-index: 4; }
.pos-katsuro { top: 52%; left: 29%; z-index: 5; }

}
</style>
