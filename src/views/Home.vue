<template>
  <nav-bar/>
  <section-1/>
  <section-2/>
  <section-3/>
  <section-4/>
  <section-5/>
</template>

<script>
import NavBar from '../components/nav-bar.vue';
import Section2 from '../components/section-2.vue';
import Section1 from '../components/section-1.vue';
import Section3 from '../components/section-3.vue';
import Section4 from '../components/section-4.vue';
import Section5 from '../components/section-5.vue';



export default {
  name: "Home",
  components: {
    NavBar,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5
  },
};
</script>
<style lang="scss" scoped>
</style>