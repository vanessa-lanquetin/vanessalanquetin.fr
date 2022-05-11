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
            </div>
            <div id="object">
              <div><span>Objet : </span>Alternance Développeur Web</div>
              <div><span>P.J :</span> CV</div>
            </div>
          </div>
          <div id="body-letter">
            <br />
            <br />
            Madame,Monsieur,
            <br />
            <br />
            Je recherche activement
            <span
              >une alternance pour une durée d’un an, sur un rythme de 3 à 4
              jours</span
            >
            par semaine en entreprise.
            <div class="space">
              <br />
              <br />
            </div>
            J’ai récemment suivi le cursus 
            <a
              class="link"
              target="blank"
              href="https://info.openclassrooms.com/fr/lp/prepapprentissage"
              >Prep'Apprentissage</a
            >
            d'Openclassrooms pour démarrer cette alternance dans les meilleures
            conditions possibles.
            <div class="space">
              <br />
              <br />
            </div>
            Je souhaite poursuivre cette formation afin d’acquérir les
            connaissances et les compétences nécessaires au métier de
            <span>développeur web</span>
            au sein de votre structure.
            <br />
            <br />
            Lors de mon cursus Prep'Apprentissage j'ai réalisé différents
            projets >notamment l’intégration d’une maquette, j’ai conçu ce site
            avec du
            <span>HTML</span> et <span>CSS</span> tout en prenant en compte le
            cahier des charges et en respectant la charte graphique.
            <div class="space">
              <br />
              <br />
            </div>
            J'ai également expérimenté
            <span
              >JS, SASS et utilisé le Framework Vue.js pour mes projets
              personnels</span
            >
            . J’ai su me former de manière autodidacte et en autonomie,
            m’organiser, gérer mon temps, me challenger en découvrant un domaine
            inconnu.
            <div class="space">
              <br />
              <br />
            </div>
            <span>Ma capacité d’adaptation et ma flexibilité </span>
            face au changement comptent parmi mes compétences principales.
            <br />
            <br />
            De plus m’avoir dans votre équipe, vous permettrait d’avoir un
            <span>regard neuf</span> sur votre entreprise, et y apporter du
            <span>dynamisme</span>.
            <div class="space">
              <br />
              <br />
            </div>
            Répondre aux attentes de vos clients et ainsi
            <span> contribuer au développement de votre entreprise</span> en
            vous aidant à atteindre vos objectifs serait
            <span>une expérience très enrichissante pour moi.</span>
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
            <div id="signature">Vanessa LANQUETIN</div>
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
#signature {
  text-align: right;
}
.space {
  display: none;
}

span {
  color: #f4b183;
}
@media screen and (max-width: 1360px) {
  #sec-letter .text-box {
    max-width: 90%;
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 514px){
  #body-letter{
    text-align: center;
  }
}
@media screen and (max-width: 360px) {
  #sec-letter .text-box {
    padding: 20px;
    font-size: 0.8em;
  }
  #body-letter {
    margin-top: 20px;
  }
  .space {
    display: block;
  }
}
</style>