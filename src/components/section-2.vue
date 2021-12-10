<template>
  <section class="sec-02">
    <h2
      id="competences"
      class="section-title"
      v-scroll-reveal="{ preset: 'left' }"
    >
      Compétences
    </h2>
    <div class="container container-competences">
      <div class="content">
        <div
          id="hard-skills"
          class="text-box"
          v-scroll-reveal="{ preset: 'right', delay: 100 }"
        >
          <h2><i class="fas fa-caret-square-down"></i>Hard Skills</h2>
          <article id="leves">
            <article class="container-hard-skill">
              <div class="name-skill"><i class="fab fa-html5"></i> Html</div>
              <div class="container-level">
                <div class="level-skill" id="level-html"></div>
              </div>
            </article>

            <article class="container-hard-skill">
              <div class="name-skill"><i class="fab fa-css3-alt"></i> Css</div>
              <div class="container-level">
                <div class="level-skill" id="level-css"></div>
              </div>
            </article>

            <article class="container-hard-skill">
              <div class="name-skill"><i class="fab fa-js"></i> Javascript</div>
              <div class="container-level">
                <div class="level-skill" id="level-js"></div>
              </div>
            </article>

            <article class="container-hard-skill">
              <div class="name-skill"><i class="fab fa-sass"></i> Sass</div>
              <div class="container-level">
                <div class="level-skill" id="level-sass"></div>
              </div>
            </article>

            <article class="container-hard-skill">
              <div class="name-skill"><i class="fab fa-vuejs"></i> Vuejs</div>
              <div class="container-level">
                <div class="level-skill" id="level-vuejs"></div>
              </div>
            </article>
          </article>
          <article id="info-competences">
            <div class="container-item-competence">
              <div class="titles-competences">Gestion de projet :</div>
              <div class="text-blue item-competences">GIT & Github</div>
            </div>
            <div class="container-item-competence">
              <div class="titles-competences">
                Environnement de développement :
              </div>
              <div class="text-blue item-competences">Visual Studio Code</div>
            </div>
            <div class="container-item-competence">
              <div class="titles-competences">Système d'exploitation :</div>
              <div class="text-blue item-competences">Windows 10</div>
            </div>
            <div class="container-item-competence">
              <div class="titles-competences">Graphisme :</div>
              <div class="text-blue item-competences">Figma</div>
            </div>
          </article>
        </div>
        <article
          id="soft-skills"
          class="text-box"
          v-scroll-reveal="{ preset: 'right', delay: 700 }"
        >
          <h2><i class="fas fa-caret-square-down"></i>Soft Skills</h2>
          <div id="competences-softskills" class="competences">
            <div class="item-soft text-blue">Créativité</div>
            <div class="item-soft text-blue">Curiosité</div>

            <div class="item-soft text-blue">Communication</div>
            <div class="item-soft text-blue">Détermination</div>

            <div class="item-soft text-blue">Fléxibilité</div>
            <div class="item-soft text-blue">Adaptabilité</div>

            <div class="item-soft text-blue">Esprit d'équipe</div>
            <div class="item-soft text-blue">Confiance</div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sec-02 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sec-02 .container {
  margin: 0 150px;
}
.sec-02 .content {
  justify-content: center;
  gap: 10px;
  margin: 0 150px;
}
.sec-02 .text-box {
  max-width: none;
  font-size: 1.3em;
}
.fa-caret-square-down {
  font-size: 20px;
  margin-right: 10px;
}
// HARD SKILLS
#hard-skills {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.container-level {
  background-color: white;
  width: 100%;
  height: 10px;
}
.level-skill {
  background-color: #f4b183;
  height: 10px;
}
// LEVELS
#level-html {
  width: 60%;
}
#level-css {
  width: 70%;
}
#level-js {
  width: 10%;
}
#level-sass {
  width: 30%;
}
#level-vuejs{
  width: 20%;
}

.container-item-competence {
  margin-bottom: 10px;
  display: flex;
}

#info-competences {
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
}

.titles-competences {
  margin-right: 10px;
}

// SOFT SKILLS
.item-competences {
  display: flex;
}
#competences-softskills {
  display: flex;
  flex-direction: column;
  text-align: center;
  display: flex;
  text-align: left;
  padding-top: 20px;
}
.container-items-soft {
  display: flex;
  justify-content: space-between;
  gap: 0px;
}
.item-soft {
  margin: 0px 0px 15px 0px;
}
@media screen and (max-width: 1591px) {
  .sec-02 .content {
    gap: 15px;
    display: flex;
    justify-content: center;
    margin: 0 150px;
  }
  .container-item-competence {
    gap: 0;
    justify-content: left;
    display: flex;
    flex-wrap: wrap;
  }
  .titles-competences {
    margin-right: 10px;
  }
  .sec-02 .text-box {
    max-width: none;
    margin: 0 20px;
    font-size: 1.2em;
    text-align: left;
  }
  .container-langage {
    gap: 0px;
  }
  .container-langage div {
    margin-right: 20px;
  }
}
@media screen and (max-width: 1281px) {
  .container-items-soft {
    gap: 20px;
  }
  .sec-02 .text-box {
    margin: 0;
    font-size: 1.1em;
  }
}
@media screen and (max-width: 1071px) {
  .sec-02 .content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
  }
  .sec-02 .text-box {
    max-width: none;
    margin: 0 20px;
    font-size: 1.2em;
    text-align: left;
  }
  .container-item-competence {
    gap: 0;
  }
  .container-items-soft {
    gap: 0;
  }
}
@media screen and (max-width: 810px) {
  .sec-02 .text-box {
    margin: 0;
  }
  .sec-02 .content {
    margin: 15px;
  }
}

@media screen and (max-width: 602px) {
  #competences-softskills {
    display: flex;
    text-align: left;
    align-items: left;
  }
  .sec-01 .content {
    margin: 10px;
  }
  .container-items-soft {
    display: flex;
    flex-direction: column;
  }
  .container-langage {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
  }
}
</style>