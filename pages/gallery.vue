<template>
  <div class="background">
    <navbar style="z-index: 4;" />
    <Dropupbttn class="dropupbttn" style="z-index: 4; top: 88.5%;" />
    <home class="dropupbttn" style="z-index: 5;  position: fixed;"/> 

    <div class="container">
      <menubttn style="position: absolute; z-index: 8;" />
      <navbar2 style="z-index: 11;" />

      <h2 class="gallery-title">GALLERY</h2>

      <!-- MOBILE CAROUSEL -->
      <div v-if="isMobile" class="carousel-wrapper" @click="nextMobileCarousel">
        <div class="carousel-container">
          <img
            v-for="(image, index) in mobileCarouselImages"
            :key="image.number"
            :src="image.srcM"
            :alt="image.alt"
            class="carousel-image"
            :class="{ active: index === currentMobileIndex }"
          />
        </div>
      </div>

      <!-- DESKTOP CAROUSEL -->
      <div v-else class="desktop-carousel-wrapper" @click="nextDesktopCarousel">
        <div class="desktop-carousel-container">
          <div
            v-for="(image, index) in imagesDesktop"
            :key="image.number"
            class="desktop-slide"
            :class="{ active: index === currentDesktopIndex }"
            @mouseenter="setHovered(index)"
            @mouseleave="setHovered(null)"
            @click="handleDesktopClick(index)"
          >
            <img
              class="desktop-primary"
              :src="image.src"
              :alt="image.alt"
              :style="imageStyle(image)"
              decoding="async"
              @contextmenu.prevent
              @dragstart.prevent
            />
            <img
              v-if="image.srcAlt"
              class="desktop-alt"
              :src="image.srcAlt"
              :alt="image.alt + ' alt'"
              :style="imageStyle(image)"
              decoding="async"
              @contextmenu.prevent
              @dragstart.prevent
            />
          </div>
        </div>
      </div>

      <!-- IMAGE GRID MOBILE 
      <div v-if="isMobile" class="image-grid">
        <div
          v-for="(image, idx) in mobileCarouselImages"
          :key="image.number"
          class="card"
          :title="image.alt"
        >
          <img
            :src="tapped[idx] ? image.srcAlt : (hovered === idx ? image.srcAlt : image.src)"
            :alt="image.alt"
            class="card-img"
            loading="lazy"
            decoding="async"
            @mouseenter="setHovered(idx)"
            @mouseleave="setHovered(null)"
            @click="handleMobileClick(idx)"
          />
          <div class="card-content">
            <p class="number">N°. {{ image.number }}</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLoading } from '@/composables/useLoading'
import { useAssetLoading } from '@/composables/useAssetLoading'


// ------------------ Interfaces ------------------
interface ImageItemDesktop {
  src: string;
  srcAlt: string;
  alt: string;
  number: number;
  scale?: number;
  rotate?: string;
  offsetX?: string;
  offsetY?: string;
  width?: string;
  height?: string;
  objectFit?: string;
  brightness?: number;
  contrast?: number;
  blur?: number;
  grayscale?: number;
  borderRadius?: string;
  border?: string;
  boxShadow?: string;
  transitionDuration?: string;
  transitionTiming?: string;
  zIndex?: number;   
}

interface ImageItemMobile {
  src: string;
  srcAlt: string;
  srcM: string;
  alt: string;
  number: number;
}

// ------------------ Imports ------------------
import pepe from '@/assets/images/characters/122.png';
import pepeAlt from '@/assets/images/characters/122_alt.png';
import pepeM from '@/assets/images/pepeM.png';

import leo1 from '@/assets/images/characters/20.png';
import leo1Alt from '@/assets/images/characters/20_alt.png';
import leoM from '@/assets/images/leoM.png';

import oni from '@/assets/images/characters/134.png';
import oniAlt from '@/assets/images/characters/134_alt.png';
import oniM from '@/assets/images/oniM.png';

import hippie from '@/assets/images/characters/183.png';
import hippieAlt from '@/assets/images/characters/183_alt.png';
import hippieM from '@/assets/images/hippie.png';

import cape from '@/assets/images/characters/33.png';
import capeAlt from '@/assets/images/characters/33_alt.png';


import white from '@/assets/images/characters/40.png';
import whiteAlt from '@/assets/images/characters/40_alt.png';


import coat from '@/assets/images/characters/56.png';
import coatAlt from '@/assets/images/characters/56_alt.png';


