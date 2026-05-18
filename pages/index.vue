<template>
    <!-- <video src="@/assets/images/fire-sound.mp4" controls>
        Your browser does not support the video tag.
    </video>      -->
    <div class="page-wrapper" :class="{ 'intro': isDarkMode}">  
        <div class="container min-vh-100">
            <div class="d-flex flex-column justify-content-center align-items-center container-content">
                <!-- <img 
                    @mouseover="titleMouseOver"
                    @mouseleave="titleMouseLeave" src="@/assets/images/logo.png" alt="" 
                /> -->
                <div @mouseover="titleMouseOver" @mouseleave="titleMouseLeave" class="title-container">
                    <h1 class="title mb-0 text-center" :class="{ 'title-inverted': isDarkMode}">
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
                        autoplay playtsinline loop muted
                    >
                        Your browser does not support the video tag.
                    </video>         
                </div>
                  
                <button @click="home"
                    @mouseover="mouseOver" 
                    @mouseleave="mouseLeave"
                    type="button" 
                    class="col-md-2 enter-btn" 
                    :class="{ 'enter-btn-flip': !isActive, 'enter-btn-normal': isActive }">
                    <div class="enter-btn-text my-1" style="font-family:  MontSerrat;">ENTER</div>
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
  { src: characters, number: 20 , offsetY: '80%', speed: 0.7 },

]);

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
        // Select random video on mount
        currentVideo.value = myVideo.value[Math.floor(Math.random() * myVideo.value.length)]
        
        // Wait for DOM to update
        await nextTick()

        // Wait for video and fonts with timeout protection
        await Promise.all([
            waitForVideo(videoRef.value),
            waitForFonts()
        ])
        
        // Set playback rate if video ref exists
        if (videoRef.value && currentVideo.value) {
            videoRef.value.playbackRate = currentVideo.value.speed ?? 0.5; 
        }
    } catch (error) {
        console.error('Error loading assets:', error)
    } finally {
        // Always stop loading after a small delay
        setTimeout(() => {
            stopLoading()
        }, 500)
    }
})

function titleMouseOver() {
    isDarkMode.value = true
}
function titleMouseLeave() {
    isDarkMode.value = false
}
function mouseOver() {
    isActive.value = true
}
function mouseLeave() {
    isActive.value = false
}

async function home() {
    await router.push('/home')
}

</script>

<style scoped>

.page-wrapper {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
}

.title-container {
    /* size to title and act as positioning context for the video */
    display: inline-block;
    position: relative;
    width: 65%;
    line-height: 1;
}
 
.container-content {
    min-height: 80vh;
    align-items: center;
    
}

.title {

    font-family: 'Bernoru';
    color: #1B1818;
    /* responsive font so title and video scale together */
    font-size: clamp(80px, 18vw, 300px);
    font-weight: 900;
    letter-spacing: -22px;
    position: relative;


}

.title-inverted {
    /* use this if not using video as TATSU background */
   /* background: url(@/assets/images/background.png) no-repeat; */ 
   background: white no-repeat;
   background-size: cover;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  display: block;
  background-position: center -60px ;
} 

#myVideo {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: 125%;
    object-fit: cover; /* cover the title box and crop as needed */
    pointer-events: none;
    mix-blend-mode: darken;
   
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

.enter-btn {
    width: 250px;
    position: relative;
}

.enter-btn-flip {
    border: 0px #0E0303 solid;
    border-radius: 10px 10px 10px 10px;

    /*upside down*/
    -webkit-transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    -o-transform:rotate(180deg);
    -ms-transform:rotate(180deg);
    transform:rotate(180deg);
}

.enter-btn-normal {
    border: 0px #000000 solid;
    background:  #4E4E4E;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    border-radius: 10px 10px 10px 10px;
}

.enter-btn-text {
    color: #0A0101;
    font-size: 11px; 
    font-family: Kokoro;
    font-weight:400; 
    letter-spacing: 2.04px;
    word-wrap: break-word;
}

/* .title {
    color: #1B1818;
    font-size: 300px;
    font-family: Bernoru;
    font-weight: 900;
    line-height: 370.50px;
} */

@media only screen and (max-width: 600px) {

    .intro{
        overflow: hidden;
        height: 100vh;
        touch-action: none;
    }

    .page-wrapper {
        overflow: hidden;
        height: 100vh;
        width: 100vw;
        touch-action: none;
    }

    .title{

    font-size: 8rem;
    letter-spacing: -13px;
    width: 110%;

    left: 50%;                
    transform: translateX(-50%); 
    top: 50%;

    }

    .enter-btn {
    
        font-size: 8px; 
    
    }

    .enter-btn {
    
        width: 10rem;
    
    }

    .enter-btn-flip {
        border: 0px #ffffff solid !important;
        background:  #ffffff;
    }

    .title-container {
        width: 100% !important;  /* Expande contenedor base */
        position: relative;

    }


    #myVideo{

    background-size: cover;
    background-repeat: no-repeat;
    overflow-y: hidden;

    
    width: 100dvw;
    }

    .enter-btn-flip {
    border: 1px #0E0303 solid;

    /*upside down*/
    -webkit-transform:rotate(0deg);
    -moz-transform:rotate(0deg);
    -o-transform:rotate(0deg);
    -ms-transform:rotate(0deg);
    transform:rotate(0deg);
}


    .container{

        overflow-x: hidden;
        overflow-y: hidden;
        height: 110vh;
    }

    .intro{
        display: flex;
        flex-direction: column;
    }


}



</style>
