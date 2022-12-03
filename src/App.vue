<script setup>
import Navegacion from "./components/Navegacion.vue"
</script>

<template>
  <div class="div_home">
    <Navegacion />
    <router-view></router-view>
  </div>
</template>
<style>
body{
  background-image: url(./assets/portada.webp);
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
}
.div_home{
    
    height: 900px;
}

</style>