<template>
<box-card id="presentation" title="Présentation">
  <div class="part-presentation" id="container-presentation">
    Bonjour, je m'appelle Vanessa LANQUETIN je vous souhaite la
    bienvenue sur mon site.
  </div>
  <div class="part-presentation" id="situation">
    Ayant pour ambition d'être développeur web, j'ai intégré le cursus
    Prep'Apprentissage d'Openclassrooms, qui prend fin le 02 Décembre
    2021. J'ai pour projet par la suite de suivre la formation de
    Développeur Web d'Openclassrooms en alternance qui durera 1 an. Je
    recherche ainsi une entreprise d'accueil pour y faire mon alternance
    et y développer mes compétences.
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
#container-presentation{
  margin-bottom: 10px;
}
</style>