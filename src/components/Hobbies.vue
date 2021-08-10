<template>
<box-card id="hobbies" title="Centres d'intérêts">
  <ul class="hobbies">
    <li>Cinéma</li>
    <li>Cuisine</li>
    <li>Dessin</li>
    <li>Lecture</li>
  </ul>

</box-card>
</template>

<script>
import BoxCard from './BoxCard.vue'
export default {
  components: { BoxCard },

}
</script>

<style lang="scss" scoped>
.hobbies {
  list-style: disc;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    margin: 20px;
  }
}
</style>