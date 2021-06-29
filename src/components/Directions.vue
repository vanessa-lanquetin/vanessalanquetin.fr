<template>
  <div class="chevrons-list">
    <img
      class="chevron"
      id="chevron-haut"
      src="@/assets/img/chevron-haut.png"
      alt="chevron-haut"
    />
    <img
      class="chevron"
      id="chevron-bas"
      src="@/assets/img/chevron-bas.png"
      alt="chevron-bas"
    />
    <img
      class="chevron"
      id="chevron-gauche"
      src="@/assets/img/chevron-gauche.png"
      alt="chevron-gauche"
    />
    <img
      class="chevron"
      id="chevron-droit"
      src="@/assets/img/chevron-droit.png"
      alt="chevron-droit"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.chevrons-list {
  position: fixed;
  right: 25px;
  width: 180px;
  height: 150px;
  .chevron {
    position: absolute;
    width: 80px;
    top: 800px;
    filter: drop-shadow(0 0 0.75rem crimson);
    &#chevron-droit {
      top: 35px;
      left: 105px;
    }
    &#chevron-gauche {
      top: 35px;
      left: 15px;
    }
    &#chevron-haut {
      top: 0px;
      left: 63px;
    }
    &#chevron-bas {
      top: 78px;
      left: 63px;
    }
  }
}
@media screen and (max-width: 940px) {
  .chevrons-list{
    .chevron{
      width: 70px;
    }    
  }

}
@media screen and (max-width: 690px) {
  .chevrons-list{
    .chevron{
      width: 60px;
    }    
  }
}
@media screen and (max-width: 533px) {
  .chevrons-list{
    .chevron{
      width: 60px;
    }    
  }
}
@media screen and (max-width: 400px) {
  .chevrons-list{
    .chevron{
      width: 60px;
    }    
  }  
}
@media screen and (max-width: 270px) {
  .chevrons-list{
    .chevron{
      opacity: 0;
    }    
  }
}
</style>