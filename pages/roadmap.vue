<template>
  
    <div class="background">
        <navbar style="z-index: 1;" /> 
        <Dropupbttn />  

        <!--
        <button class="float" > <font-awesome-icon icon="fa-solid fa-plus" size="xl" style="color: #ffffff;" /> 
        
        </button>
        -->
        
        <div class="background2">  </div>

        <div class="title"  style="letter-spacing: -40px'; ">COMING </div>
        <div class="title2"  style="letter-spacing: -40px'; ">SOON</div>
        

    </div>


</template>

<script setup lang="ts">

</script>

<style scoped>

.background {
    background-image: url('assets/images/v2/fog.png');
    background-color: rgb(255, 255, 255);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    

    width: 100%;
    height: 100%;
    position: fixed ;
    bottom: 0;
    

    
    z-index: 0;
}

.background2 {
    background-image: url('assets/images/BlurrCharacter.png');
    background-repeat: no-repeat;
    background-size: contain;
    
    position: relative;
    

    width: 370%;
    height: 370%;
    left: -40%;
    top: -87%;
    
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

    position: relative;

    left: 13%;
    top: -330%;
    
    
}

.title2 {
    width: 800px;
    height: 100px; 
    
    color: #0A0101; 
    font-size: 100px; 
    font-family: Bernoru; 
    font-weight: 900; 
    line-height: 102.40px; 

    position: relative;

    left: 63%;
    top: -344%;
    
    
}

</style>