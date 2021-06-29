<template>
  <animation-home >
    <router-view/>
  </animation-home>
</template>

<script>
import AnimationHome from './components/AnimationHome.vue'
export default {
  components: {
    AnimationHome
  },
  setup() {
  }
}
</script>


<style lang="scss">
@import "~@fortawesome/fontawesome-free/css/all.min.css";
body {
  margin: 0;
}
@font-face {
  font-family:"PoiretOne-Regular" ;
  src: url("assets/fonts/PoiretOne-Regular.ttf") format("truetype");
}
</style>
