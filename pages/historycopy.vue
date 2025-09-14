<template>

        <div style="height: 100%; width: 100%; position: relative; ">

          <Dropupbttn class="dropupbttn"  style="z-index: 4; position: fixed; top: 88.5%;" />

            <section id="background" class="background">

              <navbar class="navbar" style="z-index: 4;" />
                    
                    <menubttn style="z-index: 3;overflow-y: hidden;"/> 
                    <navbar2 style="z-index: 4; position: absolute; top: 3%;" /> 


                    <div class="title" >TALES OF TATSU</div>

                        <div class="containerHistory">
                            
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 475px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 475px; height: 19.58px; background-color: #1D1B1B; "></div>

                            <span class="paragraph" style="z-index: 2; bottom: 19.8rem; left: 7px; position: relative; color: white; font-family: IMBPlexMono; font-size: 12.5px; font-style: regular ;font-weight: 400; line-height: 25px; letter-spacing: 1.20px; word-wrap: none;"> 
                                                 <a  v-if="showFirstText" @click="showText1" style="text-decoration: none; color: white; cursor: pointer; "> I- &nbsp;&nbsp;Origins </a>
                                            <br/><a  v-if="showFirstText" @click="showText3" style="text-decoration: none; color: white; cursor: pointer; "> II- &nbsp;Philosophy </a>
                                            <br/><a  v-if="showFirstText" @click="showText4" style="text-decoration: none; color: white; cursor: pointer; "> III- Way of life </a>
                                            <br/><a  v-if="showFirstText" @click="showText5" style="text-decoration: none; color: white; cursor: pointer; ">IV- &nbsp;Relation to the world</a>
                                            <br/><a  v-if="showFirstText" @click="showText6" style="text-decoration: none; color: white; cursor: pointer; ">V- &nbsp;&nbsp;Powers</a>
                                            <br/><a  v-if="showFirstText" @click="showText7" style="text-decoration: none; color: white; cursor: pointer; ">VI- &nbsp;The future</a>
                                    
                            </span>

                                <div v-if="showSecondText" class="paragraph" style="z-index: 2;  left: 7px; position: relative; color: white; bottom: 29.58rem; font-family: IMBPlexMono; font-size: 12.5px;  font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content; width: 98%;"> 
                                    I- Origins  <br/> 
                                    Long before the great collapse and the rise of the citadel,
                                    the Tatsu were guardians of traditions that dated back millennials.
                                    nestled within the folds of the sacred mountain named “Tobirama”,
                                    they were the last vestiges of an ancient civilization that stood as
                                    a testament to the enduring spirit of humanity. Their village, protected
                                    by the mountain's treacherous terrain, remained concealed from the 
                                    prying eyes of technology and the modern world. the Tatsu  are said 
                                    to be descendants of the dragons.
                                        
                                </div>
                            
                                <div v-if="showSecondText" @click="showText2" id="aleft" style="cursor: pointer; bottom: 447px; left: 85%; position: relative; ">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white; " />
                                    </a>
                                </div>

                                <div class="paragraph" v-if="showThirdText" style="z-index: 2; left: 7px; position: relative; color: white; bottom: 29.58rem; font-family: IMBPlexMono; font-size: 12.5px; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                    II- Philosophy  <br/> 
                                    Believers in harmony, balance, and the interconnectedness
                                    of all things, the Tatsu are deeply spiritual. They abide by the teachings 
                                    of the dragon – a symbol of strength, wisdom and resilience. For them,
                                    the dragon is not just a mythical creature but a representation of the life
                                    force that binds every living being
                                    
                                 </div>
                        
                                <div v-if="showThirdText" id="aleft" @click="showText3" style="cursor: pointer; bottom: 447px; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg" beat style="color: white;" />
                                    </a>
                                </div>


                                <div class="paragraph" v-if="showForthText" style="z-index: 2; left: 7px; position: relative; color: white; bottom: 29.58rem; font-family: IMBPlexMono; font-size: 12.5px; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content; width: 97%;"> 
                                    III- Way of life  <br/> 
                                    Shunning most modern conveniences, the tatsu are masters of 
                                    the old ways. Their homes are built from materials found on the sacred mountain, and 
                                    they cultivate the land for sustenance. Through rigorous training, discipline, and 
                                    meditation, they become legendary samurais, mastering both the martial arts and the 
                                    art of governance with a gentle yet firm hand. 
                                      
                                </div>
                                
                                <div id="aleft" v-if="showForthText" @click="showText4" style="cursor: pointer; bottom: 447px;  left: 85%; position: relative;">
                                    <a class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg" beat style="color: white;" />
                                    </a>
                                </div>
                                    

                                <div class="paragraph" v-if="showFifthText" style="z-index: 2;  left: 7px; position: relative; color: white; bottom: 29.58rem; font-family: IMBPlexMono; font-size: 12.5px; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; width: 99%; height: fit-content;"> 
                                    IV- Relation to the world <br/> 
                                    With the world in chaos below, many  
                                    have sought refuge in legends, and tales of the dragon-riding 
                                    samurais of the sacred mountain spread far and wide. While 
                                    the Tatsu traditionally kept to themselves, the changing world
                                    has made it harder for them to remain completely isolated. They 
                                    have sometimes acted as mediators between warring factions, 
                                    their reputation affording them a respect few could claim. 
                                    however, they've been cautious of the citadel and its advances,
                                    viewing its existence as a sign of the world's imbalance.
                                    
                                </div>
                                
                                <div id="aleft" v-if="showFifthText" @click="showText5" style="cursor: pointer; bottom: 447px; left: 85%; position: relative;">
                                    <a   class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg" beat style="color: white;" />
                                    </a>
                                </div>

                                <div class="paragraph" v-if="showSixthText" style="z-index: 2; bottom: 29.58rem; left: 7px; position: relative; color: white; font-family: IMBPlexMono; font-size: 12.5px; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content; width: 98%;"> 
                                    V-   Powers  <br/> 
                                    Their combat style is fluid, drawing inspiration from the movements of the dragon,
                                    making it unpredictable and deadly. Their swords, forged from the rare minerals 
                                    of the sacred mountain, are said to possess the spirit of the dragon, Making 
                                    them exceptionally durable and sharp. Most of the Tatsu use an ancient energy 
                                    called “ryūsei” that gained them unparalleled physical abilities and commanding 
                                    the elements, this energy is also said to transform their bodies but it is  only a legend.
                                         
                                </div>
                                
                                <div id="aleft" v-if="showSixthText" @click="showText6" style="cursor: pointer; bottom: 447px; left: 85%; position: relative;">
                                    <a   class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg" beat style="color: white;" />
                                    </a>
                                </div>

                                
                                <div class="paragraph" v-if="showSeventhText" style="z-index: 2; bottom: 29.58rem; left: 7px; position: relative; color: white; font-family: IMBPlexMono; font-size: 12.5px; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content; width: 97%;"> 
                                    VI-  The future <br/>
                                    While most of the tatsu remain largely neutral, with exception of those 
                                    already living on the iron city, their wisdom and combat skills are sought 
                                    after. Rumors abound that they possess an ancient relic with the power to 
                                    bring harmony back to the world, making them a potential ally, or threat, 
                                    to any faction. As whispers of a new rebellion grow louder, many wonder if 
                                    the time has come for the Tatsu to descend from their sacred sanctuary and 
                                    play a decisive role in the fate of the world.
                                     
                                </div>
                            
                                <div id="aleft" v-if="showSeventhText" @click="showText7" style="cursor: pointer; bottom: 447px; left: 85%; position: relative;">
                                    <a   class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg" beat style="color: white;" />
                                    </a>
                                </div>

                        </div>

                        <p class="moretales" style="font-family: Bernoru; color: #1D1B1B; font-size: larger; margin-top: -8.5rem;
                        position: relative ; margin-left: 26rem; z-index: 2;" v-if="showFirstText" >MORE TALES</p>

                        <div id="aup" v-if="showFirstText" >
                           <a  href="#background2" class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aup" icon="fa-solid fa-arrow-down" size="lg"  style="color: white;" />
                           </a>
                        </div>
                       
                       
            </section> 


            <section id="background2" class="background2">

                
                <div class="title2">TALES OF NOHIMA</div>
                
                    <div class="containerHistory2">

                                        
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>
                            <div style="width: 470px; height: 7px; background-color: #ffffff00; "></div>
                            <div style="width: 470px; height: 19.58px; background-color: #1D1B1B; "></div>


                            <span class="paragraph" style="z-index: 2; bottom: 19.73rem; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-style: regular ;font-weight: 400; line-height: 25px; letter-spacing: 1.20px; word-wrap: none;"> 
                                                 <a  v-if="showEigthText" @click="showText8" style="text-decoration: none; color: white; cursor: pointer;"> I- &nbsp;&nbsp;&nbsp;Prelude to the fall </a>
                                            <br/><a  v-if="showEigthText" @click="showText10" style="text-decoration: none; color: white; cursor: pointer; "> II- &nbsp;&nbsp;Construction of the citadel </a>
                                            <br/><a  v-if="showEigthText" @click="showText11" style="text-decoration: none; color: white; cursor: pointer; "> III- &nbsp;The great collapse</a>
                                            <br/><a  v-if="showEigthText" @click="showText12" style="text-decoration: none; color: white; cursor: pointer; "> IV- &nbsp;&nbsp;Emergence of factions</a>
                                            <br/><a  v-if="showEigthText" @click="showText13" style="text-decoration: none; color: white; cursor: pointer; "> V- &nbsp;&nbsp;&nbsp;The ascendance of the citadel</a>
                                            <br/><a  v-if="showEigthText" @click="showText14" style="text-decoration: none; color: white; cursor: pointer;"> VI- &nbsp; Revolt & resistance</a>
                                            <br/><a  v-if="showEigthText" @click="showText15" style="text-decoration: none; color: white; cursor: pointer;"> VII- &nbsp;The peace accords</a>
                                            <br/><a  v-if="showEigthText" @click="showText16" style="text-decoration: none; color: white; cursor: pointer;"> VIII- The present day</a>
                                    
                            </span>

                            <div v-if="showNinthText" class="paragraph" style="z-index: 2; bottom: 32.85rem; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                   I-    Prelude to the fall <br/>
                                   On the City of Nohima, by the mid-21st century, unchecked technological 
                                   advancements and massive global inequality had reached a tipping point. 
                                   As economic disparity deepened, the planet was choked by pollution and 
                                   climate catastrophes. Mega-corporations with the help of ai held more 
                                   power than nations, leading to a world where the wealth of a few 
                                   superseded the needs <br/> of the many.
                                       
                                </div>
                            
                                <div v-if="showNinthText" @click="showText9" id="aleft" style="cursor: pointer; bottom: 32.9rem; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showTenthText" class="paragraph" style="z-index: 2; bottom: 32.85rem; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  II-   Construction of the citadel<br/>
                                  In the late 21st century, an alliance of the world's wealthiest individuals 
                                  and corporations unveiled their magnum opus: The Citadel. This massive flying
                                  city, held aloft by anti-gravity technology, became a sanctuary for the elite.
                                  Equipped with sustainable resources and cutting-edge technology, it symbolized
                                  a world above the chaos.
                                        
                                </div>
                            
                                <div v-if="showTenthText" @click="showText10" id="aleft" style="cursor: pointer; bottom: 32.9rem; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showEleventhText" class="paragraph" style="z-index: 2; bottom: 32.85rem; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  III-  The great collapse <br/>  
                                  The global economy, already teetering on the brink, finally shattered. Hyperinflation, 
                                  mass unemployment, and collapsing infrastructure led to riots and breakdowns in social 
                                  order. Below the citadel, the world crumbled.
                                       
                                </div>
                            
                                <div v-if="showEleventhText" @click="showText11" id="aleft" style="cursor: pointer; bottom: 32.9rem; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showTwelfthText" class="paragraph" style="z-index: 2; bottom: 32.85rem; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  IV-   Emergence of factions <br/>
                                  In the post-collapse world, as governments disintegrated, survivors banded together into
                                  factions for safety and resources. The slums beneath the shadow of the citadel became a 
                                  patchwork of territories, each governed by its own rules and leaders. Gangs, technocrats, 
                                  and former military units all staked their claims.
                                        
                                </div>
                            
                                <div v-if="showTwelfthText" @click="showText12" id="aleft" style="cursor: pointer; bottom: 32.9rem; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showThirteenthText" class="paragraph" style="z-index: 2; bottom: 32.85rem; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  V-    The ascendance of the citadel <br/> 
                                  The residents of the citadel, watching the world decay below them, realized that to preserve 
                                  their way of life, they needed to intervene. Leveraging their technological superiority, they 
                                  began to offer protection, resources, and order to select factions below. In exchange, these 
                                  factions provided resources, labor, and loyalty.
                                       
                                </div>
                            
                                <div v-if="showThirteenthText" @click="showText13" id="aleft" style="cursor: pointer; bottom: 32.9rem; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showFourteenthText" class="paragraph" style="z-index: 2; bottom: 32.85rem; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  VI-   Revolt & resistance <br/>
                                  Not all factions were willing to bow to the citadel's dominion. rebel groups formed, some 
                                  aiming to topple the flying city and its overlords, while others sought to build a new world
                                  order entirely. Tensions between the citadel-backed factions and the rebels frequently 
                                  erupted into skirmishes and all-out warfare.
                                        
                                </div>
                            
                                <div v-if="showFourteenthText" @click="showText14" id="aleft" style="cursor: pointer; bottom: 32.9rem; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showFifteenthText" class="paragraph" style="z-index: 2; bottom: 32.85rem; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  VII-  The peace accords <br/> 
                                  After years of fighting, key leaders from the citadel and several major factions convened 
                                  for peace talks. the resulting peace accords led to a fragile truce. The citadel would provide
                                  technology, infrastructure, and security, while the factions would govern their territories 
                                  autonomously, paying a "tribute" to the flying city.   
                                        
                                </div>
                            
                                <div v-if="showFifteenthText" @click="showText15" id="aleft" style="cursor: pointer; bottom: 32.9rem; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>

                                <div v-if="showSixteenthText" class="paragraph" style="z-index: 2; bottom: 32.85rem; left: 7px; position: relative; color: white; font-size: 12.5px; font-family: IMBPlexMono; font-weight: 400; 
                                line-height: 26.5px; letter-spacing: 1.20px; word-wrap: normal; height: fit-content; height: fit-content;width: 98%;"> 
                                  VIII- The present day <br/> 
                                  The world is now a blend of old and new. <br/> 
                                  The citadel, shining above, continues to symbolize both hope and oppression, depending 
                                  on who you ask. the factions, ever-vigilant and ever-scheming, navigate a complex web of 
                                  alliances and rivalries. And in the shadows, whispers of a new rebellion grow louder. 
                                       
                                </div>
                            
                                <div v-if="showSixteenthText" @click="showText16" id="aleft" style="cursor: pointer; bottom: 32.9rem; left: 85%; position: relative;">
                                    <a  class="ms-2 me-2 team-link link-dark text-center">
                                        <font-awesome-icon class="aleft" icon="fa-solid fa-arrow-left" size="lg"  style="color: white;" />
                                    </a>
                                </div>
                          </div>



                    <p class="odd">ODD STUDIOS, 2024<br/>MADE IN NEW YORK, NY</p>
                
            </section>


      <section class="background3">

            <navbar class="navbar" style="z-index: 4;" />
                  <menubttn style="z-index: 3;overflow-y: hidden; position: absolute; "/> 
                  <navbar2 style="z-index: 4; position: absolute; top: 3%;" /> 


      <div class="dragon-img">
        <img src="@/assets/images/dragonMobile.png" style="width: 100%;height: 100%; object-position: center; position: fixed; top: 0%;">
      </div>


      <div class="title" >TALES OF TATSU</div>

         <div class="content">


              <h3 class="titles">ORIGINS:</h3> 
              <p class="paragraphs">Long before the great collapse and the rise of the citadel, 
                the Tatsu were guardians of traditions that dated back millennials. 
                nestled within the folds of the sacred mountain named “tobirama”, 
                they were the last vestiges of an ancient civilization that stood 
                as a testament to the enduring spirit of humanity. Their village, 
                protected by the mountain's treacherous terrain, remained concealed 
                from the prying eyes of technology and the modern world. The tatsu  
                are said to be descendants of the dragons.
              </p>

              <h3 class="titles"><br/>PHYLOSOPHY:</h3> 
              <p class="paragraphs">Believers in harmony, balance, and the interconnectedness
                of all things, the Tatsu are deeply spiritual. they abide by the teachings of 
                the dragon – a symbol of strength, wisdom, and resilience. For them, the dragon 
                is not just a mythical creature but a representation of the life force that binds 
                every living being.

              </p>

              <h3 class="titles"><br/>WAY OF LIFE:</h3> 
              <p class="paragraphs">Shunning most modern conveniences, the tatsu are masters 
                of the old ways. Their homes are built from materials found on the sacred mountain, 
                and they cultivate the land for sustenance. Through rigorous training, discipline, 
                and meditation, they become legendary samurais, mastering both the martial arts and 
                the art of governance with a gentle yet firm hand.

              </p>

              <h3 class="titles"><br/>RELATION TO THE WORLD:</h3> 
              <p class="paragraphs">With the world in chaos below, many have sought refuge in legends, 
                and tales of the dragon-riding samurais of the sacred mountain spread far and wide. While 
                the Tatsu traditionally kept to themselves, the changing world has made it harder for them 
                to remain completely isolated. they have sometimes acted as mediators between warring factions, 
                their reputation affording them a respect few could claim. However, they've been cautious of the 
                citadel and its advances, viewing its existence as a sign of the world's imbalance.

              </p>

              <h3 class="titles"><br/>POWERS:</h3> 
              <p class="paragraphs">In battle, a Tatsu samurai is a force to be reckoned with. Their combat 
                style is fluid, drawing inspiration from the movements of the dragon, making it unpredictable and 
                deadly. Their swords, forged from the rare minerals of the sacred mountain, are said to possess 
                the spirit of the dragon, making them exceptionally durable and sharp. Most of the tatsu use an 
                ancient energy called “ryūsei” that gives them unparalleled physical abilities and commanding the 
                elements, this energy is also said to transform their bodies but it is only a legend.

              </p>

              <h3 class="titles"><br/>THE FUTURE:</h3> 
              <p class="paragraphs">While most of the Tatsu remain largely neutral, with the exception of those
              already living on the iron city, their wisdom and combat skills are sought after. rumors abound that
              they possess an ancient relic with the power to bring harmony back to the world, making them a 
              potential ally, or threat, to any faction. As whispers of a new rebellion grow louder, many wonder 
              if the time has come for the tatsu to descend from their sacred sanctuary and play a decisive role 
              in the fate of the world.<br/><br/><br/><br/>

              </p>

            <br/><br/>



            <div style="border-top: 0.5px solid white; width: 90%; height: 0.5%; margin: 5%;"> </div>



            <br/><br/>

          <p class="title2">TALES OF NOHIMA</p>

              <br/><br/>

              <h3 class="titles">ORIGINS:</h3> 
                      <p class="paragraphs">Long before the great collapse and the rise of the citadel, 
                        The Tatsu were guardians of traditions that dated back millennials. 
                        nestled within the folds of the sacred mountain named “Tobirama”, 
                        they were the last vestiges of an ancient civilization that stood 
                        as a testament to the enduring spirit of humanity. Their village, 
                        protected by the mountain's treacherous terrain, remained concealed 
                        from the prying eyes of technology and the modern world. The tatsu  
                        are said to be descendants of the dragons.
                      </p>

                      <h3 class="titles"><br/>PHYLOSOPHY:</h3> 
                      <p class="paragraphs">Believers in harmony, balance, and the interconnectedness
                        of all things, the tatsu are deeply spiritual. they abide by the teachings of 
                        the dragon – a symbol of strength, wisdom, and resilience. For them, the dragon 
                        is not just a mythical creature but a representation of the life force that binds 
                        every living being.

                      </p>

                      <h3 class="titles"><br/>WAY OF LIFE:</h3> 
                      <p class="paragraphs">Shunning most modern conveniences, the tatsu are masters 
                        of the old ways. Their homes are built from materials found on the sacred mountain, 
                        and they cultivate the land for sustenance. Through rigorous training, discipline, 
                        and meditation, they become legendary samurais, mastering both the martial arts and 
                        the art of governance with a gentle yet firm hand.

                      </p>

                      <h3 class="titles"><br/>RELATION TO THE WORLD:</h3> 
                      <p class="paragraphs">With the world in chaos below, many have sought refuge in legends, 
                        and tales of the dragon-riding samurais of the sacred mountain spread far and wide. While 
                        the tatsu traditionally kept to themselves, the changing world has made it harder for them 
                        to remain completely isolated. they have sometimes acted as mediators between warring factions, 
                        their reputation affording them a respect few could claim. However, they've been cautious of the 
                        citadel and its advances, viewing its existence as a sign of the world's imbalance.

                      </p>

                      <h3 class="titles"><br/>POWERS:</h3> 
                      <p class="paragraphs">In battle, a tatsu samurai is a force to be reckoned with. Their combat 
                        style is fluid, drawing inspiration from the movements of the dragon, making it unpredictable and 
                        deadly. Their swords, forged from the rare minerals of the sacred mountain, are said to possess 
                        the spirit of the dragon, making them exceptionally durable and sharp. Most of the tatsu use an 
                        ancient energy called “ryūsei” that gives them unparalleled physical abilities and commanding the 
                        elements, this energy is also said to transform their bodies but it is  only a legend.

                      </p>

                      <h3 class="titles"><br/>THE FUTURE:</h3> 
                      <p class="paragraphs">While most of the tatsu remain largely neutral, with the exception of those
                      already living on the iron city, their wisdom and combat skills are sought after. rumors abound that
                      they possess an ancient relic with the power to bring harmony back to the world, making them a 
                      potential ally, or threat, to any faction. As whispers of a new rebellion grow louder, many wonder 
                      if the time has come for the tatsu to descend from their sacred sanctuary and play a decisive role 
                      in the fate of the world.<br/><br/><br/>

                      </p>

                      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>



                      <p class="odd">ODD STUDIOS, 2024<br/>MADE IN NEW YORK, NY</p>

                      <div class="city-img">
                          <img src="@/assets/images/blackNwhiteCity-transparent-background.png">
                      </div>
                      
        </div>
         
