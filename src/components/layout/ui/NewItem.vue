<template>
  <div class="slides">
    <!-- <div class="slideImage" :style="setBackGroundImage"></div> -->
    <!-- <div class="slideImage" :style="setBackGroundImage">
      <img :src="require('../../../img/' + image.url)" alt="" /> -->
    <!-- </div> -->
    <div class="slideImage" :style="setBackGroundImage"></div>
  </div>
</template>

<script>
export default {
  props: ['image'],
  computed: {
    setBackGroundImage() {
      return {
        backgroundImage: `url(${this.image.url})`,
        // backgroundImage: `url(${require('../../../img/NataliaEhret_Simulation-Stimulation9.jpg')})`,
        // backgroundImage: `url(${require('../../../img/NataliaEhret_Simulation-Stimulation9.jpg')})`,
        // 'background-image': `url((${require(image.url)})`,
      };
    },
  },
};
</script>

<style scoped>
.slides .slideImage {
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-image: url('../../../img/NataliaEhret_Simulation-Stimulation9.jpg'); */
}
</style>
