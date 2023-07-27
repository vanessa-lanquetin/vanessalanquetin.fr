<template>
<div id="app-root">
  <div id="top"></div>
  <nav-bar/>
  <arrow/>
  <div id="app-content">
    <router-view/>
  </div>
</div>
</template>

<script>
import navBar from './components/nav-bar.vue'
export default {
  components: { navBar},
  setup() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    return {}
  },
}
</script>

<style lang="scss">
@import '@fortawesome/fontawesome-free/css/all.min.css';
@import './assets/scss/index';
</style>


<style lang="scss" scoped>
#app-root {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
#app-content {
  flex-grow: 1;
  overflow: auto;
}

</style>