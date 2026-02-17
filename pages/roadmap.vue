<template>
    <div class="background">
        <navbar style="z-index: 4;" />

        <Dropupbttn class="dropupbttn" style="z-index: 4; top: 88.5%; position: fixed;"/>  
        <home class="dropupbttn" style="z-index: 5;  position: fixed; "/> 
        
        <div class="mobile-menu-container">
            <menubttn /> 
        </div>
        
        <navbar2 style="z-index: 11; " />

        <div class="video-wrapper">
            <video autoplay loop muted class="video-container" >
                    <source src="@/assets/videos/brandNew.mp4"  type="video/mp4" > 
                    Your browser does not support the video tag.
            </video>
        </div>
        
        <section class="roadmap-section" aria-labelledby="utility-title">
            <div class="roadmap-content1">
                <h1 id="utility-title" class="title">2026 ROADMAP</h1>

                <div class="quarters-container">
                    <div v-for="q in quarters" :key="q.id" class="quarter-group">
                        
                        <div class="q-label-box">
                            {{ q.id }}
                        </div>

                        <div class="q-items-list">
                            <div v-for="(item, index) in q.items" :key="index" class="q-item-pill">
                                {{ item }}
                            </div>
                        </div>

                    </div>
                </div>

                <div class="description">
                    <ul class="features" ref="listRef">
                        <li v-for="(f, i) in features" :key="f.id" 
                            class="fade-item" 
                            :class="{ 'highlight-item': f.isHighlight, 'spacer': f.isSpacer }"
                            :style="{ transitionDelay: `${i * 100}ms` }">
                            <span v-html="f.text"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <p class="odd">ODD STUDIOS, 2024<br/>MADE IN NEW YORK, NY</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useLoading } from '@/composables/useLoading'
import { useAssetLoading } from '@/composables/useAssetLoading'

const quarters = [
    { 
        id: 'Q1', 
        items: ['MANGA AIRDROP', 'LOTTERY', 'TATSU COLLECTION'] 
    },
    { 
        id: 'Q2', 
        items: ['SUBSCRIPTIONS', 'ANIMATION ARC 1', 'MANGA ARC 1'] 
    },
    { 
        id: 'Q3', 
        items: ['REVENUE SPLIT', 'MERCHANDISE', 'DRAGON HEADS'] 
    },
    { 
        id: 'Q4', 
        items: ['ANIMATION ARC 2', 'MANGA ARC 2', 'TATSU COLLECTION'] 
    }
]

const features = [
    { id: 1, text: "The goal of this roadmap is to clearly show our long-term vision: owning a Tatsu means owning a piece of the brand. Every step listed here is designed to build real value for the project and generate income value that flows back to the holders.", isHighlight: false },
    { id: 2, text: "From manga and animation arcs to merchandise and platform features, everything works together to bring TATSU to life as a full IP and ensure the art you hold becomes something bigger than just an image.", isHighlight: false, isSpacer: true },
    { id: 3, text: "Some highlights of the roadmap include:", isHighlight: false },
    { id: 4, text: "<strong>Subscription System (Q2):</strong> Fans without NFTs will need to subscribe to access premium manga and animation content creating consistent external revenue.", isHighlight: true },
    { id: 5, text: "<strong>Revenue Split & Lottery (Q1 & Q3):</strong> 10% of net profits shared with holders quarterly. Additional 5% split among a few holders through a lottery as a token of early support.", isHighlight: true },
    { id: 6, text: "<strong>Merchandise Drops (Q3):</strong> Exclusive and general-access merch collections, expanding TATSU's reach.", isHighlight: true },
    { id: 7, text: "<strong>New Arcs & Expansions (Q2–Q4):</strong> More animation and manga arcs launched to grow the TATSU universe, featuring characters owned by holders.", isHighlight: true },
    { id: 8, text: "<strong>Future Collections (Q4):</strong> If launched, they’ll bring in new capital without ever diluting the original 10% profit share of first-gen holders.", isHighlight: true, isSpacer: true },
    { id: 9, text: "Everything from the first collection to future drops is 100% focused on brand growth, storytelling, and rewarding those who believed first.", isHighlight: false }
]

const listRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

const { startLoading, stopLoading } = useLoading()
const { waitForVideo, waitForFonts } = useAssetLoading()

