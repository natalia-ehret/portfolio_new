<template>
  <div class="slider">
    <span>Natalia Ehret</span>
    <new-item :image="images[currentSlideIndex]"></new-item>
  </div>
</template>

<script>
import NewItem from './NewItem.vue';
import img1 from '../../../img/image1.jpg';
import img2 from '../../../img/image2.jpg';
import img3 from '../../../img/image3.jpg';
import img4 from '../../../img/image4.jpg';
import img5 from '../../../img/image5.jpg';

export default {
  data() {
    return {
      currentSlideIndex: 0,
      images: [
        {
          id: 0,
          url: img1,
        },
        {
          id: 1,
          url: img2,
        },
        {
          id: 2,
          url: img3,
        },
        {
          id: 3,
          url: img4,
        },
        {
          id: 4,
          url: img5,
        },
      ],
    };
  },
  components: { NewItem },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.images.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    },
  },
  created() {
    const that = this;
    setInterval(() => {
      that.nextSlide();
    }, 3000);
  },
};
</script>

<style scoped>
span {
  /* text-shadow: 1px 0 1px rgb(107, 249, 19);  */
  /* 0 1px 1px rgb(107, 249, 19), 
        -1px 0 1px rgb(107, 249, 19); */
  /* 0 -1px 1px rgb(107, 249, 19); */
  color: rgb(255, 48, 234);
  font-weight: 900;
  line-height: 48px;
  /* font-style: italic; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 60px;
  text-align: center;
  letter-spacing: -3px;
  text-transform: uppercase;
}
</style>
