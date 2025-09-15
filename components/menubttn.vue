<template>
        <button @click="showText1()" :class="['dropbtn', { active: isClicked }]" style="z-index: 4;">
            <div class="line"></div>
            <div class="line2"></div>
        </button>
                <div class="dropup" :class="{ 'menu-open': ocultar && !closing, 'menu-closing': closing }">
                        <div class="menu-container" v-if="ocultar || closing">
        <ul>
          <li><a href="/history">TALES</a></li>
          <li><a href="/world">WORLD</a></li>
          <li><a href="/brandC">BRAND</a></li>
          <li><a href="/roadmap">ROADMAP</a></li>
          <li><a href="/gallery">GALLERY</a></li>
          <li><a href="/connect">CONNECT</a></li>

          <p style="line-height: -202px; font-weight: lighter; font-family: IMBPlexMono;margin-top: 2%;">
            ODD STUDIOS 2024 <br> MADE IN NEW YORK, NY
          </p>
        </ul>
      </div>
    </div>
  </template>


<script>

    export default{
        
        data() {
            return {
                ocultar: false,
                isClicked: false,
                closing: false,
            };
        },
        methods: {
            showText1() {
                // Opening
                if (!this.ocultar) {
                    this.ocultar = true;
                    this.isClicked = true;
                    this.fadeAnimation();
                    return;
                }

                // Closing: play reverse animation then hide
                this.closing = true;
                this.isClicked = false;
                this.fadeAnimation();
                // match longest animation delay + duration (~600ms)
                setTimeout(() => {
                    this.closing = false;
                    this.ocultar = false;
                }, 620);
            },
            fadeAnimation() {
                const line = document.querySelector('.line');
                const line2 = document.querySelector('.line2');
                line.classList.toggle('animated');
                line2.classList.toggle('animated2');            

            },
        },

        
    };



</script>

<style scoped>

.dropup{

display: none;

}

.dropbtn{
    display: none;
}


@media only screen and (max-width: 600px) and (max-height: 933px){

.dropup{

    display: block;
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    z-index: 3;

}

.dropbtn {


    padding: 0;
    font-size: 16px;
    border: none;
    position: absolute;
    height: 3rem;
    width: 3rem;
    left: 84%;
    top: 3%;
    border-radius: 10%;;
    z-index: 5;
    background-repeat: no-repeat;
    background-position-x: center ;
    background-position-y: center;
    background-size: 40%;

    background-color: #ffffff00;
    border-color: #1B1818;
    color: #F47A7A;

    overflow-y: hidden;


}

.dropbtn{
    display: block;
}

.dropbtn.active {
    background-color: #484848;
}

.line2.active {
    background-color: #ffffff;
}


.menu-container{
        position: relative;
        top: -6%;
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
.menu-open ul li{
    opacity: 0;
    transform: translateY(12px);
    animation: liFadeUp 420ms forwards cubic-bezier(.22,.9,.39,1);
}
.menu-open ul li:nth-child(1){ animation-delay: 80ms; }
.menu-open ul li:nth-child(2){ animation-delay: 160ms; }
.menu-open ul li:nth-child(3){ animation-delay: 240ms; }
.menu-open ul li:nth-child(4){ animation-delay: 320ms; }
.menu-open ul li:nth-child(5){ animation-delay: 400ms; }
.menu-open ul li:nth-child(6){ animation-delay: 480ms; }

@keyframes liFadeUp{
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Footer paragraph - animate after list items */
.menu-open ul p{
    opacity: 0;
    transform: translateY(12px);
    animation: liFadeUp 420ms forwards cubic-bezier(.22,.9,.39,1);
    animation-delay: 580ms;
}

/* Closing: animate items out in reverse order */
.menu-closing ul li{
    opacity: 1;
    transform: translateY(0);
    animation: liFadeDown 320ms forwards cubic-bezier(.22,.9,.39,1);
}
.menu-closing ul li:nth-child(1){ animation-delay: 480ms; }
.menu-closing ul li:nth-child(2){ animation-delay: 400ms; }
.menu-closing ul li:nth-child(3){ animation-delay: 320ms; }
.menu-closing ul li:nth-child(4){ animation-delay: 240ms; }
.menu-closing ul li:nth-child(5){ animation-delay: 160ms; }
.menu-closing ul li:nth-child(6){ animation-delay: 80ms; }

.menu-closing ul p{
    opacity: 1;
    transform: translateY(0);
    animation: liFadeDown 320ms forwards cubic-bezier(.22,.9,.39,1);
    animation-delay: 40ms;
}

@keyframes liFadeDown{
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(12px); }
}

ul{

    width: 90%;
    top:9rem;
    left: -3%;
    position: absolute;

}

li{
    height: 2.5rem;
    border-color: #1B1818;
    list-style-type: none;
    border-bottom: 1px solid #484848;
    padding-top: 0.5dvh;

    
}

a{

    text-decoration: none;
    color: rgb(54, 54, 54);
    font-family:  IMBPlexMono;
    font-size: 1.2rem;
    letter-spacing: 1px;
    z-index: 4;
}

p{
    font-size: 0.5rem;
}

.line{
    width: 55%;
    height: 12%;
    background-color: #4E4E4E;
    margin: 22% 22%;


}

.line2{
    width: 55%;
    height: 12%;
    background-color: #4E4E4E;
    margin: 22% 22%;
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
</style>
