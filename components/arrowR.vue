<template>
                       
                    <div id="aup">
                    <a   class="ms-2 me-2 team-link link-dark text-center">
                        <font-awesome-icon icon="fa-solid fa-arrow-down" size="lg"  style="color: rgb(0, 0, 0);" />
                    </a>
                    </div>

</template>

<script>



</script>

<style scoped>

#aup{

top:-50%;
left: 68%;

position: relative;
height: auto;
width: auto;
z-index: 2;


  animation-name: example;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  
}

@keyframes example {
  0%   { left:0px; top:0px;}
  25%  { left:0px; top:1%;}
  50%  { left:0px; top:3%;}
  75%  {color: pink;left:0px; top:1.05%;}
  100% { left:0%; top:0px;}
}

</style>