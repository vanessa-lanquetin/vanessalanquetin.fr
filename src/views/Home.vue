<template>
  <div id="home">
    <header-welcome/>
    <introduction/>
    <informations/>
    <formations/>
    <hobbies/>
    <contact/>
    <arrow-home/>
  </div>
</template>

<script>
import ArrowHome from '../components/ArrowHome.vue'
import Contact from '../components/Contact.vue'
import Formations from '../components/Formations.vue'
import HeaderWelcome from '../components/HeaderWelcome.vue'
import Hobbies from '../components/Hobbies.vue'
import Informations from '../components/Informations.vue'
import Introduction from '../components/Introduction.vue'
export default {
  name: 'Home',
  components: {
    HeaderWelcome,
    Introduction,
    Informations,
    Formations,
    Hobbies,
    Contact,
    ArrowHome
  }
}
</script>

<style lang="scss" scoped>
</style>