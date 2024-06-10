<template>
    
    <div class="dropup">
            <button class="dropbtn"> <font-awesome-icon icon="fa-solid fa-minus" size="xl" /> </button>
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



    background-repeat: no-repeat;
    background-position-x: center ;
    background-position-y: center;
    background-size: 40%;

    background-color: #242323fa;
    border-color: rgb(34, 34, 34);
    color: #F47A7A;
    z-index: 2;   
    position: relative;

    top: 79%;

}

/* The container <div> - needed to position the dropup content */
.dropup {
  position: relative;
  display: inline-block;
  top: 73%;
  left: 91%;

  
}

/* Dropup content (Hidden by Default) */
.dropup-content {

  display: none;
  position: absolute;
  bottom: 50px;
  color: #F47A7A;

  left: -40%;
  z-index: 1;
  padding-top:  3px;

  border-radius: 30px 30px 30px 30px;

}



/* Links inside the dropup */
.dropup-content a {


  padding-top: 12px;
  padding-bottom: 16px ;
  padding-left: 16px;
  display: block;
  
  height: 55px;
  width: 55px;

  background-color: #242323fa;
  border-radius: 50% 50% 50% 50% ;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.322);


  margin: 4px;

  
}

/* Change color of dropup links on hover */
.dropup-content a:hover {


    border-radius: 50% 50% 50% 50% ;
    height: 55px;
    width: 55px;
    position: relative;
    
}

/* Show the dropup menu on hover */
.dropup:hover .dropup-content {

  display: table-row;
  left: -0.6%;
  bottom: 102%;


}

/* Change the background color of the dropup button when the dropup content is shown */
.dropup:hover .dropbtn {

    
    transition: 0.45s;
    transform: rotate(90deg);
    background-repeat: no-repeat;
    background-position-x: center ;
    background-position-y: center;
    background-size: 45%;
    background-color: #242323fa;

  
  
} 

#prueba{

  width: 25px;
  height: 25px;
  margin-top: 2px;
  
}


</style>