<template>
  <div @click="next" @touchmove="next" @mousewheel="next">
    <div id="navigation">
      <directions />
      <!-- <NavBar></NavBar> -->
    </div>
    
    <div id="presentation">
      <img id="img-home" src="@/assets/img/home.png" alt="home" />
      <div id="text-present">
        Je m’apelle Vanessa Lanquetin, je suis née le 25 juillet 1997. <br />
        J’ai toujours apprécié les moments que j’ai passé sur mon ordinateur.<br />
        C’est pourquoi, aujourd’hui je me lance dans cette aventure !<br />
        Découvrir l’informatique, la programmation...
      </div>
    </div>
  </div>
</template>

<script>
import AnimationHomeTrigger from "../components/AnimationHomeTrigger";
import Directions from "../components/Directions.vue";
import router from "../router";
/* import NavBar from "../components/NavBar.vue" */
export default {
  components: { Directions, /* NavBar */},
  setup() {
    return {
      next() {
        AnimationHomeTrigger.trigger("#fbf980", () => {
          router.push({ name: "blabla" });
        });
      },
    };
  },
};
</script>

<style lang="scss" scoped>
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
  margin-top: 70px;
  width: 120px;
}
#text-present{
  margin: 10px 10px 10px 10px;
}
#navigation{
  display: flex;
  justify-content: space-around;
}
#nav-bar{
    width: 80%;
    font-size: 6em;
    display: flex;
    flex-direction: column;
    font-family: "PoiretOne-Regular",serif;
    color: white;
    justify-content: center;
    align-items: center;
    height: 3vh;
    background-color: #ffffff;
    position: fixed;
    text-align: center;
    left: 16%;
    top: 13.9%;
    filter: drop-shadow(0 0 0.75rem rgba(220, 20, 60, 0.513));
    border-radius: 30px;
}
@media screen and (max-width: 940px) {
  #presentation {
    font-size: 26px;
  }
  #img-home{
    width: 135px;
  }
}
@media screen and (max-width: 690px) {
  #presentation {
    font-size: 20px;
  }
  #img-home{
    width: 130px;
  }
}
@media screen and (max-width: 533px) {
  #presentation {
    font-size: 18px;
    line-height: 34px;
  }
  #img-home{
    width: 110px;
  }
}
@media screen and (max-width: 400px) {
  #presentation {
    font-size: 16px;
  }
  #img-home{
    width: 100px;
  }
}
@media screen and (max-width: 230px) {
  #presentation {
    font-size: 14px;
    line-height: 24px;
  }
  #img-home{
    width: 80px;
  }
}

</style>