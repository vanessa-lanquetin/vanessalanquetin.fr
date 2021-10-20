<template>
  <section class="sec-01">
    <h2 class="main-title" v-scroll-reveal="{ preset: 'left' }">
      Vanessa Lanquetin
    </h2>
    <div class="container">
      <div class="content">
        <div
          id="presentation"
          class="text-box"
          v-scroll-reveal="{ preset: 'right', delay: 700 }"
        >
          <h3>Présentation</h3>
          Ayant pour ambition d'être développeuse web, j'ai intégré le cursus
          <a
            class="link"
            target="blank"
            href="https://info.openclassrooms.com/fr/lp/prepapprentissage"
          >
            Prep'Apprentissage</a
          >
          d'Openclassrooms qui prend fin le 02 Décembre 2021.
          <br />
          <br />
          J'ai pour projet par la suite de suivre la formation de
          <a
            class="link"
            target="blank"
            href="https://openclassrooms.com/fr/paths/185-developpeur-web"
          >
            Développeur Web</a
          >
          d'Openclassrooms en alternance qui durera 1 an.
          <br />
          <br />
          Je recherche ainsi une entreprise d'accueil pour y faire mon
          alternance et y développer mes compétences.
        </div>
        <div id="main-img" class="image" v-scroll-reveal="{ preset: 'bottom' }">
          <img id="img1" src="../assets/Img/img1.webp" alt="" />
        </div>
        <div
          id="info"
          class="text-box"
          v-scroll-reveal="{ preset: 'right', delay: 700 }"
        >
          <h3>Informations</h3>
          <div class="items-infos">Age:</div>
          <div class="text-blue">24 ans</div>
          <br />
          <div class="items-infos">Localisation:</div>
          <div class="text-blue">Meurthe et Moselle (54)</div>
          <div class="social-networks">
            <h3>Réseaux Sociaux</h3>
            <ul class="logos">
              <li class="logo">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/vanessa-lanquetin-15742b153/"
                >
                  <img
                    class="img-logo"
                    src="../assets/Img/logo-linkedin.webp"
                    alt="linkedin"
                  />
                  <div class="text-logo link">Linkedin</div>
                </a>
              </li>
              <li class="logo">
                <a target="blank" href="https://github.com/vanessa-lanquetin">
                  <img
                    class="img-logo"
                    src="../assets/Img/logo-github.webp"
                    alt="github"
                  />
                  <div class="text-logo link">Github</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.sec-01 {
  margin: 45px 0 170px 0;
  display: flex;
  flex-direction: column;
}
#main-img {
  height: 457px;
  flex-grow: 1;
  margin: 0 20px;
}
.sec-01 #img1 {
  height: 100%;
  filter: contrast(140%);
}

.sec-01 .content {
  margin: 0 150px;
}
.main-title {
  font-size: 4em;
  margin-bottom: 50px;
  width: 100%;
  color: white;
}
/* INFOS */
#info {
  text-align: left;
}
.items-infos {
  font-weight: bold;
  font-size: 1.1em;
}

.social-networks {
  margin-top: 30px;
}
.logo {
  margin-bottom: 15px;
}
.logo a {
  display: flex;
  justify-content: left;
  text-align: center;
}
.img-logo {
  height: 50px;
  width: 50px;
}
.text-logo {
  margin: auto 5px;
}
@media screen and (min-width: 1870px) {
  #main-img {
    height: 520px;
  }
  .sec-01 .text-box {
    font-size: 1.1em;
    max-width: 500px;
  }
}
@media screen and (max-width: 1400px) {
  #main-img {
    display: none;
  }
}
@media screen and (max-width: 1071px) {
  #main-img {
    display: block;
    height: auto;
  }
  .sec-01 .content {
    display: flex;
    flex-direction: column;
    gap: 40px;

    justify-content: center;
  }
  .sec-01 .text-box {
    font-size: 1.2em;
    max-width: none;
    margin: 0 20px;
  }
  .sec-01 #info {
    text-align: center;
  }
  .sec-01 #info a {
    justify-content: center;
  }
}
@media screen and (max-width: 810px) {
  .sec-01 .text-box {
    margin: 0;
    padding: 48px;
  }
  .main-title {
    font-size: 2.6em;
  }
  #main-img{
    margin: 0;
  }
  .sec-01 .content {
    margin: 30px;
  }
}

/* Responsive OK jusuq'à l'indicateur tablet */
</style>