<template>
<div>
    <img :src="require('../../../img/' + sliderItem.img )" alt="">
</div>
</template>

<script>

export default {
    props: ['sliderItem']
};
</script>

<style scoped>
img {
    width: 1432px;
     /* width: 100%; */
  height: auto;
}
</style>
