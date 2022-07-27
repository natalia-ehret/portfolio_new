<template>
  <div class="wrapper">
    <div class="text">
      <p>
        Natalia Ehret was born in the Kazakh SSR in 1986. She studied literature
        in Russia, had two children, and moved to Germany in 2016. Today she's a
        student of photography and visual media at the Bielefeld University of
        Applied Sciences.
      </p>
      <p>
        As a photographess she often works with collages, fruit and active
        color. In her art and documentary projects she often reflects on
        motherhood, gender and cultural identity.
      </p>
      <p>
        <a href="mailto:natalia.ehret@gmail.com">natalia.ehret@gmail.com</a
        ><br />
        <br />
        <a href="https://www.instagram.com/natalia_ehret/">@natalia_ehret</a
        ><br />
        <br />
        Karl-Oldewurtel-Strasse 25,<br />
        33659 Bielefeld<br />
        Germany<br />
      </p>
      <p class="daten-schutz">
        <router-link to="/datenschutzerklaerung"
          >Datenschutzerklärung</router-link
        >
      </p>
    </div>
    <div class="photo">
      <img :src="require('../img/natalia.jpg')" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  /* justify-content: center; */
  gap: 20%;
  /* align-items: flex-start; */
  letter-spacing: -0.7px;
  line-height: 1.2;
  /* background-color: aqua; */
}

.text {
  /* margin-left: 25px; */
  font-size: 4rem;
  margin-top: 9rem;
}

img {
  width: 70%;
}
.photo {
  /* max-width: 1000px; */
  margin-top: 9rem;
  justify-self: end;
  /* margin-right: 25px; */
}

a:link,
a:visited {
  text-decoration: none;
  color: #343a40;
}

a:hover,
a:active {
  color: rgb(237, 90, 207);
}

@media (max-width: 1293px) {
  .wrapper {
    grid-template-columns: 1fr;
    gap: 2%;
  }

  .photo {
    justify-self: center;
    /* margin-right: 25px; */
  }

  .text {
    margin-left: 25px;
    font-size: 30px;
    margin-top: 90px;
  }
}

.daten-schutz {
  font-style: italic;
  font-size: 35px;
}

@media (max-width: 460px) {
  .text {
    font-size: 25px;
  }
}
</style>
