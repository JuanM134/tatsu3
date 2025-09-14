<template>
    <div class="background">
        <navbar style="z-index: 4;" />

        <Dropupbttn class="dropupbttn" style="z-index: 4; top: 88.5%; "/>  
        <menubttn style="z-index: 4;"/> 
        <navbar2 style="z-index: 4;" />
        


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
    top: 40%;
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    
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