<template>
    <div class="background">
        <navbar style="z-index: 1;" /> 
        <Dropupbttn />  

        <!--
        <button class="float" > <font-awesome-icon icon="fa-solid fa-plus" size="xl" style="color: #ffffff;" /> 
        
        </button>
        -->
        
        

        <div class="center" style="z-index: 1;">

            <div class="title" id="title" style="letter-spacing: -40px'; ">COMING SOON</div>
            
        </div> 

        
        

    </div>

</template>


<!-- JS -->
<script setup lang="ts">



</script>



<!-- CSS -->
<style scoped>
.background {
    background-image: url('assets/images/v2/worldImage1.png');
    background-color: rgb(255, 255, 255);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: contain;
    background-position-x: right;
    

    width: 100%;
    height: 100%;
    position: fixed ;
    bottom: 0;
    
    z-index: 0;
}

.title {
    width: 800px;
    height: 100px; 
    color: #0A0101; 
    font-size: 100px; 
    font-family: Bernoru; 
    font-weight: 900; 
    line-height: 102.40px; 
    
   
    
}

/*
.float{

    z-index: 2;   
    position: relative;
    top: 79%;
    left: 95%;


    background-color: rgb(34, 34, 34);
    border-color: rgb(34, 34, 34);

    height: 50px;
    width: 50px;
    border-radius: 30px 30px 30px 30px;




} */

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

</style>