<template>
<div @click="next" @touchmove="next" @mousewheel="next">
  <directions/>
  <div id="presentation">
    <img id="img-home" src="@/assets/img/home.png" alt="home">
    Bloblo
  </div>

</div>
</template>

<script>
import AnimationHomeTrigger from '../components/AnimationHomeTrigger'
import Directions from '../components/Directions.vue'
import router from '../router'
export default {
  components: { Directions },
  setup(){
    return {
      next() {
        AnimationHomeTrigger.trigger('#fbf980', () => {
          router.push({name: 'home'})
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#presentation{
    font-size: 34px;
    line-height: 64px;
    display: flex;
    flex-direction: column;
    font-family: "PoiretOne-Regular",serif;
    color: white;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #fb9aad;
}
#img-home{
  width: 180px;
  margin-bottom: 20px;
}
</style>