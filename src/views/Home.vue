<template>
  <animation-home direction="row">
    <template #title>
        Vanessa Lanquetin
    </template>
    <template #description>
      Bienvenue
    </template>
  </animation-home>
  <div>
    Ceci est le reste de mon site internet
  </div>
</template>

<script>
import AnimationHome from '../components/AnimationHome.vue'
export default {
  components: {
    AnimationHome
  }
}
</script>

<style lang="scss" scoped>
</style>