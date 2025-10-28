<template>

  <div class="background">
    <navbar class="navbar" style="z-index: 4;" />  
    <Dropupbttn class="dropupbttn" style="z-index: 5; top: 88.5%; position: fixed;"/> 
    <menubttn style="z-index: 6;"/> 
    <navbar2 style="z-index: 6;" />
    <home class="dropupbttn" style="z-index: 5; position: fixed;"/> 

    

    <!--  GRID PRINCIPAL -->
    <div class="main-grid">
      <!-- Columna Izquierda -->
      <div class="content">
        <h1 class="brand-title">ODD STUDIOS</h1>

        <div class="brand-txt">
          <p>
            <span style="color: black; font-size: 15px; font-family: 'Kokoro', sans-serif; font-weight: 400; text-transform: uppercase; line-height: 18.90px; letter-spacing: 1.12px; background: linear-gradient(to bottom, #DDD9DA 60%, #F47A7A 60%);">
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
        
        <img class="imageSitting" src="@/assets/images/sitting.png" alt="">
        

      </div>

      <!-- Columna Derecha -->
      <section id="team-section" class="team-section">
        <div class="team-title">
          <h2>MEET THE PARTY</h2>
        </div>

        <div class="team-grid">
          <!-- MARKETING -->
          <div class="member marketing" @mouseenter="show.marketing = true" @mouseleave="show.marketing = false">
            <div class="image-wrapper">
              <img :src="show.marketing ? marketingColor : marketingGray" alt="Marketing Member" class="member-img" />
              <div class="member-info" :class="{ hidden: show.marketing }">
                <div class="text-container">
                  <div class="member-name">CATU</div>
                  <div class="member-role">MARKETING</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARTIST -->
          <div class="member artist" @mouseenter="show.artist = true" @mouseleave="show.artist = false">
            <div class="image-wrapper">
              <img :src="show.artist ? artistColor : artistGray" alt="Artist Member" class="member-img" />
              <div class="member-info" :class="{ hidden: show.artist }">
                <div class="text-container">
                  <div class="member-name">KIBBEN</div>
                  <div class="member-role">ARTIST</div>
                </div>
              </div>
            </div>
          </div>

          <!-- PROGRAMMER -->
          <div class="member programmer" @mouseenter="show.programmer = true" @mouseleave="show.programmer = false">
            <div class="image-wrapper">
              <img :src="show.programmer ? programmerColor : programmerGray" alt="Programmer Member" class="member-img" />
              <div class="member-info" :class="{ hidden: show.programmer }">
                <div class="text-container">
                  <div class="member-name">JM134</div>
                  <div class="member-role">PROGRAMMER</div>
                </div>
              </div>
            </div>
          </div>

          <!-- FINANCE -->
          <div class="member finance" @mouseenter="show.finance = true" @mouseleave="show.finance = false">
            <div class="image-wrapper">
              <img :src="show.finance ? financeColor : financeGray" alt="Finance Member" class="member-img" />
              <div class="member-info" :class="{ hidden: show.finance }">
                <div class="text-container">
                  <div class="member-name">ALFON</div>
                  <div class="member-role">FINANCE</div>
                </div>
              </div>
            </div>
          </div>

          <!-- FOUNDER -->
          <div class="member founder" @mouseenter="show.founder = true" @mouseleave="show.founder = false">
            <div class="image-wrapper">
              <img :src="show.founder ? founderColor : founderGray" alt="Founder Member" class="member-img" />
              <div class="member-info" :class="{ hidden: show.founder }">
                <div class="text-container">
                  <div class="member-name">GABODDS</div>
                  <div class="member-role">FOUNDER</div>
                </div>
              </div>
            </div>
          </div>

          <!-- FOUNDER2 / DESIGNER -->
          <div class="member founder2" @mouseenter="show.founder2 = true" @mouseleave="show.founder2 = false">
            <div class="image-wrapper">
              <img :src="show.founder2 ? founder2Color : founder2Gray" alt="Designer Member" class="member-img" />
              <div class="member-info" :class="{ hidden: show.founder2 }">
                <div class="text-container">
                  <div class="member-name">CRISTINA</div>
                  <div class="member-role">DESIGNER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// imágenes color / gris
import marketingColor from '@/assets/images/team/marketing.png'
import marketingGray from '@/assets/images/team/marketing_alt.png'

import artistColor from '@/assets/images/team/artist.png'
import artistGray from '@/assets/images/team/artist_alt.png'

import programmerColor from '@/assets/images/team/programmer.png'
import programmerGray from '@/assets/images/team/programmer_alt.png'

import financeColor from '@/assets/images/team/finance.png'
import financeGray from '@/assets/images/team/finance_alt.png'

import founderColor from '@/assets/images/team/founder.png'
import founderGray from '@/assets/images/team/founder_alt.png'

import founder2Color from '@/assets/images/team/designer.png'
import founder2Gray from '@/assets/images/team/designer_alt.png'

// estado hover para cada tarjeta
const show = reactive({
  marketing: false,
  artist: false,
  programmer: false,
  finance: false,
  founder: false,
  founder2: false
})

// scroll suave al team-section
const scrollToSection = () => {
  const section = document.querySelector('#team-section')
  section?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
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
  grid-template-columns: 1fr 1fr; /* dos columnas */
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
  font-family: 'Kokoro', sans-serif;
  font-weight: 100;
  color: #000;
  line-height: 1.6;
  font-size: 15px;
  letter-spacing: 8%;
}

.odd{
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
  "marketing finance" 
  "artist founder" 
  "programmer founder2";
}

.founder { grid-area: founder; } 
.founder2 { grid-area: founder2; } 
.marketing { grid-area: marketing; } 
.artist { grid-area: artist; } 
.programmer { grid-area: programmer; }
 .finance { grid-area: finance; }

.member {
  position: relative;
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


/* Responsive */
@media (max-width: 600px) {

  .main-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .team-section {
    display: none;
  }

      .imageSitting{
        z-index: 0;
        position: absolute;
        display: block;
        height: 67vh;
        width: auto;
        filter: blur(2px); 
        margin-left: -47%;
        margin-top: 65%;
        opacity: 0.4;
    }

        .brand-title {

        width: 100%;
        height: 80px;
        text-align: center;
        font-size: 32px;
        font-weight: 100;
        text-shadow: 3px 3px 3px #747474;
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
        padding-top: 3vh;
    }

    .odd{

        display: block;
        color: rgb(0, 0, 0);
        font-family: IMBPlexMono;
        font-size: 0.6rem;
        bottom: 1.2dvh;
        text-align: center;
        position: absolute;
        object-fit: contain;

        left: 50%;
        transform: translateX(-50%);

    }

    .content{
        width: 100%;
        height: 100vh;
        padding-top: 5%;
        overflow: hidden;
    }

  .navbar{

    display: none;

  }


  .dropupbttn{

    display: none;

  }

  .navbar2{

    display: block;
  }
}
</style>