</section> 



     </div>   

</template>


<script >

export default {
  data() {
    return {
      showFirstText: true,
      showSecondText: false,
      showThirdText: false,
      showForthText: false,
      showFifthText: false,
      showSixthText: false,
      showSeventhText: false,

      showEigthText: true,
      showNinthText: false,
      showTenthText: false,
      showEleventhText: false,
      showTwelfthText: false,
      showThirteenthText: false,
      showFourteenthText: false,
      showFifteenthText: false,
      showSixteenthText: false,
    };
  },
  methods: {
    showText1() {
      this.showFirstText = !this.showFirstText;
      this.showSecondText = true;
    },
    showText2() {
      this.showSecondText = !this.showSecondText;
      this.showFirstText = true;
    }, 
    showText3() {
      this.showThirdText = !this.showThirdText;
      this.showFirstText = !this.showFirstText;
    },
    showText4() {
      this.showForthText = !this.showForthText;
      this.showFirstText = !this.showFirstText;
    },
    showText5() {
      this.showFifthText = !this.showFifthText;
      this.showFirstText = !this.showFirstText;
    },
    showText6() {
      this.showSixthText = !this.showSixthText;
      this.showFirstText = !this.showFirstText;
    },showText7() {
      this.showSeventhText = !this.showSeventhText;
      this.showFirstText = !this.showFirstText;
    },

    showText8() {
      this.showEigthText = !this.showEigthText;
      this.showNinthText = true;
    },   
    showText9() {
      this.showNinthText = !this.showNinthText;
      this.showEigthText = true;
    }, 
    showText10() {
      this.showTenthText = !this.showTenthText;
      this.showEigthText = !this.showEigthText;
    },   
    showText11() {
      this.showEleventhText = !this.showEleventhText;
      this.showEigthText = !this.showEigthText;
    }, 
    showText12() {
      this.showTwelfthText = !this.showTwelfthText;
      this.showEigthText = !this.showEigthText;
    }, 
    showText13() {
      this.showThirteenthText = !this.showThirteenthText;
      this.showEigthText = !this.showEigthText;
    }, 
    showText14() {
      this.showFourteenthText = !this.showFourteenthText;
      this.showEigthText = !this.showEigthText;
    }, 
    showText15() {
      this.showFifteenthText = !this.showFifteenthText;
      this.showEigthText = !this.showEigthText;
    }, 
    showText16() {
      this.showSixteenthText = !this.showSixteenthText;
      this.showEigthText = !this.showEigthText;
    }, 

  },
};



