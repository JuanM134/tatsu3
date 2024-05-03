<template>
    <nav class="navbar navbar-expand-lg navbar-light pt-4">
        <div class="container">
            <NuxtLink to="/home" class="navbar-brand">
                <div class="brand">
                    <div class="brand-text">
                        TATSU
                    </div>
                </div>
            </NuxtLink>

            <div class="navbar-collapse collapse" id="navbarCollapse">
                <div class="me-auto"></div>
                <div class="d-flex ">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NuxtLink to="/history" class="nav-link">
                                <div class="tab justify-content-center">
                                    <div >
                                        HISTORY     
                                    </div>                                        
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/world" class="nav-link">
                                <div class="tab justify-content-center">
                                    <div >
                                        WORLD     
                                    </div>                                        
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/brand" class="nav-link">
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
                    </ul>
                </div>
            </div>
        </div>
    </nav>



</template>

<script setup lang="ts">



</script>

<style scoped>
.tab {
    background: #111010b2;
    justify-content: space-between; 
    align-items: center;
    display: inline-flex;
    width: 125px;
    height: 30px; 
    padding-left: 20px; 
    padding-right: 20px;

    color: #FFC1C1;
    font-family:  MontSerrat;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 2.04px;
    font-size: 11px;
}


.tab:hover {

    background-color: #FFC1C1;
    color: #1D1B1B;
    
} 





.brand {
    /* width: 100%; 
    height: 100%; */
    background: #1B1818;
    border: 1px #1B1818 solid;
    border-radius: 8px;
    /* justify-content: center; 
    align-items: center; 
    display: inline-flex; */
}

.brand-text {
    /* width: 228px; 
    height: 81px;  */
    width: 180px; 
    height: 70px; 
    color: #FFC1C1; 
    font-size: 40px;
    font-family: Bernoru;
    text-align: center;
    line-height: 52.40px;
    /* line-height: 49.40px; */
}
</style>