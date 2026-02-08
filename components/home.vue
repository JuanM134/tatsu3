<template>
  <div class="dropup">
    <NuxtLink to="/home" class="nav-link">
      <button class="dropbtn home-button">
        <div class="icon-wrap">
          <ClientOnly>
            <font-awesome-icon
              class="icon-front"
              icon="fa-solid fa-house"
              size="xl"
            />
          </ClientOnly>
          <ClientOnly>
            <font-awesome-icon
              class="icon-back"
              icon="fa-solid fa-arrow-left"
              size="xl"
            />
          </ClientOnly>
        </div>
      </button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.dropup {
  position: relative;
  display: inline-block;
  left: 91%;
  top: 2dvh;
}

.dropbtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: #242323fa;
  color: #f47a7a;
  box-shadow: 1px 1px 1px 1px gray;
  cursor: pointer;
  position: relative;
  transition: transform 0.5s cubic-bezier(.22, .9, .39, 1),
              background-color 0.45s ease-in-out;
}

.nav-link {
  display: inline-flex;
}

.icon-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-front,
.icon-back {
  transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1),
              opacity 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
  color: #f47a7a;
}

.icon-front {
  opacity: 1;
  left: 50%;
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
</style>