</script>


<style scoped>



#aup{

    background-color: #1D1B1B;
    width: 30.5px;
    height: 30px;
    margin-top: -2.3rem;
    margin-left: 23.5rem;
    position: relative;
    
}

.aup{

  position: relative;
  animation-name: example;
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  
}

@keyframes example {
  0%   {left:0px; top:0px;}
  25%  {left:0px; top:1%;}
  50%  {left:0px; top:5%;}
  75%  {color: pink;left:0px; top:1.05%;}
  100% {color: pink; left:0%; top:0px;}
}


#adown{

    background-color: #1D1B1B;
    width: 30px;
    height: 30px;
    top:-50%;
    left: 70%;
    

    position: relative;
    z-index: 2;
}

.aleft{

    animation-name: movement;
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
    position: relative;

}

.title{

  color: rgb(20, 20, 20); 
  font-size: 64px; 
  font-family: Bernoru; 
  font-weight: 900; 
  line-height: 50.40px; 
  box-shadow: black 3px; 
  padding-left: 5%; 
  padding-top: 5%; 

}

.title2{

  color: rgb(20, 20, 20); 
  font-size: 64px; 
  font-family: Bernoru; 
  font-weight: 900; 
  line-height: 50.40px; 
  padding-left: 4.5%; 
  padding-top: 220px;

}

