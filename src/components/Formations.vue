<template>
<box-card id="formations" title="Formations">
  <div id="text2">
    <div class="title"></div>
    <ul id="formations-list">
      <li>
        <strong>Formation</strong> <em>Prep’Apprentissage</em> –
        <strong>Openclassrooms</strong> ,2021
      </li>
      <li>
        <strong>Formation</strong> <em>Objectif Alternance</em> –
        <strong>Afpa</strong> , 2020
      </li>
      <li>
        <strong>BTS</strong> <em>Niveau Assistant Manager</em> –
        <strong>Lycée Louis Lapicque</strong> , 2017
      </li>
      <li>
        <strong>BAC</strong> <em>Gestion Administration</em> –
        <strong>Lycée Isabelle Viviani</strong> , 2015
      </li>
      <li>
        <strong>BEP</strong> <em>Métiers Services Administratif</em> –
        <strong>Lycée Isabelle Viviani</strong> , 2014
      </li>
    </ul>
  </div>
</box-card>
</template>

<script>
import BoxCard from './BoxCard.vue'
export default {
  components: { BoxCard },

}
</script>

<style lang="scss" scoped>
li {
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
  &:last-of-type {
    border-bottom: none;
  }
}
</style>