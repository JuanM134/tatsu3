<template>
    <div class="page-wrapper" :class="{ 'intro': isDarkMode }">  
        <div class="container min-vh-100">
            <div class="d-flex flex-column justify-content-center align-items-center container-content">
                
                <div 
                    @mouseenter="isDarkMode = true" 
                    @mouseleave="isDarkMode = false" 
                    class="title-container"
                >
                    <h1 class="title mb-0 text-center" :class="{ 'title-inverted': isDarkMode }">
                        TATSU                           
                    </h1>
                    
                    <video 
                        v-if="currentVideo"
                        v-show="isDarkMode" 
                        ref="videoRef" 
                        id="myVideo" 
                        :key="currentVideo.src"
                        :src="currentVideo.src" 
                        :style="{ top: currentVideo.offsetY }" 
                        autoplay loop muted playsinline
                    >
                        Your browser does not support the video tag.
                    </video>         
                </div>
                  
                <button 
                    @click="home"
                    @mouseenter="isActive = true" 
                    @mouseleave="isActive = false"
                    type="button" 
                    class="col-md-2 enter-btn" 
                    :class="{ 'enter-btn-flip': !isActive, 'enter-btn-normal': isActive }"
                >
                    <div class="enter-btn-text my-1">ENTER</div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useLoading } from '@/composables/useLoading'
import { useAssetLoading } from '@/composables/useAssetLoading'
import characters from '@/assets/videos/charactersweb.mp4'

interface VideoItem {
    src: string;
    number: number;
    offsetX?: string;
    offsetY?: string;
    width?: string;
    height?: string;
    zIndex?: number;
    speed?: number;
    scale?: number;   
}

const myVideo = ref<VideoItem[]>([
    { src: characters, number: 20, offsetY: '80%', speed: 0.7 },
])

const isActive = ref(false)
const isDarkMode = ref(false)
const router = useRouter()
const { startLoading, stopLoading } = useLoading()
const { waitForVideo, waitForFonts } = useAssetLoading()

const currentVideo = ref<VideoItem | null>(null)
const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(async () => {
    startLoading()
    
    try {
        // Selecciona un video aleatorio
        currentVideo.value = myVideo.value[Math.floor(Math.random() * myVideo.value.length)]
        
        await nextTick()

        await Promise.all([
            waitForVideo(videoRef.value),
            waitForFonts()
        ])
        
        if (videoRef.value && currentVideo.value) {
            videoRef.value.playbackRate = currentVideo.value.speed ?? 0.5; 
        }
    } catch (error) {
        console.error('Error loading assets:', error)
    } finally {
        setTimeout(() => {
            stopLoading()
        }, 500)
    }
})

async function home() {
    await router.push('/home')
}
</script>

<style scoped>
/* ---- ESTRUCTURA BASE ---- */
.page-wrapper {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
}

.intro {
    background-color: black !important;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
}

.container-content {
    min-height: 80vh;
    align-items: center;
}

/* ---- TÍTULO Y VIDEO ---- */
.title-container {
    display: inline-block;
    position: relative;
    width: 65%;
    line-height: 1;
}
 
.title {
    font-family: 'Bernoru', sans-serif;
    color: #1B1818;
    font-size: clamp(80px, 18vw, 300px);
    font-weight: 900;
    letter-spacing: -22px;
    position: relative;
}

.title-inverted {
    background: white no-repeat;
    background-size: cover;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    display: block;
    background-position: center -60px;
} 

#myVideo {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: 125%;
    object-fit: cover;
    pointer-events: none;
    mix-blend-mode: darken;
}

/* ---- BOTÓN ENTER ---- */
.enter-btn {
    width: 250px;
    position: relative;
}

.enter-btn-text {
    color: #0A0101;
    font-size: 11px; 
    font-family: 'Montserrat', sans-serif; /* Corregido Kokoro por Montserrat/estándar */
    font-weight: 400; 
    letter-spacing: 2.04px;
    word-wrap: break-word;
}

.enter-btn-normal {
    border: 0px solid #000000;
    background: #4E4E4E;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    border-radius: 10px;
}

.enter-btn-flip {
    border: 0px solid #0E0303;
    border-radius: 10px;
    transform: rotate(180deg);
}

/* ==============================
   📱 MOBILE VIEW (<= 600px)
   ============================== */
@media only screen and (max-width: 600px) {
    
    /* Agrupadas clases comunes para ahorrar peso */
    .page-wrapper, .intro {
        overflow: hidden;
        height: 100vh;
        width: 100vw;
        touch-action: none;
    }
    
    .intro {
        display: flex;
        flex-direction: column;
    }

    .container {
        overflow: hidden;
        height: 110vh;
    }

    .title-container {
        width: 100% !important; 
        position: relative;
    }

    .title {
        font-size: 8rem;
        letter-spacing: -13px;
        width: 110%;
        left: 50%;                
        transform: translateX(-50%); 
        top: 50%;
    }

    #myVideo {
        background-size: cover;
        background-repeat: no-repeat;
        overflow-y: hidden;
        width: 100dvw;
    }

    /* Agrupado el botón enter de móvil */
    .enter-btn {
        font-size: 8px; 
        width: 10rem;
    }

    .enter-btn-flip {
        border: 1px solid #0E0303 !important;
        background: #ffffff;
        transform: rotate(0deg); /* Lo pone derecho en móvil */
    }
}
</style>