@keyframes movement {
    0%  {left:0px; top:0px;}
    25%  {left:-1%; top:0px;}
    50%  {left:-1.08%; top:0px;}
    75%  {left:-0.1%; top:0px;}
    100% {left:0%; top:0px;}
    }

.background {
  
    background-image:  linear-gradient(rgba(255, 255, 255, 0.382), rgba(220, 220, 220, 0.36)), url('@/assets/images/dragonV2.png');
    background-size: cover;
    background-position: center;
    background-position-y: 90%;
    background-repeat: no-repeat;
    background-color: #DDD9DA;
    
    


    width: 100%;
    height: 100vh;
    position: relative;


    z-index: 0;
    
}

.background2 {
    background-image: linear-gradient(rgba(223, 223, 223, 0.382), rgba(227, 227, 227, 0.36)), url('@/assets/images/blackNwhiteCity-transparent-background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #DDD9DA;
    


    width: 100%;
    height: 100vh;
    position: absolute;


    z-index: 0;
    
    
}


.containerHistory{

    width: 479px; 
    height: auto; 
    left: 4%; 
    top: 25px;
    position: relative; 

    flex-direction: column; 
    text-align: justify ; 
    align-items: stretch; 


    overflow-y: auto;

    /* Hide scrollbar but keep functionality */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.containerHistory2{
    width: 479px; 
    height:400px; 
    left: 4%; 
    top: 30px;
    position: relative; 

    flex-direction: column; 
    text-align: justify ; 
    align-items: stretch; 
    background-clip: content-box;


    overflow-y: hidden;

    /* Hide scrollbar but keep functionality */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.odd{

  display: grid;
  color: rgb(255, 255, 255);
  font-family: IMBPlexMono;
  font-size: 0.6rem;
  z-index: 4;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 45%;

}

.paragraph {

    text-align: start;

}

.background3{
  display: none;
}

.dragon-img{
    display:none ;
}


@media only screen and (max-width: 600px) {

  .navbar{

  display: none;

  }

  .containerHistory{
    display: none;
  }

  .containerHistory2{
    display: none;
  }

  .moretales{
    display: none;
  }

  .titles{
    color: white;
    font-family: Bernoru;
    font-size: 22px;
    margin: 0% 4%;
    line-height: 150%;
  }

  .paragraphs{
    color: rgb(227, 227, 227);
    font-family: IMBPlexMono;
    font-weight: lighter;
    font-size: 12px;
    text-align: justify;
    margin: 0% 4%;
  }


  .odd{

      display: block;
      color: rgb(255, 255, 255);
      font-family: IMBPlexMono;
      font-size: 0.6rem;
      top: -2%;
      left: 0;
      z-index: 3;
      text-align: center;
      position: relative;
      text-shadow: 2px 2px 2px black;


  }

  .background{

    display: none;

  }

  .background2{

    display: none;


  }


  .title{

    top: 8.7%;
    position: relative;
    font-size: 36px;
    margin: 0% 0%;
    text-align: center;
    padding: 0%;
    letter-spacing: -2px;

  }

  .title2{

    padding-top: 0%;
    top: 5%;
    position: relative;
    font-size: 36px;
    margin: 0% 0%;
    text-align: center;
    margin-left: -5%;

  }

  .container{
      display: flex;
      justify-content: center;
      align-items: last baseline;
      position: relative;
      top: 5%;
      height: 100vh;
      z-index: 1;
  }

  .background3{

    position: relative;
    height: 100vh;
    width: 100%;
    backdrop-filter: blur(4px); 
    overflow: auto;

    display: flex;
    flex-direction: column;

  }

  .content{
    display: block;
    position: absolute; 
    height: auto; 
    width: 90%;

    top: 15%;
    margin: 15% 5%;

    background-color: rgb(29 27 27 / 80%); 
    backdrop-filter: blur(4px); 

    flex-grow: 1;
    overflow-y: auto;
  }

  .dragon-img{
    display: block;
    width: 100%;
    height: 100%;

    z-index: -1;

    position: absolute;
    top: 0%;
  }

  .city-img{
    width: auto;
    height: 9%;
    bottom: 0;
    position: absolute;
    left: -25%;
    overflow-x: hidden;
    flex-grow: 1;
    z-index: 2;
  }

  .city-img img{

    width: 200%;
    height: 100%;
    left: -55%;
    position: relative;


  }

  
  #aup{
    display: none;
  }


  .dropupbttn{


      display: none;

  }

  .navbar2{

      display: block;
  }

  menubttn ul{
    top: 9%
  }

  }

</style>