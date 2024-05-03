<template>

<div class="background"> 

    <div class="brand">
        <navbar style="z-index: 1;" />    
        <Dropupbttn /> 

        <div class="brand-info">
            <div class="title" style="letter-spacing: -40px';">ODD STUDIOS</div>
            <div class="description" style="text-align: justify;">
                <span style="color: black; font-size: 14px; font-family: IMBPlexMono; font-weight: 400; text-transform: uppercase; line-height: 18.90px; letter-spacing: 1.12px; background-color: #F47A7A;">Odd studios</span>

                <span style="color: black; font-size: 14.5px; font-family: IMBPlexMono; font-weight: 400; line-height: 18.90px; letter-spacing: 1.12px; word-wrap: break-word; text-align: justify; "> 
                    draws inspiration from the vibrant world of retro anime and the eclectic fashion styles from the streets of nyc; celebrating the tapestry of diverse art manga styles through our designs.<br/><br/>
                    But it is not just about recreating art; it's about redefining ownership with the use of blockchain. The studio transcends the digital world to bestow physical ownership and tangible products derived from digital art. 
                    <br/><br/>By transitioning them into the digital realm, we can ensure they are securely held, shared, and celebrated in a manner that is both exceptional and exclusive.             
                </span>

                <a href="#team-section" style="position: relative; z-index: 2; top: -7%; left: 73%;">
                    <ArrowR />
                </a>
                <span style="color: #0A0101; font-size: 18px; font-family: Bernoru; font-weight: 900;
                position: relative;top: -12%; left: 80%;">THE TEAM</span>  
            </div>                  
    
            <div id="team-section" class="team-info">
                <div class="title">THE TEAM</div>

                <div class="member strategist" @mouseover="showHide('strategist')" @mouseleave="showHide('strategist')">
                    <div style="height: 242px; position: relative">
                        <div v-if="!showStrategistInfo" style="left: 0px; top: 223px; position: absolute; color: #0E0303; font-size: 12px; font-family: Roboto; font-weight: 100; line-height: 19.20px; letter-spacing: 2.58px; word-wrap: break-word">STRATEGIST</div>
                        <img style="width: 229.50px; height: 222.87px; left: 0px; top: 0px; position: absolute; border: 1px black solid" src="@/assets/images/team/strategist.png" />
                        <div v-if="showStrategistInfo" class="member-info" style="width: 294px; height: 107px; left: 240px; top: 124px; position: absolute">
                            <!-- <div style="width: 10.42px; height: 11.03px; left: 10.78px; top: 71.86px; position: absolute; background: #0A0101"></div> -->
                            <img style="width: 10.42px; height: 11.03px; left: 10.78px; top: 71.86px; position: absolute; " src="@/assets/images/team/vector.png"/>
                            <div style="width: 294px; height: 0px; left: 0px; top: 61px; position: absolute; border: 0.30px #0E0303 solid"></div>
                            <div style="width: 120px; height: 20px; left: 27px; top: 67px; position: absolute; color: #1B1818; font-size: 11px; font-weight: 200; line-height: 17.71px; letter-spacing: 0.82px;">@labarcaAlfonso</div>
                            <div style="width: 256px; height: 20px; left: 11px; top: 87px; position: absolute; color: #1D1B1B; font-size: 10px; font-weight: 200; line-height: 16px; letter-spacing: 2.15px;">Please. this one first.</div>
                            <div style="left: 11px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                                <div style="width: 146px; height: 45px; color: #0A0101; font-size: 32px; font-family: Bernoru; font-weight: 900; line-height: 51.20px;">ALFON</div>
                                <div style="width: 72.07px; height: 20.01px; color: #0A0808; font-size: 12px; font-weight: 200; line-height: 19.20px; letter-spacing: 2.58px;">STRATEGIST</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="member founder" @mouseover="showHide('founder')" @mouseleave="showHide('founder')">
                    <div style="height: 242px; position: relative">
                        <div v-if="!showFounderInfo" style="left: 0px; top: 223px; position: absolute; color: #0E0303; font-size: 12px; font-family: Roboto; font-weight: 100; line-height: 19.20px; letter-spacing: 2.58px;">FOUNDER</div>
                        <img style="width: 229.50px; height: 222.87px; left: 0px; top: 0px; position: absolute; border: 1px black solid" src="@/assets/images/team/founder.png" />
                        <div v-if="showFounderInfo" class="member-info" style="width: 294px; height: 107px; left: 240px; top: 124px; position: absolute">
                            <!-- <div style="width: 10.42px; height: 11.03px; left: 10.78px; top: 71.86px; position: absolute; background: #0A0101"></div> -->
                            <img style="width: 10.42px; height: 11.03px; left: 10.78px; top: 71.86px; position: absolute; " src="@/assets/images/team/vector.png"/>
                            <div style="width: 294px; height: 0px; left: 0px; top: 61px; position: absolute; border: 0.30px #0E0303 solid"></div>
                            <div style="width: 120px; height: 20px; left: 27px; top: 67px; position: absolute; color: #1B1818; font-size: 11px; font-weight: 200; line-height: 17.71px; letter-spacing: 0.82px;">@gabodds_</div>
                            <div style="width: 256px; height: 20px; left: 11px; top: 87px; position: absolute; color: #1D1B1B; font-size: 10px; font-weight: 200; line-height: 16px; letter-spacing: 2.15px;">A little bit of everything.</div>
                            <div style="left: 11px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                                <div style="width: 146px; height: 45px; color: #0A0101; font-size: 32px; font-family: Bernoru; font-weight: 900; line-height: 51.20px;">GABODDS</div>
                                <div style="width: 72.07px; height: 20.01px; color: #0A0808; font-size: 12px; font-weight: 200; line-height: 19.20px; letter-spacing: 2.58px;">FOUNDER</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="member marketing">
                    <img @mouseover="showHide('marketing')" @mouseleave="showHide('marketing')" style="width: 229.50px; height: 222.87px; border: 1px black solid" src="@/assets/images/team/marketing.png" />
                    <div v-if="!showMarketingInfo" style="color: #0E0303; font-size: 12px; font-family: Roboto; font-weight: 100; line-height: 19.20px; letter-spacing: 2.58px; word-wrap: break-word">MARKETING</div>
                    <div v-if="showMarketingInfo" class="member-info" style="width: 294px; height: 107px; left: 240px; top: 124px; position: absolute">
                        <!-- <div style="width: 10.42px; height: 11.03px; left: 10.78px; top: 71.86px; position: absolute; background: #0A0101"></div> -->
                        <img style="width: 10.42px; height: 11.03px; left: 10.78px; top: 71.86px; position: absolute; " src="@/assets/images/team/vector.png"/>
                        <div style="width: 294px; height: 0px; left: 0px; top: 61px; position: absolute; border: 0.30px #0E0303 solid"></div>
                        <div style="width: 120px; height: 20px; left: 27px; top: 67px; position: absolute; color: #1B1818; font-size: 11px; font-weight: 200; line-height: 17.71px; letter-spacing: 0.82px;">@catu</div>
                        <div style="width: 256px; height: 20px; left: 11px; top: 87px; position: absolute; color: #1D1B1B; font-size: 10px; font-weight: 200; line-height: 16px; letter-spacing: 2.15px;">A master marketer.</div>
                        <div style="left: 11px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                            <div style="width: 146px; height: 45px; color: #0A0101; font-size: 32px; font-family: Bernoru; font-weight: 900; line-height: 51.20px;">CATU</div>
                            <div style="width: 72.07px; height: 20.01px; color: #0A0808; font-size: 12px; font-weight: 200; line-height: 19.20px; letter-spacing: 2.58px;">MARKETING</div>
                        </div>
                    </div>
                </div>
                <div class="member designer" @mouseover="showHide('designer')" @mouseleave="showHide('designer')">
                    <div style="height: 242px; position: relative">
                        <div v-if="!showDesignerInfo" style="left: 0px; top: 223px; position: absolute; color: #0E0303; font-size: 12px; font-family: Roboto; font-weight: 100; line-height: 19.20px; letter-spacing: 2.58px; word-wrap: break-word">DESIGNER</div>
                        <img style="width: 229.50px; height: 222.87px; left: 0px; top: 0px; position: absolute; border: 1px black solid" src="@/assets/images/team/designer.png" />
                        <div v-if="showDesignerInfo" class="member-info" style="width: 294px; height: 107px; left: 240px; top: 124px; position: absolute">
                            <!-- <div style="width: 10.42px; height: 11.03px; left: 10.78px; top: 71.86px; position: absolute; background: #0A0101"></div> -->
                            <img style="width: 10.42px; height: 11.03px; left: 10.78px; top: 71.86px; position: absolute; " src="@/assets/images/team/vector.png"/>
                            <div style="width: 294px; height: 0px; left: 0px; top: 61px; position: absolute; border: 0.30px #0E0303 solid"></div>
                            <div style="width: 120px; height: 20px; left: 27px; top: 67px; position: absolute; color: #1B1818; font-size: 11px; font-weight: 200; line-height: 17.71px; letter-spacing: 0.82px;">@cristina</div>
                            <div style="width: 256px; height: 20px; left: 11px; top: 87px; position: absolute; color: #1D1B1B; font-size: 10px; font-weight: 200; line-height: 16px; letter-spacing: 2.15px;">N/a.</div>
                            <div style="left: 11px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                                <div style="width: 146px; height: 45px; color: #0A0101; font-size: 32px; font-family: Bernoru; font-weight: 900; line-height: 51.20px;">CRISTINA</div>
                                <div style="width: 72.07px; height: 20.01px; color: #0A0808; font-size: 12px; font-weight: 200; line-height: 19.20px; letter-spacing: 2.58px;">DESIGNER</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="member developer" @mouseover="showHide('developer')" @mouseleave="showHide('developer')">
                    <div style="height: 242px; position: relative">
                        <div v-if="!showEngineerInfo" style="left: 0px; top: 223px; position: absolute; color: #0E0303; font-size: 12px; font-family: Roboto; font-weight: 100; line-height: 19.20px; letter-spacing: 2.58px; word-wrap: break-word">ENGINEER</div>
                        <img style="width: 229.50px; height: 222.87px; left: 0px; top: 0px; position: absolute; border: 1px black solid" src="@/assets/images/team/developer.png" />
                        <div v-if="showEngineerInfo" class="member-info" style="width: 294px; height: 107px; left: 240px; top: 124px; position: absolute">
                            <!-- <div style="width: 10.42px; height: 11.03px; left: 10.78px; top: 71.86px; position: absolute; background: #0A0101"></div> -->
                            <img style="width: 10.42px; height: 11.03px; left: 10.78px; top: 71.86px; position: absolute; " src="@/assets/images/team/vector.png"/>
                            <div style="width: 294px; height: 0px; left: 0px; top: 61px; position: absolute; border: 0.30px #0E0303 solid"></div>
                            <div style="width: 120px; height: 20px; left: 27px; top: 67px; position: absolute; color: #1B1818; font-size: 11px; font-weight: 200; line-height: 17.71px; letter-spacing: 0.82px;">@filipedc</div>
                            <div style="width: 256px; height: 20px; left: 11px; top: 87px; position: absolute; color: #1D1B1B; font-size: 10px; font-weight: 200; line-height: 16px; letter-spacing: 2.15px;">N/a.</div>
                            <div style="left: 11px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                                <div style="width: 146px; height: 45px; color: #0A0101; font-size: 32px; font-family: Bernoru; font-weight: 900; line-height: 51.20px;">FILIPE</div>
                                <div style="width: 72.07px; height: 20.01px; color: #0A0808; font-size: 12px; font-weight: 200; line-height: 19.20px; letter-spacing: 2.58px;">ENGINEER</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="member programmer" @mouseover="showHide('programmer')" @mouseleave="showHide('programmer')">
                    <div style="height: 242px; position: relative">
                        <div v-if="!showProgrammerInfo" style="left: 0px; top: 223px; position: absolute; color: #0E0303; font-size: 12px; font-family: Roboto; font-weight: 100; line-height: 19.20px; letter-spacing: 2.58px; word-wrap: break-word">PROGRAMMER</div>
                        <img style="width: 229.50px; height: 222.87px; left: 0px; top: 0px; position: absolute; border: 1px black solid" src="@/assets/images/team/programmer.png" />
                        <div v-if="showProgrammerInfo" class="member-info" style="width: 294px; height: 107px; left: 240px; top: 124px; position: absolute">
                            <!-- <div style="width: 10.42px; height: 11.03px; left: 10.78px; top: 71.86px; position: absolute; background: #0A0101"></div> -->
                            <img style="width: 10.42px; height: 11.03px; left: 10.78px; top: 71.86px; position: absolute; " src="@/assets/images/team/vector.png"/>
                            <div style="width: 294px; height: 0px; left: 0px; top: 61px; position: absolute; border: 0.30px #0E0303 solid"></div>
                            <div style="width: 120px; height: 20px; left: 27px; top: 67px; position: absolute; color: #1B1818; font-size: 11px; font-weight: 200; line-height: 17.71px; letter-spacing: 0.82px;">@jm134</div>
                            <div style="width: 256px; height: 20px; left: 11px; top: 87px; position: absolute; color: #1D1B1B; font-size: 10px; font-weight: 200; line-height: 16px; letter-spacing: 2.15px;">N/a.</div>
                            <div style="left: 11px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                                <div style="width: 200px; height: 45px; color: #0A0101; font-size: 32px; font-family: Bernoru; font-weight: 900; line-height: 51.20px;">JUAN MIGUEL</div>
                                <div style="width: 72.07px; height: 20.01px; color: #0A0808; font-size: 12px; font-weight: 200; line-height: 19.20px; letter-spacing: 2.58px;">PROGRAMMER</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="width: 20px;  height: 20px; background-color: #0A0101; top: 8900%; position: relative; opacity: 0%;"></div>

            </div>
            
            
        </div>
        
    

        <div class="video-container">
            
            <img src="@/assets/images/test.png"  alt=""/>  <!--style="height: 750px;"  -->
            <!-- <video id="myVideo" src="@/assets/videos/brand-video.mp4" autoplay loop muted>
                Your browser does not support the video tag.
            </video> -->
        </div>  

    </div>

