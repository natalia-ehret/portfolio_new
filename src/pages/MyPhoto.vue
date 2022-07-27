<template>
  <div class="wrapper">
    <div class="btns" v-if="isShown">
      <button class="button" @click="clickHandler('/projects/photo/project3')">
        MY MOTHER'S DRESS
      </button>
      <button class="button" @click="clickHandler('/projects/photo/project1')">
        WHAT IS MISSING
      </button>
      <button class="button" @click="clickHandler('/projects/photo/project2')">
        S̶I̶M̶U̶L̶A̶T̶I̶O̶N̶ STIMULATION
      </button>
    </div>
  </div>
  <div class="photos">
    <router-view @change-is-shown="changeIsShown"></router-view>
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
  max-width: 80rem;
  margin-left: 2.5rem;
  margin-top: 15rem;
}

a:link,
a:visited {
  text-decoration: none;
}

a:hover,
a:active {
  color: rgb(183, 48, 228);
}

.photos {
  margin-top: 8rem;
}

button {
  border: none;
  background-color: white;
  font-size: 4rem;
  color: #343a40;
}

.button:hover {
  color: rgb(183, 48, 228);
  cursor: pointer;
}

/* @media (max-width: 1293px) {
  button {
    font-size: 30px;
  }
}

@media (max-width: 460px) {
  button {
    font-size: 25px;
  }
} */
</style>
