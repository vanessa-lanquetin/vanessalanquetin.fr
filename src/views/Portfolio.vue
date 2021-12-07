<template>
  <h2 id="portfolio" class="section-title" v-scroll-reveal="{ preset: 'left' }">
    Portfolio
  </h2>
  <section id="container-items-portfolio">
    <figure class="text-box">
      <a href="https://vanessa-lanquetin.github.io/webflix/" target="blank">
        <img src="../assets/Img/portfolio/webflix.webp" alt="" />
        <h3>Webflix</h3>
      </a>
      <div class="description">
        <div class="state"><span>Statut :</span> En cours</div>
        <div class="responsive">
          <span>Responsive :</span> <i class="fas fa-times"></i>
        </div>
      </div>
      <figcaption>
        WebFlix est un projet inspiré de la plateforme Netflix. Ce projet à pour
        but de développé mes compétences Front-End en m'inspirant d'une
        interface très populaire.
      </figcaption>
    </figure>
    <figure class="text-box">
      <a
        href="https://vanessa-lanquetin.github.io/VanessaLanquetin_2_08092021/"
        target="blank"
      >
        <img
          id="reservia"
          src="../assets/Img/portfolio/reservia2.webp"
          alt=""
        />
        <h3>Réservia</h3>
      </a>
      <div class="description">
        <div class="state"><span>Statut :</span> Terminé</div>
        <div class="responsive">
          <span>Responsive :</span> <i class="fas fa-check"></i>
        </div>
      </div>
      <figcaption>
        Réservia est un site de plannification de vacacances. Ce projet a été
        réalisé lors ma formation "Prep'Apprentissage" d'Openclassrooms.
        <br />
        <br />
        Ma mission consisitait juste à intégrer une maquette sans le rendre
        fonctionnel. Tout en prenant en compte le cahier des charges et la
        charte graphique. Grâce à ce projet j'ai expérmienté grid.
      </figcaption>
    </figure>
    <figure class="text-box">
      <a href="https://artchallenges.vanessalanquetin.fr/" target="blank">
        <img src="../assets/Img/portfolio/art-project.webp" alt="" />
        <h3>Art Challenges</h3>
      </a>
      <div class="description">
        <div class="state"><span>Statut :</span> En cours</div>
        <div class="responsive">
          <span>Responsive :</span> <i class="fas fa-times"></i>
        </div>
      </div>
      <figcaption>
        Art Challenges est un site pour les artistes. Pour booster ma créativié
        pour mes dessins, j'ai eu l'idée de créer Art Challenges.
        <br />
        <br />
        Au menu divers outils : des générateurs, un minuteur et des défis, cela
        permet d'apporter du challenge mais aussi de l'inspiration.
      </figcaption>
    </figure>
    <figure class="text-box">
      <a href="https://vanessa-lanquetin.github.io/meteo/" target="blank">
        <img src="../assets/Img/portfolio/meteo.webp" alt="" />
        <h3>Météo</h3>
      </a>
      <div class="description">
        <div class="state"><span>Statut :</span> Terminé</div>
        <div class="responsive">
          <span>Responsive :</span> <i class="fas fa-times"></i>
        </div>
      </div>
      <figcaption>
        Ce projet Météo avait pour but de me faire travailler avec une API pour
        la première fois.
        <br />
        <br />
        J'ai travaillé sur ce projet lors de ma formation "Javascript: la
        formation ultime" de Udemy.
      </figcaption>
    </figure>
    <figure class="text-box">
      <a
        href="https://vanessa-lanquetin.github.io/fm-stats-preview-card-component/"
        target="blank"
      >
        <img src="../assets/Img/portfolio/stats-preview-card.webp" alt="" />
        <h3>Challenge Front-End - Stats Preview Card</h3>
      </a>
      <div class="description">
        <div class="state"><span>Statut :</span> Terminé</div>
        <div class="responsive">
          <span>Responsive :</span> <i class="fas fa-check"></i>
        </div>
      </div>
      <figcaption>
        Stats Preview Card fait parti des challenges de Front End Mentor. J'ai
        su reproduire le visuel qui m'a été donné .
        <br />
        <br />
        Grâce à cela j'ai eu l'occasion d'expérimenté filter sur une image et de
        travailler davantage sur le coté responsive d'un component.
      </figcaption>
    </figure>
    <figure class="text-box">
      <a
        href="https://vanessa-lanquetin.github.io/3-column-preview-card-component/"
        target="blank"
      >
        <img src="../assets/Img/portfolio/3column-preview-card.webp" alt="" />
        <h3>Challenge Front-End - 3 Column Preview Card</h3>
      </a>
      <div class="description">
        <div class="state"><span>Statut :</span> Terminé</div>
        <div class="responsive">
          <span>Responsive :</span> <i class="fas fa-check"></i>
        </div>
      </div>
      <figcaption>
        3 Column Preview Card fait également parti des challnges de Front End
        Mentor. J'ai réalisé ce premier challenge à mes début dans le HTML et
        CSS.
        <br />
        <br />
        C'était la première fois que je produisais un visuel, cela permis de
        m'améliorer dans l'utilisation de Flex
      </figcaption>
    </figure>
  </section>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
#portfolio {
  margin-top: 50px;
}
#reservia {
  background-color: rgba(255, 255, 255, 0.924);
}
.description {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px white solid;
  margin-bottom: 20px;
}
figure img {
  width: 100%;
  filter: grayscale(100%);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    filter: grayscale(0%);
  }
}
figcaption {
  color: #10e2d7;
  text-align: justify;
}
#container-items-portfolio {
  display: grid;
  grid-template-columns: repeat(2, 35%);
  grid-template-rows: max-content;
  justify-content: center;
  flex-grow: 1;
  gap: 30px;
  .text-box {
    max-width: 700px;
    text-align: left;
    height: 100%;
  }
  h3 {
    color: #f4b183;
    font-size: 1.5em;
    margin: 10px 0;
  }
  .fa-times {
    color: red;
  }
  .fa-check {
    color: greenyellow;
  }
  span {
    font-weight: bold;
  }
}

@media screen and (max-width: 1400px) {
  #container-items-portfolio {
    grid-template-columns: repeat(1, 55%);
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 592px) {
  #container-items-portfolio {
    grid-template-columns: repeat(1, 89%);
    .text-box {
      padding: 10px;
    }
  }
  figcaption {
    text-align: center;
  }
  .responsive{
    flex-shrink: 0;
  }
  .state{
    display: flex;
    flex-wrap: wrap;
  }
}
</style>