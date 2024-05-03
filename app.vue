<template>
  <!-- z-index: 1 allows navbar to stay on top when using it with other pages
  like the home page which have a video in the background. Home page background video has to set z-index: 0-->
  <!-- <navbar style="z-index: 1;" /> -->

  <div id="main-container">
    <NuxtPage />
  </div>
</template>
