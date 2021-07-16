<template> 
  <div id="container">
    <div class="part-nav" id="part-top">
      <directions
        @left="$emit('left', $event)"
        @right="$emit('right', $event)"
        @top="$emit('top', $event)"
        @bottom="$emit('bottom', $event)">
      </directions>
    </div>
    <div class="part-nav" id="part-bottom">
      <nav-bar></nav-bar>  
    </div>
  </div>




</template>

<script>
import Directions from "../components/Directions.vue";
import NavBar from "../components/NavBar.vue";
export default {
    components: { Directions, NavBar },
}
</script>

<style lang="scss" scoped>
    #container{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 18%;
      position: absolute;
      right: 0;
      z-index: 99;
    }
    @media screen and (max-width:1307px) {
      #container{
        display: none;
      }
    }
</style>