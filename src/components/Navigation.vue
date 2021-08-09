<template>
  <div id="container-logs">
    <img
      src="@/assets/img/blue.png"
      alt="blue log"
      class="logs"
      id="log-blue"
    />
    <img
      src="@/assets/img/pink.png"
      alt="pink log"
      class="logs"
      id="log-pink"
    />

    <img
      src="@/assets/img/purple.png"
      alt="purple log"
      class="logs"
      id="log-purple"
    />
    <img
      src="@/assets/img/green.png"
      alt="green log"
      class="logs"
      id="log-green"
    />
  </div>

  <div id="container">
    <div class="part-nav" id="part-left">
      <directions
        @left="$emit('left', $event)"
        @right="$emit('right', $event)"
        @top="$emit('top', $event)"
        @bottom="$emit('bottom', $event)"
      >
      </directions>
    </div>
    <div class="part-nav" id="part-right">
      <nav-bar></nav-bar>
    </div>
  </div>
</template>

<script>
import Directions from "../components/Directions.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: { Directions, NavBar },
};
</script>

<style lang="scss" scoped>
#container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: absolute;
  left: 30px;
  z-index: 98;
}
.part-nav {
  width: max-content;
}
#part-left {
  margin-right: 50px;
}
#container-logs {
  width: 1203px;
  display: flex;
  position: absolute;
  z-index: 99;
  top: 73px;
  left: 278px;
  justify-content: space-around;
}
.logs {
  width: 50px;
}
@media screen and (max-width: 1630px) {
  #container-logs {
    width: 70%;
  }
}
</style>