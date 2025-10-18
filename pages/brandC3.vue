<template>

    <div class="background">
        <navbar class="navbar" style="z-index: 4; " />  

        <Dropupbttn class="dropupbttn" style="z-index: 5; top: 88.5%; position: fixed;"/> 
        <menubttn style="z-index: 6;"/> 
        <navbar2 style="z-index: 6;" />
 
        <div style="background-color: #DDD9DA;">
            <video autoplay loop muted class="video-container" >
                    <source src="@/assets/videos/brandNew.mp4"  type="video/mp4" > 
                    Your browser does not support the video tag.
            </video>
        </div>
                

        <img class="imageSitting"  src="@/assets/images/sitting.png" alt="">


        <div class="content">

            <h1 class="brand-title"> ODD STUDIOS</h1>


            <div class="brand-txt">

                
                <p><span style="color: black; font-size: 14px; font-family: IMBPlexMono; font-weight: 400; text-transform: uppercase; line-height: 18.90px; letter-spacing: 1.12px; background: linear-gradient(to bottom, #DDD9DA 60%, #F47A7A 60%);">Odd studios</span> draws inspiration from the vibrant world of retro anime and the eclectic fashion styles from the streets of nyc; 
                celebrating the tapestry of diverse art manga styles through our designs.</p>

                <p>But it is not just about recreating art; it's about redefining ownership with the use of blockchain. 
                The studio transcends the digital world  to bestow physical ownership and tangible products derived from digital art.</p>    

                <p>By transitioning them into the digital realm, we can ensure they are securely held, shared, and celebrated in a manner that 
                is both exceptional and exclusive.</p>

                <div class="arrow-row">
                    <a class="arrowr" href="#team-section" @click.prevent="scrollToSection">
                    <ArrowR />
                    </a>
                    <a href="#team-section" class="party" @click.prevent="scrollToSection">
                    <p><strong>Party</strong></p>
                    </a>
                </div>

            </div>

        <img class="imageSitting2" src="@/assets/images/sitting.png" alt="">
 


    <div id="team-section" class="team-info">

            <div class="member marketing">
                <img 
                    :src="showMarketingAlt ? marketingImg : marketingAltImg" 
                    @mouseover="showMarketingAlt = true" 
                    @mouseleave="showMarketingAlt = false" 
                    style="width: auto; height: 250px; border: 1px black solid" 
                    alt="Marketing Member"
                />
                <div v-if="!showMarketingAlt" 
                    style="color: #0E0303; font-size: 12px; font-family: MontSerrat; font-weight: 100; line-height: 19.20px; letter-spacing: 2.58px; word-wrap: break-word">
                    MARKETING
                </div>
                <div v-if="showMarketingAlt" class="member-info" style="width: 294px; height: 107px; left: 320px; top: 124px; position: absolute">
                    <!-- Contenido info del miembro aquí -->
                    <img style="width: 10.42px; height: 11.03px; left: 10.78px; top: -42px; position: absolute;" src="@/assets/images/team/Vector.svg"/>
                    <div style="width: 284px; height: 0px; left: 0px; top: -55px; position: absolute; border: 0.30px #0E0303 solid"></div>
                    <div style="width: 120px; height: 20px; left: 24px; top: -47px; position: absolute; color: #1B1818; font-size: 11px; font-weight: 200; line-height: 17.71px; letter-spacing: 0.82px;">@catu_you_are</div>
                    <div style="width: 256px; height: 20px; left: 11px; top: -30px; position: absolute; color: #1D1B1B; font-size: 12px; font-weight: 200; line-height: 16px; letter-spacing: 2.15px;">
                        Master of Science in Advertising (BU).<br/>Kickstarter Success.<br/>CEO of Biz Connect.
                    </div>
                    <div style="left: 11px; position: relative; top: -120px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div style="width: 146px; height: 45px; color: #0A0101; font-size: 32px; font-family: Bernoru; font-weight: 900; line-height: 51.20px;">CATU</div>
                        <div style="width: 72.07px; height: 20.01px; color: #0A0808; font-size: 12px; font-weight: 200; line-height: 19.20px; letter-spacing: 2.58px;">MARKETING</div>
                    </div>
                </div>
            </div>


            <div class="member artist">
                <img 
                    :src="showArtistAlt ? artistImg : artistAltImg" 
                    @mouseover="showArtistAlt = true" 
                    @mouseleave="showArtistAlt = false" 
                    style="width: auto; height: 250px; border: 1px black solid" 
                    alt="Marketing Member"
                />
                <div v-if="!showArtistAlt" 
                    style="color: #0E0303; font-size: 12px; font-family: MontSerrat; font-weight: 100; line-height: 19.20px; letter-spacing: 2.58px; word-wrap: break-word">
                    ARTIST
                </div>
                <div v-if="showArtistAlt" class="member-info" style="width: 294px; height: 107px; left: 320px; ; position: absolute">
                    <!-- Contenido info del miembro aquí -->
                    <img style="width: 10.42px; height: 11.03px; left: 10.78px; top:80px; position: absolute;" src="@/assets/images/team/Vector.svg"/>
                    <div style="width: 284px; height: 0px; left: 0px; top: 65px; position: absolute; border: 0.30px #0E0303 solid"></div>
                    <div style="width: 120px; height: 20px; left: 24px; top: 75.5px; position: absolute; color: #1B1818; font-size: 11px; font-weight: 200; line-height: 17.71px; letter-spacing: 0.82px;">@</div>
                    <div style="width: 256px; height: 20px; left: 11px; top: 95px; position: absolute; color: #1D1B1B; font-size: 12px; font-weight: 200; line-height: 16px; letter-spacing: 2.15px;">
                        N/A.
                    </div>
                    <div style="left: 11px; position: relative; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div style="width: 146px; height: 45px; color: #0A0101; font-size: 32px; font-family: Bernoru; font-weight: 900; line-height: 51.20px;">KIBBEN</div>
                        <div style="width: 72.07px; height: 20.01px; color: #0A0808; font-size: 12px; font-weight: 200; line-height: 19.20px; letter-spacing: 2.58px;">ARTIST</div>
                    </div>
                </div>
            </div>

            <div class="member programmer">
                <img 
                    :src="showProgrammerAlt ? programmerImg : programmerAltImg" 
                    @mouseover="showProgrammerAlt = true" 
                    @mouseleave="showProgrammerAlt = false" 
                    style="width: auto; height: 250px; border: 1px black solid" 
                    alt="Programmer Member"
                />
                <div v-if="!showProgrammerAlt" 
                    style="color: #0E0303; font-size: 12px; font-family: MontSerrat; font-weight: 100; line-height: 19.20px; letter-spacing: 2.58px; word-wrap: break-word">
                    PROGRAMMER
                </div>
                <div v-if="showProgrammerAlt" class="member-info" style="width: 294px; height: 107px; left: 320px; top: 0px; position: absolute">
                    <!-- Contenido info del miembro aquí -->
                    <img style="width: 10.42px; height: 11.03px; left: 10.78px; top: 700px; position: absolute;" src="@/assets/images/team/Vector.svg"/>
                    <div style="width: 284px; height: 0px; left: 0px; top: 685px; position: absolute; border: 0.30px #0E0303 solid"></div>
                    <div style="width: 120px; height: 20px; left: 24px; top: 695.5px; position: absolute; color: #1B1818; font-size: 11px; font-weight: 200; line-height: 17.71px; letter-spacing: 0.82px;">@</div>
                    <div style="width: 256px; height: 20px; left: 11px; top: 715px; position: absolute; color: #1D1B1B; font-size: 12px; font-weight: 200; line-height: 16px; letter-spacing: 2.15px;">
                        N/A.
                    </div>
                    <div style="left: 11px; position: relative; top: 620px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div style="width: 146px; height: 45px; color: #0A0101; font-size: 32px; font-family: Bernoru; font-weight: 900; line-height: 51.20px;">JM134</div>
                        <div style="width: 72.07px; height: 20.01px; color: #0A0808; font-size: 12px; font-weight: 200; line-height: 19.20px; letter-spacing: 2.58px;">PROGRAMMER</div>
                    </div>
                </div>
            </div>

            <div class="member finance">
                <img 
                    :src="showFinanceAlt ? financeImg : financeAltImg" 
                    @mouseover="showFinanceAlt = true" 
                    @mouseleave="showFinanceAlt = false" 
                    style="width: auto; height: 250px; border: 1px black solid" 
                    alt="Marketing Member"
                />
                <div v-if="!showFinanceAlt" 
                    style="color: #0E0303; font-size: 12px; left: 0px; font-family: MontSerrat; font-weight: 100; line-height: 19.20px; letter-spacing: 2.58px; word-wrap: break-word">
                    FINANCE
                </div>
                <div v-if="showFinanceAlt" class="member-info" style="width: 294px; height: 107px; left: 51dw; top: 124px; position: absolute">
                    <!-- Contenido info del miembro aquí -->
                    <img style="width: 10.42px; height: 11.03px; left: 335px; top: -42px; position: absolute;" src="@/assets/images/team/Vector.svg"/>
                    <div style="width: 284px; height: 0px; left: 110%; top: -55px; position: absolute; border: 0.30px #0E0303 solid"></div>
                    <div style="width: 120px; height: 20px; left: 118%; top: -47px; position: absolute; color: #1B1818; font-size: 11px; font-weight: 200; line-height: 17.71px; letter-spacing: 0.82px;">@</div>
                    <div style="width: 256px; height: 20px; left: 114%; top: -30px; position: absolute; color: #1D1B1B; font-size: 12px; font-weight: 200; line-height: 16px; letter-spacing: 2.15px;">
                        N/A.
                    </div>
                    <div style="left: 331px; position: relative; top: -120px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div style="width: 146px; height: 45px; color: #0A0101; font-size: 32px; font-family: Bernoru; font-weight: 900; line-height: 51.20px;">ALFON</div>
                        <div style="width: 72.07px; height: 20.01px; color: #0A0808; font-size: 12px; font-weight: 200; line-height: 19.20px; letter-spacing: 2.58px;">FINANCE</div>
                    </div>
                </div>
            </div>

            <div class="member founder">
                <img 
                    :src="showFounderAlt ? founderImg : founderAltImg" 
                    @mouseover="showFounderAlt = true" 
                    @mouseleave="showFounderAlt = false" 
                    style="width: auto; height: 250px; border: 1px black solid" 
                    alt="Marketing Member"
                />
                <div v-if="!showFounderAlt" 
                    style="color: #0E0303; font-size: 12px; left: 0px; font-family: MontSerrat; font-weight: 100; line-height: 19.20px; letter-spacing: 2.58px; word-wrap: break-word">
                    FOUNDER
                </div>
                <div v-if="showFounderAlt" class="member-info" style="width: 294px; height: 107px; left: 51dw; top: 124px; position: absolute">
                    <!-- Contenido info del miembro aquí -->
                    <img style="width: 10.42px; height: 11.03px; left: 335px; top: 255px; position: absolute;" src="@/assets/images/team/Vector.svg"/>
                    <div style="width: 294px; height: 0px; left: 110%; top: 245px; position: absolute; border: 0.30px #0E0303 solid"></div>
                    <div style="width: 120px; height: 20px; left: 118%; top: 252.5px; position: absolute; color: #1B1818; font-size: 11px; font-weight: 200; line-height: 17.71px; letter-spacing: 0.82px;">@gabodds_</div>
                    <div style="width: 256px; height: 20px; left: 114%; top: 270px; position: absolute; color: #1D1B1B; font-size: 12px; font-weight: 200; line-height: 16px; letter-spacing: 2.15px;">
                        Obsessed with anime. 
                        Find me eating Okonomiyaki at KENKA NYC or on the 
                        world wide web playing online video-
                        games.<br/><br/>

                        Favorite anime movie:

                        AKIRA.
                    </div>
                    <div style="left: 331px; position: relative; top: 180px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div style="width: 146px; height: 45px; color: #0A0101; font-size: 32px; font-family: Bernoru; font-weight: 900; line-height: 51.20px;">GABODDS</div>
                        <div style="width: 72.07px; height: 20.01px; color: #0A0808; font-size: 12px; font-weight: 200; line-height: 19.20px; letter-spacing: 2.58px;">FOUNDER</div>
                    </div>
                </div>
            </div>

            <div class="member founder2">
                <img 
                    :src="showFounder2Alt ? founder2Img : founder2AltImg" 
                    @mouseover="showFounder2Alt = true" 
                    @mouseleave="showFounder2Alt = false" 
                    style="width: auto; height: 250px; border: 1px black solid" 
                    alt="Marketing Member"
                />
                <div v-if="!showFounder2Alt" 
                    style="color: #0E0303; font-size: 12px; left: 0px; font-family: MontSerrat; font-weight: 100; line-height: 19.20px; letter-spacing: 2.58px; word-wrap: break-word">
                    DESGINER
                </div>
                <div v-if="showFounder2Alt" class="member-info" style="width: 294px; height: 107px; left: 51dw; top: 414px; position: absolute">
                    <!-- Contenido info del miembro aquí -->
                    <img style="width: 10.42px; height: 11.03px; left: 335px; top: 255px; position: absolute;" src="@/assets/images/team/Vector.svg"/>
                    <div style="width: 284px; height: 0px; left: 110%; top: 245px; position: absolute; border: 0.30px #0E0303 solid"></div>
                    <div style="width: 120px; height: 20px; left: 118%; top: 252.5px; position: absolute; color: #1B1818; font-size: 11px; font-weight: 200; line-height: 17.71px; letter-spacing: 0.82px;">@ N/A.</div>
                    <div style="width: 256px; height: 20px; left: 114%; top: 270px; position: absolute; color: #1D1B1B; font-size: 12px; font-weight: 200; line-height: 16px; letter-spacing: 2.15px;">
                        MFA in Interior Design(PRATT), designing in NYC since 2018 and watches 
                        anime on her free time.<br/> <br/>
                        Favorite animated movie: Spirited Away.
                    </div>
                    <div style="left: 331px; position: relative; top: 180px; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div style="width: 146px; height: 45px; color: #0A0101; font-size: 32px; font-family: Bernoru; font-weight: 900; line-height: 51.20px;">CRISTINA</div>
                        <div style="width: 72.07px; height: 20.01px; color: #0A0808; font-size: 12px; font-weight: 200; line-height: 19.20px; letter-spacing: 2.58px;">DESIGNER</div>
                    </div>
                </div>
            </div>

        </div>

        <p class="odd">ODD STUDIOS, 2024<br/>MADE IN NEW YORK, NY</p>

    </div>
