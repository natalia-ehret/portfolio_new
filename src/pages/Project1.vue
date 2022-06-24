<template>
  <div class="container">
    <div class="wrapper">
      <div class="item item_1">
        <h2>WHAT IS MISSING</h2>
        <p>
          What are you missing to be completely happy? I talked to ten different
          families about it, photographing them via FaceTime. Spring-Summer
          2020.
        </p>
      </div>
      <div class="item item_2">
        <img
          class="img1"
          :src="
            require('../img/what_is_missing/7,21x10,84 Liza und Ilja HF.jpg')
          "
        />
      </div>
      <div class="item item_3">
        <img
          class="img2"
          :src="require('../img/what_is_missing/7,48x12 Liza und Ilja QF.jpg')"
        />
      </div>
      <div class="item item_4">
        <img
          class="img1"
          :src="require('../img/what_is_missing/6,63x4,82 Nadja HF.jpg')"
        />
      </div>
      <div class="item item_5">
        <img
          class="img2"
          :src="require('../img/what_is_missing/10,24x6,36 Nadja QF.jpg')"
        />
      </div>
      <div class="item item_6">
        <img
          class="img1"
          :src="
            require('../img/what_is_missing/10,8x7,2 Mascha und Kostja HF.jpg')
          "
        />
      </div>
      <div class="item item_7">
        <img
          class="img2"
          :src="
            require('../img/what_is_missing/10,84x6,77 Mascha und Kostja QF.jpg')
          "
        />
      </div>
      <div class="item item_8">
        <img
          class="img1"
          :src="
            require('../img/what_is_missing/7,18x10,27 Nadja und Kinder HF.jpg')
          "
        />
      </div>
      <div class="item item_9">
        <img
          class="img2"
          :src="
            require('../img/what_is_missing/10,41x6,34 Nadja und Kinder QF.jpg')
          "
        />
      </div>
      <div class="item item_10">
        <img
          class="img1"
          :src="
            require('../img/what_is_missing/10,8x7,2 Kostja und Nadja HF.jpg')
          "
        />
      </div>
      <div class="item item_11">
        <img
          class="img2"
          :src="
            require('../img/what_is_missing/10,68x6,68 Kostja und Nadja QF.jpg')
          "
        />
      </div>
      <div class="item item_12">
        <img
          class="img1"
          :src="
            require('../img/what_is_missing/10,84x7,21 Natascha und Sergej HF.jpg')
          "
        />
      </div>
      <div class="item item_13">
        <img
          class="img2"
          :src="
            require('../img/what_is_missing/12,24x7,78 Natascha und Sergej QF.jpg')
          "
        />
      </div>
      <div class="item item_14">
        <img
          class="img1"
          :src="require('../img/what_is_missing/10,73x7,14 Gabit HF.jpg')"
        />
      </div>
      <div class="item item_15">
        <img
          class="img2"
          :src="
            require('../img/what_is_missing/10,8x7,58 Gabit und Alija QF.jpg')
          "
        />
      </div>
      <div class="item item_16">
        <img
          class="img1"
          :src="
            require('../img/what_is_missing/10,84x7,21 Mascha und Ilja HF.jpg')
          "
        />
      </div>
      <div class="item item_17">
        <img
          class="img2"
          :src="
            require('../img/what_is_missing/10,61x6,33 Mascha und Ilja QF.jpg')
          "
        />
      </div>
      <div class="item item_18">
        <img
          class="img1"
          :src="require('../img/what_is_missing/7,69x5,04 Asja HF.jpg')"
        />
      </div>
      <div class="item item_19">
        <img
          class="img2"
          :src="require('../img/what_is_missing/9,85x6,44 Asja QF.jpg')"
        />
      </div>
      <div class="item item_20">
        <img
          class="img1"
          :src="require('../img/what_is_missing/6,1x4,06.jpg')"
        />
      </div>
      <div class="item item_21">
        <img
          class="img2"
          :src="
            require('../img/what_is_missing/10,52x6,55 Tanja und Ljescha QF.jpg')
          "
        />
      </div>
    </div>
    <projects-footer></projects-footer>
  </div>
</template>

<script>
export default {
  beforeUnmount() {
    this.$emit('changeIsShown');
  },
};
</script>

<style scoped>
.container {
  /* display: flex;
    flex-direction: column; */
  /* gap: 20px; */
  width: 95%;
  margin: 0 auto;
  /* min-height: 100vh; */
  margin-bottom: 150px;
  margin-top: 100px;
  /* background-color: aquamarine; */
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* background-color: bisque; */
  grid-gap: 20px;
  justify-items: center;
}

/* p {
    font-size: 40px;
} */

h2 {
  font-size: 40px;
  font-weight: 400;
  margin-top: 0;
}

/* .img1 {
    width: 37%;
}

.img2 {
    width: 87%;
} */
img {
  width: 100%;
  height: auto;
}

.item_1 {
  /* background-color: blueviolet; */
  font-size: 40px;
}

.item_2 {
  width: 90%;
  justify-self: end;
}

.item_4,
.item_10,
.item_14,
.item_16,
.item_18,
.item_21 {
  justify-self: start;
}
.item_5,
.item_7,
.item_9,
.item_11,
.item_13,
.item_15,
.item_17,
.item_19,
.item_20 {
  justify-self: end;
}

.item_6,
.item_8,
.item_12 {
  justify-self: center;
}

.item_3,
.item_5,
.item_7,
.item_9,
.item_11,
.item_13,
.item_15,
.item_17,
.item_19 {
  margin-bottom: 120px;
}

.item_3,
.item_5,
.item_7,
.item_9,
.item_11,
.item_13,
.item_15,
.item_17,
.item_19,
.item_21 {
  grid-column: 1/3;
  /* max-width: 1200px; */
}
.item_4,
.item_6,
.item_8,
.item_10,
.item_12,
.item_14,
.item_16,
.item_18,
.item_20 {
  grid-column: 1/3;
  width: 50%;
  /* max-width: 600px; */
}

.item_20 {
  width: 47.5%;
}

@media (max-width: 1293px) {
  .item {
    grid-column: 1/3;
  }
}
</style>
