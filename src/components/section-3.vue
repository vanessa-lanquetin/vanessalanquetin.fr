<template>
  <section class="sec-03">
    <div class="container">
      <h2
        id="formations"
        class="section-title"
        v-scroll-reveal="{ preset: 'left' }"
      >
        Formations
      </h2>
      <div id="content-formations" class="content">
        <div class="image" v-scroll-reveal="{ preset: 'top', delay: 100 }">
          <img id="img2" src="../assets/img/botanic2.webp" alt="jardin botanique" />
        </div>
        <div class="info" v-scroll-reveal="{ preset: 'bottom' }">
          <div>
            <ul id="formations-list" class="text-box">
              <li class="item-formations ">
                <strong>Formation</strong>
                <em class="text-blue"> Prep’Apprentissage</em> –
                <strong>Openclassrooms</strong> ,2021
              </li>
              <li class="item-formations">
                <strong>Formation</strong>
                <em class="text-blue"> Objectif Alternance</em> –
                <strong>Afpa</strong> , 2020
              </li>
              <li class="item-formations">
                <strong>BTS</strong>
                <em class="text-blue"> Niveau Assistant Manager</em> –
                <strong>Lycée Louis Lapicque</strong> , 2017
              </li>
              <li class="item-formations">
                <strong>BAC</strong>
                <em class="text-blue"> Gestion Administration</em> –
                <strong>Lycée Isabelle Viviani</strong> , 2015
              </li>
              <li class="item-formations">
                <strong>BEP</strong>
                <em class="text-blue"> Métiers Services Administratif</em> –
                <strong>Lycée Isabelle Viviani</strong> , 2014
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sec-03 #img2 {
  width: 600px;
  height: 400px;
  opacity: 65%;
  filter: saturate(230%);
}
.sec-03 .content {
  justify-content: center;
  color: #374752;
}
.sec-03 .info {
  text-align: left;
  margin-left: 20px;
  font-size: 1.2em;
}
.sec-03 .text-box{
  max-width: none;
  padding: 10px 20px;
}
.item-formations {
  margin: 40px 0;
}
@media screen and (max-width: 1556px) {
  .sec-03 .container {
    margin: 0 150px;
  }
  .sec-03 #img2 {
    width: 100%;
  }
  .item-formations {
    margin: 30px 0;
  }
}
@media screen and (max-width: 1360px) {
  .sec-03 .container {
    margin: 0 100px;
  }
  .sec-03 .content {
    margin: 0;
  }
  .item-formations {
    margin: 20px 0;
  }
}
@media screen and (max-width: 1071px) {
  .sec-03 .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .sec-03 .info{
    margin-left: 0;
  }
    .sec-03 .container {
    margin: 150px;
  }
.sec-03 #img2 {
  height: auto;
  max-height: 400px;
}
}
@media screen and (max-width: 810px) {
  .sec-03 .text-box {
    margin: 0;
  }
  .sec-03 .content{
    margin: 15px;
  }
    .sec-03 .container {
    margin: 20px;
  }
}
@media screen and (max-width: 602px) {
}
</style>