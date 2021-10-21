<template>
<nav-bar/>
  <contact-component/>
  <arrow/>
</template>

<script>
import Arrow from '../components/arrow.vue'
import contactComponent from '../components/contact-component.vue'
import NavBar from '../components/nav-bar.vue'
export default {
  components: { contactComponent, NavBar, Arrow },

}
</script>

<style lang="scss" scoped>

</style>