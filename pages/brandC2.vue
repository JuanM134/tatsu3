<template>

    <div class="background">
        <navbar class="navbar" style="z-index: 4;" />  


        <img class="imageSitting"  src="@/assets/images/sitting.png" alt="">

        
        <div class="content">

            <h1 class="brand-title"> ODD STUDIOS</h1>


            <div class="brand-txt">

                <p>Odd studios draws inspiration from the vibrant world of retro anime and the eclectic fashion styles from the streets of nyc; 
                celebrating the tapestry of diverse art manga styles through our designs.</p>

                <p>But it is not just about recreating art; it's about redefining ownership with the use of blockchain. 
                The studio transcends the digital world  to bestow physical ownership and tangible products derived from digital art.</p>    

                <p>By transitioning them into the digital realm, we can ensure they are securely held, shared, and celebrated in a manner that 
                is both exceptional and exclusive.</p>

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

.hide-scroll {
  overflow: visible;
  
}
.background {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: contain;

    width: 100%;
    height: 100vh;
    position: fixed ;
    bottom: 0;

    
    z-index: 0;
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
    width: 40%; /* Adjust based on desired size relative to container */
    max-width: 700px; /* Limit max size */
    height: auto;
    align-self: flex-start; /* Align image to the start (top-left) */
    object-fit: contain; /* Ensure image fits without cropping */
    position: absolute; /* Position the image relative to .main-container */
    left: 5%;
    top: 10%;
    z-index: 1; /* Ensure image is above background but below text/title */
    transform: translateY(-5%); /* Fine-tune vertical position */
    width: 40%; /* Make it larger to overlap text */
}

.content{
    display: flex;
    flex-direction: column; /* Stack image and text vertically */
    flex-grow: 1; /* Allow content area to grow */
    padding-left: 5%; /* Adjust as needed for spacing */
    padding-right: 5%; /* Adjust as needed for spacing */
    padding-top: 20%;
    justify-content: space-between; /* Push bottom button to the bottom */
    position: relative; /* For absolute positioning of bottom elements */
}

.brand-title {
    font-family: Bernoru;
    font-size: 8vw; /* Responsive font size */
    font-weight: 500;
    color: #222;
    text-transform: uppercase;
    letter-spacing: -0.05em; /* Adjust letter spacing for tight look */
    margin-top: 1vw; /* Push title down, adjust based on image overlap */
    margin-left: 3vw; /* Push title right, adjust based on image overlap */
    white-space: nowrap; /* Prevent "ODD" and "STUDIOS" from breaking */
    line-height: 0.8; /* Reduce line height */
    z-index: 2; /* Ensure title is above the image */
}

.brand-txt{
    margin-top: 1vw; /* Space between title and text blocks */
    margin-left: 3vw; /* Align text blocks with title */
    max-width: 500px; /* Limit width of text for readability */
    font-size: 1.1em;
    line-height: 1.6;
    z-index: 2;
    font-family: IMBPlexMono;
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

    display: none;

}

.image{
    display: none;
}

@media only screen and (max-width: 600px) and (max-height: 933px){

    .background{
        height: 100%;
        overflow-y: auto;

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
        top: 119%;
        margin: 2% 35%;
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


}



</style>