onMounted(async () => {
    startLoading()
    const videoEl = document.querySelector('video')
    await Promise.all([
        waitForVideo(videoEl),
        waitForFonts()
    ])
    stopLoading()

    const itemsA = listRef.value?.querySelectorAll('.fade-item') ?? []
    
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                (entry.target as HTMLElement).classList.add('in-view')
            }
        })
    }, { threshold: 0.1 })

    itemsA.forEach((el) => observer!.observe(el))
})

onBeforeUnmount(() => {
    observer?.disconnect()
})
</script>

<style scoped>
/* Estilo base para el contenedor del menú */
.mobile-menu-container {
    z-index: 6;
    /* Por defecto no forzamos posición en escritorio, 
       dejamos que el componente actúe normal */
}

.background {
    background-color: #DDD9DA;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 100vh;
    height: auto;
    position: relative;
    overflow-x: hidden;
    z-index: 0;
    padding-bottom: 60px;
}

.roadmap-section {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

.video-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    background-color: #DDD9DA;
}

.video-container {
    position: absolute;
    width: 70%;
    height: 100%;
    left: 39%;
    top: 0%;
    mix-blend-mode: darken;
    object-position: right;
    object-fit: cover;
}

.title {
    font-size: clamp(30px, 4.8vw, 55px);
    font-family: Bernoru; 
    font-weight: 900;
    line-height: 1.02;
    margin: 0;
    margin-top: 120px;
    text-align: left;
    width: 100%;
    color: #111;
}

/* --- ESTILOS DE LA TABLA/GRID DE QUARTERS --- */
.quarters-container {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    column-gap: 30px;
    row-gap: 30px;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
}

.quarter-group {
    display: flex;
    flex-direction: row;
    align-items: center; 
    gap: 5px;
}

.q-label-box {
    color: #111;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 20px; 
    cursor: default;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
}

.q-label-box:hover {
    background-color: #4E4E4E;
    color: #FFFFFF;
}

.q-items-list {
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
    gap: 12px;
    flex: 1;
}

.q-item-pill {
    font-family: 'MontSerrat', sans-serif;
    font-size: 11px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #1D1B1B;
    padding: 6px 12px;
    border-radius: 6px;
    transition: all 0.2s ease;
    cursor: default;
    width: 164px; 
}

.q-item-pill:hover {
    background-color: #4E4E4E;
    color: #FFFFFF;
    transform: translateX(5px);
}

/* ---------------------------------------------- */

.description {
    margin-top: 1dvh;
    display: flex;
    justify-content: flex-start;
    width: 100%;
}

.roadmap-content1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 48px;
    box-sizing: border-box;
    max-width: 50vw; 
    padding-top: 1dvh;
    font-family: 'Montserrat', sans-serif;
    height: auto;
    overflow: visible;
}

.features {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
}

.fade-item {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 360ms ease, transform 360ms ease;
    margin-bottom: 20px; 
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    color: #111;
    text-align: justify;
}

.highlight-item {
    padding-left: 15px;
    border-left: 3px solid #111;
    margin-left: 0;
}

.spacer {
    margin-bottom: 40px;
}

.fade-item.in-view {
    opacity: 1;
    transform: translateY(0);
}

.odd {
    display: grid;
    color: rgb(1, 1, 1);
    font-family: IMBPlexMono;
    font-size: 11px;
    z-index: 4;
    text-align: center;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}

@media only screen and (max-width: 600px)  {
    .navbar { display: none; }
    
    /* CAMBIO CLAVE: Usamos el contenedor físico para forzar el estilo profundo */
    .mobile-menu-container :deep(.dropbtn) { 
        top: 1.5% !important; 
    }

    .dropupbttn { display: none !important; }
    .box { top: 2%; }
    .navbar2 { display: block; }
    .video-wrapper { display: none; }

    .background {
        height: auto;
        min-height: 100vh;
        overflow-y: auto;
        padding-bottom: 80px;
    }

    .roadmap-content1 {
        padding-left: 24px;
        padding-right: 24px;
        max-width: 100%;
        padding-top: 0;
    }

    .title {
        font-size: 40px;
        margin-top: 100px; 
    }   

    .quarters-container {
        grid-template-columns: 1fr; 
        gap: 40px;
    }
    
    .q-items-list {
        align-items: flex-start;
    }
    
    .quarter-group {
        align-items: flex-start;
    }
}
</style>
