<template>
  <animation-home direction="row">
    <template #title> Vanessa Lanquetin </template>
    <template #description> Bienvenue </template>
  </animation-home>
    <div id="presentation">
    <img id="img-home" src="@/assets/img/home.png" alt="home">
      Je m’apelle Vanessa Lanquetin, je suis née le 25 juillet 1997. <br> J’ai toujours
      apprécié les moments que j’ai passé sur mon ordinateur.<br> C’est pourquoi,
      aujourd’hui je me lance dans cette aventure !<br> Découvrir l’informatique, la
      programmation...
    </div>
  <div class="chevrons-list">
    <img  class="chevron" id="chevron-haut" src="@/assets/img/chevron-haut.png" alt="chevron-haut">
    <img  class="chevron" id="chevron-bas" src="@/assets/img/chevron-bas.png" alt="chevron-bas">
    <img  class="chevron" id="chevron-gauche" src="@/assets/img/chevron-gauche.png" alt="chevron-gauche">
    <img  class="chevron" id="chevron-droit" src="@/assets/img/chevron-droit.png" alt="chevron-droit">
  </div>
  
</template>

<script>
import AnimationHome from "../components/AnimationHome.vue";
export default {
  components: {
    AnimationHome,
  },
};
</script>

<style lang="scss" scoped>
#presentation{
    font-size: 34px;
    line-height: 64px;
    display: flex;
    flex-direction: column;
    font-family: "PoiretOne-Regular",serif;
    color: white;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #fb9aad;
}
.chevron{
  position: absolute;
  top: 0;
  width:90px;
  filter: drop-shadow(0 0 0.75rem crimson);
}
#chevron-droit{
  top: 48px;
  left: 110px;
}
#chevron-gauche{
  top: 48px;
  left: 12px;
}
#chevron-haut{
  top: 10px;
  left: 60px;
}
#chevron-bas{
  top: 90px;
  left: 60px;
}
#img-home{
  width: 180px;
  margin-bottom: 20px;
}
</style>