<template>

    <div class="box">
        <NuxtLink to="/home" class="navbar-brand">
                    <p class="brand-text">
                        TATSU
                    </p>
            </NuxtLink>
    </div>

</template>


<script setup lang="ts">



</script>


<style scoped>

.box{

    display: none;
}

@media only screen and (max-width: 600px) and (max-height: 933px){

    .box{

        display: flex;
        position: absolute; 
        top: 3%;
        left: 1rem;
        height: 2rem;
        width: 6rem;
        z-index: 2;

        justify-content: center;
        align-items: center;
        text-align: center;

        border-radius: 15px 15px 15px 15px;
        color: rgb(26, 26, 26);
        /*background-color: #4E4E4E;
        color: #ffffff;*/

    }



    .brand-text {
        font-size:15px;
        font-family:  IMBPlexMono;
        letter-spacing: 1px;
        text-justify: space-between;
        position: static;
        margin: 0;
        display: block;
        line-height: 1;

    }



}
</style>