</div>
        

</template>
    
<script setup lang="ts">

// Importa las imágenes para que Vite/Webpack las procese
import marketingImg from '@/assets/images/team/marketing.png'
import marketingAltImg from '@/assets/images/team/marketing_alt.png'
import artistImg from '@/assets/images/team/artist.png'
import artistAltImg from '@/assets/images/team/artist_alt.png'
import programmerImg from '@/assets/images/team/programmer.png'
import programmerAltImg from '@/assets/images/team/programmer_alt.png'
import financeImg from '@/assets/images/team/finance.png'
import financeAltImg from '@/assets/images/team/finance_alt.png'
import founderImg from '@/assets/images/team/founder.png'
import founderAltImg from '@/assets/images/team/founder_alt.png'
import founder2Img from '@/assets/images/team/designer.png'
import founder2AltImg from '@/assets/images/team/designer_alt.png'


import { onMounted, ref } from 'vue'



const showMarketingAlt = ref(false)
const showArtistAlt = ref(false)
const showProgrammerAlt = ref(false)
const showFinanceAlt = ref(false)
const showFounderAlt = ref(false)
const showFounder2Alt = ref(false)

const scrollToSection = () => {
  const section = document.querySelector('#team-section')
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}


    useHead({
    bodyAttrs: {
        class: 'brand-bg-color hide-scroll'
    }
    })

    let showFounderInfo = ref(false)
    let showFounder2Info = ref(false)
    let showMarketingInfo = ref(false)
    let showStrategistInfo = ref(false)
    let showEngineerInfo = ref(false)
    let showDesignerInfo = ref(false)
    let showProgrammerInfo = ref(false)

    function showHide(member: string) {
        switch (member) {
            case 'founder':
                showFounderInfo.value = !showFounderInfo.value
                break;
            case 'marketing':
                showMarketingInfo.value = !showMarketingInfo.value
                break;
            case 'strategist':
                showStrategistInfo.value = !showStrategistInfo.value
                break;
            case 'developer':
                showEngineerInfo.value = !showEngineerInfo.value
                break;
            case 'designer':
                showDesignerInfo.value = !showDesignerInfo.value
                break;
            case 'programmer':
                showProgrammerInfo.value = !showProgrammerInfo.value
                break;
            default:
                break;
        }
    }

