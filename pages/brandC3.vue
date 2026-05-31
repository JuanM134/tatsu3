<template>

  <div class="background">
    
    <navbar class="navbar" style="z-index: 4;" />  
    <Dropupbttn class="dropupbttn" style="z-index: 5; top: 88.5%; position: fixed;"/> 
    <menubttn style="z-index: 6;"/> 
    <navbar2 style="z-index: 50;" />
    <home class="dropupbttn" style="z-index: 5; position: fixed;"/> 

    <div class="main-grid">
      <div class="content">
        <h1 class="brand-title">ODD STUDIOS</h1>

        <div class="brand-txt">
          <p>
            <span style="color: black; font-size: 15px; font-family: 'Montserrat', sans-serif; font-weight: 400; text-transform: uppercase; line-height: 18.90px; letter-spacing: 1.12px; background: linear-gradient(to bottom, #DDD9DA 60%, #F47A7A 60%);">
              Odd studios</span>
             draws inspiration from the vibrant world of retro anime and the eclectic fashion styles from the streets of NYC; celebrating the tapestry of diverse art manga styles through our designs.
          </p>

          <p>
            But it is not just about recreating art; it's about redefining ownership with the use of blockchain. 
            The studio transcends the digital world to bestow physical ownership and tangible products derived from digital art.
          </p>    

          <p>
            By transitioning them into the digital realm, we can ensure they are securely held, shared, and celebrated in a manner that 
            is both exceptional and exclusive.
          </p>

          <p class="odd">ODD STUDIOS, 2024<br/>MADE IN NEW YORK, NY</p>
        </div>
        
        <img class="imageSitting" src="@/assets/images/sitting.png" alt="Odd Studios" loading="lazy">
      </div>

      <section id="team-section" class="team-section">
        <div class="team-title">
          <h2>MEET THE PARTY</h2>
        </div>

        <div class="team-grid">
          
          <div class="member founder" @mouseenter="show.founder = true" @mouseleave="show.founder = false">
            <div class="image-wrapper">
              <img :src="founderColor" alt="Founder Member" class="member-img" :class="{ 'is-gray': !show.founder }" />
              <div class="member-info" :class="{ hidden: show.founder}">
                <div class="text-container">
                  <div class="member-name">GABODDS</div>
                  <div class="member-role">FOUNDER</div>
                </div>
              </div>
            </div>
            <div class="social-icons" :class="{ visible: show.founder }">
              <a href="https://x.com/gabodds_" target="_blank" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
            </div>
          </div>

          <div class="member marketing" @mouseenter="show.marketing = true" @mouseleave="show.marketing = false">
            <div class="image-wrapper">
              <img :src="marketingColor" alt="Marketing Member" class="member-img" :class="{ 'is-gray': !show.marketing }" />
              <div class="member-info" :class="{ hidden: show.marketing }">
                <div class="text-container">
                  <div class="member-name">SMART</div>
                  <div class="member-role">MARKETING</div>
                </div>
              </div>
            </div>
            <div class="social-icons" :class="{ visible: show.marketing }">
              <a href="https://x.com/xmartsol" target="_blank" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
            </div>
          </div>

          <div class="member programmer" @mouseenter="show.programmer = true" @mouseleave="show.programmer = false">
            <div class="image-wrapper">
              <img :src="programmerColor" alt="Programmer Member" class="member-img" :class="{ 'is-gray': !show.programmer }" />
              <div class="member-info" :class="{ hidden: show.programmer }">
                <div class="text-container">
                  <div class="member-name">JM134</div>
                  <div class="member-role">PROGRAMMER</div>
                </div>
              </div>
            </div>
            <div class="social-icons" :class="{ visible: show.programmer }">
              <a href="https://x.com/tu_enlace_aqui" target="_blank" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
            </div>
          </div>

          <div class="member artist" @mouseenter="show.artist = true" @mouseleave="show.artist = false">
            <div class="image-wrapper">
              <img :src="artistColor" alt="Artist Member" class="member-img" :class="{ 'is-gray': !show.artist }" />
              <div class="member-info" :class="{ hidden: show.artist }">
                <div class="text-container">
                  <div class="member-name">KIBBEN</div>
                  <div class="member-role">ARTIST</div>
                </div>
              </div>
            </div>
            <div class="social-icons" :class="{ visible: show.artist }">
              <a href="https://x.com/druweng" target="_blank" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
            </div>
          </div>

          <div class="member finance" @mouseenter="show.finance = true" @mouseleave="show.finance = false">
            <div class="image-wrapper">
              <img :src="financeColor" alt="Finance Member" class="member-img" :class="{ 'is-gray': !show.finance }" />
              <div class="member-info" :class="{ hidden: show.finance }">
                <div class="text-container">
                  <div class="member-name">ALFON</div>
                  <div class="member-role">FINANCE</div>
                </div>
              </div>
            </div>
            <div class="social-icons" :class="{ visible: show.finance }">
              <a href="https://x.com/tu_enlace_aqui" target="_blank" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
            </div>
          </div>

          <div class="member founder2" @mouseenter="show.founder2 = true" @mouseleave="show.founder2 = false">
            <div class="image-wrapper">
              <img :src="founder2Color" alt="Designer Member" class="member-img" :class="{ 'is-gray': !show.founder2 }" />
              <div class="member-info" :class="{ hidden: show.founder2 }">
                <div class="text-container">
                  <div class="member-name">CRISTINA</div>
                  <div class="member-role">DESIGNER</div>
                </div>
              </div>
            </div>
            <div class="social-icons" :class="{ visible: show.founder2 }">
              <a href="https://x.com/tu_enlace_aqui" target="_blank" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useLoading } from '@/composables/useLoading'
