<template>
  <div @click="next" @touchmove="next" @mousewheel="next">
    <navigation></navigation>
  <div id="container-intro">
    <img id="img-home" src="@/assets/img/home.png" alt="home" />
    <div id="presentation">
      <div id="text">
        Je m’appelle Vanessa Lanquetin, j'ai 23 ans. <br />
        J’ai toujours apprécié les moments que j’ai passé sur mon ordinateur.<br />
        C’est pourquoi, aujourd’hui je me lance dans cette aventure !<br />
        Découvrir l’informatique, la programmation...
      </div>
    </div>    
  </div>

  </div>
</template>

<script>
import AnimationHomeTrigger from "../components/AnimationHomeTrigger";
import Navigation from '../components/Navigation.vue';
import router from "../router";
export default {
  components: {Navigation  },
  setup() {
    return {
      left() {
        AnimationHomeTrigger.trigger("#fbf980", () => {
          router.push({ name: "home" });
        });
      },
      next() {
        AnimationHomeTrigger.trigger("#fbf980", () => {
          router.push({ name: "parcours" });
        });
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#nav-bar {
  filter: drop-shadow(0 0 0.75rem rgba(220, 20, 60, 0.513));
}
#presentation {
  font-size: 34px;
  line-height: 64px;
  display: flex;
  flex-direction: column;
  font-family: "PoiretOne-Regular", serif;
  color: white;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  margin: 0;
  padding: 0;
  background-color: #fb9aad;
}
#img-home {
  position: absolute;
  margin-top: 30px;
  width: 120px;
  left: 30px;
  top: 0;
}
#navigation {
  display: flex;
  justify-content: space-around;
}
#text{
  display: flex;
  flex-wrap: wrap;
}
@media screen and (max-width:911px){
  #presentation{
    font-size: 20px;
    line-height: 35px;
  }
  #text{
    margin: 10px;
  }
  #img-home{
  width: 80px;  
  }
}

</style>