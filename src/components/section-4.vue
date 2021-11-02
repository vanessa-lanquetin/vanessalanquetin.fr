<template>
  <section class="sec-04" v-scroll-reveal="{ preset: 'left', interval: 100 }">
    <div id="container-hobbies" class="container">
      <h2
        id="hobbies"
        class="section-title"
        v-scroll-reveal="{ preset: 'left' }"
      >
        Centres d'intérêts
      </h2>
      <div class="content">
        <div class="image">
          <img id="img3" src="../assets/Img/img3.webp" alt="" />
        </div>
        <div class="text-box" v-scroll-reveal="{ preset: 'right', delay: 700 }">
          <tabs id="tab" :tabs="tabs" :showLabels="false">
            <template #cinema>
              <p>
                Mon film préféré est "Je suis une légende"
                <i class="fas fa-video"></i>
              </p>
            </template>
            <template #cooking>
              <p>
                Mon repas préféré est "Spaghettis Al Pollo"
                <i class="fas fa-utensils"></i>
              </p>
            </template>
            <template #drawing>
              <p>Mon instagram : "ikaya54" <i class="fas fa-palette"></i></p>
            </template>
            <template #reading>
              <p>
                <span />Mon livre préféré est "Ne le dis à personne"
                <i class="fas fa-book"></i>
              </p>
            </template>
          </tabs>
          <div id="hobbies-mobile">
            <div class="container-hobbies-mobile">
              <h3>Cinéma:</h3>
              <p class="text-blue">
                Mon film préféré est "Je suis une légende"
                <i class="fas fa-video"></i>
              </p>
            </div>
            <div class="container-hobbies-mobile">
              <h3>Cuisine:</h3>
              <p class="text-blue">
                Mon repas préféré est "Spaghettis Al Pollo"
                <i class="fas fa-utensils"></i>
              </p>
            </div>
            <div class="container-hobbies-mobile">
              <h3>Dessin:</h3>
              <p class="text-blue">Mon instagram : "ikaya54" <i class="fas fa-palette"></i></p>
            </div>
            <div class="container-hobbies-mobile">
              <h3>Lecture:</h3>
              <p class="text-blue">
                Mon livre préféré est "Ne le dis à personne"
                <i class="fas fa-book"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tabs from "./Tabs.vue";
export default {
  components: { Tabs },
  setup() {
    return {
      tabs: [
        { id: "cinema", label: "Cinéma", hidden: false },
        { id: "cooking", label: "Cuisine", hidden: false },
        { id: "drawing", label: "Dessin", hidden: false },
        { id: "reading", label: "Lecture", hidden: false },
      ],
    };
  },
};
</script>


Tabs<style lang="scss" scoped>
.sec-04 {
  margin-bottom: 100px;
}
.sec-04 .content {
  justify-content: center;
  gap: 80px;
}
.sec-04 #img3 {
  width: 600px;
  height: 400px;
  filter: contrast(120%);
}
.tabs p {
  margin-top: 20px;
}
.sec-04 .text-box {
  height: 250px;
  max-width: 500px;
}
#list-hobbies {
  display: flex;
  gap: 30px;
}
.item-hobbies {
  border-bottom: thick double #fa3bd9;
}

#hobbies a span {
  display: none;
}
#hobbies a:hover {
  display: flex;
  flex-direction: column;
  text-align: center;
}
#hobbies a:hover span {
  display: block;
  width: 400px;
  position: absolute;
  top: 180px;
  left: 0px;
  color: white;
}
#hobbies-mobile {
  display: none;
  @media (max-width: 492px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 0.8em;
    margin-top: 10px;
  }
  .container-hobbies-mobile {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  h3 {
    margin-right: 10px;
  }
}
@media screen and (max-width: 1556px) {
  .sec-04 .container {
    margin: 0 50px;
  }
  .sec-04 #img3 {
    width: 100%;
  }
  .sec-04 .content {
    gap: 10px;
  }
}
@media screen and (max-width: 1071px) {
  .sec-04 .content {
    display: flex;
    flex-wrap: wrap;
  }
  .sec-04 #img3 {
  height: auto;
}
}
@media screen and (max-width:610px ) {
  .sec-04 .text-box {
    margin: 0;
    max-width: 100%;
    width: 100%;
    padding: 10px;
    
  }
  .sec-04 .content {
    margin: 15px;
  }
  .sec-04 .container {
    margin: 0;
  }
  .tabs {
    overflow: unset;
  }
  .tabs .content p {
    margin-top: 10px;
  }
  #tab {
    font-size: 0.8em;
    align-items: center;
  }
  .sec-04 button {
    padding: 0 0;
  }
}
@media screen and (max-width:414px ) {
.container-hobbies-mobile{
  text-align: left;
}
#hobbies-mobile{
  margin-top: 5px;
  gap: 10px;
}
}
@media screen and (max-width:394px ) {
#hobbies-mobile{
  gap: 5px;
}
}
.sec-04 .text-box {
  min-height: 350px ;
}
</style>