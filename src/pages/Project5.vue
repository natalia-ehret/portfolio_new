<template>
  <div class="container">
    <h2>THE WHITE SEAGULLS ARE WHITE JUST SO</h2>
    <p>
      A year ago my son started being tested for autism and all that year, I
      have lived waiting for the exakt diagnosis. All this time, I have been
      watching him and asking myself: is it or isn’t it? And if it is, what does
      it make for his future? In my film I tried to convey these my feelings and
      to reflect on how conventionally could be classification people into
      typical and atypical.
    </p>
    <p>
      We know that a lot of neuro atypical people in the history of art or
      science have only enriched their society. Maybe it's time to talk about
      different neurotypes rather than the norm?
    </p>
    <div class="video-block">
      <iframe
        width="1200"
        height="675"
        src="https://www.youtube.com/embed/kNlzU-W7SSg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
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
  width: 95%;
  margin: 0 auto;
  letter-spacing: -0.7px;
  line-height: 1.2;
  padding-bottom: 50px;
}

p {
  font-size: 40px;
}

h2 {
  font-size: 40px;
  font-weight: 400;
}
.video-block {
  margin: 0 auto;
}
</style>
