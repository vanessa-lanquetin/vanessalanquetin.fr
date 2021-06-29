<template>
  <div class="chevrons-list">
    <img 
      class="chevron"
      :style="{filter: `drop-shadow(0 0 0.75rem ${color})`}"
      id="chevron-haut"
      src="@/assets/img/chevron-haut.png"
      alt="chevron-haut"
      @click.stop="$emit('top')"
    />
    <img
      class="chevron"
      :style="{filter: `drop-shadow(0 0 0.75rem ${color})`}"
      id="chevron-bas"
      src="@/assets/img/chevron-bas.png"
      alt="chevron-bas"
      @click.stop="$emit('bottom')"
    />
    <img
      class="chevron"
      :style="{filter: `drop-shadow(0 0 0.75rem ${color})`}"
      id="chevron-gauche"
      src="@/assets/img/chevron-gauche.png"
      alt="chevron-gauche"
      @click.stop="$emit('left')"
    />
    <img
      class="chevron"
      :style="{filter: `drop-shadow(0 0 0.75rem ${color})`}"
      id="chevron-droit"
      src="@/assets/img/chevron-droit.png"
      alt="chevron-droit"
      @click.stop="$emit('right')"
    />
  </div>
</template>

<script>
export default {
  props: {
    color: {default: 'crimson'}
  }
};
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
    right: 0;
    .chevron{
      width: 70px;
    }    
  }

}
@media screen and (max-width: 690px) {
  .chevrons-list{
    right: 0;
    .chevron{
      width: 60px;
    }    
  }
}
@media screen and (max-width: 533px) {
  .chevrons-list{
    right: 0;
    .chevron{
      width: 60px;
    }    
  }
}
@media screen and (max-width: 400px) {
  .chevrons-list{
    right: 0;
    .chevron{
      width: 60px;
    }    
  }  
}
@media screen and (max-width: 200px) {
  .chevrons-list{
    right: 0;
    .chevron{
      opacity: 0;
    }    
  }
}
</style>