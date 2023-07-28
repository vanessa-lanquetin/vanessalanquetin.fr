<template>
  <SectionHero
    header="Mes projets"
    :call-to-action="{
      label: 'Voir mon github',
      href: 'https://github.com/vanessa-lanquetin',
    }"
    :img="HeroImg"
  >
    <template #description>
      Voici l'ensemble de mes projets que j'ai réalisé, qui m'ont permis de
      progresser et de découvrir de nouvelles techs.
    </template>
  </SectionHero>
  <div class="gallery">
    <div v-for="project of projectsToDisplay" :key="project.id" class="card">
      <RouterLink :to="{ name: 'project', params: { projectId: project.id } }">
        <img :src="project.imgMain" :alt="project.titre" class="img-project" />
        <h2 class="title-project">{{ project.titre }}</h2>
        <p class="description-project">{{ project.legende }}</p>
      </RouterLink>
    </div>
    <template v-if="!projectsToDisplay?.length">
      <p>Aucun projet trouvé.</p>
    </template>
  </div>
</template>

<script setup>
import { computed } from "vue";
import HeroImg from "../assets/img/gum/web.gif";
import projects from "../assets/datas/data";
import { useRoute, RouterLink } from "vue-router";
import SectionHero from "../components/Section-Hero.vue";

const route = useRoute();

const filter = computed(() => route.params.filter);

const projectsToDisplay = computed(() =>
  projects.filter((project) => {
    return filter.value ? project.category === filter.value : true;
  })
);
</script>

<style scoped lang="scss">
@import "../assets/scss/global";
.gallery {
  margin: auto auto 80px auto;
  width: 95%;
  gap: 40px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  text-align: left;
  flex-direction: row;

  .title-project {
    color: $pastelPink;
    font-weight: 800;
    font-size: 1.5em;
    margin-top: 16px;
    margin-bottom: 12px;
    border-top: $pastelPurple 1px solid;
    padding-top: 20px;
  }
  .description-project {
    color: $text-color;
  }

  .card {
    border: $thier-color 1px solid;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    height: 100%;
    min-height: 500px;
    max-width: 540px;
  }

  .img-project {
    object-fit: cover;
    width: 100%;
    height: 370px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}

@media screen and (max-width: 768px) {
  .gallery {
    .card{
      min-height: auto;}
    .img-project {
      height: 230px;
    }
  }
}
</style>
