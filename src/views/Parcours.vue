<template>
  <div>
    <navigation @left="left" @right="right"></navigation>
  </div>
  <div @click="next" @touchmove="next" @mousewheel="next">
    
    <div id="presentation">Mon parcours</div>
  </div>
</template>

<script>
import AnimationHomeTrigger from "../components/AnimationHomeTrigger";
import router from "../router";
/* import Directions from '../components/Directions.vue'; */
import Navigation from '../components/Navigation.vue';
export default {
  components: { Navigation },
  setup() {
    return {
      left() {
        console.log('left')
        AnimationHomeTrigger.trigger("#fbf980", () => {
          router.push({ name: "formations" });
        });
      },
      right() {
        console.log('right')
        AnimationHomeTrigger.trigger("#fbf980", () => {
          router.push({ name: "experiences" });
        });
      },
      next() {
        AnimationHomeTrigger.trigger("#fbf980", () => {
          router.push({ name: "savoir" });
        });
      },
      home() {
        AnimationHomeTrigger.trigger("#fbf980", () => {
          router.push({ name: "home" });
        });
},
    };
  },
};
</script>

<style lang="scss" scoped>
#presentation {
  font-size: 6vmin;
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
  background-color: #d49afb;
}
#img-parcours {
  width: 30vmin;
  filter: drop-shadow((0 0 0.85rem #9c66c0));
}
#container-img{
  position: absolute;
  align-items: center;
  text-align: center;
  width: 75%;
  left: 14%;
  top: 15vh;
}
@media screen and (max-width: 8450px) {
  #img-parcours{
    opacity: 0;
  }
}
</style>