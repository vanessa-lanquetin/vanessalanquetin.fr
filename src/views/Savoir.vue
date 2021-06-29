<template>
  <directions color="#2aca45" />
  <NavBar color="#2aca45"></NavBar>
  <div @click="next2" @touchmove="next2" @mousewheel="next2">
    <img id="img-home" src="@/assets/img/home.png" alt="home" />
    <div id="presentation">Connaissances</div>
  </div>
</template>

<script>
import AnimationHomeTrigger from "../components/AnimationHomeTrigger";
import Directions from "../components/Directions.vue";
import router from "../router";
import NavBar from "../components/NavBar.vue"
export default {
  components: { Directions, NavBar },
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
  font-size: 40px;
  font-weight: bold;
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
#img-home {
  position: absolute;
  margin-top: 30px;
  width: 120px;
  left: 30px;
  top: 0;
}
@media screen and (max-width: 940px) {
  #presentation {
    font-size: 26px;
  }
  #img-home {
    width: 135px;
  }
}
@media screen and (max-width: 690px) {
  #presentation {
    font-size: 20px;
  }
  #img-home {
    width: 120px;
  }
}
@media screen and (max-width: 533px) {
  #presentation {
    font-size: 18px;
    line-height: 34px;
  }
  #img-home {
    width: 110px;
  }
}
@media screen and (max-width: 400px) {
  #presentation {
    font-size: 16px;
  }
  #img-home {
    width: 80px;
  }
}
@media screen and (max-width: 230px) {
  #presentation {
    font-size: 14px;
    line-height: 24px;
  }
  #img-home {
    width: 80px;
  }
}
@media screen and (max-width: 230px) {
  #presentation {
    font-size: 14px;
    line-height: 24px;
  }
  #img-home {
    width: 80px;
  }
}
</style>