import { useAssetLoading } from '@/composables/useAssetLoading'

// Solo importamos las imágenes a color
import marketingColor from '@/assets/images/team/marketing.png'
import artistColor from '@/assets/images/team/artist.png'
import programmerColor from '@/assets/images/team/programmer.png'
import financeColor from '@/assets/images/team/finance.png'
import founderColor from '@/assets/images/team/founder.png'
import founder2Color from '@/assets/images/team/designer.png'

const show = reactive({
  marketing: false,
  artist: false,
  programmer: false,
  finance: false,
  founder: false,
  founder2: false
})

const { startLoading, stopLoading } = useLoading()
const { waitForImages, waitForFonts } = useAssetLoading()

onMounted(async () => {
  startLoading()
  
  // Ahora el loader es rapidísimo porque solo procesa las 6 imágenes base
  const imagesToLoad = [
    marketingColor,
    artistColor,
    programmerColor,
    financeColor,
    founderColor,
    founder2Color
  ]

  await Promise.all([
    waitForImages(imagesToLoad),
    waitForFonts()
  ])

  stopLoading()
})
</script>

<style scoped>
/* Filtro CSS Mágico: Pone la imagen en blanco y negro (y un poco más oscura) */
.member-img.is-gray {
  filter: grayscale(100%) brightness(0.8);
}

.background {
  background: #DDD9DA;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.background::-webkit-scrollbar {
  display: none;
}

/* --- GRID PRINCIPAL --- */
.main-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  align-items: stretch;
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 0% 3%;
  box-sizing: border-box;
  overflow: hidden;
}

.content {
  display: flex;
  flex-direction: column;
  padding-right: 1.5rem;
  padding-top: 35dvh;
}

.imageSitting {
    display: none;
}

.brand-title {
  font-family: Bernoru;
  font-size: clamp(1rem, 6rem + 1vw, 128px);
  font-weight: 900;
  color: #222;
  text-transform: uppercase;
  line-height: 0.8;
  margin-top: -3rem;
  margin-bottom: 4rem;
}

.brand-txt {
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  color: #000;
  line-height: 1.6;
  font-size: 15px;
  letter-spacing: 8%;
}

.odd {
    display: none;
}

.arrow-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
}

.party {
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-family: Bernoru;
}

/* --- TEAM SECTION --- */
.team-section {
  display: flex;
  flex-direction: column;
}

.team-title h2 {
  color: #0A0101;
  font-family: 'Bernoru', sans-serif;
  font-size: 24px;
  padding-top: 8%;
  padding-left: 6.5%;
  margin-bottom: 10px;
  letter-spacing: -4%;
  align-items: start;
}

.team-grid {
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 90px;
  row-gap: 20px;
  justify-items: center;
  grid-template-areas: 
  "founder marketing" 
  "programmer artist" 
  "finance founder2";
}

.founder { grid-area: founder; } 
.founder2 { grid-area: founder2; } 
.marketing { grid-area: marketing; } 
.artist { grid-area: artist; } 
.programmer { grid-area: programmer; }
.finance { grid-area: finance; }

.member {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
}

.image-wrapper {
  position: relative;
  width: 15vw;
  height: 25vh;
  overflow: hidden;
  border: 1px solid #222;
  background: #111;
}

.member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.35s ease, transform 0.35s ease;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  will-change: filter, transform;
  image-rendering: -webkit-optimize-contrast; 
}

.member-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  transition: opacity 0.25s ease;
  pointer-events: none;
}

.member-info.hidden {
  opacity: 0;
}

.member-name {
  font-size: 30px;
  font-family: 'Bernoru', sans-serif;
  font-weight: 900;
}

.member-role {
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  letter-spacing: 2.5px;
  margin-top: 6px;
  color: rgba(255,255,255,0.95);
}

/* --- ESTILOS DE LOS ICONOS SOCIALES --- */
.social-icons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  pointer-events: none; 
}

.social-icons.visible {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto; 
}

.social-icons a {
  color: #111;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icons a:hover {
  color: #F47A7A; 
  transform: scale(1.1);
}

/* Responsive */
@media (max-width: 600px) and (max-height: 933px){
  .background {
    width: 100%;
    height: 100dvh; 
    overflow: hidden; 
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    position: relative;
  }

  .main-grid {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
  
  .content{
    width: 100%;
    height: 100vh;
    padding-top: 5%;
    overflow: hidden;
  }

  .team-section {
    display: none;
  }

  .imageSitting {
    position: absolute;
    display: block;
    bottom: 2.5%;
    left: 30%;
    transform: translateX(-50%);
    height: 67vh;
    opacity: 0.35;
    filter: blur(2px);
    z-index: 0;
  }

  .brand-title {
    width: 100%;
    height: 80px;
    text-align: center;
    font-size: 32px;
    font-weight: 900;
    padding-top: 12vh;
  }

  .brand-txt {
    font-family: 'Kokoro', sans-serif;
    font-weight: 400;
    color: #000;
    line-height: 1.6;
    font-size: 15px;
    padding-left: 3%;
    z-index: 2;
    text-align: justify;
    padding-top: .5vh;
  }

  .odd{
    display: block;
    color: rgb(0, 0, 0);
    font-family: IMBPlexMono;
    font-size: 0.6rem;
    bottom: 1.5dvh;
    text-align: center;
    position: absolute;
    object-fit: contain;
    left: 50%;
    transform: translateX(-50%);
  }

  .navbar{
    display: none;
  }

  dropupbttn{
    display: none;
  }

  .navbar2{
    display: block;
  }
}
</style>
