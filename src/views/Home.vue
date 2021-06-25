<template>
  <div id="content" @click="next" @touchmove="next" @mousewheel="next">
    <div class="title">Vanessa Lanquetin</div>
    <div class="description">Bienvenue</div>
  </div>
</template>

<script>
import AnimationHomeTrigger from "../components/AnimationHomeTrigger";
import router from "../router";
export default {
  components: {},
  setup() {
    return {
      next() {
        AnimationHomeTrigger.trigger(null, () => {
          router.push({ name: "introduction" });
        });
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  #content{
    width: 100%;
    font-size: 6em;
    display: flex;
    flex-direction: column;
    font-family: "PoiretOne-Regular",serif;
    color: white;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #6FD9BD;
    position: fixed;
    text-align: center;
    .description {
      font-size: 0.7em;
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 1000px) {
#content {
      font-size: 5em;
}
}

@media screen and (max-width: 800px) {
#content {
      font-size: 4em;
}
}

@media screen and (max-width: 680px) {
#content {
      font-size: 3em;
  }
}

@media screen and (max-width: 400px) {
#content {
      font-size: 2em;
  }
}
@media screen and (max-width: 200px) {
#content {
      font-size: 1em;
  }
}
</style>