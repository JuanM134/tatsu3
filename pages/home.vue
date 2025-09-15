<template>

 
        
        <div class="background"> 
            <navbar class="navbar"  style="z-index: 5;" />   
            <Dropupbttn class="dropupbttn"  style="z-index: 5; top: 88.5%;" /> 
            <menubttn style="z-index: 6;"/> 
            <navbar2 style="z-index: 6;" /> 


            <div class="container">

                <div class="" style="z-index: 0;">
                        <img class="home-image" src="@/assets/images/home.png" style="width: 100%; height: 100%; object-fit: contain;
                         position: absolute; top: 0; left: 0; z-index: 0; background-color: #DDD9DA;">  
                         
                         <img class="home-image-mobile" src="@/assets/images/homeMobile.png" style="width: auto; height: 110dvh; object-fit: contain;
                         position: absolute; top: -5dvh; left: -7dvw; z-index: 0;"> 
                    
                    <video autoplay loop muted playsinline style=" z-index: 0; position: relative; top: 0%;display: flex; mix-blend-mode: screen; mix-blend-mode: lighten; opacity: 100%;">
                    <source src="@/assets/videos/fireNew.mp4" type="video/mp4" /></video>

                        <div class="video-wrap">

                            <img class="home-image-mobile" src="@/assets/images/homeMobile1.png" style="width: auto; height: 110dvh; object-fit: contain;
                            position: absolute; top: -5dvh; left: -7dvw; z-index: 0;"> 
                            <video autoplay loop muted playsinline class="bg-video">
                            <source src="@/assets/videos/fireNew.mp4" type="video/mp4" /></video>
                            
                        </div>

                </div>


                    <p class="odd">ODD STUDIOS, 2024<br/>MADE IN NEW YORK, NY</p>
            </div>     
            
x

            

        </div>
    
</template>

<script >



</script>

<style scoped>


.background {
    
    background-color: #DDD9DA;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: contain;
    background-position: center ;
    

    width: 100%;
    height: 100%;
    position: fixed ;
    bottom: 0;
    
    z-index: 0;
}

    .home-image-mobile{
        display: none;

    }



.title {
    font-family: 'Bernoru';
    color: #000000;
    font-size: clamp(8rem, 40vw, 12rem); 
    font-weight: 500;
    letter-spacing: -1px;
    text-shadow: #10101060 3px 3px 3px;
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    text-align: justify;
}

.container{
    display: flex;
    justify-content: center;
    align-items: bottom;
    height: 100vh; 
    
}

.video-wrap{ position: absolute; inset: 0; z-index: 0; overflow: hidden; display: none;}
.bg-video{ width: 100%; height: 100%; object-fit: cover; position: absolute; left: 0; top: 0; pointer-events: none; mix-blend-mode: lighten; }

#myVideo {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  right: 0;
  bottom: 0;
  mix-blend-mode: multiply;
  
  /* position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%; */
}

#myVideo2 {
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: cover;
  right: 0;
  bottom: 0;
  opacity: 100%;
  mix-blend-mode: lighten;
  /*mix-blend-mode: color-burn;*/
  display: block;

}


.odd{

    display: block;
    color: rgb(255, 255, 255);
    font-family: IMBPlexMono;
    font-size: 0.6rem;
    bottom: 0;
    z-index: 4;
    text-align: center;
    position: absolute;
    object-fit: contain;

}




@media only screen and (max-width: 600px){

    .navbar{

    display: none;

    }

    #myvideo2{
        display: none;
    }
    .odd{

        display: block;
        color: rgb(255, 255, 255);
        font-family: IMBPlexMono;
        font-size: 0.6rem;
        z-index: 5;
        text-align: center;
        position: absolute;
        object-fit: contain;
        bottom: 3dvh;
        

    }
    .home-image{

        display: none;

    }

    .home-image-mobile{
        background-color: #DDD9DA;
        display: block;

    }

    .background{

        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        display: flex;
        flex-direction: column;
    }

    .video-wrap{ display: block; }

    .title{


        display: none;
        

    }

    .dropupbttn{


        display: none;

    }

    .navbar2{

        display: block;
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: last baseline;
        position: relative;
        top: 0;
        height: 100dvh;
        z-index: 1;
    }

    #myVideo{
        mix-blend-mode: normal;
    }


}

</style>
