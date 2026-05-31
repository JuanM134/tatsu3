<template>
  <div class="background">
    <navbar class="navbar" style="z-index: 4;" />
    <DropupBttn class="dropupbttn" style="z-index: 4; top: 88.5%; position: fixed;" />  
    <home class="dropupbttn" style="z-index: 5; position: fixed;" />
    <menubttn style="z-index: 6; position: fixed;" /> 
    <navbar2 class="navbar2" style="z-index: 6;" />

    <div class="manga-container">
      
      <div class="manga-header">
        <h1 class="section-title">DRAGON LORE</h1>
        <p class="section-subtitle">Dive into the universe. Read our official manga and comics.</p>
      </div>

      <div class="comics-grid">
        <div
          v-for="comic in comicsList"
          :key="comic.id"
          class="comic-card"
          :class="{ 'is-locked': !comic.available }"
          @click="openReader(comic)"
        >
          <div class="comic-cover-wrapper">
            <img :src="comic.cover" :alt="comic.title" class="comic-cover" loading="lazy" />

            <div v-if="comic.available" class="read-overlay">
              <button class="read-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                READ NOW
              </button>
            </div>

            <div v-else class="locked-overlay">
              <div class="locked-content">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span class="locked-label">COMING SOON</span>
              </div>
            </div>
          </div>

          <div class="comic-info">
            <span class="comic-chapter">{{ comic.chapter }}</span>
            <h3 class="comic-title">{{ comic.title }}</h3>
            <p class="comic-author">By {{ comic.author }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <Teleport to="body">
    <transition name="fade-reader">
      <div v-if="activeComic" class="reader-overlay">

        <!-- Header fijo -->
        <div class="reader-header">
          <div class="reader-header-info">
            <span class="reader-chapter">{{ activeComic.chapter }}</span>
            <h3 class="reader-title">{{ activeComic.title }}</h3>
          </div>
          <div class="reader-nav-controls">
            <button
              class="reader-nav-btn"
              :class="{ disabled: !hasPrev }"
              :disabled="!hasPrev"
              @click="goToPrev"
              aria-label="Capítulo anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <span class="nav-btn-label">PREV</span>
            </button>

            <span class="reader-chapter-counter">
              {{ activeIndex + 1 }} / {{ comicsList.length }}
            </span>

            <button
              class="reader-nav-btn"
              :class="{ disabled: !hasNext }"
              :disabled="!hasNext"
              @click="goToNext"
              aria-label="Capítulo siguiente"
            >
              <span class="nav-btn-label">NEXT</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <button class="close-reader-btn" @click="closeReader" aria-label="Cerrar lector">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Scroll de páginas -->
        <div class="scroll-reader" ref="scrollReaderRef">
          <div class="pages-container">
            <img
              v-for="(page, i) in activeComic.pages"
              :key="i"
              :src="page"
              :alt="`Página ${i + 1}`"
              class="manga-page"
              loading="lazy"
            />

            <!-- Footer "To be continued" -->
            <div class="end-card">
              <p class="end-text">TO BE CONTINUED...</p>
              <div class="end-actions">
                <button class="end-btn end-btn--outline" @click="closeReader">
                  LIBRARY
                </button>
                <button
                  v-if="hasNext"
                  class="end-btn end-btn--primary"
                  @click="goToNext"
                >
                  {{ nextChapterLabel }}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted, nextTick, onMounted } from 'vue';
import { useLoading } from '@/composables/useLoading';

// --- IMPORTS DE PORTADAS ---
import cover from '@/assets/images/manga/cover.png';
import cover1 from '@/assets/images/manga/cover1.png';
import page1 from '@/assets/images/manga/1.png';
import page2 from '@/assets/images/manga/2.png';
import page3 from '@/assets/images/manga/3.png';
import page4 from '@/assets/images/manga/4.png';

// --- SEO ---
useHead({
  title: 'Dragon Lore – TATSU Manga & Comics',
  meta: [
    { name: 'description', content: 'Read the official TATSU manga and comics. Dive into the universe of Odd Studios.' }
  ]
});

// --- INTERFAZ ---
interface Comic {
  id: string;
  title: string;
  chapter: string;
  author: string;
  cover: string;
  pages: string[];
  available: boolean; 
}