</div>

</template>
    
<script setup lang="ts">

useHead({
  bodyAttrs: {
    class: 'brand-bg-color hide-scroll'
  }
})

let showFounderInfo = ref(false)
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

.video-container {
    
    top: 0px; 
    position: relative;

    width: 70%;
    height: 70%;
    position: fixed ;
    bottom: 0;
    
    z-index: -1;
    left: 40%;

}

   /* height: 750px; */
/* .video-container {
    left: 497px; 
    top: 0px; 
    position: absolute;
}
#myVideo {
  width: 100%;
  height: 100%;
  border: none;
  outline: unset;
  box-shadow: none;
} */

.background {
    background-image: url('assets/images/swordfront1.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: contain;
    

    width: 100%;
    height: 100%;
    position: fixed ;
    bottom: 0;
    
    z-index: 4;
}

.brand {
    width: 100%; 
    height: 100%; 
    position: relative; 
    background: #DDD9DA;
    z-index: 1;
}

.brand-info {
    width: 459px; 
    height: 650px; 
    left: 38px; 
    top: 190px; 
    position: absolute; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    display: flex;

    overflow-y: auto;

    /* Hide scrollbar but keep functionality */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
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
    width: 441px; 
    height: 656px; 
    position: relative;
    margin-top: 400px;

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

.member {
    mix-blend-mode: luminosity; 
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
    width: 227px; 
    height: 286px; 
    padding-bottom: 45px; 
    left: 1px; 
    top: 108px; 
    position: absolute; 
    justify-content: flex-start; 
    align-items: center; 
    display: inline-flex;
}

.marketing {
    width: 245px; 
    /* height: 295px; 
    padding-bottom: 54px;  */
    padding-right: 15.50px; 
    left: 1px; 
    top: 361px; 
    position: absolute; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 0.13px; 
    display: inline-flex;
}

.designer {
    width: 227px; 
    height: 286px; 
    padding-bottom: 45px; 
    left: 1px;
    top: 1101px; 
    position: absolute;
    justify-content: flex-start; 
    align-items: center; 
    display: inline-flex;
}

.developer {
    width: 227px; 
    height: 286px; 
    padding-bottom: 45px; 
    left: 1px; 
    top: 858px; 
    position: absolute; 
    justify-content: flex-start; 
    align-items: center; 
    display: inline-flex;
}

.programmer {
    width: 227px; 
    height: 286px; 
    padding-bottom: 45px; 
    left: 1px; 
    top: 1345px; 
    position: absolute; 
    justify-content: flex-start; 
    align-items: center; 
    display: inline-flex;
}

</style>












<!-- <template> -->
    <!-- <div class="" style="z-index: 0;">
        <video id="myVideo" src="@/assets/videos/brand-video.mp4" autoplay loop muted>
            Your browser does not support the video tag.
        </video>
    </div> -->

    <!-- <div class="brand container-fluid">
        <div class="row">
            <div class="col">
                yoyo
            </div>
            <div class="col pe-0">
                <video id="myVideo" src="@/assets/videos/brand-video.mp4" autoplay loop muted>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div> -->
        <!-- <div style="color: white; font-size: 64px; font-family: Bernoru; font-weight: 900; line-height: 102.40px;">ODD STUDIOS</div> -->
    <!-- </div>
</template> -->

<!-- <script setup lang="ts">

</script>

<style scoped>
#myVideo {
  width: 100%;
  height: 100%;

  border: none;
  outline: unset;
  box-shadow: none;
}
</style>

<style> 
maybe look into using shared layout for each page?
body {
    background-color: #DDD9DA;
    mix-blend-mode: darken;
}
</style> -->