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
            <article class="container-links">
              <h2>Lien(s)</h2>
              <div v-if="project.github">
                <p>
                  Github:
                  <a :href="project.github" target="_blank"
                    >Lien du projet "{{ project.titre }}""</a
                  >
                </p>
              </div>
              <div v-else>
                <p>Acutellemnt, il n'y a pas de lien GitHub pour ce projet.</p>
              </div>
              <div v-if="project.link && project.link.url && project.link">
                <p>
                  Lien(s):
                  <a :href="project.link.url">{{ project.link.label }}</a>
                </p>
              </div>
            </article>
          </div>
          <div class="right part-project">
            <div class="statut-project">
              <div v-if="project.statut">
                <h2>Statut : {{ project.statut }}</h2>
              </div>
            </div>
            <div class="container-img" v-if="project.imgSite">
              <img class="imgSite" :src="project.imgSite" alt="" />
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin: 0;
    }
  .container-img{
    height: 100%;
    max-height: 600px;
    width: fit-content;
  }
    
    .imgSite {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
  .statut-project {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    gap: 10px;
  }
  .competence {
    margin-bottom: 10px;
  }
  .container-competences,
  .container-links {
    margin-top: 30px;
  }
}

@media (max-width: 980px) {
  .container-img{
    display: none;
  }
  .content-project{
    flex-direction: column;
    .part-project{
      width: 100%;
    }
  }
}

</style>
