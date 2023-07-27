<template>
  <!-- <div :class="'theme-' + theme.currentThemeName.value">
  </div> -->
      <SectionHero
      header="Vanessa Lanquetin"
      :call-to-action="{
        label: 'Voir mon github',
        href: 'https://github.com/vanessa-lanquetin',
      }"
      :img="HeroImg"
    >
      <template #description>
        J'ai récemment terminé la formation Développeur web en 
        alternance avec l'école Openclassrooms.
        En parallèle de ma formation, j'ai travaillé en qu'intégratrice web
        au sein d'une agence web spécialisée dans la création de sites
        internet avec Wordpress. À travers cette expérience professionnelle
        et différents projets, j'ai pu développé mes compétences.
      </template>
    </SectionHero>
</template>

<script>
import SectionHero from '../components/Section-Hero.vue';

export default {
  components: { CardComponent },
  setup() {
    return {
      theme,
    };
  },
};
</script>

<style lang="scss" scoped>
.competences {
  height: 30vh;
  width: 100%;
  background-image: linear-gradient(68.3deg, #f5b161 0.4%, #ec366e 100.2%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 350px;
  flex-direction: column;
  h1 {
    margin-top: 70px;
    color: #fff;
    font-size: 3.3em;
    opacity: 1;
    z-index: 2;
  }
}


.fond-curvy {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 53%;
  display: block;
  margin: 0;
}


@media screen and (max-width: 450px) {
  .accueil {
    height: 75vh;
  }
}

.deco {
  width: 100%;
}

strong {
  font-weight: 600;
}


#portfolioVue {
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
  color: #fff;
  text-align: justify;
}
#container-items-portfolioVue {
  display: grid;
  grid-template-columns: repeat(2, 35%);
  grid-template-rows: max-content;
  justify-content: center;
  flex-grow: 1;
  gap: 30px;
  margin-bottom: 80px;
  .text-box {
    max-width: 700px;
    text-align: left;
    height: 100%;
  }
  h3 {
    color: #fff;
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
  #container-items-portfolioVue {
    grid-template-columns: repeat(1, 55%);
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 592px) {
  #container-items-portfolioVue {
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