</script>
    
<style scoped>

html {
  scroll-behavior: smooth;
  
}


.hide-scroll {
  overflow: visible;
  
  
}

.background {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: contain;

    background: #DDD9DA;

    width: 100%;
    height: 100vh;
    position: fixed ;
    bottom: 0;

    overflow-y: auto;

    /* Hide scrollbar but keep functionality */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}


.brand {
    width: 100%; 
    height: 100%; 
    position: relative; 
    background: #DDD9DA;
    z-index: 1;
}

.brand-info {
    width: 510px; 
    height: 60.3rem; 
    left: 38px; 
    top: 190px; 
    position: absolute; 
    
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    display: flex;

    overflow-y: auto;
    overflow-x: hidden;

    /* Hide scrollbar but keep functionality */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.imageSitting {
    display: none;
    
}

.imageSitting2 {
    display: none;
    
}

.video-container{

    position: absolute;
    width: 60%;
    height: 100%;
    left: 40%;
    top: 0%;
    
    mix-blend-mode: darken;
    object-position: right;
    z-index: -1;
    
}

.content{
    display: flex;
    flex-direction: column; /* Stack image and text vertically */
    flex-grow: 1; /* Allow content area to grow */
    padding-left: 3%; /* Adjust as needed for spacing */
    padding-right: 5%; /* Adjust as needed for spacing */
    padding-top: 19.5%;
    justify-content: space-between; /* Push bottom button to the bottom */
    position: relative; /* For absolute positioning of bottom elements */
    width: 100vw;
}

.brand-title {
    font-family: Bernoru;
    font-size: 7.5vw; /* Responsive font size */
    font-weight: 500;
    color: #222;
    text-transform: uppercase;
    letter-spacing: -0.05em; /* Adjust letter spacing for tight look */
    margin-top: 1.5vw; /* Push title down, adjust based on image overlap */
    margin-left: 3vw; /* Push title right, adjust based on image overlap */
    white-space: nowrap; /* Prevent "ODD" and "STUDIOS" from breaking */
    line-height: 0.8; /* Reduce line height */
    z-index: 2; /* Ensure title is above the image */
    word-spacing: .2em;
}

.brand-txt{
    margin-top: 1vw; /* Space between title and text blocks */
    margin-left: 3vw; /* Align text blocks with title */
    max-width: 700px; /* Limit width of text for readability */
    font-size: 0.9em;
    line-height: 1.6;
    z-index: 2;
    font-family: IMBPlexMono;
    overflow-wrap: break-word;
}


  /* Hide scrollbar but keep functionality for Chrome, Safari and Opera */
.brand-info::-webkit-scrollbar {
  display: none;
}

.brand-info .title {
    width: 441px;
    height: 100px; 
    color: #0A0101; 
    font-size: 64px; 
    font-family: Bernoru; 
    font-weight: 900; 
    line-height: 102.40px;

}

.brand-info .description {
    width: 441px;
}

.team-link {
    width: 25px !important;
    display: inline-block;
    background-color: black;
    color: #F47A7A !important;
}

.team-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "marketing finance"
    "artist founder"
    "programmer founder2";
  gap: 40px; /* espacio entre miembros */
  position: relative;
  margin-top: 1000px;
  width: auto;
  justify-items: left;
  align-items: start;

  margin-left: 1%;
}



