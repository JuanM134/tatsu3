<template>
  <div id="aup">
    <a class="ms-2 me-2 team-link link-dark text-center">
      <font-awesome-icon icon="fa-solid fa-arrow-down" class="aup" size="lg" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#aup {
  position: relative;
  width: 33px;         /* Ajusta el tamaño del cuadro */
  height: 33px;        /* Ajusta el tamaño del cuadro */
  background-color: #4E4E4E; /* Fondo negro */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;  /* Opcional: bordes redondeados */
  overflow: hidden;    /* Para que la flecha no salga del cuadro */
}

a.aup {
  width: 35px;
}

.aup {
  color: white;
  position: relative;
  animation: dynamicBounce 1.5s infinite ease-in-out;
  transform-origin: center;
}

/* Animación con rebote y rodado al final */
@keyframes dynamicBounce {
0% { transform: translateY(10%)} 
25% { left:0px; transform: translateY(5%)} 
50% { left:0px; transform: translateY(1%);} 
75% {color: pink;left:0px; transform: translateY(-5%);} 
100% {color: pink; left:0%; transform: translateY(0%);}
  
}
</style>
