<template>
  <box-card :noStyle="true" class="box-card">
    <h1>
      Bienvenue sur mon site
    </h1>
  </box-card>
</template>

<script>
import BoxCard from './BoxCard.vue'
export default {
  components: { BoxCard },

}
</script>

<style lang="scss" scoped>
h1{
  font-size: 4.6em;
  text-align: center;
  color: white;
  font-family:"MonteCarlo-Regular",sans-serif;
}
.box-card {
  height: 100vh;
}
</style>