<template>
<nav-bar/>
  <contact-component/>
</template>

<script>
import contactComponent from '../components/contact-component.vue'
import NavBar from '../components/nav-bar.vue'
export default {
  components: { contactComponent, NavBar },

}
</script>

<style lang="scss" scoped>

</style>