.team-info .title {
    width: 441px; 
    height: 100px; 
    left: 0px; 
    top: 0px; 
    position: absolute; 
    color: #0A0101; 
    font-size: 64px; 
    font-family: Bernoru; 
    font-weight: 900; 
    line-height: 102.40px; 
    letter-spacing: -3px;
}

.team-info .title2 {
    width: 441px; 
    height: 100px; 
    left: 0px; 
    top: 0px; 
    position: absolute; 
    color: #0A0101; 
    font-size: 64px; 
    font-family: Bernoru; 
    font-weight: 900; 
    line-height: 102.40px; 
    letter-spacing: -3px;
}

.member {
  mix-blend-mode: luminosity;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transition: mix-blend-mode 0.3s ease;
}

.member:hover {
    mix-blend-mode: unset; 
}

.strategist {
    width: 227px; 
    height: 286px; 
    padding-bottom: 45px; 
    left: 2px; 
    top: 609px; 
    position: absolute; 
    justify-content: flex-start; 
    align-items: center; 
    display: inline-flex;
}

.founder {
    grid-area: founder;
}

.founder {
    grid-area: founder;
}

.founder2 {
    grid-area: founder2;
}

.marketing {


    grid-area: marketing;
}

.artist {


    grid-area: artist;
}

.programmer {

     grid-area: programmer;
}

