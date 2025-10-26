<template>
    <div class="background">
        <navbar style="z-index: 4;" />

        <Dropupbttn class="dropupbttn" style="z-index: 4; top: 88.5%; position: fixed;"/>  
        <home class="dropupbttn" style="z-index: 5;  position: fixed;"/> 
        <menubttn style="z-index: 6;"/> 
        <navbar2 style="z-index: 11;" />

        <div style="background-color: #DDD9DA;">
            <video autoplay loop muted class="video-container" >
                    <source src="@/assets/videos/brandNew.mp4"  type="video/mp4" > 
                    Your browser does not support the video tag.
            </video>
        </div>
        
        <!-- Sección UTILITY con estructura semántica mejorada -->
        <section class="roadmap-section" aria-labelledby="utility-title">
            <div class="roadmap-content1">
                <h1 id="utility-title" class="title">UTILITY</h1>

                <div class="description">
                    <ul class="features" ref="listRef" aria-label="Características de utilidad">
                        <li v-for="(f, i) in features" :key="f.id" class="fade-item" 
                            :style="{ transitionDelay: `${i * 160}ms` }"
                            :aria-label="f.text">
                            {{ f.text }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Sección ABOUT con estructura semántica mejorada -->
        <section class="roadmap-section" aria-labelledby="about-title">
            <div class="roadmap-content">
                <h2 id="about-title" class="title">ABOUT</h2>

                <div class="description">
                    <ul class="features" ref="listRef2" aria-label="Características sobre la colección">
                        <li v-for="(f, i) in futureFeatures" :key="f.id" class="fade-item" 
                            :style="{ transitionDelay: `${i * 160}ms` }"
                            :aria-label="f.text">
                            {{ f.text }}
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

const features = ref([
    { id: 1, text: 'Airdrop of a manga version of the same image for each holder.' },
    { id: 2, text: 'Distribution of a profit % between a few holders.' },
    { id: 3, text: 'Exclusive access to manga chapters and future animations of different characters and fights.' },
    { id: 4, text: 'Exclusive access to "the gallery", featuring anime collections with different artist.' },
])

const futureFeatures = ref([
    { id: 'f1', text: 'Collection of 200 images.' },
    { id: 'f2', text: 'Unique 1/1 designs with no auto-generation.' },
    { id: 'f3', text: 'Full body anime and manga art.' },
    { id: 'f4', text: 'Characters with unique image angles, powers, names and story.' },
    { id: 'f5', text: '  ' },
    { id: 'f6', text: '  ' },
    { id: 'f7', text: '  ' },
])

const listRef = ref<HTMLElement | null>(null)
const listRef2 = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
    const itemsA = listRef.value?.querySelectorAll('.fade-item') ?? []
    const itemsB = listRef2.value?.querySelectorAll('.fade-item') ?? []
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                (entry.target as HTMLElement).classList.add('in-view')
            }
        })
    }, { threshold: 0.12 })

    itemsA.forEach((el) => observer!.observe(el))
    itemsB.forEach((el) => observer!.observe(el))
})

onBeforeUnmount(() => {
    observer?.disconnect()
})

</script>

<style scoped>
.background {
    background-color: #DDD9DA;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    
    width: 100%;
    min-height: 100vh;
    position: relative;

    overflow: hidden;

    z-index: 0;
}

/* CSS variables for roadmap titles so sizes can be adjusted globally */
.background {
    --roadmap-title-min: 30px;
    --roadmap-title-fluid: calc(4.8vw + 0.5rem);
    --roadmap-title-max: 72px;

    --roadmap-title-mobile-min: 30px;
    --roadmap-title-mobile-fluid: 6.8vw;
    --roadmap-title-mobile-max: 40px;
}

/* ensure title is always a bit larger than the list by basing mins on list font-size */
.background {
    --roadmap-list-font-size: 17px; /* default list item size */
    /* recompute title minimums relative to list size */
    --roadmap-title-min: calc(var(--roadmap-list-font-size) * 1.6);
    --roadmap-title-mobile-min: calc(var(--roadmap-list-font-size) * 1.4);
}

/* Mejor estructura para las secciones */
.roadmap-section {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    
}

.video-container{

    position: absolute;
    width: 70%;
    height: 100%;
    left: 30%;
    top: 0%;
    
    mix-blend-mode: darken;
    object-position: right;
    z-index: -1;
    
}

.title {
    /* responsive title using CSS variables (adjust via .background) */
    font-size: 64px; /* fallback */
    font-size: clamp(var(--roadmap-title-min), var(--roadmap-title-fluid), var(--roadmap-title-max));
    font-family: 'Bernoru', sans-serif;
    font-weight: 900;
    line-height: 1.02;
    margin: 0;
    margin-top: 7dvh;
    text-align: left;
    width: 100%;
    position: static;
    color: #111;

}

.description {
    margin-top: 2dvh;
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
    max-width: 1100px;
    padding-top: 5dvh;
    font-family: MontSerrat;
}

.roadmap-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 48px;
    box-sizing: border-box;
    max-width: 1100px;
    padding-top: 5dvh;
    padding-bottom: 15dvh;
    font-family: 'Roboto';
}

.features {
    list-style: none;
    padding: 0;
    margin: 0;
    max-width: 900px;
    width: 100%;

}

.fade-item {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 360ms ease, transform 360ms ease;
    margin: 12px 0;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1.5px;
    font-size: 15px;
    letter-spacing: 1.04px;
}

.fade-item.in-view {
    opacity: 1;
    transform: translateY(0);
}

/* Mejor estructura para el footer */
.footer {
    position: relative;
    width: 100%;
}

.odd {
    display: grid;
    color: rgb(1, 1, 1);
    font-family: IMBPlexMono;
    font-size: 11px;
    z-index: 4;
    text-align: center;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
}

@media only screen and (max-width: 600px)  {
    .navbar {
        display: none;
    }

    .background {
        display: flex;
        flex-direction: column;
        width: 100vw;
    }

    .odd {
        display: grid;
        color: rgb(0, 0, 0);
        font-family: IMBPlexMono;
        font-size: 0.6rem;
        z-index: 4;
        text-align: center;
        position: relative;
        object-fit: contain;
    }

    .title {
        position: static;
        font-size: clamp(var(--roadmap-title-mobile-min), var(--roadmap-title-mobile-fluid), var(--roadmap-title-mobile-max));
        text-align: left;
        line-height: 1.05;
        width: 100%;
        height: auto;
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
    }

    /* Ajustes responsive para las secciones */
    .roadmap-section {
        justify-content: center;
    }
    
    .roadmap-content1,
    .roadmap-content {
        padding-left: 24px;
        padding-right: 24px;
        width: 100%;
    }

    .video-container{

        display: none;
    }
    
}

</style>
