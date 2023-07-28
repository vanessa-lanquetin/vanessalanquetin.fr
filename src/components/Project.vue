<template>
  <div>
    <template v-if="project">
      <div>
        <Banner />
        <section class="content-project">
          <div class="left part-project">
            <article class="container-description">
              <h2>Description</h2>
              <p v-if="project.description">{{ project.description }}</p>
              <p v-else>
                Il n'y a pas d'informations sur ce projet actuellement.
              </p>
            </article>
            <article
              class="container-competences"
              v-if="
                project.category === 'openclassrooms' && project.competences
              "
            >
              <h2>Compétences</h2>
              <ul v-if="project.competences">
                <li
                  class="competence"
                  v-for="competence in project.competences"
                  :key="competence"
                >
                  - {{ competence }}
                </li>
              </ul>
              <p v-else>
                Il n'y a pas d'informations sur les compétences de ce projet
                actuellement.
              </p>
            </article>
          </div>
          <div class="right part-project">
            <article class="container-tech" v-if="project.tech">
              <h2>Technos</h2>
              <p v-if="project.tech">{{ project.tech }}</p>
            </article>
<section class="container-links" v-if="project.github || (project.link && project.link.length)">
  <h2>Lien(s)</h2>
  <div v-if="project.github">
    <p>
      Github :
      <a :href="project.github" target="_blank">{{ `Lien du projet "${project.titre}"` }}</a>
    </p>
  </div>
  <article v-if="project.link && project.link.length"> Contexte :
    <p v-for="linkItem in project.link" :key="linkItem.label">      
      <a :href="linkItem.url" target="_blank">{{ linkItem.label }}</a>
    </p>
  </article>
</section>
            <div v-if="project.statut" class="statut-project">
              <h2>Statut : {{ project.statut }}</h2>
            </div>
          </div>
        </section>
      </div>
    </template>
    <template v-else>
      <p>Aucun projet trouvé.</p>
    </template>
  </div>
</template>

<script setup>
import { computed } from "vue";
import projects from "../assets/datas/data";
import Banner from "../components/Banner.vue";
import { useRoute } from "vue-router";
const route = useRoute();

const project = computed(() =>
  projects.find((project) => project.id === route.params.projectId)
);
</script>

<style scoped lang="scss">
@import "../assets/scss/global";
a {
  color: $primary-color;
  &:hover {
    color: $second-color;
  }
}
.content-project {
  padding-top: 80px;
  margin: auto auto 50px auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 100px;

  .part-project {
    width: 50%;
    gap: 10px;
  }
  .left {
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  .right {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 34px;
  }
  .statut-project {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: stretch;
    gap: 10px;
  }
  .competence,
  .tech {
    margin-bottom: 10px;
  }
  .container-competences,
  .container-tech .container-links {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    text-align: left;
  }
}

@media (max-width: 980px) {
  .content-project {
    flex-direction: column;
    gap: 20px;
    .part-project {
      width: 100%;
    }
    .right{
      gap: 30px;
    }
  }
}
</style>