.finance {

    grid-area: finance;
}


.def{
    color: black;
    font-size: 14.5px; 
    font-family: IMBPlexMono; 
    font-weight: 400; 
    line-height: 18.90px; 
    letter-spacing: 0.1px; 
    word-wrap: break-word; 
    text-align: justify; 
}

.odd{

    display: block;
    color: rgb(0, 0, 0);
    font-family: IMBPlexMono;
    font-size: 0.7rem;
    text-align: center;
    margin-top: 2%;
}

.image{

    display: none;
}

.party {
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-family: Bernoru;
  margin: 0;             /* Elimina márgenes del <p> */
}

.party p {
  margin: 0;             /* Asegura que no haya espacio extra */
}

/* Row that holds the party label and the arrow icon */
.arrow-row{
    display: flex;
    align-items: center;
    gap: 0.6rem;
    position: relative;
    z-index: 2;
    width: 100%;
    justify-content: flex-end; /* align row to the right */
}

.arrowr{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}

.party{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: black;
    text-decoration: none;
    font-size: 20px;
    font-family: Bernoru;
    margin: 0;
}


@media only screen and (max-width: 600px) {

    .background{
        height: 100%;
        overflow-y: hidden;

    }
    
    .brand{
        width: 100%;
        height: 100%;
        overflow-y: auto;

        display: flex;
        flex-direction: column;
    }

    .brand-info{
        overflow-y: hidden;
    }

    .brand-info .description {
        width: 90%;
        margin: 0% 5%;
        margin-top: 5%;
        overflow-wrap: break-word;
        align-content: center;
        display: block;

    

    }
    
    .brand-title{
         font-size: 10.5vw;
         text-align: center;
         word-spacing: normal;
    }
    


    .def{
        color: black;
        font-size: 0.8rem;
        font-family: IMBPlexMono; 
        font-weight: 0; 
        line-height: 0; 
        letter-spacing: 0.1px; 
        word-wrap: normal ; 
        text-align: justify; 
        width: 80%;
        text-align: center;
        padding-top: 5dvh;

    }

    .brand-info .title {

        width: 100%;
        height: 80px;
        text-align: center;
        font-size: 2.1rem;
        font-weight: 1;
        text-shadow: 3px 3px 3px #747474;

    }


    
    .brand-info{
        
        width: 100%;
        height: 100%; 
        font-weight: lighter; 
        top: 8%;
        left: 0%;
        

    }

    .odd{

        display: block;
        color: rgb(0, 0, 0);
        font-family: IMBPlexMono;
        font-size: 0.6rem;
        bottom: 1.5dvh;
        margin: 2% 30%;
        text-align: center;
        position: absolute;
        object-fit: contain;

    }

    .image{
        display: block;
        align-self: center;
        margin: 5% 10%;
        width: 21rem;
        height: 21rem;
        filter: drop-shadow(0 0 5px black);
        position: absolute;
        top: 70%;
    }

    .imageSitting{
        display: none;
    }
    
    .imageSitting2{
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

    .content{
        width: 100%;
        height: 100%;
        padding-top: 10%;
        overflow: hidden;
    }

    .brand-txt{
        font-size: small;
        padding-top: 2dvh;
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

    .video-container{
        display: none;
    }

    .arrowr{
        display: none;
    }

    .theteam{
        display: none;
    }

    .member {
        display: none;
    }

    .member:hover {
        display: none;
    }

    .strategist {
        display: none;
    }

    .founder {
        display: none;
    }

    .marketing {
        display: none;
    }

    .designer {
        display: none;
    }

    .developer {
        display: none;
    }

    .programmer {
        display: none;
    }

    .title2{
        display: none;
    }

    .party{
        display: none;
    }


}



</style>