// --- DATOS ---
const comicsList = ref<Comic[]>([
  {
    id: 'vol1-ch1',
    title: 'Winds of the Past',
    chapter: 'CHAPTER 01',
    author: 'ODD STUDIOS',
    available: true,
    cover: cover1,
    pages: [page1, page2, page3, page4]
  },
  {
    id: 'vol1-ch2',
    title: 'Coming Soon',
    chapter: 'CHAPTER 02',
    author: 'ODD STUDIOS',
    available: false,
    cover: cover, 
    pages: []
  }
]);

// --- ESTADO DEL LECTOR ---
const activeComic = ref<Comic | null>(null);
const scrollReaderRef = ref<HTMLElement | null>(null);

const activeIndex = computed(() =>
  activeComic.value
    ? comicsList.value.findIndex(c => c.id === activeComic.value!.id)
    : -1
);

const hasPrev = computed(() =>
  activeIndex.value > 0 &&
  comicsList.value[activeIndex.value - 1]?.available === true
);

const hasNext = computed(() =>
  activeIndex.value < comicsList.value.length - 1 &&
  comicsList.value[activeIndex.value + 1]?.available === true
);

const nextChapterLabel = computed(() => {
  if (!hasNext.value) return '';
  const next = comicsList.value[activeIndex.value + 1];
  return next?.chapter ?? 'NEXT';
});

// Scroll al inicio cuando cambia el capítulo
watch(activeComic, async () => {
  await nextTick();
  if (scrollReaderRef.value) {
    scrollReaderRef.value.scrollTop = 0;
  }
});

// --- ABRIR / CERRAR ---
const openReader = (comic: Comic) => {
  if (!comic.available) return;
  activeComic.value = comic;
  document.body.style.overflow = 'hidden';
};

const closeReader = () => {
  activeComic.value = null;
  document.body.style.overflow = '';
};

const goToPrev = () => {
  if (!hasPrev.value) return;
  activeComic.value = comicsList.value[activeIndex.value - 1];
};

const goToNext = () => {
  if (!hasNext.value) return;
  activeComic.value = comicsList.value[activeIndex.value + 1];
};

onUnmounted(() => {
  document.body.style.overflow = '';
});

const { stopLoading } = useLoading();

onMounted(() => {
  stopLoading();
});
</script>

<style scoped>
/* ================================================================
   ESTILOS BASE RESPETADOS
================================================================ */
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
    
    overflow-y: auto; 
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.background::-webkit-scrollbar {
    display: none;
}

/* Navbars posicionales */
.navbar { position: sticky; top: 0; z-index: 50; width: 100%; }
.navbar2 { display: none; position: sticky; top: 6dvh; z-index: 50; }

/* ================================================================
   CONTENEDOR DE CONTENIDO
   Ajusta el padding y espaciado progresivamente entre 600-1440px
================================================================ */
.manga-container {
  max-width: 1440px;
  margin: 0 auto;
  /* padding lateral: de 80px en 1440px → 24px en 600px */
  padding: 0
    clamp(24px, calc((100vw - 600px) / (1440 - 600) * (80 - 24) + 24px), 80px)
    clamp(40px, 8vh, 100px)
    clamp(24px, calc((100vw - 600px) / (1440 - 600) * (80 - 24) + 24px), 80px);
  box-sizing: border-box;
  /* Fuerza que todo quepa en la altura disponible */
  display: flex;
  flex-direction: column;
  height: 100%;
}

.manga-header {
  text-align: center;
  /* márgenes se reducen con el viewport */
  margin-bottom: clamp(16px, 4vh, 60px);
  margin-top: clamp(8px, 2vh, 20px);
  flex-shrink: 0;
}

.section-title {
  font-family: 'Bernoru', sans-serif;
  /* de 60px en 1440px → 28px en 600px */
  font-size: clamp(28px, calc((100vw - 600px) / (1440 - 600) * (60 - 28) + 28px), 60px);
  color: #111;
  margin: 0;
  line-height: 1;
  letter-spacing: -1px;
}

.section-subtitle {
  font-family: 'Montserrat', sans-serif;
  /* de 15px en 1440px → 11px en 600px */
  font-size: clamp(11px, calc((100vw - 600px) / (1440 - 600) * (15 - 11) + 11px), 15px);
  color: #666;
  font-weight: 500;
  margin-top: clamp(6px, 1vh, 12px);
  letter-spacing: 0.5px;
}

