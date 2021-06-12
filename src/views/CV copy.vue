<template>
<div id="global">
    <section id="section1">
      <section class="container" id="container-presentation">
        <h3  id="infos" >Présentation</h3> 
        <div class="text-container">
        <ul>
          <li>Age:23 ans</li>
          <li>Localisation:Neuves-Maisons</li>
        </ul>
        </div>            
      </section>
      <section class="container" id="container-formations">
        <h3 id="formations">Formations</h3>   
        <div class="text-container">
        <ul>
          <li>Formation Développement en autodicadacte – Openclassrooms, 2021</li>
          <li>Formation Objectif Alternance – Afpa, 2020</li>
          <li>BTS Assistant Manager (niveau) – Lycée Louis Lapicque, 2017</li>
          <li>BAC Gestion Administration – Lycée Isabelle Viviani, 2015</li>
          <li>BEP Métiers Services Administratif – Lycée Isabelle Viviani, 2014</li>
        </ul>
        </div>            
      </section>  
    </section>
    <section id="section2">
      <section class="container" id="container-stages">
        <h3 id="stages">Stages</h3>   
        <div class="text-container">
        <ul>
          <li>Commerciale, O2 CARES SERVICES - 1 mois, 2019</li>
          <li>Assistante de direction, LES RESTOS DU COEURS - 1 mois, 2017</li>
          <li>Assistante Service Qualité, EUROVITA - 1 mois, 2016</li>
          <li>Assistante administrative, BIBLIOTHEQUE DE VITTEL - 1 mois, 2015</li>
          <li>Assistante administrative, PHARMACIE DES SOURCES - 1 mois, 2014</li>
          <li>Assistante du Président, ADMR - 1 mois, 2014</li>
          <li>Assistante-adjoint, CARREFOUR MARKET - 1 mois, 2014</li>
          <li>Assistante de direction, BIBLIOTHEQUE DE VITTEL - 1 mois, 2013</li>
          <li>Assistante Commerciale, MMA ASSURANCES - 1 mois, 2013</li>
        </ul>
        </div>
          <div id="container-loisirs" >
        <h3 id="text-loisirs">Centres d’intérêts</h3>
        <div class="text-container">
          <ul>
            <li>Dessin</li>
            <li>Cuisine</li>
            <li>Lecture</li>
          </ul>
        </div>
        </div>   
      </section>



      <section class="container" id="container-comp-loisirs">
        <div id="container-comp">
        <h3 id="comp">Compétences</h3>   
        <div class="text-container">
          <ul>
            <li>Administratif</li>
            <li>Commercial</li>
            <li>Comptabilité </li>
            <li>Gestion Administrative</li>
          </ul>

          <h3>Langues</h3>
            <div class="text-container">
              <ul>
                <li>Anglais – Niveau A2</li>
                <li>Espagnol – Niveau A1</li>
              </ul> 
            </div>
          
          
          <h3>Languages</h3>
            <div class="text-container">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JAVASCRIPT</li>
            </ul> 
            </div>

          
          <h3>Informatique</h3>
          <div class="text-container">
          <ul> 
            <li>Access</li>
              <li>Ethnos </li>
              <li>Freemind</li>
              <li>Microsoft Pack Office </li>
              <li>Visual Code</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        </div>             
      </section>  
  </section>
</div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
  border: 3px solid #F2ECD8;
  box-shadow: 0 0 20px 0 #e4e4e4;
  margin: 20px;
  font-size: 20px;
  padding: 20px;
  background-color: rgba(242, 236, 216, 0.5);
}
#global{
  margin: 80px;
}
#section1,#section2{
  display: flex;
  width: 100%;

}
#container-formations{
  display: flex;
  flex-grow: 2;
  flex-direction: column;
}
#container-presentation{
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
#container-stages{
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
#container-comp-loisirs{
  display: flex;
  flex-grow: 2;
}
#container-comp-loisirs{
  flex-direction: row;
}
li{
  list-style: none;
}
#section2{
  flex-wrap: wrap;
  height: 200px;
  margin-bottom: 20px;
}
h3{
  font-size: 30px;
  color: #A58DB0;
  font-weight: normal;
  text-decoration: underline;
}
.text-container{
    font-size: 22px;  
    color: #78748B;
    line-height: 30px;
}
</style>