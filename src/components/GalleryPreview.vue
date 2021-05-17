<template>
  <div class="gallery-Draw">
    <grid-cell v-for="img in imgArray" :key="img" :img="img.url" :greyscale="greyscale" @click="$emit('click-img', img)"/>
  </div>
</template>

<script>
import gridCell from '@/components/gridCell.vue'
export default  {
  components: { 
    gridCell
  },
  props: {
    imgArray: { default: () => ([])},
    greyscale: { default: false},
  },
}
</script>

<style lang="scss" scoped>
.gallery-Draw{
  display: grid;
  grid-template-columns:repeat(6,1fr) ;
  gap: 5px;
  padding: 0 70px;
  box-sizing: border-box;
}

</style>