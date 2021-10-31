<template>
  <arrow />
  <section-1 />
  <section-2 />
  <section-3 />
  <section-4 />
</template>

<script>
import Section1 from "../components/section-1.vue";
import Section2 from "../components/section-2.vue";
import Section4 from "../components/section-4.vue";
import Section3 from "../components/section-3.vue";
import Arrow from "../components/arrow.vue";

export default {
  name: "Home",
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Arrow,
  },
};
/* alert ("Site en cours de développement (Lettre de motivation prochainement, Portfollio non responsive actuellement)"); */
</script>
<style lang="scss" scoped>
</style>