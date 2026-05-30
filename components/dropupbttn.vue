<template>
  <div class="dropup">
    <button class="dropbtn"> 
      <div class="btn-line"></div>
    </button>
    
    <div class="dropup-content">
      <a href="https://x.com/tatsu_nyc" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon class="social-icon" icon="fa-brands fa-x-twitter" size="lg" />
      </a> 
      
      <a href="https://www.instagram.com/tatsu_nyc/" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon class="social-icon" icon="fa-brands fa-instagram" size="xl" />
      </a>
      
      <a href="https://discord.gg/WUBNtNHB" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon class="social-icon" icon="fa-brands fa-discord" size="lg" />
      </a>
      
      <a href="https://opensea.io/es/collection/tatsuofficial/explore" target="_blank" rel="noopener noreferrer" class="opensea-link">
        <span class="social-icon opensea-icon"></span>
      </a>
    </div>
  </div> 

        
</template>

<script setup lang="ts">
// Script vacío por ahora
</script>

<style scoped>
/* ---- The container <div> ---- */
.dropup {
  position: relative;
  display: inline-block;
  top: 73%;
  left: 91%;
}

/* ---- Dropup Button ---- */
.dropbtn {
  padding: 16px;
  font-size: 16px;
  border: none;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: no-repeat center 40%;
  background-color: #242323fa;
  border-color: rgb(34, 34, 34);
  color: #F47A7A;
  z-index: 2;
  position: relative;
  top: -0.1rem;
  transition: transform 0.5s cubic-bezier(.22,.9,.39,1), background-color 0.45s ease-in-out;
  transform: rotate(0deg);
}

/* Línea interna del botón principal */
.btn-line {
  background-color: #F47A7A; 
  height: 20%;
  width: 100%; 
  border-radius: 1px;
}

/* Estado del botón cuando no está en hover */
.dropbtn:not(:hover) {
  transform: rotate(0deg);
}

/* ---- Dropup Content (Hidden by Default) ---- */
.dropup-content {
  position: absolute;
  bottom: 50px; 
  color: #F47A7A;
  z-index: 1;
  padding-top: 4rem;
  border-radius: 30px;
  opacity: 0; 
  visibility: hidden; 
  transform: translateY(20px); 
  transition: opacity 0.4s cubic-bezier(.22,.9,.39,1), transform 0.45s cubic-bezier(.22,.9,.39,1), visibility 0.4s;
}

/* Links inside the dropup */
.dropup-content a {
  padding: 12px 0 16px 16px; /* Ajustado el padding general */
  display: block;
  height: 55px;
  width: 55px;
  background-color: #242323fa;
  border-radius: 50%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.322);
  margin: 4px;
  transition: background-color 0.32s cubic-bezier(.22,.9,.39,1), transform 0.32s cubic-bezier(.22,.9,.39,1), box-shadow 0.32s cubic-bezier(.22,.9,.39,1);
}

/* Estilo para el link específico de OpenSea */
.opensea-link {
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
}

/* Hover over links */
.dropup-content a:hover {
  background-color: #1a1a1a; 
  transform: translateY(-6px); 
  box-shadow: 0px 12px 26px 0px rgba(0, 0, 0, 0.42); 
}

/* ---- Interactions (Hover on main dropup) ---- */
.dropup:hover .dropup-content {
  left: 0%;
  bottom: 102%;
  opacity: 1; 
  visibility: visible; 
  transform: translateY(0); 
}

.dropup:hover .dropbtn {
  transform: rotate(90deg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 45%;
  background-color: #242323fa;
}

/* ---- Icons ---- */
.social-icon {
  width: 25px;
  height: 25px;
  margin-top: 2px;
  color: #F47A7A;
  transition: color 0.32s cubic-bezier(.22,.9,.39,1), transform 0.32s cubic-bezier(.22,.9,.39,1);
}

/* OpenSea Specific Icon */
.social-icon.opensea-icon {
  width: 28px;
  height: 28px;
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url('/assets/images/icons/opensea.png');
  mask-image: url('/assets/images/icons/opensea.png');
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
}

/* Hover effect on icons */
.dropup-content a:hover .social-icon {
  color: #a04040;
  transform: scale(1.2);
}

/* Máscara CSS para que el logo de OpenSea herede los colores y comportamientos de texto */
.opensea-icon {
    display: inline-block;
    background-color: currentColor;
    -webkit-mask-image: url('/assets/images/icons/opensea.png');
    mask-image: url('/assets/images/icons/opensea.png');
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
}

/* Tamaño específico del logo de OpenSea */
#prueba.opensea-icon {
    width: 28px;
    height: 28px;
}

/* Centrar el contenido del enlace que envuelve el logo de OpenSea */
a:has(.opensea-icon) {
    display: flex !important;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
}
</style>
