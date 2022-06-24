<template>
<section>

<!-- <the-carousel :sliderItems="sliderItems" :interval="2000"></the-carousel> -->
<new-carousel :sliderItems="sliderItems" :interval="2000"></new-carousel>
</section>


</template>

<script>
// import TheCarousel from '../components/layout/ui/TheCarousel.vue';
import NewCarousel from '../components/layout/ui/NewCarousel.vue';


export default {
    components: {
        // TheCarousel,
        NewCarousel},
    data(){
        return {
            sliderItems: [
            {id: 1, name: 'img1', img: 'NataliaEhret_Simulation-Stimulation9.jpg' },
            {id: 2, name: 'img2', img: 'NataliaEhret_Simulation-Stimulation4.jpg' },
            {id: 3, name: 'img3', img: '(43x64,5)_NataliaEhret_AufDiePlaetzeKurs_3.jpg' },
            {id: 4, name: 'img4', img: '(36x54)_NataliaEhret_AufDiePlaetzeKurs_1 copy.jpg' },
            {id: 5, name: 'img5', img: '(100x66,66)_NataliaEhret_AufDiePlaetzeKurs.jpg' },
            
      ]
        }
    }
};

</script>

<style scoped>
</style>
