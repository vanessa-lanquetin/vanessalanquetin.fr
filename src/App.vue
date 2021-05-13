<template>
  <navbar/>
  <router-view/>
</template>

<script>
import Navbar from "./components/Navbar.vue"
export default {
  components: {
    Navbar
  },
}
</script>


<style lang="scss">
@import "~@fortawesome/fontawesome-free/css/all.min.css";
body {
  margin: 0;
}
</style>