/* ================================================================
   GRID DE CÓMICS
   Las columnas se adaptan al ancho disponible con un mínimo
   escalado progresivamente entre 600-1440px
================================================================ */
.comics-grid {
  display: grid;
  /* columna mínima: de 240px en 1440px → 130px en 600px */
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      clamp(130px, calc((100vw - 600px) / (1440 - 600) * (240 - 130) + 130px), 240px),
      1fr
    )
  );
  /* gap: de 40px → 12px */
  gap: clamp(12px, calc((100vw - 600px) / (1440 - 600) * (40 - 12) + 12px), 40px);
  flex: 1;
  /* Alinear verticalmente cuando hay pocas filas */
  align-content: start;
}

.comic-card {
  display: flex;
  flex-direction: column;
  /* gap interno de la card: de 16px → 6px */
  gap: clamp(6px, calc((100vw - 600px) / (1440 - 600) * (16 - 6) + 6px), 16px);
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.comic-card:hover {
  transform: translateY(-8px);
}
.comic-card:hover .comic-title {
  color: #F47A7A;
}

/* --- Carta bloqueada --- */
.comic-card.is-locked {
  cursor: not-allowed;
}
.comic-card.is-locked:hover {
  transform: none;
}
.comic-card.is-locked:hover .comic-title {
  color: #111;
}
.comic-card.is-locked .comic-cover {
  filter: grayscale(60%) brightness(0.7) !important;
  transform: none !important;
}

.locked-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
}

.locked-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
}

.locked-label {
  font-family: 'Montserrat', sans-serif;
  /* de 11px → 8px */
  font-size: clamp(8px, calc((100vw - 600px) / (1440 - 600) * (11 - 8) + 8px), 11px);
  font-weight: 800;
  /* de 2.5px → 1.5px */
  letter-spacing: clamp(1.5px, calc((100vw - 600px) / (1440 - 600) * (2.5 - 1.5) + 1.5px), 2.5px);
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

.comic-card.is-locked .comic-title { color: #999; }
.comic-card.is-locked .comic-chapter { color: #aaa; }
.comic-card.is-locked .comic-author { color: #aaa; }

/* --- Portada --- */
.comic-cover-wrapper {
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background-color: #1a1a1a;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(17, 17, 17, 0.08);
  image-rendering: -webkit-optimize-contrast; 
}

.comic-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease;
  display: block;
}

.read-overlay {
  position: absolute;
  inset: 0;
  background: rgba(17, 17, 17, 0.72);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);
}

.comic-card:hover .comic-cover {
  transform: scale(1.05);
  filter: blur(2px) brightness(0.8);
}
.comic-card:hover .read-overlay {
  opacity: 1;
}

.read-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #F47A7A;
  color: white;
  border: none;
  /* padding: de 12px 24px → 8px 16px */
  padding: clamp(8px, calc((100vw - 600px) / (1440 - 600) * (12 - 8) + 8px), 12px)
           clamp(16px, calc((100vw - 600px) / (1440 - 600) * (24 - 16) + 16px), 24px);
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  /* font-size: de 13px → 10px */
  font-size: clamp(10px, calc((100vw - 600px) / (1440 - 600) * (13 - 10) + 10px), 13px);
  letter-spacing: 1.5px;
  cursor: pointer;
  transform: translateY(16px);
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
}

.comic-card:hover .read-btn {
  transform: translateY(0);
  box-shadow: 0 8px 20px rgba(244, 122, 122, 0.4);
}

/* --- Información de la carta --- */
.comic-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 4px;
}
/* font-size de todos los textos de info escala con el viewport */
.comic-chapter {
  font-family: 'Montserrat', sans-serif;
  /* de 11px → 8px */
  font-size: clamp(8px, calc((100vw - 600px) / (1440 - 600) * (11 - 8) + 8px), 11px);
  font-weight: 800;
  color: #F47A7A;
  text-transform: uppercase;
  letter-spacing: clamp(1px, calc((100vw - 600px) / (1440 - 600) * (2 - 1) + 1px), 2px);
}
.comic-title {
  font-family: 'Bernoru', sans-serif;
  /* de 26px → 14px */
  font-size: clamp(14px, calc((100vw - 600px) / (1440 - 600) * (26 - 14) + 14px), 26px);
  color: #111;
  margin: 0;
  line-height: 1.1;
  text-transform: uppercase;
  transition: color 0.3s ease;
}
.comic-author {
  font-family: 'Montserrat', sans-serif;
  /* de 12px → 8px */
  font-size: clamp(8px, calc((100vw - 600px) / (1440 - 600) * (12 - 8) + 8px), 12px);
  color: #888;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* ================================================================
   MODAL LECTOR — SCROLL CUSTOM
================================================================ */
:global(.reader-overlay) {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0A0A0A;
  z-index: 99999;
  display: flex;
  flex-direction: column;
}

/* --- Header --- */
:global(.reader-header) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  background-color: rgba(10, 10, 10, 0.97);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
  z-index: 10;
  gap: 12px;
  min-height: 52px;
}

