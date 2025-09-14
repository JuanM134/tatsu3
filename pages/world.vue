<template>
 
    <div class="background">
        <navbar style="z-index: 4;" />

        <Dropupbttn class="dropupbttn" style="top: 88.5%; position: fixed;" />  
        <menubttn style="z-index: 4; "/> 
        <navbar2 style="z-index: 4;" />



       <div class="container">


           
                <!--
                                <img src="" style="width: 100%; height: 100%; object-fit: cover;
                                 position: absolute; top: -10%; left: 0; z-index: 0;">   
                        
                -->
            
        </div>

        
        

    </div>

</template>


<!-- JS -->
<script setup lang="ts">



</script>



<!-- CSS -->
<style scoped>
.background {
    
    background-color: #DDD9DA;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: contain;
    background-position: center;
    background-image: url('@/assets/images/map3.jpeg');
    background-size: cover;

    width: 100%;
    height: 100%;
    position: fixed ;
    bottom: 0;
    
    z-index: 0;
}

.title {


    color: #0A0101; 
    font-size: 100px; 
    font-family: Bernoru; 
    font-weight: 900; 
    line-height: 102.40px; 
    top: 40%;
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    
   
    
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    width: 100%;
    position: relative;
} 

.center {
    
    width: 800px; 
    height: 100px; 
    left: 100px; 
    top: 300px; 
    position: absolute; 

}

#myDIV {
  width: 100%;
  padding: 50px 0;
  text-align: center;
  background-color: gray;
  margin-top: 20px;
  font-size:23px;
 
}

#aup{

background-color: #1D1B1B;
width: 30px;
height: 30px;
top: 30%;
left: 67%;
border: none;

position: relative;
z-index: 2;
}

.aup{

position: relative;

border: none;
animation-name: example;
animation-duration: 0.7s;
animation-iteration-count: infinite;
animation-timing-function: ease-in-out;

}

@keyframes example {
  0%   {left:0px; top:0px;}
  25%  {left:0px; top:1%;}
  50%  {left:0px; top:3%;}
  75%  {left:0px; top:1.05%;}
  100% {color: pink; left:0%; top:0px;}
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

        position: absolute;
        font-size: 3.5rem;
        top: 45%;
        text-align: center;
        line-height: 0px;
        width: 100%;
        height: 100%;


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