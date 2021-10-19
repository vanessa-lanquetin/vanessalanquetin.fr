<template>
  <section class="sec-04" v-scroll-reveal="{preset: 'left', interval: 200}">
    <div id="container-hobbies" class="container">
      <h3 id="hobbies" class="section-title" v-scroll-reveal="{preset: 'left'}">Centres d'intérêts</h3>
      <div class="content">
        <div class="image">
          <img id="img3" src="../assets/Img/img3.webp" alt="" />
        </div>
        <div class="text-box" v-scroll-reveal="{preset: 'right', delay: 700}">
          <tabs :tabs="tabs" :showLabels="false">
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

</style>