import cyborg from '@/assets/images/characters/90.png';
import cyborgAlt from '@/assets/images/characters/90_alt.png';


import ranger from '@/assets/images/characters/116.png';
import rangerAlt from '@/assets/images/characters/116_alt.png';


import ghostface from '@/assets/images/characters/142.png';
import ghostfaceAlt from '@/assets/images/characters/142_alt.png';


import burned from '@/assets/images/characters/161.png';
import burnedAlt from '@/assets/images/characters/161_alt.png';


import bones from '@/assets/images/characters/164.png';
import bonesAlt from '@/assets/images/characters/164_alt.png';


import onigirl from '@/assets/images/characters/199.png';
import onigirlAlt from '@/assets/images/characters/199_alt.png';


import samurai from '@/assets/images/characters/200.png';
import samuraiAlt from '@/assets/images/characters/200_alt.png';


// ------------------ Data ------------------
const imagesDesktop = ref<ImageItemDesktop[]>([
  { src: leo1, srcAlt: leo1Alt, alt: "1", number: 20 , scale: 1.07, rotate: '0deg', offsetX: '30%', offsetY: '3%', width: '60%', brightness: 1 },
  { src: pepe, srcAlt: pepeAlt, alt: "2", number: 122 , scale: 1.1, rotate: '0deg', offsetX: '-20%', offsetY: '0%', width: '75%', brightness: 1 },
  { src: oni, srcAlt: oniAlt, alt: "3", number: 134 , scale: 1.2, rotate: '0deg', offsetX: '0%', offsetY: '-5%', width: '65%', brightness: 1 },
  { src: hippie, srcAlt: hippieAlt, alt: "4", number: 183 , scale: 1.25, rotate: '0deg', offsetX: '50%', offsetY: '0%', width: '60%', brightness: 1 },
  { src: cape, srcAlt: capeAlt, alt: "5", number: 33 , scale: 1.1, rotate: '0deg', offsetX: '0%', offsetY: '0%', width: '55%', brightness: 1 },
  { src: white, srcAlt: whiteAlt, alt: "6", number: 40 , scale: 1.2, rotate: '0deg', offsetX: '70%', offsetY: '0%', width: '50%', brightness: 1 },
  { src: coat, srcAlt: coatAlt, alt: "7", number: 56 , scale: 1.2, rotate: '0deg', offsetX: '60%', offsetY: '0%', width: '40%', brightness: 1 },
  { src: cyborg, srcAlt: cyborgAlt, alt: "8", number: 90 , scale: 1, rotate: '0deg', offsetX: '70%', offsetY: '3%', width: '52%', brightness: 1 },
  { src: ranger, srcAlt: rangerAlt, alt: "9", number: 116 , scale: 1, rotate: '0deg', offsetX: '0%', offsetY: '0%', width: '60%', brightness: 1 },
  { src: ghostface, srcAlt: ghostfaceAlt, alt: "10", number: 142 , scale: 1.3, rotate: '0deg', offsetX: '41%', offsetY: '0%', width: '70%', brightness: 1 },
  { src: burned, srcAlt: burnedAlt, alt: "11", number: 161 , scale: 1.2, rotate: '0deg', offsetX: '0%', offsetY: '0%', width: '60%', brightness: 1 },
  { src: bones, srcAlt: bonesAlt, alt: "12", number: 164 , scale: 1.2, rotate: '0deg', offsetX: '40%', offsetY: '0%', width: '70%', brightness: 1 },
  { src: onigirl, srcAlt: onigirlAlt, alt: "13", number: 199 , scale: 1, rotate: '0deg', offsetX: '0%', offsetY: '0%', width: '60%', brightness: 1 },
  { src: samurai, srcAlt: samuraiAlt, alt: "14", number: 200 , scale: 1.1, rotate: '0deg', offsetX: '70%', offsetY: '0%', width: '65%', brightness: 1 },
]);

const imagesMobile = ref<ImageItemMobile[]>([
  { src: leo1, srcAlt: leo1Alt, srcM: leoM, alt: "Imagen Pepe", number: 20 },
  { src: pepe, srcAlt: pepeAlt, srcM: pepeM, alt: "Ilustración de personaje con espada y capa", number: 122 },
  { src: oni, srcAlt: oniAlt, srcM: oniM, alt: "Personaje con cuernos y bastón", number: 134 },
  { src: hippie, srcAlt: hippieAlt, srcM: hippieM, alt: "Ilustración alternativa", number: 183 },

]);

