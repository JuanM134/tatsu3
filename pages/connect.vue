<template>
    <div class="background">
        <navbar style="z-index: 1;" /> 
        <Dropupbttn />  

        <!--
        <button class="float" > <font-awesome-icon icon="fa-solid fa-plus" size="xl" style="color: #ffffff;" /> 
        
        </button>
        -->


        <p class="title" id="title" >COMING SOON </p>

        

    </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

.background {
    background-color: #DDD9DA;
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

.title {
    
    color: #0A0101; 
    font-size: 100px; 
    font-family: Bernoru; 
    font-weight: 900; 
    line-height: 102.40px; 
    text-emphasis: none;
    margin-top: 8%;
    text-align: center;

}
</style>