<template>
    <!-- <video src="@/assets/images/fire-sound.mp4" controls>
        Your browser does not support the video tag.
    </video>      -->
    <div :class="{ 'intro': isDarkMode}">  
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
                    <video v-show="isDarkMode" id="myVideo" src="@/assets/videos/finalImage2.mp4" autoplay loop muted>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isActive = ref(false)
const isDarkMode = ref(false)
const router = useRouter()

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
.title-container {
    width: 750px;
    
}
 
.container-content {
    min-height: 80vh;
    
}

.title {
    font-family: 'Bernoru';
    color: #1B1818;
    font-size: 300px;
    font-weight: 900;
    letter-spacing: -22px;
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
  left: 14.3rem;
  bottom: 0;
  width: 70%;
  height: 100vh;
  object-fit: contain;
  mix-blend-mode: darken;
  
}

.intro {
    background-color: black !important;
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

    .title{

    font-size: 8rem;
    letter-spacing: -13px;

    }

    .enter-btn {
    
        font-size: 8px; 
    
    }

    .enter-btn {
    
    width: 10rem;
    
    }

    #myVideo{

    top: 4rem;
    left: 8vw;

    background-image: url('assets/images/finalimage2.png');
    background-position: 2% ;
    background-size: cover;
    background-repeat: no-repeat;

    width: 100%;
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
        height: 100vh;
    }

    .intro{
        display: flex;
        flex-direction: column;
    }

}



</style>
