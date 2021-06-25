<template>
  <div class="chevrons-list">
    <img  class="chevron" id="chevron-haut" src="@/assets/img/chevron-haut.png" alt="chevron-haut">
    <img  class="chevron" id="chevron-bas" src="@/assets/img/chevron-bas.png" alt="chevron-bas">
    <img  class="chevron" id="chevron-gauche" src="@/assets/img/chevron-gauche.png" alt="chevron-gauche">
    <img  class="chevron" id="chevron-droit" src="@/assets/img/chevron-droit.png" alt="chevron-droit">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.chevrons-list {
  .chevron{
    position: absolute;
    width: 25%;
    max-width: 90px;
    top: 800px;
    filter: drop-shadow(0 0 0.75rem crimson);
    &#chevron-droit{
      top: 9%;
      left: 10%;
    }
    &#chevron-gauche{
      top: 9%;
      left: 2.2%;
    }
    &#chevron-haut{
      top: 2%;
      left: 6.2%;
    }
    &#chevron-bas{
      top: 17%;
      left: 6.2%;
    }
  }
}
/* @media screen and (max-width: 940px) {
  .chevron{
    width: 155px;
  }
}
@media screen and (max-width: 690px) {
  .chevron{
    width: 130px;
  }
}
@media screen and (max-width: 533px) {
  .chevron{
    width: 110px;
  }
}
@media screen and (max-width: 400px) {
  .chevron{
    width: 100px;
  }
}
@media screen and (max-width: 230px) {
  .chevron{
    width: 80px;
  }
} */
</style>