<template>
  <section class="sec-02">
    <h3 id="competences" class="section-title" v-scroll-reveal="{preset: 'left'}">
      Compétences
    </h3>
    <div class="container container-competences">
      <div class="content">
        <div id="hard-skills" class="text-box" v-scroll-reveal="{preset: 'right', delay: 700}">
          <h3>Hard Skills</h3>
          <div id="competences-hardskills" class="competences">
            <div class="competence langage container-item-competence">
              <div class="titles-competences">Langage :</div>
              <div class="text-blue item-competences container-langage">
                <div class="lang">HTML</div>
                <div class="lang">CSS</div>
                <div>Javascript</div>
                <div>SASS/SCSS</div>
              </div>
            </div>
            <div class="container-item-competence">
              <div class="titles-competences">Framework :</div>
              <div class="text-blue item-competences">Vue.js</div>
            </div>
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
          </div>
        </div>
        <div id="soft-skills" class="text-box" v-scroll-reveal="{preset: 'right', delay: 700}">
          <h3>Soft Skills</h3>
          <div id="competences-softskills" class="competences">
            <div class="container-items-soft">
              <div class="item-soft text-blue">Créativité</div>
              <div class="item-soft">Curiosité</div>
            </div>
            <div class="container-items-soft">
              <div class="item-soft">Communication</div>
              <div class="item-soft text-blue">Détermination</div>
            </div>
            <div class="container-items-soft">
              <div class="item-soft text-blue">Fléxibilité</div>
              <div class="item-soft">Adaptabilité</div>
            </div>
            <div class="container-items-soft">
              <div class="item-soft">Esprit d'équipe</div>
              <div class="item-soft text-blue">Confiance</div>
            </div>
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
.sec-02 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sec-02 .content {
  justify-content: center;
  gap: 80px;
}
.sec-02 .text-box {
  max-width: none;
  font-size: 1.3em;
}
.container-item-competence {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
}
.container-langage {
  display: flex;
  gap: 60px;
}
.langage {
  display: flex;
  margin-bottom: 10px;
}
#competences-softskills {
  text-align: center;
  display: flex;
}
#items-competences {
  font-size: 1.3em;
}
.container-item-competence {
  margin-bottom: 10px;
  display: flex;
}
.langage {
  display: flex;
  margin-bottom: 10px;
}
.container-langage {
  display: flex;
  gap: 40px;
}
.item-competences {
  display: flex;
}
#competences-softskills {
  display: flex;
  flex-direction: column;
}
.container-items-soft {
  display: flex;
  justify-content: space-between;
  gap: 120px;
}
.item-soft {
  margin: 0px 0px 30px 0px;
}
@media screen and (max-width: 1435px) {
  .sec-02 .content {
    gap: 15px;
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
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
}

@media screen and (max-width: 1071px) {
  .sec-02 .container {
    margin: 0;
  }
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
  .sec-01 .content {
    margin: 30px;
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
  .lang {
    margin-right: 10px;
  }
}
</style>