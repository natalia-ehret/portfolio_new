<template>
<div class="wrapper">
    <span>Natalia Ehret</span>
    <div class="v-carousel"
     :style="{'margin-left': '-' + (100*currentSlideIndex) + '%' }"
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
import CarouselItem from './CarouselItem.vue'

export default {
    data(){
        return {
            currentSlideIndex: 0
        }
    },
    methods: {
        prevSlide() {
            if (this.currentSlideIndex > 0) {
                 this.currentSlideIndex --
            
            }
           
        },
        nextSlide() {
            if (this.currentSlideIndex >= this.sliderItems.length -1) {
                this.currentSlideIndex  = 0;
            } else {
                 this.currentSlideIndex ++
            }
           
        },
    },
    components: {CarouselItem},
    props: ['sliderItems', 'interval'], 
    mounted() {
        if (this.interval > 0) {
            const that = this;
            setInterval(()=>{
                that.nextSlide();
            },3000)

        }
    }
};
</script>

<style scoped>
.v-carousel {
    display: flex;
    /* transition: all ease 0.5s; */
}
.wrapper {
    /* max-width: 1432px;  */  

    height: 100vh;
    width: 100vw;
    /* max-width: 100%;  */
    overflow: hidden; 
    position: relative;
}

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
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    
    font-size: 60px;
    text-align: center;
    letter-spacing: -3px;
    text-transform: uppercase;
}

</style>
