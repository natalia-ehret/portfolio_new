<template>
  <div class="slider">
    <slider-item
      :image="images[currentSlideIndex]"
      heigt="90rem"
      width="150rem"
    ></slider-item>
    <!-- <audio controls autoplay>
      <source
        :src="require('../../../sound/Chaykovsky.mp3')"
        type="audio/ogg; codecs=vorbis"
      />
      <source
        :src="require('../../../sound/Chaykovsky.mp3')"
        type="audio/mpeg"
      />
      somthing wrong.
    </audio> -->
    <button class="btn btn--left" @click="prevSlide">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="btn-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <button class="btn btn--right" @click="nextSlide">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="btn-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script>
import img1 from '../../../img/archiv1.jpg';
import img2 from '../../../img/archiv2.jpg';
import img3 from '../../../img/archiv3.jpg';
import img4 from '../../../img/archiv4.jpg';
import img5 from '../../../img/archiv5.jpg';
import SliderItem from './SliderItem.vue';

export default {
  components: { SliderItem },
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

  methods: {
    prevSlide() {
      debugger;
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
.slider {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  /* width: 50%; */
}

.btn {
  background-color: #fff;
  border: none;
  height: 4rem;
  width: 4rem;
  position: absolute;
  border-radius: 50%;
  /* box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); */
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-icon {
  height: 2.4rem;
  width: 2.4rem;
  stroke: rgb(237, 90, 207);
}

.btn--left {
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
}
.btn--right {
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
}
</style>
