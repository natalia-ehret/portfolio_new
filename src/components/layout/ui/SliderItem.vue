<template>
  <div class="slides">
    <div class="slideImage" :style="setBackGroundImage"></div>
  </div>
</template>

<script>
export default {
  props: ['image', 'width', 'heigt'],
  computed: {
    setBackGroundImage() {
      return {
        backgroundImage: `url(${this.image.url})`,
        width: this.width,
        height: this.heigt,
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
  /* transition: all ease 0.5s; */
}
</style>
