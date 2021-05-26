<template>
  <div class="presentation-root">
    <h1>Présentation:</h1>
    <div id="containt-presentation">
      Voici mon tout premier site où vous pourrez trouver, mes différents projets, mes dessins et également mon CV.
      Le dessin m'a toujours fasciné mais ce n'est que très récemment que je dessine régulièrement.Je dessine depuis environ 1 an.
      En ce qui concerne la programmation j'ai débuté mon apprentissage dans ce domaine depuis le mois de Février en 2021, 
      en utilisant les resources fournies par la plateforme "openclassroom.com".
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.presentation-root {
  border: 3px solid #F2ECD8;
  box-shadow: 0 0 20px 0 #e4e4e4;
  

  h1{
  font-size: 30px;
  color: #A58DB0;
  text-decoration: underline;
  font-weight: normal;
  padding-left: 24px;
}

  #containt-presentation{
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    font-size: 22px;  
    color: #78748B;
    line-height: 30px;
  }
}
</style>