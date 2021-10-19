<template>
  <section class="sec-03">
      <div class="container">
        <h3 id="formations" class="section-title" v-scroll-reveal="{preset: 'left'}">Formations</h3>
        <div id="content-formations" class="content">
          <div class="image" v-scroll-reveal="{preset: 'top', delay: 100}">
            <img id="img2" src="../assets/Img/img2.webp" alt="" />
          </div>
          <div class="info">
            <div>
              <ul id="formations-list">
                <li class="item-formations">
                  <strong>Formation</strong>
                  <em class="text-blue">Prep’Apprentissage</em> –
                  <strong>Openclassrooms</strong> ,2021
                </li>
                <li class="item-formations">
                  <strong>Formation</strong>
                  <em class="text-blue">Objectif Alternance</em> –
                  <strong>Afpa</strong> , 2020
                </li>
                <li class="item-formations">
                  <strong>BTS</strong>
                  <em class="text-blue">Niveau Assistant Manager</em> –
                  <strong>Lycée Louis Lapicque</strong> , 2017
                </li>
                <li class="item-formations">
                  <strong>BAC</strong>
                  <em class="text-blue">Gestion Administration</em> –
                  <strong>Lycée Isabelle Viviani</strong> , 2015
                </li>
                <li class="item-formations">
                  <strong>BEP</strong>
                  <em class="text-blue">Métiers Services Administratif</em> –
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
export default {

}
</script>

<style lang="scss" scoped>
.sec-03 #img2 {
  width: 600px;
  height: 400px;
  filter: contrast(180%);
}
.sec-03 .content {
  justify-content: center;
  color: white;
}
.sec-03 .info {
  text-align: left;
  margin-left: 20px;
  font-size: 1.2em;
}
.item-formations {
  margin: 40px 0;
}

</style>