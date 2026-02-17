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

        <div 
          v-if="team.fullName" 
          class="character-label"
          :class="{ 'label-left': team.labelSide === 'left' }"
        >
            <div class="connector-dot"></div>
            <div class="label-text">{{ team.fullName }}</div>
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
import { useQuestStorage } from '@/composables/useQuestStorage'

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
const { saveLocal } = useQuestStorage()
const router = useRouter()

onMounted(async () => {
  startLoading()
  await waitForFonts()
  stopLoading()
})

// CONFIGURACIÓN DE EQUIPOS
const teams = [
  { 
    id: 'roy', 
    name: 'Roy', 
    image: royBnw, 
    hoverImage: royColor, 
    class: 'pos-roy', 
    fullName: 'FUSHI ROY' 
  },
  { 
    id: 'mesmer', 
    name: 'Mesmer', 
    image: mesmerBnw, 
    hoverImage: mesmerColor, 
    class: 'pos-mesmer', 
    fullName: 'MESMER',
    labelSide: 'left' // <--- ETIQUETA A LA IZQUIERDA
  },
  { 
    id: 'agatha', 
    name: 'Agatha', 
    image: agathaBnw, 
    hoverImage: agathaColor, 
    class: 'pos-agatha', 
    fullName: 'KIRISAME AGATHA' 
  },
  { 
    id: 'sora', 
    name: 'Sora', 
    image: soraBnw, 
    hoverImage: soraColor, 
    class: 'pos-sora', 
    fullName: 'UKASE SORA',
    labelSide: 'left' // <--- ETIQUETA A LA IZQUIERDA
  },
  { 
    id: 'katsuro', 
    name: 'Katsuro', 
    image: katsuroBnw, 
    hoverImage: katsuroColor, 
    class: 'pos-katsuro', 
    fullName: 'KATSURO KENTA' 
  },
]

const selectTeam = async (teamId: string) => {
  try {
    saveLocal('team_id', teamId)
    console.log(`Character selected: ${teamId}`)
    await router.push({ path: '/username', query: { team: teamId } })
  } catch (error) {
    console.error('Error selecting character:', error)
  }
}
</script>

<style scoped>
/* =========================================
   ESTILOS GENERALES
   ========================================= */
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
  font-size: clamp(35px, 9vw, 100px);
  line-height: 0.85; 
  letter-spacing: clamp(-2px, -0.5vw, -6px);
  position: absolute;
  bottom: 5%;
  right: 2%;
  text-align: right;
  max-width: 550px;
  margin: 0;
  z-index: 20;
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
  overflow: visible; 
}

.image-wrapper {
  position: relative;
  width: 23vw; 
  min-width: 220px; 
  max-width: 370px;
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
  transform: scale(1.05);
}

.team-btn:hover .img-base { opacity: 0; }
.team-btn:hover .img-hover { opacity: 1; }


/* =========================================
   ESTILOS DE ETIQUETAS (LABELS)
   ========================================= */

.character-label {
  position: absolute;
  top: 40%;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  pointer-events: none;
  z-index: 10;
  white-space: nowrap;
  width: 395px;
  height: 41px;
}

/* --- ESTILO POR DEFECTO (DERECHA) --- */
.character-label:not(.label-left) {
  left: 75%; 
  transform: translateX(-20px); 
  flex-direction: row; 
}

.character-label:not(.label-left) .connector-dot {
  margin-right: 5px; /* Un poco más superpuesto para conectar */
}

/* --- ESTILO IZQUIERDA (MESMER / SORA) --- */
.character-label.label-left {
  right: 90%; 
  transform: translateX(20px); 
  flex-direction: row-reverse; 
}

/* En la izquierda invertimos la dirección del punto */
.character-label.label-left .connector-dot {
  margin-left: 5px; 
  margin-right: 0;
  transform: rotate(180deg); /* Volteamos la "flecha/huevo" */
}

/* === EL PUNTO / HUEVO / GOTA === */
.connector-dot {
  width: 24px;
  height: 22px;
  
  /* COLOR DEL PUNTO (Negro oscuro o gris) */
  /*background-color: #333; */

  /* OPCIÓN A: FORMA ORGÁNICA CON CSS (Huevo) */
  /* 65% curvas a la izq (grueso), 35% a la der (fino) */
  /*border-radius: 35% 75% 75% 35% / 50%;*/
  
  /* OPCIÓN B: SI PREFIERES USAR TU IMAGEN PNG */
  /* Descomenta estas 3 líneas y comenta el background-color y border-radius de arriba */
  background-color: transparent; 
  background-image: url('@/assets/images/icons/pinSide.png'); 
  background-size: contain; background-repeat: no-repeat; 

  z-index: 2;
}

.label-text {
  background-color: #4a4a4a;
  color: white;
  font-family: 'MontSerrat', sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  padding: 8px 25px 8px 20px;
  border-radius: 15px;
  letter-spacing: 1.5px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.team-btn:hover .character-label {
  opacity: 1;
  transform: translateX(0); 
}


/* =========================================
   POSICIONES Y MEDIA QUERIES
   ========================================= */
.pos-roy     { top: 0%;  left: 25%; z-index: 1; }
.pos-mesmer  { top: 20%; left: 25%; z-index: 2; }
.pos-agatha  { top: 30%; left: 30%; z-index: 3; }
.pos-sora    { top: 45%; left: 23%; z-index: 4; }
.pos-katsuro { top: 60%; left: 27%; z-index: 6; }

@media only screen and (max-width: 1024px) {
  .title { 
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5%;
    margin-inline: auto;
    width: 100%;
    max-width: 90%;
    text-align: center;
    padding: 0 15px;
    font-size: clamp(40px, 10vw, 80px); 
    letter-spacing: -2px;
    line-height: 0.9; 
  }

  .image-wrapper {
    width: 55vw; 
    min-width: 150px; 
    max-width: 300px; 
  }

  .character-label:not(.label-left) { left: 85%; }
  .character-label.label-left { right: 85%; }

  .pos-roy     { top: 14%; left: 25%; z-index: 1; }
  .pos-mesmer  { top: 27%; left: 20%; z-index: 2; }
  .pos-agatha  { top: 36%; left: 34%; z-index: 3; }
  .pos-sora    { top: 47%; left: 14%; z-index: 4; }
  .pos-katsuro { top: 54%; left: 29%; z-index: 5; }
}

@media only screen and (max-width: 600px) {
  .title { font-size: clamp(30px, 12vw, 60px); letter-spacing: -1.5px; }
  .image-wrapper { width: 70vw; min-width: 120px; max-width: 250px; }
  .character-label { display: none; }

  .pos-roy     { top: 13%; left: 23%; }
  .pos-mesmer  { top: 27%; left: 17%; z-index: 2; }
  .pos-agatha  { top: 36%; left: 33%; z-index: 3; }
  .pos-sora    { top: 45%; left: 12%; z-index: 4; }
  .pos-katsuro { top: 56%; left: 29%; z-index: 5; }
}
</style>
