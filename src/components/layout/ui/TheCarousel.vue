<template>
  <div class="wrapper">
    <div
      class="v-carousel"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <carousel-item
        v-for="item in sliderItems"
        :key="item.id"
        :sliderItem="item"
      ></carousel-item>
    </div>
    <!-- <button @click="prevSlide">prev</button>
    <button @click="nextSlide">next</button> -->
  </div>
</template>

<script>
import CarouselItem from './CarouselItem.vue';

export default {
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.sliderItems.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    },
  },
  components: { CarouselItem },
  props: ['sliderItems', 'interval'],
  mounted() {
    if (this.interval > 0) {
      const that = this;
      setInterval(() => {
        that.nextSlide();
      }, 3000);
    }
  },
};
</script>

<style scoped>
.v-carousel {
  display: flex;
}
.wrapper {
  max-width: 90rem;
  /* overflow: hidden; */
}
</style>
