<template>
  <nav-list/>
  <box-card :noStyle="true" class="box-card">  
    <h1>
      Bienvenue sur mon site
    </h1>
  </box-card>
</template>

<script>
import BoxCard from './BoxCard.vue'
import NavList from './Nav-list.vue'
export default {
  components: { BoxCard, NavList },

}
</script>

<style lang="scss" scoped>
h1{
  font-size: 4em;
  padding:10px;
  text-align: center;
  color: white;
  border-radius: 5px;
  height: 130px;
  font-family:"MonteCarlo-Regular",sans-serif;
  box-shadow: 0 0 0 0 rgb(255, 255, 255);
  animation: scale 1.4s both;
}
@keyframes scale {
    to {
        transform: scale(1.4);  
    }
}

.box-card {
  height: 100vh;
}
@media screen and(max-width:1158px) {
  h1{
    transform: scale(0.8) translate(0, -40%);  
    animation:none;
  }
}
@media screen and(max-width: 499px) {
  h1{
    transform: scale(0.8) translate(0, -140%);  
  }
}
@media screen and(max-width: 290px) {
  h1{
    transform: scale(0.8) translate(0, -190%);  
  }
}
</style>