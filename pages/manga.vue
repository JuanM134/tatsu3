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

        <!-- Header TATSU con info del capítulo y botón cerrar -->
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

        <!-- Comimi se monta aquí -->
        <div class="comimi-wrapper" ref="comimiContainerRef"></div>

      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted, nextTick } from 'vue';
import { createMangaViewer } from '@yui540/comimi';
import type { MangaViewerInstance } from '@yui540/comimi';

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
    available: true, // Change it to true to read chapter 1
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
const comimiContainerRef = ref<HTMLElement | null>(null);
let viewerInstance: MangaViewerInstance | null = null;

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

// --- INICIALIZAR COMIMI cuando el comic activo cambia ---
watch(activeComic, async (comic) => {
  // Destruir instancia anterior si existe
  if (viewerInstance) {
    viewerInstance.destroy();
    viewerInstance = null;
  }

  if (!comic) return;

  // Esperar a que el DOM esté listo con el contenedor de comimi
  await nextTick();

  const container = comimiContainerRef.value;
  if (!container) return;

  // Construir el objeto manga para comimi
  const mangaData = {
    id: comic.id,
    title: comic.title,
    author: comic.author,
    pages: comic.pages.map((src, i) => ({
      id: `page-${i}`,
      type: 'image' as const,
      src,
    })),
  };

  viewerInstance = createMangaViewer(container, {
    manga: mangaData,
    locale: 'en',
    lockLayoutMode: true,
    settings: {
      readingDirection: 'ltr',
      pageTurnMode: 'single',
      pageTurnAnimation: true,
      layoutMode: 'browserFullscreen',
      backgroundColor: 'black',
      hasCover: false,
      zoom: { min: 1, max: 3, step: 0.25 },
      autoPageTurnIntervalMs: 0,
    },
    // Desactivar máscota por defecto
    mascot: false,
  });
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
  if (viewerInstance) {
    viewerInstance.destroy();
    viewerInstance = null;
  }
  document.body.style.overflow = '';
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
.navbar2 { display: none; position: sticky; top: 0; z-index: 50; }

/* ================================================================
   CONTENEDOR DE CONTENIDO
================================================================ */
.manga-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 40px 100px 40px;
  box-sizing: border-box;
}

.manga-header {
  text-align: center;
  margin-bottom: 60px;
  margin-top: 20px;
}

.section-title {
  font-family: 'Bernoru', sans-serif;
  font-size: clamp(30px, 8vw, 60px);
  color: #111;
  margin: 0;
  line-height: 1;
  letter-spacing: -1px;
}

.section-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  color: #666;
  font-weight: 500;
  margin-top: 12px;
  letter-spacing: 0.5px;
}

/* ================================================================
   GRID DE CÓMICS
================================================================ */
.comics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 40px;
}

.comic-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.5px;
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
  padding: 12px 24px;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 13px;
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
.comic-chapter { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 800; color: #F47A7A; text-transform: uppercase; letter-spacing: 2px; }
.comic-title { font-family: 'Bernoru', sans-serif; font-size: 26px; color: #111; margin: 0; line-height: 1.1; text-transform: uppercase; transition: color 0.3s ease; }
.comic-author { font-family: 'Montserrat', sans-serif; font-size: 12px; color: #888; font-weight: 600; margin: 0; text-transform: uppercase; letter-spacing: 0.5px; }

/* ================================================================
   MODAL LECTOR — COMIMI
================================================================ */
:global(.reader-overlay) {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100dvh;
  background-color: #0A0A0A;
  z-index: 99999;
  display: flex;
  flex-direction: column;
}

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
  min-height: 44px;
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
  gap: 12px;
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
   CONTENEDOR COMIMI — ocupa todo el espacio restante del modal
================================================================ */
:global(.comimi-wrapper) {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  position: relative;
}

/* ================================================================
   OVERRIDES CSS DE COMIMI — ajustar al branding TATSU
================================================================ */

/* Acento principal → rojo TATSU */
:global(.comimi-wrapper .comimi) {
  --comimi-accent: #F47A7A;
  --comimi-accent-hover: #e86060;
  --comimi-bg: #0A0A0A;
  --comimi-surface: #111111;
  --comimi-border: rgba(255, 255, 255, 0.08);
  --comimi-text: #ffffff;
  --comimi-text-muted: rgba(255, 255, 255, 0.45);
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
}

/* Toolbar / controles de comimi */
:global(.comimi-wrapper .comimi-toolbar),
:global(.comimi-wrapper .comimi-header),
:global(.comimi-wrapper .comimi-footer) {
  background-color: rgba(10, 10, 10, 0.92) !important;
  border-color: rgba(255, 255, 255, 0.08) !important;
  font-family: 'Montserrat', sans-serif !important;
}

/* Botones de navegación */
:global(.comimi-wrapper button) {
  font-family: 'Montserrat', sans-serif !important;
  transition: background 0.25s ease, color 0.25s ease !important;
}

/* Botón activo/hover */
:global(.comimi-wrapper button:hover:not(:disabled)),
:global(.comimi-wrapper .comimi-btn:hover) {
  background-color: rgba(244, 122, 122, 0.15) !important;
  color: #F47A7A !important;
  border-color: #F47A7A !important;
}

/* Página actual highlight */
:global(.comimi-wrapper .comimi-page-thumb--active),
:global(.comimi-wrapper [data-active="true"]) {
  border-color: #F47A7A !important;
}

/* Scrollbar dentro del visor */
:global(.comimi-wrapper *) {
  scrollbar-width: thin;
  scrollbar-color: #2a2a2a #0A0A0A;
}
:global(.comimi-wrapper *::-webkit-scrollbar) { width: 5px; }
:global(.comimi-wrapper *::-webkit-scrollbar-track) { background: #0A0A0A; }
:global(.comimi-wrapper *::-webkit-scrollbar-thumb) { background: #2a2a2a; border-radius: 10px; }
:global(.comimi-wrapper *::-webkit-scrollbar-thumb:hover) { background: #F47A7A; }

/* ================================================================
   TRANSICIÓN DEL MODAL
================================================================ */
:global(.fade-reader-enter-active),
:global(.fade-reader-leave-active) { transition: opacity 0.35s ease; }
:global(.fade-reader-enter-from),
:global(.fade-reader-leave-to) { opacity: 0; }

/* ================================================================
   MEDIA QUERY BASE RESPETADO Y ADAPTADO
================================================================ */
@media only screen and (max-width: 600px) and (max-height: 933px) {
  .navbar {
    display: none;
  }
  
  .dropupbttn {
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

  :global(.reader-header) { padding: 10px 16px; gap: 8px; }
  :global(.reader-title) { font-size: 16px; }
  :global(.reader-chapter-counter) { display: none; }
  :global(.nav-btn-label) { display: none; }
  :global(.reader-nav-btn) { padding: 7px 10px; }
}
</style>