<template>
  <div class="menu-wrapper">
    
    <button @click="toggleMenu" :class="['dropbtn', { active: isClicked }]" style="z-index: 11;">
      <div :class="['line', { animated: isClicked }]"></div>
      <div :class="['line2', { animated2: isClicked }]"></div>
    </button>
    
    <div class="dropup" :class="{ 'menu-open': ocultar && !closing, 'menu-closing': closing }">
      <div class="menu-container" v-if="ocultar || closing">
        <ul>
          <li><a href="/history">TALES</a></li>
          <li><a href="/world">WORLD</a></li>
          <li><a href="/brandC3">BRAND</a></li>
          <li><a href="/roadmap">ROADMAP</a></li>
          <li><a href="/gallery">GALLERY</a></li>
          <li><a href="/hall-of-fame">HOF</a></li>
          <li><a href="/manga">MANGA</a></li>


          <li class="footer-li">
            <p class="footer-text">
              ODD STUDIOS 2024 <br> MADE IN NEW YORK, NY
            </p>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup>
// 4. Actualizado a Script Setup (Composition API)
import { ref } from 'vue';

const ocultar = ref(false);
const isClicked = ref(false);
const closing = ref(false);

const toggleMenu = () => {
  // Opening
  if (!ocultar.value) {
    ocultar.value = true;
    isClicked.value = true;
    return;
  }

  // Closing: play reverse animation then hide
  closing.value = true;
  isClicked.value = false;
  
  // match longest animation delay + duration (~600ms)
  setTimeout(() => {
    closing.value = false;
    ocultar.value = false;
  }, 620);
};
</script>

<style scoped>
/* Contenedor base para Vue */
.menu-wrapper {
  display: contents; /* Evita que este div extra rompa tu layout original */
}

.dropup {
  display: none;
  z-index: -1;
}

.dropbtn {
  display: none;
}

@media only screen and (max-width: 600px) and (max-height: 933px) {

  .dropup {
    display: block;
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    z-index: -1;
  }

  .dropbtn {
    padding: 0;
    font-size: 16px;
    border: none;
    position: absolute;
    height: 3rem;
    width: 3rem;
    left: 84%;
    top: 3dvh;
    border-radius: 10%;
    z-index: 11;
    background-repeat: no-repeat;
    background-position-x: center ;
    background-position-y: center;
    background-size: 40%;
    background-color: transparent;
    border-color: #1B1818;
    color: #F47A7A;
    overflow-y: hidden;
    display: block;
  }

  .dropbtn.active {
    background-color: #484848;
  }

  /* Nota: si querías que la línea se pusiera blanca al activar, se maneja en .animated */
  .menu-container {
    position: relative;
    top: -2%;
    left: 0;
    width: 100%;
    height: 140dvh;
    background-color: rgba(172, 172, 172, 0.759);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: left;
    align-items: flex-start;  
    z-index: 8;
  }

  /* Staggered animation for list items when menu opens */
  .menu-open ul li {
    opacity: 0;
    transform: translateY(12px);
    animation: liFadeUp 420ms forwards cubic-bezier(.22,.9,.39,1);
    z-index: 4;
  }
  .menu-open ul li:nth-child(1) { animation-delay: 80ms; }
  .menu-open ul li:nth-child(2) { animation-delay: 160ms; }
  .menu-open ul li:nth-child(3) { animation-delay: 240ms; }
  .menu-open ul li:nth-child(4) { animation-delay: 320ms; }
  .menu-open ul li:nth-child(5) { animation-delay: 400ms; }
  .menu-open ul li:nth-child(6) { animation-delay: 480ms; }
  .menu-open ul li.footer-li  { animation-delay: 580ms; }

  @keyframes liFadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .dropup.menu-open {
    z-index: 10;
  }   

  /* Closing: animate items out in reverse order */
  .menu-closing ul li {
    opacity: 1;
    transform: translateY(0);
    animation: liFadeDown 320ms forwards cubic-bezier(.22,.9,.39,1);
  }
  .menu-closing ul li.footer-li { animation-delay: 40ms; }
  .menu-closing ul li:nth-child(1) { animation-delay: 50ms; }
  .menu-closing ul li:nth-child(2) { animation-delay: 40ms; }
  .menu-closing ul li:nth-child(3) { animation-delay: 30ms; }
  .menu-closing ul li:nth-child(4) { animation-delay: 20ms; }
  .menu-closing ul li:nth-child(5) { animation-delay: 10ms; }
  .menu-closing ul li:nth-child(6) { animation-delay: 2ms; }

  @keyframes liFadeDown {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(12px); }
  }

  ul {
    width: 97%;
    top: 9rem;
    left: -3%;
    position: absolute;
  }

  li {
    height: 3rem;
    border-color: #1B1818;
    list-style-type: none;
    border-bottom: 1px solid rgba(14, 3, 3, 0.188);
    padding-top: 1dvh;
  }

  /* Ajustes específicos para el li que contiene el párrafo */
  li.footer-li {
    border-bottom: none;
    height: auto;
    padding-top: 2rem;
  }

  a {
    text-decoration: none;
    color: rgb(54, 54, 54);
    font-family: IMBPlexMono;
    font-size: 1.2rem;
    letter-spacing: 1px;
    z-index: 4;
  }

  /* CSS arreglado para el footer text */
  .footer-text {
    font-size: 0.5rem;
    font-weight: lighter; 
    font-family: IMBPlexMono;
    line-height: 1.5; /* Altura de línea correcta */
  }

  .line {
    width: 55%;
    height: 12%;
    background-color: #4E4E4E;
    margin: 22% auto;
  }

  .line2 {
    width: 55%;
    height: 12%;
    background-color: #4E4E4E;
    margin: 22% auto;
    transition: transform 0.3s ease-in-out;
  }

  .animated {
    transform: rotate(400deg);
    transition: transform 0.3s ease-in-out;
    background-color: #ffffff;
  }

  .animated2 {
    display: none;
  }
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> eeae3a625036676bdcb2015e1b194ee3140100ff
