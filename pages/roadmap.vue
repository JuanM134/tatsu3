<template>
  
    <div class="background">
        <navbar style="z-index: 4;" />

        <Dropupbttn class="dropupbttn" style="z-index: 4; top: 88.5%; "/>  
        <menubttn style="z-index: 4;"/> 
        <navbar2 style="z-index: 4;" />
        

        <div class="roadmap-content">
            <p class="title">ADVANTAGES</p>

            <div class="description">
                <ul class="features" ref="listRef">
                    <li v-for="(f, i) in features" :key="f.id" class="fade-item" :style="{ transitionDelay: `${i * 160}ms` }">
                        {{ f.text }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="roadmap-content">
            <p class="title">FUTURE</p>

            <div class="description">
                <ul class="features" ref="listRef2">
                    <li v-for="(f, i) in futureFeatures" :key="f.id" class="fade-item" :style="{ transitionDelay: `${i * 160}ms` }">
                        {{ f.text }}
                    </li>
                </ul>
            </div>
        </div>

    </div>


</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const features = ref([
    { id: 1, text: 'Airdrop of a manga version of the same image for each holder.' },
    { id: 2, text: 'Access to a raffle that selects a few holders and split a % of the profit.' },
    { id: 3, text: 'Exclusive access to manga chapters and future animations of different characters and fights.' },
    { id: 4, text: 'Exclusive access to “the gallery”, featuring anime collections with different artist.' },
])

const futureFeatures = ref([
    { id: 'f1', text: 'Opportunity of investment and ownership of restaurants in NYC.' },
    { id: 'f2', text: 'Creation of a club house/coffee house for like minded people.' },
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
    height: 100%;
    position: fixed ;
    bottom: 0;
    

    
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

.title {
    /* responsive title using CSS variables (adjust via .background) */
    font-size: clamp(var(--roadmap-title-min), var(--roadmap-title-fluid), var(--roadmap-title-max));
    font-family: Bernoru, serif;
    font-weight: 900;
    line-height: 1.02;
    margin: 0;
    margin-top: 8dvh;
    text-align: left;
    width: 100%;
    position: static; /* flow normally above the list */
    color: #111;
}

.description {
    margin-top: 2dvh; /* reduced so title and list don't overlap */
    display: flex;
    justify-content: flex-start;
    width: 100%;
}

.roadmap-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* left align title and list */
    gap: 20px;
    padding-left: 48px; /* position content toward the left side */
    box-sizing: border-box;
    max-width: 1100px;
}

.features {
    list-style: none;
    padding: 0;
    margin: 0;
    max-width: 900px;
    width: 90%;
    
}

.fade-item {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 360ms ease, transform 360ms ease;
    margin: 12px 0;
    font-family: Montserrat;
    letter-spacing: 1px;
    font-size: var(--roadmap-list-font-size);
}

.fade-item.in-view {
    opacity: 1;
    transform: translateY(0);
}


@media only screen and (max-width: 600px) and (max-height: 933px){

.navbar{

display: none;

}

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



.title{
        position: static;
        /* mobile sizing via variables */
        font-size: clamp(var(--roadmap-title-mobile-min), var(--roadmap-title-mobile-fluid), var(--roadmap-title-mobile-max));
        text-align: left;
        line-height: 1.05;
        width: 100%;
        height: auto;
    }   

.dropupbttn{


    display: none;

}

.navbar2{

    display: block;
}

.background{
    display: flex;
    flex-direction: column;
}

}


</style>