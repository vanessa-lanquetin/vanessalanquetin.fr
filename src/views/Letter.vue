<template>
  <h2 id="letter" class="section-title" v-scroll-reveal="{ preset: 'left' }">
    Lettre de motivation
  </h2>
  <section id="sec-letter">
    <div class="container">
      <div class="content">
        <div
          id="container-letter"
          class="text-box"
          v-scroll-reveal="{ preset: 'right', delay: 100 }"
        >
          <div id="header-letter">
            <div id="coordonnees">
              <div>Vanessa LANQUETIN</div>
              <div>54230 NEUVES MAISONS</div>
              <div>Tél : 06.71.89.91.25</div>
              <div>Mail : lanquetin.vanessa@gmail.com</div>
            </div>
            <div id="object">
              <div>Objet : Alternance Développeur Web</div>
              <div>P.J : CV</div>
            </div>
          </div>
          <div id="body-letter">
            <br />
            <br />
            Madame,Monsieur,
            <br />
            <br />
            Je recherche activement une alternance pour une durée d’ un an, sur
            un rythme de 4 jours par semaine en entreprise.
            <div class="space">
              <br />
              <br />
            </div>
            J’ai récemment suivi intégré le cursus Prep'Apprentissage
            d'Openclassrooms pour démarrer cette alternance dans les meilleures
            conditions possibles.
            <div class="space">
              <br />
              <br />
            </div>
            Je souhaite poursuivre cette formation afin d’acquérir les
            connaissances et les compétences nécessaires au métier de
            développeur web au sein de votre structure.
            <br />
            <br />
            Lors de mon cursus Prep'Apprentissage j'ai réalisé différents
            projets notamment l’intégration d’une maquette, j’ai conçu ce site
            avec du HTML et CSS tout en prenant en compte le cahier des charges
            et en respectant la charte graphique.
            <div class="space">
              <br />
              <br />
            </div>
            J'ai également expérimenté le SJS, SASS et utilisé le Framework
            Vue.js pour mes projets personnels. J’ai su me former de manière
            autodidacte et en autonomie, m’organiser, gérer mon temps, me
            challenger en découvrant un domaine inconnu.
            <div class="space">
              <br />
              <br />
            </div>
            Ma capacité d’adaptation et ma flexibilité face au changement
            comptent parmi mes compétences principales.
            <br />
            <br />
            De plus m’avoir dans votre équipe, vous permettrait d’avoir un
            regard neuf sur votre entreprise, et y apporter du dynamisme.
            <div class="space">
              <br />
              <br />
            </div>
            Répondre aux attentes de vos clients et ainsi contribuer au
            développement de votre entreprise en vous aidant à atteindre vos
            objectifs serait une expérience très enrichissante pour moi.
            <div class="space">
              <br />
              <br />
            </div>
            Aujourd’hui, j’aspire vivement à rejoindre votre entreprise au sein
            de laquelle je pourrais m’investir pleinement et ainsi concrétiser
            mon projet professionnel et y développer mes compétences.
            <br />
            <br />
            Je reste à votre disposition pour toutes informations
            complémentaires. Je serai ravie d’échanger sur vos besoins et vos
            objectifs lors d’un entretien.
            <br />
            <br />
            Veuillez agréer Madame, Monsieur, mes salutations distinguées.
            <br />
            <br />
            Vanessa LANQUETIN
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#letter {
  margin-top: 50px;
}
#sec-letter {
  height: auto;
  .container {
    margin: 0;
  }
  .text-box {
    max-width: 60%;
    text-align: justify;
  }
}
.content {
  justify-content: center;
  align-items: center;
  display: flex;
}
#header-letter {
  text-align: left;
  div {
    flex-shrink: 0;
    flex-wrap: wrap;
  }
}
.space {
  display: none;
}
@media screen and (max-width: 1360px) {
  #sec-letter .text-box {
    max-width: 90%;
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 360px) {
  #sec-letter .text-box {
    padding: 20px;
    font-size: 0.8em;
  }
  #body-letter {
    margin-top: 20px;
    text-align: justify;
  }
  .space {
    display: block;
  }
}
</style>