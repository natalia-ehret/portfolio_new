<template>
  <div class="container">
    <h2>
      <span>S̶I̶M̶U̶L̶A̶T̶I̶O̶N̶ STIMULATION</span><br />
      <span>(A culture of repressed female sexuality)</span>
    </h2>
    <p>
      Vulva, clitoris, masturbation, stimulation, vibrator - it's all shameful,
      dirty and makes me look bad. Because none of this has anything to do with
      conception and motherhood, but I was taught that "sex is about mum and
      dad", not about pleasure. It is embarrassing and animalistic to think
      about sexual pleasure: this is how I feel as I write this text.
    </p>
    <p>
      The mindset I grew up with, of being modest, of not touching myself, of
      not talking about "that", of lowering my eyes at intimate moments in a
      film, and, as a consequence, of not asking my partner to touch me where I
      like, of not even thinking that I might somehow enjoy it, still holds me
      back.
    </p>
    <p>
      I am interested in the problem of widespread, almost normal, female orgasm
      simulation: between 63 and 92% of women have faked coming at least once in
      their lives. For me, the major reason for this problem seems to be the
      taboo on masturbation and on the image of vulva. From visual examples, I
      bring the art history and combine my photographs with some six excerpts
      from well-known paintings.
    </p>
    <p>
      I have chosen the Venus motif because it is here that the woman, or rather
      the "goddess of love and beauty", is clearly shown more as a sexual object
      than as a subject. Her permanently feminine and sexually passive
      decorativeness plus her always covered vulva with hands/hair/rags is a
      good example of this taboo on active female sexuality, a taboo on
      meaningful participation in a sexual process in which a woman would
      respect her own orgasm.
    </p>
    <p>
      By doing this project, I have taken as some study objects in my project
      these complicated feelings about my own sexuality and this crushing inner
      spasm when I get close to the topic of "female orgasm", and my body - as
      an expressive medium.
    </p>
    <div class="wrapper">
      <div class="item item_1">
        <img
          class="img1"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_SimulationStimulation_TitianMirrorFragment_3000Px.jpg')
          "
        />
      </div>
      <div class="item item_2">
        <img
          class="img2"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_Simulation-Stimulation13.jpg')
          "
        />
      </div>
      <div class="item item_3">
        <img
          class="img3"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_Simulation-Stimulation8.jpg')
          "
        />
      </div>
      <div class="item item_4">
        <img
          class="img4"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_SimulationStimulation_BotticelliFragment_3000Px.jpg')
          "
        />
      </div>
      <div class="item item_5">
        <img
          class="img5"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_Simulation-Stimulation3.jpg')
          "
        />
      </div>
      <div class="item item_6">
        <img
          class="img5"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_Simulation-Stimulation4.jpg')
          "
        />
      </div>
      <div class="item item_7">
        <img
          class="img6"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_Simulation-Stimulation16.jpg')
          "
        />
      </div>
      <div class="item item_8">
        <img
          class="img7"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_SimulationStimulation_RubensFragment_3000Px.jpg')
          "
        />
      </div>
      <div class="item item_9">
        <img
          class="img8"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_Simulation-Stimulation1 cut.jpg')
          "
        />
      </div>
      <div class="item item_10">
        <img
          class="img9"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_SimulationStimulation_CabanelFragment_3000Px.jpg')
          "
        />
      </div>
      <div class="item item_11">
        <img
          class="img10"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_Simulation-Stimulation10.jpg')
          "
        />
      </div>
      <div class="item item_12">
        <img
          class="img11"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_SimulationStimulation_TitianUrbinoFragment_3000Px.jpg')
          "
        />
      </div>
      <div class="item item_13">
        <img
          class="img12"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_Simulation-Stimulation11.jpg')
          "
        />
      </div>
      <div class="item item_14">
        <img
          class="img13"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_Simulation-Stimulation5.jpg')
          "
        />
      </div>
      <div class="item item_15">
        <img
          class="img14"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_SimulationStimulation_ManetFragment_3000Px.jpg')
          "
        />
      </div>
      <div class="item item_16">
        <img
          class="img15"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_Simulation-Stimulation6.jpg')
          "
        />
      </div>
      <div class="item item_17">
        <img
          class="img16"
          :src="
            require('../img/simulation_stimulation/NataliaEhret_Simulation-Stimulation2.jpg')
          "
        />
      </div>
    </div>
  </div>
  <projects-footer></projects-footer>
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
    flex-direction: column;
    gap: 20px; */
  width: 95%;
  margin: 0 auto;
  margin-bottom: 150px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}

p {
  font-size: 40px;
}

h2 {
  font-size: 40px;
  font-weight: 400;
}

/* 
.img1 {
    width: 25%;
}

.img2 {
    width: 37%;
}

.img3 {
    width: 30%;
}

.img4 {
    width: 47%;
}

.img5 {
    width: 85%;
}

.img6 {
    width: 35%;
}

.img7 {
    width: 25%;
}

.img8 {
    width: 25%;
}

.img9 {
    width: 38%;
}

.img10 {
    width: 45%;
}

.img11 {
    width: 64%;
}

.img12 {
    width: 30%;
}

.img13 {
    width: 42%;
}

.img14 {
    width: 39%;
}

.img15 {
    width: 42%;
}

.img16 {
    width: 37%;
} */

img {
  width: 100%;
  height: auto;
}

.titel {
  margin-top: 0;
}

.item_2,
.item_11 {
  grid-column: 2/4;
}

.item_3,
.item_4,
.item_5,
.item_6,
.item_17 {
  grid-column: 1/4;
}

.item_14,
.item_16 {
  grid-column: 1/2;
}

.item_13 {
  grid-column: 3/4;
}

.item_15 {
  grid-row: 9/11;
  grid-column: 2/4;
  align-self: end;
}

.item_12 {
  grid-column: 1/3;
}

.item_2 {
  width: 56%;
  align-self: center;
  margin-bottom: 150px;
}

.item_1 {
  width: 77%;
  align-self: center;
  justify-self: end;
  margin-bottom: 150px;
}
.item_3 {
  width: 34%;
  justify-self: end;
}

.item_4 {
  width: 73%;
  justify-self: center;
  margin-bottom: 150px;
}

.item_6 {
  margin-bottom: 150px;
}

.item_7 {
  width: 125%;
  margin-bottom: 150px;
}

.item_8 {
  width: 60%;
  justify-self: end;
  align-self: center;
  margin-bottom: 150px;
}

.item_9 {
  width: 67%;
  align-self: center;
  margin-bottom: 150px;
}

.item_10 {
  width: 91%;
  margin-bottom: 150px;
}

.item_11 {
  width: 104%;
  justify-self: end;
  margin-bottom: 150px;
}

.item_12 {
  width: 54.5%;
  align-self: center;
  justify-self: center;
}

.item_13 {
  width: 130%;
  justify-self: end;
  margin-bottom: 150px;
}

.item_14 {
  width: 150%;
  align-self: end;
}

.item_15 {
  width: 40%;
  align-self: center;
  justify-self: center;
  margin-bottom: 150px;
}

.item_16 {
  width: 150%;
  align-self: start;
  margin-bottom: 150px;
}

.item_17 {
  width: 50%;
  justify-self: center;
}

@media (max-width: 1293px) {
  p {
    font-size: 30px;
  }
}
</style>
