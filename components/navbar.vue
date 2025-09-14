<template>
    <nav class="navbar navbar-expand-lg navbar-light pt-4">
        <div class="container">
            <div class="navbar-collapse collapse" id="navbarCollapse">
                <div class="me-auto"></div>
                <div class="">
                    <ul class="navbar-nav">
                        <li class="nav-item" >
                            <NuxtLink to="/history" class="nav-link" >
                                <div class="tab justify-content-center">
                                    <div >
                                        TALES    
                                    </div>                                        
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="nav-item home-nav-item">
                            <NuxtLink to="/world" class="nav-link">
                                <div class="tab justify-content-center">
                                    <div >
                                        WORLD     
                                    </div>                                        
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/brandC" class="nav-link">
                                <div class="tab justify-content-center">
                                    <div >
                                        BRAND     
                                    </div>                                        
                                </div>       
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/roadmap" class="nav-link">
                                <div class="tab justify-content-center">
                                    <div >
                                        ROADMAP     
                                    </div>                                        
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/gallery" class="nav-link">
                                <div class="tab justify-content-center">
                                    <div >
                                        GALLERY     
                                    </div>                                        
                                </div>        
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/connect" class="nav-link">
                                <div class="tab justify-content-center">
                                    <div >
                                        CONNECT     
                                    </div>                                        
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/home" class="nav-link">
                                <div class="tab-1 justify-content-center home-button" style="box-shadow:1px 1px 1px 1px gray;">
                                    <div class="icon-wrap" style="position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                                        <!-- original front icon (keep inline style) -->
                                        <font-awesome-icon class="icon-front" id="prueba" icon="fa-solid fa-house" size="2xl" style="color: #F47A7A; align-items: center; position: relative; padding-bottom: 15px;" />
                                        <!-- hover-back icon: left arrow, hidden until hover -->
                                        <font-awesome-icon class="icon-back" id="prueba-arrow" icon="fa-solid fa-arrow-left" size="2xl" style="color: #F47A7A; position: absolute;" />
                                    </div>
                                </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </nav>



</template>

<script setup lang="ts">



</script>

<style scoped>

/* Ajustes para la barra de navegación principal */
.navbar {
    position: absolute; 
    top: 0;          
    left: 2%;         
    width: auto;    
    padding-top: 0;  
    z-index: 1000;   
    display: flex;   
    flex-direction: column; 
    align-items: flex-start; 
}

.tab {
    justify-content: space-between; 
    align-items: center;
    display: inline-flex;
    width: 135px;
    height: 30px; 
    padding-left: 20px; 
    padding-right: 20px;
    border-radius: 15px 15px 15px 15px;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    color: #000000;
    font-family:  MontSerrat;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 2.04px;
    font-size: 11px;
}


.tab:hover {

    background-color: #4E4E4E;
    color: #ffffff;

    
} 

.tab-1 {

    justify-content: space-between; 
    align-items: flex-end;
    display: inline-flex;
    width: 50px;
    height: 50px; 
    padding-left: 20px; 
    padding-right: 20px;
    border-radius: 25px 25px 25px 25px;


    background-color: #4E4E4E;
    color: #ffffff;

    color: #000000;
    font-family:  MontSerrat;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 2.04px;
    font-size: 11px;

}

/* arrange nav items in a single row and allow a right-side spacer for the home item */
.navbar-collapse .navbar-nav {
    display: flex;
    align-items: center;
    gap: 8px;
}

/* push the home item to the far right while keeping it in document flow */
.home-nav-item {
    margin-left: auto;
}

.brand {
    background: #1B1818;
    border: 1px #1B1818 solid;
    border-radius: 8px;
    position: relative;
    left: -1rem;
}

.brand-text {

    width: 180px; 
    height: 70px; 
    color: #F47A7A; 
    font-size: 40px;
    font-family: Bernoru;
    text-align: center;
    letter-spacing: -2px;
    line-height: 52.40px;
}



@media only screen and (max-width: 430px) and (max-height: 800px){




}

/* icon swap preserving .tab-1 visuals */
.icon-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.icon-front,
.icon-back {
  transition: transform 260ms cubic-bezier(.2,.8,.2,1), opacity 260ms cubic-bezier(.2,.8,.2,1);
  color: #F47A7A;
}

.icon-front {
    opacity: 1;
    /* center horizontally via flex; nudge down by 6px to sit slightly lower */
    transform: translateY(6px) translateX(0) rotate(0deg);
}

.icon-back {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(-10px) rotate(-8deg);
  opacity: 0;
}

/* on hover or focus swap icons: show left arrow */
.nav-link:hover .icon-front,
.nav-link:focus .icon-front {
  opacity: 0;
    /* preserve the downward nudge while sliding out */
    transform: translateY(6px) translateX(10px) rotate(8deg);
}

.nav-link:hover .icon-back,
.nav-link:focus .icon-back {
  opacity: 1;
  transform: translate(-50%, -50%) translateX(0) rotate(0deg);
}

/* preserve inline-style look: ensure positioning and padding apply */
.icon-front {
  padding-bottom: 15px;
  position: relative;
}

.icon-back {
  color: #F47A7A;
}

/* pin home button near right edge */
.home-button {
    /* keep the button inline with the other nav items (static in the flow) */
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 6px;
}

@media (max-width: 600px) {
    .home-button {
        margin: 0 4px;
    }
}
</style>