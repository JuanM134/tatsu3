<template>
  <nav class="navbar navbar-expand navbar-light pt-3">
    <div class="container-fluid"> <!--Cambiado a container-fluid -->
      <div class="navbar-collapse collapse" id="navbarCollapse">
        <ul class="navbar-nav full-width">
          <!-- Nav items alineados a la izquierda -->
          <div class="left-items">
            <li class="nav-item">
              <NuxtLink to="/connect" class="nav-link">
                <div class="tab justify-content-center">
                  <div>TALES</div>
                </div>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/world" class="nav-link">
                <div class="tab justify-content-center">
                  <div>WORLD</div>
                </div>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/connect" class="nav-link">
                <div class="tab justify-content-center">
                  <div>BRAND</div>
                </div>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/connect" class="nav-link">
                <div class="tab justify-content-center">
                  <div>ROADMAP</div>
                </div>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/connect" class="nav-link">
                <div class="tab justify-content-center">
                  <div>GALLERY</div>
                </div>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/connect" class="nav-link">
                <div class="tab justify-content-center">
                  <div>CONNECT</div>
                </div>
              </NuxtLink>
            </li>
          </div>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  position: absolute; /* ✅ fixed para que quede arriba y abarque toda la pantalla */
  top: 0;
  left: 0;
  width: 100vw; /* ✅ asegura ocupar todo el ancho visible */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent; /* puedes cambiar a un color si quieres */
  padding: 0;
  margin: 0;
}

/* Elimina márgenes heredados del container bootstrap */
.container-fluid {
  width: 100%;
  padding-left: 2vw;
  padding-right: 2vw;
}

/* Distribución principal */
.full-width {
  display: flex;
  justify-content: space-between; /* izquierda y derecha separadas */
  align-items: center;
  width: 96%;
  padding: 0;
  margin: 0;
  list-style: none;
}

.left-items {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
}

.right-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;

}

/* Tabs principales */
.tab {
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
  width: 135px;
  height: 30px;
  padding: 0 20px;
  border-radius: 15px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  color: #000;
  font-family: MontSerrat;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 2.04px;
  font-size: 11px;
}

.tab:hover {
  background-color: #4e4e4e;
  color: #fff;
}

/* Botón de inicio */
.tab-1 {
  justify-content: space-between;
  align-items: flex-end;
  display: inline-flex;
  width: 50px;
  height: 50px;
  padding: 0 20px;
  border-radius: 25px;
  background-color: #4e4e4e;
  font-family: MontSerrat;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 2.04px;
  font-size: 11px;
}

/* Iconos animados */
.icon-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.icon-front,
.icon-back {
  transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
  color: #f47a7a;
}

.icon-front {
  opacity: 1;
  transform: translateY(6px);
}

.icon-back {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(-10px) rotate(-8deg);
  opacity: 0;
}

.nav-link:hover .icon-front {
  opacity: 0;
  transform: translateY(6px) translateX(10px) rotate(8deg);
}

.nav-link:hover .icon-back {
  opacity: 1;
  transform: translate(-50%, -50%) translateX(0) rotate(0deg);
}

/* HOME BUTTON */
.home-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Responsive */
@media (max-width: 600px) {
  .tab {
    width: 90px;
    font-size: 10px;
    padding: 0 10px;
  }

  .tab-1 {
    width: 40px;
    height: 40px;
    padding: 0 10px;
  }
}
</style>
