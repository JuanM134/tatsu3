<template>
  <div class="background">
    <navbar style="z-index: 4;" />
    <Dropupbttn class="dropupbttn" style="z-index: 4; top: 88.5%; " />

    <div class="container">
      <menubttn style="position: absolute;z-index: 8; " />
      <navbar2 style="z-index: 6;" />

      <h2 class="gallery-title">GALLERY</h2>

      <!-- CAROUSEL SECTION -->
      <div class="carousel-wrapper" @click="nextCarouselImage">
        <div class="carousel-container relative w-full h-80 overflow-hidden rounded-xl shadow-2xl bg-gray-800 cursor-pointer">
          <!-- Imágenes del carrusel -->
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image.srcM"
            :alt="image.alt"
            class="carousel-image"
            :class="{ 'active': index === currentCarouselIndex }"
          />
        </div>
      </div>
      <!-- END CAROUSEL SECTION -->

      <div class="image-grid">
        <template v-for="(image, idx) in images">
          <div
            :key="image.number"
            class="card"
            :class="{ 'mobile-only': image.src === hippie }"
            :title="image.alt"
            v-if="image.src !== hippie || isMobileFlag"
          >
            <img
              :src="(isMobile && tapped[idx]) ? image.srcAlt : (hovered === idx ? image.srcAlt : image.src)"
              :alt="image.alt"
              class="card-img"
              loading="lazy"
              decoding="async"
              @mouseenter="setHovered(idx)"
              @mouseleave="setHovered(null)"
              @click="handleClick(idx)"
              @touchstart.prevent="onTouchStart(idx)"
              @touchend.prevent="onTouchEnd(idx)"
            />
            <div class="card-content">
              <p class="number">N°. {{ image.number }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import pepe from '@/assets/images/pepe.jpg';
import pepeAlt from '@/assets/images/pepe_alt.png';
import pepeM from '@/assets/images/pepeM.png';
import leo1 from '@/assets/images/leo1.jpg';
import leo1Alt from '@/assets/images/leo1_alt.png';
import leoM from '@/assets/images/leoM.png';
import oni from '@/assets/images/oni.png';
import oniAlt from '@/assets/images/oni_alt.png';
import oniM from '@/assets/images/oniM.png';
import hippie from '@/assets/images/hippie.png';
import hippieM from '@/assets/images/hippie.png';
import { ref, onMounted, computed, onBeforeUnmount } from 'vue';

// Definimos la interfaz para las imágenes
interface ImageItem {
  src: string
  srcAlt: string
  srcM : string
  alt: string
  number: number
}

// Lista tipada de imágenes
const images = ref<ImageItem[]>([
  {
    src: leo1,
    srcAlt: leo1Alt,
    alt: "Imagen Pepe",
    srcM: leoM,
    number: 20,
  },
  {
    src: pepe,
    srcAlt: pepeAlt,
    srcM: pepeM,
    alt: "Ilustración de personaje con espada y capa",
    number: 122,
  },
  {
    src: oni,
    srcAlt: oniAlt,
    srcM: oniM,
    alt: "Ilustración de personaje con cuernos y bastón",
    number: 134,
  },
  {
    src: hippie,
    srcAlt: hippie,
    srcM: hippieM,
    alt: "Ilustración alternativa",
    number: 200,
  },
]);

// Estado para controlar qué imagen está en hover
const hovered = ref<number | null>(null);

// Estado para control táctil en móvil (toggle entre src y srcAlt)
const tapped = ref<boolean[]>(images.value.map(() => false));

const isMobile = ref(false);

// computed boolean for template use and safer checks
const isMobileFlag = computed(() => isMobile.value);

function setHovered(idx: number | null) {
  if (idx === null) {
    hovered.value = null;
  } else if (idx >= 0 && idx < images.value.length) {
    hovered.value = idx;
  }
}

function handleClick(idx: number) {
  // exclusive toggle: only one tapped at a time
  if (!isMobile.value) return; // only toggle on mobile
  tapped.value = tapped.value.map((_, i) => i === idx ? !tapped.value[i] : false)
}

function onTouchStart(idx: number) {
  // show alt while pressing
  if (!isMobile.value) return
  tapped.value[idx] = true
}

function onTouchEnd(idx: number) {
  // if it was a short press, leave tap state as-is; if you'd like momentary only, set false here
  if (!isMobile.value) return
  // currently keep the toggled state on touchend (so tap toggles exclusive via handleClick)
}

// Lógica de detección de dispositivo movil, que se ejecuta solo en el navegador
// La verificación de `typeof window !== 'undefined'` asegura que el código no se ejecute en el servidor.
if (typeof window !== 'undefined') {
  let mq: MediaQueryList | null = null;
  const update = (ev?: MediaQueryListEvent) => {
    isMobile.value = ev ? ev.matches : (mq ? mq.matches : false);
  };
  onMounted(() => {
    mq = window.matchMedia('(max-width: 600px)');
    update();
    try { mq.addEventListener('change', update as any); } catch (e) { mq.addListener(update as any); }
  });

  onBeforeUnmount(() => {
    if (!mq) return;
    try { mq.removeEventListener('change', update as any); } catch (e) { mq.removeListener(update as any); }
  });
}

// Lógica del carrusel
const currentCarouselIndex = ref(0);
let carouselInterval: ReturnType<typeof setInterval> | null = null;

const startCarousel = () => {
    carouselInterval = setInterval(() => {
        currentCarouselIndex.value = (currentCarouselIndex.value + 1) % images.value.length;
    }, 5000);
};

const nextCarouselImage = () => {
    // Incrementa el índice y reinicia el temporizador
    currentCarouselIndex.value = (currentCarouselIndex.value + 1) % images.value.length;
    if (carouselInterval) {
        clearInterval(carouselInterval);
        startCarousel();
    }
};

onMounted(() => {
    startCarousel();
});

onBeforeUnmount(() => {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
});
</script>

<style scoped>
.background {
  background-color: #DDD9DA;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  z-index: 0;
  /* carousel height variable shared for layout (so container can reserve space) */
  --carousel-h: clamp(28rem, 100vh, 44rem);
}

.gallery-title{
  font-family: Bernoru;
  font-weight: 900;
  font-size: 48px;
  text-align: center;
  margin: 0 0 1rem 0;
  display: none;
}

.mobile-only{ display: none }

.title {
  color: #0A0101; 
  font-size: 100px; 
  font-family: Bernoru; 
  font-weight: 900; 
  line-height: 102.40px; 
  top: 40%;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 25vh;
}

.image-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

.card {
  background-color: #ffffff00;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  border: none;
}

.card:hover {
  transform: scale(1.05);
}

.card-img {
  width: 100%;
  height: 16rem;
  object-fit: fill;
  display: block;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.card-content {
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.card-content .number {
  color: #4b5563;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: MontSerrat;
  margin-bottom: 0.5rem;
}

.card-content .description {
  font-size: 0.75rem;
}

.carousel-wrapper{
  display: none;
}

@media (min-width: 640px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
    .mobile-only{ display: block }
  }
}

@media (min-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 600px) {
  /* Layout/grid adjustments for small screens */
  .image-grid { grid-template-columns: 1fr; gap: 12px; }
  .card-img { height: 14rem; }
  .gallery-title {padding-top: 5dvh; font-size: 35px; display: block; }
  .mobile-only { display: block; }

  /* Header / navbar adjustments for mobile */
  .navbar { display: none; }
  .dropupbttn { display: none; }
  .navbar2 { display: block; }

  /* Title and container sizing on mobile */
  .title {
    position: absolute;
    font-size: 3.5rem;
    top: 45%;
    text-align: center;
    line-height: 0px;
    width: 100%;
    height: 100%;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 2rem;
    margin-top: 2vh;
  }

  .background { display: flex; flex-direction: column; }

  .odd{
    display: block;
    color: rgb(255, 255, 255);
    font-family: IMBPlexMono;
    font-size: 0.6rem;
    top: -111%;
    z-index: 4;
    text-align: center;
    position: relative;
    object-fit: contain;
  }
}

/* CAROUSEL STYLES */
.carousel-wrapper {
  margin-bottom: 0;
  overflow-x: hidden; /* prevent horizontal scroll from images */
  width: 100vw; /* full viewport width */
  left: 0;
  bottom: 0;
  position: fixed; /* stick to viewport bottom */
  z-index: 1;
  box-sizing: border-box;
  display: block;
}
.carousel-container {
  /* make the carousel more rectangular: taller and responsive */
  height: var(--carousel-h); /* shared variable so page can reserve space */
  position: relative; /* ensure absolute children are stacked inside */
  width: 100%;
  overflow: hidden; /* hide overflow including any x-axis overflow */
  display: block;
}
.carousel-image {
  opacity: 0;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* fill the container while keeping center */
  object-position: center center; /* ensure image is centered */
  transition: opacity 1s ease-in-out, transform 0.6s ease;
  transform: scale(1.02);
  z-index: 3;
}
.carousel-image.active {
  opacity: 1;
  transform: scale(1);
  z-index: 3;
}

.image-grid{
  display: none;
}

/* Reserve space in the flow so the fixed carousel does not cover content */
.container{
  padding-bottom: var(--carousel-h);
}

.background{
  overflow-y: hidden;
}

/* Top-level, page-scoped override for mobile sizes used by menubttn component. */
@media only screen and (max-width: 600px) and (max-height: 933px) {
  /* target the rendered dropup wrapper and its menu-container (component renders roots, not a <menubttn> tag) */
  ::v-deep .dropup .menu-container {
    top: -13% !important; /* move menu up 2% relative to component default */
  }
}

/* Desktop: show grid and hide carousel */
@media only screen and (min-width: 769px) {
  .image-grid { display: grid !important; }
  .carousel-wrapper { display: none !important; }
}
</style>
