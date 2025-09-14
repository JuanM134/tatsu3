<template>
    
    <div class="dropup">
            <button class="dropbtn"> 
            <div style="background-color: #F47A7A; height: 20%;width: 100%; border-radius: 1px;"></div>
            </button>
            <div class="dropup-content">
                <a href="https://x.com/tatsu_nyc"><font-awesome-icon id="prueba" icon="fa-brands fa-x-twitter" size="lg" style="color: #F47A7A; " /></a> 
                <a href="https://www.instagram.com/tatsu_nyc/"><font-awesome-icon id="prueba" icon="fa-brands fa-instagram" size="xl" style="color: #F47A7A; " /></a>
                <a href="#"><font-awesome-icon id="prueba" icon="fa-brands fa-discord" size="lg" style="color: #F47A7A; " /></a>
            </div>
        </div> 
        

</template>

<script setup lang="ts">



</script>

<style scoped>

/* Dropup Button */
.dropbtn {
    padding: 16px;
    font-size: 16px;
    border: none;
    height: 60px;
    width: 60px;
    border-radius: 30px 30px 30px 30px;
    background: no-repeat center 40%;
    background-color: #242323fa;
    border-color: rgb(34, 34, 34);
    color: #F47A7A;
    z-index: 2;
    position: relative;
    top: -0.1rem;
    /* Transición para la rotación y el color de fondo del botón principal (más suave) */
    transition: transform 0.5s cubic-bezier(.22,.9,.39,1), background-color 0.45s ease-in-out;
    /* Estado inicial de la rotación */
    transform: rotate(0deg);
}

/* The container <div> - needed to position the dropup content */
.dropup {
    position: relative;
    display: inline-block;
    top: 73%;
    left: 91%;
}

/* Dropup content (Hidden by Default) - Configuración para animación de entrada/salida */
.dropup-content {
    position: absolute;
    bottom: 50px; /* Posición inicial cuando está oculto (se desliza desde aquí) */
    color: #F47A7A;
    z-index: 1;
    padding-top: 4rem;
    border-radius: 30px 30px 30px 30px;

    /* Estilos para ocultar y preparar la animación */
    opacity: 0; /* Completamente transparente (oculto visualmente) */
    visibility: hidden; /* No interactuable y oculto para lectores de pantalla */
    transform: translateY(20px); /* Empieza ligeramente desplazado hacia abajo */

    /* Transición para la entrada y salida de todo el menú dropup-content (más fluida) */
    will-change: opacity, transform, visibility;
    transition: opacity 0.4s cubic-bezier(.22,.9,.39,1), transform 0.45s cubic-bezier(.22,.9,.39,1), visibility 0.4s;
}

/* Links inside the dropup */
.dropup-content a {
    padding-top: 12px;
    padding-bottom: 16px;
    padding-left: 16px;
    display: block;
    height: 55px;
    width: 55px;
    background-color: #242323fa;
    border-radius: 50% 50% 50% 50%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.322);
    margin: 4px;
    /* Transición para el color de fondo, transformación y sombra de los enlaces individuales (suavizada) */
    will-change: transform, box-shadow, background-color;
    transition: background-color 0.32s cubic-bezier(.22,.9,.39,1), transform 0.32s cubic-bezier(.22,.9,.39,1), box-shadow 0.32s cubic-bezier(.22,.9,.39,1);
}

/* Change color of dropup links on hover */
.dropup-content a:hover {
    border-radius: 50% 50% 50% 50%;
    height: 55px;
    width: 55px;
    position: relative;
    background-color: #1a1a1a; /* Oscurece el fondo ligeramente al hacer hover */
    transform: translateY(-6px); /* Eleva el enlace ligeramente (suavizado) */
    box-shadow: 0px 12px 26px 0px rgba(0, 0, 0, 0.42); /* Sombra más pronunciada */
}

/* Show the dropup menu on hover - Ahora se muestra suavemente */
.dropup:hover .dropup-content {
    left: 0%;
    bottom: 102%;

    /* Estilos para mostrar y activar la animación */
    opacity: 1; /* Completamente visible */
    visibility: visible; /* Interacutable */
    transform: translateY(0); /* Vuelve a su posición original (se desliza hacia arriba) */
}

/* Change the background color of the dropup button when the dropup content is shown and adds the animation */
.dropup:hover .dropbtn {
    /* Aplica la rotación solo cuando el dropup está en hover */
    transform: rotate(90deg);
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: 45%;
    background-color: #242323fa;
}

/* Estado del botón cuando no está en hover (vuelve a la posición original) */
.dropbtn:not(:hover) {
    transform: rotate(0deg);
}

/* Estilo para los iconos de Font Awesome */
#prueba {
    width: 25px;
    height: 25px;
    margin-top: 2px;
    color: #F47A7A;
    /* Transición para el color y la transformación del icono (más fluida) */
    will-change: color, transform;
    transition: color 0.32s cubic-bezier(.22,.9,.39,1), transform 0.32s cubic-bezier(.22,.9,.39,1);
}

/* Define lo que le pasa al icono cuando se hace hover sobre el enlace que lo contiene */
.dropup-content a:hover #prueba {
    color: #a04040;
    transform: scale(1.2);
}
</style>