// ------------------ Mobile detection ------------------
const isMobile = ref(false);
if (typeof window !== 'undefined') {
  let mq: MediaQueryList | null = null;
  const update = (ev?: MediaQueryListEvent) => {
    isMobile.value = ev ? ev.matches : (mq ? mq.matches : false);
  };
  onMounted(() => {
    mq = window.matchMedia('(max-width: 600px)');
    update();
    try { mq.addEventListener('change', update as any); } catch { mq.addListener(update as any); }
  });
  onBeforeUnmount(() => {
    if (!mq) return;
    try { mq.removeEventListener('change', update as any); } catch { mq.removeListener(update as any); }
  });
}

// ------------------ Carousel ------------------
const currentMobileIndex = ref(0);
const currentDesktopIndex = ref(0);
let mobileInterval: ReturnType<typeof setInterval> | null = null;
let desktopInterval: ReturnType<typeof setInterval> | null = null;

const mobileCarouselImages = computed(() => imagesMobile.value);

const startMobileCarousel = () => {
  mobileInterval = setInterval(() => {
    currentMobileIndex.value = (currentMobileIndex.value + 1) % mobileCarouselImages.value.length;
  }, 3000);
};

const startDesktopCarousel = () => {
  desktopInterval = setInterval(() => {
    currentDesktopIndex.value = (currentDesktopIndex.value + 1) % imagesDesktop.value.length;
  }, 2000);
};

const nextMobileCarousel = () => {
  currentMobileIndex.value = (currentMobileIndex.value + 1) % mobileCarouselImages.value.length;
  if (mobileInterval) { clearInterval(mobileInterval); startMobileCarousel(); }
};
const nextDesktopCarousel = () => {
  currentDesktopIndex.value = (currentDesktopIndex.value + 1) % imagesDesktop.value.length;
  if (desktopInterval) { clearInterval(desktopInterval); startDesktopCarousel(); }
};

// 🔹 Generador dinámico de estilos
import type { CSSProperties } from 'vue';

const imageStyle = (image: ImageItemDesktop): CSSProperties => ({
  transform: `
    scale(${image.scale ?? 1}) 
    rotate(${image.rotate ?? '0deg'}) 
    translate(${image.offsetX ?? '0'}, ${image.offsetY ?? '0'})
  `,
  width: image.width ?? '100%',
  height: image.height ?? '100%',
  objectFit: (image.objectFit as CSSProperties['objectFit']) ?? 'cover',
  filter: `
    brightness(${image.brightness ?? 1}) 
    contrast(${image.contrast ?? 1}) 
    blur(${image.blur ?? 0}) 
    grayscale(${image.grayscale ?? 0})
  `,
  borderRadius: image.borderRadius ?? '0',
  border: image.border ?? 'none',
  boxShadow: image.boxShadow ?? 'none',
  transition: `${image.transitionDuration ?? '0.2s'} ${image.transitionTiming ?? 'ease-in-out'}`,
  zIndex: image.zIndex ?? 1,
});

// ------------------ Hover / Tap ------------------
const hovered = ref<number | null>(null);
const tapped = ref<boolean[]>(imagesMobile.value.map(() => false));
function setHovered(idx: number | null) { hovered.value = idx; }
function handleMobileClick(idx: number) { tapped.value = tapped.value.map((_, i) => i === idx ? !tapped.value[i] : false); }
function handleDesktopClick(idx: number) { /* opcional */ }

// ------------------ Mounted ------------------
// ------------------ Mounted ------------------
const { startLoading, stopLoading } = useLoading()
const { waitForImages, waitForFonts } = useAssetLoading()

onMounted(async () => {
  startLoading()
  
  // Preload initial images for carousel (first few)
  const initialDesktop = imagesDesktop.value.slice(0, 3).map(i => i.src)
  const initialMobile = imagesMobile.value.slice(0, 3).map(i => i.srcM)
  
  await Promise.all([
    waitForImages([...initialDesktop, ...initialMobile]),
    waitForFonts()
  ])
  
  stopLoading()

  startMobileCarousel(); 
  startDesktopCarousel();
  document.addEventListener('contextmenu', e => e.preventDefault()) 
});

onBeforeUnmount(() => { if (mobileInterval) clearInterval(mobileInterval); if (desktopInterval) clearInterval(desktopInterval); });
</script>

