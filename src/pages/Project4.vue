<template>
  <div class="container">
    <h2>WE ARE WHAT WE EAT</h2>
    <div class="video-block">
      <iframe
        width="1200"
        height="675
   "
        src="https://www.youtube.com/embed/A7M8o8ZHgEw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <p>
      What is culture or nationality? In a narrow sense, it is the same
      birthplace, language and traditions for a group of people. For examle,
      folk costume, fairy tales, songs or food. My situation is complicated by a
      huge cultural mix: from Kazakhstan, where my German forebears were
      deported and where I was born, Siberia, where my half-Tatar children were
      born, Russia, whose language I speak, Mordovia, where my mother comes
      from, to Germany, where I moved five years ago.
    </p>
    <p>
      I'm sure there are a lot of mixes like me. That's firstly. Secondly, the
      last two years have shown that culture today is more about matching moral
      values, views on politics, medicine, human rights and everything else.
      Here neither origin, nor language, nor traditions really matter anymore.
    </p>
    <p>
      On the other hand, I can see that during the pandemic it was as if people
      were losing their footing. Then the usual rituals like Christmas dinner or
      pancakes for Maslenitsa became a rare opportunity to return to their
      familiar comfort. Even if it’s only externally.
    </p>
    <p>
      So how to find a balance between excessive nationalism and total loss of
      cultural identity? François Julien, the French philosopher, suggests not
      looking for distinctions and not setting primitive "us-them" boundaries,
      but to see culture as a resource: the more I learn about others, the
      richer I will become. And everything I've collected in a lifetime is also
      mine.
    </p>
    <p>
      My two-minute film is something between irony over national stereotypes in
      general and a stream of cultural associations about myself: Russian
      nursery rhymes, the only Mordovian words I know from my mother, school
      rhymes with German verbs, a Tatar song from my mother-in-law, some Soviet
      poetry quotes, some bits from the opera "Eugene Onegin", the old Kazakh
      anthem that we learned for our district administration, and much more.
    </p>
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

.img1 {
  width: 65%;
}

.video-block {
  margin: 0 auto;
  display: flex;
  justify-content: start;
}

@media (max-width: 462px) {
  iframe {
    width: 100%;
    /* height: 120px; */
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
