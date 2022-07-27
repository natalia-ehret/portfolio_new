<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: { TheHeader },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  /* font-size 10px = 1rem */
  font-size: 62.5%;
}

body {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  color: #343a40;
  line-height: 1;
}

@media (max-width: 768px) {
  html {
    /* font-size 10px = 1rem */
    font-size: 50%;
  }
}
</style>
