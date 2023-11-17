<template>
  <div class="home-root">
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
    <MainSection header="DÉVELOPPEMENT WEB">
      <SubSection header="LA DÉCOUVERTE" :img="LaptopImg">
        <p>J'aime la créativité que le développement front-end offre, en particulier le côté visuel et esthétique. 
          C'est une grande source de fierté et de satisfaction personnelle de créer quelque chose de concret à partir de conceptions visuelles. 
          J'adore imaginer des conceptions originales et voir mes idées prendre vie à travers le code.</p>
        <p>Avant de me lancer dans une formation en alternance avec OpenClassrooms, j'ai commencé à apprendre les bases du développement web en autodidacte. 
          J'ai réalisé plusieurs projets personnels pour approfondir mes connaissances en HTML, CSS et JavaScript. 
          Participer aux challenges Frontend Mentor a été un excellent moyen de me mettre en pratique et d'apprendre de nouvelles techniques et de me challenger.</p>
      </SubSection>
      <SubSection header="LA FORMATION">
        <p>C'est après avoir acquis les bases en développement front-end que j'ai décidé de suivre une formation pour en faire mon métier. 
          Ce qui m'a le plus plu dans ma formation en alternance avec OpenClassrooms, c'est la pratique. J'ai pu travailler sur des projets concrets tels que la transformation d'une maquette en site web, la création d'un site e-commerce en JavaScript, ou encore la sécurisation d'une API pour une application d'avis gastronomiques. 
          Ces projets m'ont permis de développer mes compétences techniques tout en me donnant une expérience professionnelle solide. 
          Mes projets de formations sont visibles depuis mon <span class="links" @click="goToPortfolio">Portfolio</span></p>
      </SubSection>
    </MainSection>
    <MainSection header="COMPÉTENCES & HOBBIES">
      <SubSection header="COMPÉTENCES" :img="MoveImg">
        <p>Depuis le début de mon apprentisage, je n'ai cessé de développer mes compétences, en commençant par maitriser les bases. Puis à m'initier et expérimenter d'autres technos à travers différents projets.</p>
        <div>
          <Tags :tags="[
            {label: 'Html', color: 'yellow'},
            {label: 'Css', color: 'yellow'},
            {label: 'Javascript', color: 'yellow'},
            {label: 'Sass', color: 'pink'},
            {label: 'Vue.js', color: 'pink'},
            {label: 'Git', color: 'yellow'},
            {label: 'React', color: 'purple'},
            {label: 'Github', color: 'yellow'},
            {label: 'Node.js', color: 'pink'},
            {label: 'Express', color: 'purple'},
            {label: 'MongoDB', color: 'pink'},
            {label: 'Wordpress', color: 'yellow'},
            {label: 'Divi', color: 'yellow'},
            {label: 'Figma', color: 'pink'},
            {label: 'Canva', color: 'pink'},
          ]">
          </Tags>
        </div>
        <div class="legend">
          Légende :
          <Tags :tags="[
            {label: 'Maitrisé', color: 'yellow'},
            {label: 'En apprentissage', color: 'pink'},
            {label: 'Quelques connaissances', color: 'purple'},
          ]">
          </Tags>
        </div>
      </SubSection>
    </MainSection>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import SectionHero from '../components/Section-Hero.vue'
import HeroImg from '../assets/img/laptop.png'
import LaptopImg from '../assets/img/laptop1.png'
import MoveImg from '../assets/img/laptop2.png'
import MainSection from '../components/MainSection.vue';
import SubSection from '../components/SubSection.vue';
import Tags from '../components/Tags.vue';

const router = useRouter();

const goToPortfolio = () => {
  router.push('/portfolio/openclassrooms');
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";
.home-root {
  text-align: center;
  .legend {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: 980px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
.links{
  text-decoration: underline;
  cursor: pointer;
  color:$thier-color;
  font-weight: 700;
  font-size: 1.15em;
}
</style>