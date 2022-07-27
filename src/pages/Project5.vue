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
        width="1200px"
        height="675px"
        src="https://www.youtube.com/embed/kNlzU-W7SSg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
  width: 95%;
  margin: 0 auto;
  letter-spacing: -0.7px;
  line-height: 1.2;
  margin-bottom: 15rem;
  margin-top: 10rem;
}

p {
  font-size: 4rem;
}

h2 {
  font-size: 4rem;
  font-weight: 400;
}
.video-block {
  margin: 0 auto;
  display: flex;
  justify-content: start;
}

@media (max-width: 462px) {
  iframe {
    width: 300px;
    height: 169px;
  }

  p {
    font-size: 25px;
  }

  h2 {
    font-size: 25px;
  }
}

@media (max-width: 790px) {
  iframe {
    width: 100%;
    height: 428px;
  }

  p {
    font-size: 30px;
  }

  h2 {
    font-size: 30px;
  }
}

@media (max-width: 1293px) {
  iframe {
    width: 760px;
    height: 428px;
  }

  p {
    font-size: 30px;
  }

  h2 {
    font-size: 30px;
  }
}
</style>
