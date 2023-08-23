<template>
  <h1>Curiosity Cameras</h1>
  <TheNavigation />
  <div class="container">
    <router-view></router-view>
  </div>
</template>


<script setup>
  import TheNavigation from './components/TheNavigation.vue';
</script>

<style scoped>
  .container {
    background-color: #3C486B;
  }
</style>
