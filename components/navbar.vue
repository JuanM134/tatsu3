<template>
  <nav class="navbar navbar-expand navbar-light pt-3">
    <div class="container-fluid"> <!--Cambiado a container-fluid -->
      <div class="navbar-collapse collapse" id="navbarCollapse">
        <ul class="navbar-nav full-width">
          <!-- Nav items alineados a la izquierda -->
          <div class="left-items">
            <li v-for="link in navLinks" :key="link.to" class="nav-item">
              <NuxtLink :to="link.to" class="nav-link">
                <div class="tab justify-content-center">
                  <div>{{ link.label }}</div>
                </div>
              </NuxtLink>
            </li>
          </div>

        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
const navLinks = [
  { to: '/history', label: 'TALES' },
  { to: '/world', label: 'WORLD' },
  { to: '/brandC3', label: 'BRAND' },
  { to: '/roadmap', label: 'ROADMAP' },
  { to: '/gallery', label: 'GALLERY' },
  { to: '/hall-of-fame', label: 'HOF' },
  { to: '/manga', label: 'MANGA' }
];
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
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
  justify-content: space-between;
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
  /* gap se reduce progresivamente: de 0.5rem en 1200px a casi 0 en 600px */
  gap: clamp(0px, calc((100vw - 600px) / (1200 - 600) * 8), 8px);
}

.right-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* Tabs principales */
.tab {
  justify-content: center;
  align-items: center;
  display: inline-flex;
  /* Ancho: de 135px en ≥1200px hasta 0px en ≤600px */
  width: clamp(0px, calc((100vw - 600px) / (1200 - 600) * 135), 135px);
  /* Alto: de 30px en ≥1200px a 0px en ≤600px */
  height: clamp(0px, calc((100vw - 600px) / (1200 - 600) * 30), 30px);
  /* Padding lateral: de 20px a 0px */
  padding: 0 clamp(0px, calc((100vw - 600px) / (1200 - 600) * 20), 20px);
  border-radius: clamp(0px, calc((100vw - 600px) / (1200 - 600) * 15), 15px);
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  color: #000;
  font-family: MontSerrat;
  font-weight: 400;
  font-style: normal;
  /* letter-spacing: de 2.04px a 0px */
  letter-spacing: clamp(0px, calc((100vw - 600px) / (1200 - 600) * 2.04), 2.04px);
  /* font-size: de 11px a 0px */
  font-size: clamp(0px, calc((100vw - 600px) / (1200 - 600) * 11), 11px);
  /* Ocultar overflow para que no se desborde al encoger */
  overflow: hidden;
  white-space: nowrap;
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
  width: clamp(0px, calc((100vw - 600px) / (1200 - 600) * 50), 50px);
  height: clamp(0px, calc((100vw - 600px) / (1200 - 600) * 50), 50px);
  padding: 0 clamp(0px, calc((100vw - 600px) / (1200 - 600) * 20), 20px);
  border-radius: clamp(0px, calc((100vw - 600px) / (1200 - 600) * 25), 25px);
  background-color: #4e4e4e;
  font-family: MontSerrat;
  font-weight: 400;
  font-style: normal;
  letter-spacing: clamp(0px, calc((100vw - 600px) / (1200 - 600) * 2.04), 2.04px);
  font-size: clamp(0px, calc((100vw - 600px) / (1200 - 600) * 11), 11px);
  overflow: hidden;
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

/* En móvil el navbar ya se oculta desde cada página con display:none,
   pero por si acaso forzamos que los tabs tengan tamaño 0 */
@media (max-width: 600px) {
  .tab,
  .tab-1 {
    width: 0 !important;
    height: 0 !important;
    font-size: 0 !important;
    padding: 0 !important;
    overflow: hidden;
    pointer-events: none;
  }
  .left-items {
    gap: 0 !important;
  }
}
</style>