:global(.reader-header-info) {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

:global(.reader-chapter) {
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  font-weight: 800;
  color: #F47A7A;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1;
}

:global(.reader-title) {
  font-family: 'Bernoru', sans-serif;
  font-size: 17px;
  color: #fff;
  margin: 0;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
}

:global(.reader-nav-controls) {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

:global(.reader-chapter-counter) {
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 1px;
  padding: 0 4px;
}

:global(.close-reader-btn) {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  transition: background 0.3s ease, transform 0.3s ease;
  flex-shrink: 0;
}

:global(.close-reader-btn:hover) {
  background: #F47A7A;
  transform: rotate(90deg);
}

:global(.reader-nav-btn) {
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 7px 14px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
  white-space: nowrap;
}

:global(.reader-nav-btn:hover:not(.disabled)) {
  background: rgba(244, 122, 122, 0.15);
  border-color: #F47A7A;
  color: #F47A7A;
}

:global(.reader-nav-btn.disabled) {
  opacity: 0.25;
  cursor: not-allowed;
}

/* ================================================================
   SCROLL READER — área de páginas
================================================================ */
:global(.scroll-reader) {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #0A0A0A;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #2a2a2a #0A0A0A;
}

:global(.scroll-reader::-webkit-scrollbar) { width: 5px; }
:global(.scroll-reader::-webkit-scrollbar-track) { background: #0A0A0A; }
:global(.scroll-reader::-webkit-scrollbar-thumb) { background: #2a2a2a; border-radius: 10px; }
:global(.scroll-reader::-webkit-scrollbar-thumb:hover) { background: #F47A7A; }

:global(.pages-container) {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 0 0;
  gap: 0;
}

:global(.manga-page) {
  display: block;
  width: 100%;
  max-width: 800px;
  height: auto;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
}

/* --- Tarjeta final de capítulo --- */
:global(.end-card) {
  width: 100%;
  max-width: 800px;
  padding: 60px 24px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

:global(.end-text) {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 4px;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  margin: 0;
}

:global(.end-actions) {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

:global(.end-btn) {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 11px 24px;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-transform: uppercase;
  white-space: nowrap;
}

:global(.end-btn--outline) {
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.7);
}

:global(.end-btn--outline:hover) {
  border-color: #fff;
  color: #fff;
}

:global(.end-btn--primary) {
  background: rgba(255, 255, 255, 0.08);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}

:global(.end-btn--primary:hover) {
  background: rgba(244, 122, 122, 0.15);
  border-color: #F47A7A;
  color: #F47A7A;
}

/* ================================================================
   TRANSICIÓN DEL MODAL
================================================================ */
:global(.fade-reader-enter-active),
:global(.fade-reader-leave-active) { transition: opacity 0.35s ease; }
:global(.fade-reader-enter-from),
:global(.fade-reader-leave-to) { opacity: 0; }




/* ================================================================
   MEDIA QUERY MÓVIL
================================================================ */
@media only screen and (max-width: 600px) and (max-height: 933px) {
  .navbar {
    display: none;
  }
  
  dropupbttn {
    display: none;
  }
  
  .navbar2 {
    display: block;
  } 


  .background {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100dvh;
    overflow-y: auto;
  }

  .manga-container {
    padding: 20px 20px 80px 20px;
    width: 100%;
  }

  .manga-header {
    margin-bottom: 30px;
  }

  .section-title {
    font-size: 3.5rem;
    text-align: center;
    line-height: 1;
  }

  .comics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .comic-title {
    font-size: 20px;
  }

  :global(.reader-header) { padding: 10px 16px; gap: 8px; min-height: 48px; }
  :global(.reader-title) { font-size: 15px; }
  :global(.reader-chapter-counter) { display: none; }
  :global(.nav-btn-label) { display: none; }
  :global(.reader-nav-btn) { padding: 7px 10px; }

  :global(.manga-page) {
    max-width: 100%;
  }

  :global(.end-card) {
    padding: 40px 20px 100px;
  }

<<<<<<< HEAD
  home {
=======
  .home {
>>>>>>> eeae3a625036676bdcb2015e1b194ee3140100ff
    display: none;
  }
}
</style>
