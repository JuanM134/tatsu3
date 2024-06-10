<template>
                       
                    <div id="aup">
                    <a   class="ms-2 me-2 team-link link-dark text-center" >
                        <font-awesome-icon icon="fa-solid fa-arrow-down" class="aup" size="lg" />
                    </a>
                    </div>

</template>

<script>



</script>

<style scoped>



#aup{

  top: 0;
  left: 0;
  position: relative;

  width: 30.5px;
  height: 30px;
  background-color: black;


  
}

.aup{

  
  color: white;

  position: relative;
  animation-name: example;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

}

@keyframes example {
  0%   { left:0px; top:-1%;}
  25%  { left:0px; top:1%;}
  50%  { left:0px; top:3%;}
  75%  { left:0px; top:1%;}
  100% { left:0%;  top:0%;}
}

</style>