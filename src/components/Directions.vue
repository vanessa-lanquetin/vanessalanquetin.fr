<template>
  <div class="chevrons-list">
    <div id="part-top">
      <img
        class="chevron"
        :style="{ filter: `drop-shadow(0 0 0.05rem ${color})` }"
        id="chevron-haut"
        src="@/assets/img/chevron-haut.png"
        alt="chevron-haut"
        @click.stop="$emit('top')"
      />      
    </div>
    <div id="part-middle">
    <img
      class="chevron"
      :style="{ filter: `drop-shadow(0 0 0.05rem ${color})` }"
      id="chevron-gauche"
      src="@/assets/img/chevron-gauche.png"
      alt="chevron-gauche"
      @click.stop="$emit('left')"
    />
    <img
      class="chevron"
      :style="{ filter: `drop-shadow(0 0 0.05rem ${color})` }"
      id="chevron-droit"
      src="@/assets/img/chevron-droit.png"
      alt="chevron-droit"
      @click.stop="$emit('right')"
    />    
    </div>
    <div id="part-bottom">
    <img
      class="chevron"
      :style="{ filter: `drop-shadow(0 0 0.05rem ${color})` }"
      id="chevron-bas"
      src="@/assets/img/chevron-bas.png"
      alt="chevron-bas"
      @click.stop="$emit('bottom')"
    />   
  </div>      
    </div>




</template>

<script>
export default {
  props: {
    color: { default: "white" },
  },
};
</script>

<style lang="scss" scoped>
.chevron{
  width: 40px;
}
#part-top{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 5px;
}
#part-bottom{
  display: flex;
  justify-content: center;
  align-items: center; 
  padding-top: 5px; 
  padding-bottom: 50px;
}
#part-middle{
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
}
.chevrons-list{
  width: 200px;
}
</style>