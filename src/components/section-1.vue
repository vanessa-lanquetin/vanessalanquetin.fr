<template>
  <section class="sec-01">
    <div id="main-title" v-scroll-reveal="{ preset: 'left' }">
      <div id="container-title">
        <h1>Vanessa Lanquetin <br /></h1>
      </div>
      <div class="pulse-anim">
        <img id="round-img" src="../assets/img/2.jpg" alt="" />
      </div>
    </div>

    <div class="container">
      <div class="content">
        <div
          id="presentation"
          class="text-box"
          v-scroll-reveal="{ preset: 'right', delay: 100 }"
        >
          <h2>Présentation</h2>
          J'ai récemment suivi le cursus
          <a
            class="link"
            target="blank"
            href="https://info.openclassrooms.com/fr/lp/prepapprentissage"
          >
            Prep'Apprentissage</a
          >
          d'Openclassrooms, il s'agit d'une préformation de 4 mois pour la
          formation
          <a
            class="link"
            target="blank"
            href="https://openclassrooms.com/fr/paths/185-developpeur-web"
          >
            Développeur Web</a
          >
          qui se déroulera en alternance pendant an, sous un rythme de 3 à 4
          jours par semaine en entreprise.
          <br />
          <br />
          Je recherche ainsi une entreprise d'accueil pour y faire mon
          alternance et y développer mes compétences dans le secteur de Nancy ou
          en full remote.
          <br />
          <br />
          J'ai déjà pu acquérir quelques compétences en réalisant des projets
          lors de la formation Prep'apprentissage mais aussi lors de mon temps
          libre.
        </div>
        <div id="main-img" class="image" v-scroll-reveal="{ preset: 'bottom' }">
          <img
            id="img1"
            src="../assets/img/botanic1.webp"
            alt="jardin botanique"
          />
        </div>
        <div
          id="info"
          class="text-box"
          v-scroll-reveal="{ preset: 'right', delay: 700 }"
        >
          <h2>Informations</h2>
          <div class="items-infos">Age:</div>
          <div class="text-blue">24 ans</div>
          <br />
          <div class="items-infos">Localisation:</div>
          <div class="text-blue">Meurthe et Moselle (54)</div>
          <div class="social-networks">
            <h2>Réseaux Sociaux</h2>
            <ul class="logos">
              <li class="logo">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/vanessa-lanquetin"
                >
                  <img
                    class="img-logo"
                    src="../assets/img/logo-linkedin.webp"
                    alt="linkedin"
                  />
                  <div class="text-logo link">Linkedin</div>
                </a>
              </li>
              <li class="logo">
                <a target="blank" href="https://github.com/vanessa-lanquetin">
                  <img
                    class="img-logo"
                    src="../assets/img/logo-github.webp"
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
.pulse-anim {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #000;
  box-shadow: 0 0 0 0 #f4b183;
  animation: pulse 1.7s infinite;
}

@keyframes pulse {
  to {
    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0.01);
  }
}

#round-img {
  height: 100px;
  width: 100px;
  border-radius: 60%;
  filter: saturate(150%);
}
#container-title {
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: right;
}
.sec-01 {
  display: flex;
  flex-direction: column;
}
#main-img {
  height: auto;
  flex-grow: 1;
  margin: 0 20px;
  max-width: 750px;
}
.sec-01 #img1 {
  height: 100%;
  filter: saturate(230%);
}

.sec-01 .content {
  margin: 0 150px;
}
#main-title {
  font-size: 2.5em;
  margin: 20px 0;
  width: 80%;
  color: #f4b183;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 50px;
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
  margin-top: 40px;
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
#download {
  margin-top: 50px;
  background-color: #374752;
  color: #fff;
  padding: 18px;
  border: 3px solid #f4b183;
  font-size: 1.1em;
  border-radius: 60px;
}
@media screen and (min-width: 1870px) {
  // #main-img {
  //   height: 520px;
  // }
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
    padding: 30px;
  }
  #main-title {
    font-size: 2.6em;
    padding: 0 20px;
    box-sizing: border-box;
  }
  #main-img {
    margin: 0;
  }
  .sec-01 .content {
    margin: 15px;
  }
}

/* Responsive OK jusuq'à l'indicateur tablet */
</style>