<style scoped>
/* ------------------ Global Background ------------------ */
.background {
  background-color: #DDD9DA;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  z-index: 0;
  overflow-y: hidden;
  --carousel-h: clamp(28rem, 100vh, 44rem);
}

/* ------------------ Titles ------------------ */
.gallery-title {
  font-family: Bernoru;
  font-weight: 900;
  font-size: 48px;
  text-align: center;
  margin-bottom: 1rem;
  display: none;
}

/* ------------------ Container ------------------ */
.container {
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 25vh;
  padding-bottom: var(--carousel-h);
}

/* ------------------ Grid ------------------ */
.image-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}
.card {
  background-color: transparent;
  overflow: hidden;
  transition: transform 0.15s ease-in-out;
  cursor: pointer;
}
.card:hover { 
  transform: scale(1.05); 
}

.card-img { 
  width: 100%;
  height: 16rem;
  object-fit: cover;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
}
.card-content {
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.card-content .number {
  color:#4b5563;
  font-size:0.875rem;
  font-weight:500;
  font-family: MontSerrat;
  margin-bottom:0.5rem;
}

/* Deshabilitar selección global de imágenes */
img {
  -webkit-user-drag: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

/* ------------------ Carousel Mobile ------------------ */
.carousel-wrapper { 
  display: none; 
  position: fixed; 
  bottom: 0; 
  left: 0; 
  width: 100vw; 
  z-index: 4; 
  overflow-x: hidden; 
}

.carousel-container { 
  height: var(--carousel-h); 
  position: relative; 
  width: 100%; 
  overflow: hidden; 
}

.carousel-image { 
  opacity:0; 
  position:absolute; 
  inset:0; 
  width:100%; 
  height:100%; 
  object-fit: cover; 
  transition: opacity 0.5s, transform 0.6s; 
  transform: scale(1.02);
}

.carousel-image.active { 
  opacity:1; 
  transform:scale(1); 
}

/* ------------------ Desktop Carousel ------------------ */
.desktop-carousel-wrapper {
   display:none; 
  }

.desktop-carousel-container { 
  position: relative; 
  width: 100%; 
  height: 100%; 
}

.desktop-slide { 
  position: absolute; 
  inset:0; 
  width:100%; 
  height:100%; 
  pointer-events:none; 
  z-index:1; 
  opacity:0; 
  transition: opacity 0.2s ease; 
}

.desktop-slide.active { 
  pointer-events:auto; 
  z-index:2; 
  opacity:1; 
}
  
.desktop-slide img { 
  position:absolute; 
  inset:0; 
  width:100%; 
  height:118%; 
  object-fit: contain; 
  transition: opacity 0.2s ease, transform 0.2s ease; 
  transform: scale(1.03); 
}
.desktop-primary { 
  opacity:1; 
}
.desktop-alt { 
  opacity:0; 
}
.desktop-slide.active:hover .desktop-primary { 
  opacity:0; 
  transform: scale(1.03);
}
.desktop-slide.active:hover .desktop-alt { 
  opacity:1; 
  transform: scale(1); 
}

/* ------------------ Media Queries ------------------ */
@media (max-width:600px){ 

    :deep(.dropup .menu-container) {
    top: -13% !important; /* move menu up 2% relative to component default */
  }

  .image-grid{
    display:grid; 
    grid-template-columns:1fr;
  } 

  .gallery-title{
    display:block;
    font-size:35px;
    margin-top:2vh;
  } 

  .carousel-wrapper{
    display:block;
  } 

  .desktop-carousel-wrapper{
    display:none;
  }

  .navbar{
    display:none;
  } 

  .dropupbttn{
    display:none;
  } 

  .navbar2{
    display:block;
  }

  .card-img{
    height:14rem;
  } 

  .container{
    margin-top:10vh; 
  }

  }

@media (min-width:601px) and (max-width:768px){ 

    :deep(.dropup .menu-container) {
    top: -13% !important; /* move menu up 2% relative to component default */
  }

  .image-grid{
    grid-template-columns:repeat(2,1fr);
  }

}

@media (min-width:769px){ 

    :deep(.dropup .menu-container) {
    top: -13% !important; /* move menu up 2% relative to component default */
  }

  .image-grid{
    display:none;
  }
  .carousel-wrapper{
    display:none !important;
  } 
  .desktop-carousel-wrapper{
    display:block;
    position:fixed;
    inset:0;
    z-index:2;
    width:100vw;
    height:100vh;
    overflow:hidden;
  }
}

</style>
