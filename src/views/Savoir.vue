<template>
    <navigation></navigation>
  <bouton-home ></bouton-home>
  <div @click="next2" @touchmove="next2" @mousewheel="next2">
    <div id="presentation">Connaissances</div>
  </div>
</template>

<script>
import AnimationHomeTrigger from "../components/AnimationHomeTrigger";
import router from "../router";
import Navigation from '../components/Navigation.vue';
export default {
  components: {Navigation },
  setup() {
    return {
      next2() {
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
  background-color: #9afbaa;
}
@media screen and (max-width: 940px) {
  #presentation {
    font-size: 26px;
  }
}
@media screen and (max-width: 690px) {
  #presentation {
    font-size: 20px;
  }
}
@media screen and (max-width: 533px) {
  #presentation {
    font-size: 18px;
    line-height: 34px;
  }
}
@media screen and (max-width: 400px) {
  #presentation {
    font-size: 16px;
  }
}
@media screen and (max-width: 230px) {
  #presentation {
    font-size: 14px;
    line-height: 24px;
  }
}
@media screen and (max-width: 230px) {
  #presentation {
    font-size: 14px;
    line-height: 24px;
  }
}
</style>