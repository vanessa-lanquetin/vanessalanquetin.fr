<template>
  <nav-bar/>
  <arrow/>
  <h3 id="contact" class="section-title" v-scroll-reveal="{preset: 'left'}">Portfolio</h3>
</template>

<script>
import Arrow from '../components/arrow.vue'
import navBar from '../components/nav-bar.vue'
export default {
  components: { navBar, Arrow },

}
</script>

<style>

</style>