<template>
  <div class="wrapper">
    <div class="btns" v-if="isShown">
      <button class="button" @click="clickHandler('/projects/video/project4')">
        WE ARE WHAT WE EAT
      </button>
      <button class="button" @click="clickHandler('/projects/video/project5')">
        THE WHITE SEAGULLS ARE WHITE JUST SO
      </button>
    </div>
  </div>
  <div class="videos">
    <router-view @change-is-shown="changeIsShown"> </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: true,
    };
  },
  methods: {
    clickHandler(path) {
      this.isShown = false;
      this.$router.push(path);
    },
    changeIsShown() {
      this.isShown = true;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.btns {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 900px;
  margin-left: 25px;
  margin-top: 120px;
}

a {
  text-decoration: none;
}

a:hover {
  color: rgb(248, 98, 29);
}

.videos {
  margin-top: 80px;
}

button {
  border: none;
  background-color: white;
  font-size: 40px;
}

.button:hover {
  color: rgb(248, 98, 29);
  cursor: pointer;
}

@media (max-width: 1293px) {
  button {
    font-size: 30px;
  }
}

@media (max-width: 682px) {
  button {
    font-size: 25px;
  }
}
</style>
