<template>
  <div class="gallery-Draw">
    <grid-cell v-for="img in hrefImg" :key="img" :img="img" :greyscale="true"/>
  </div>
</template>

<script>
import gridCell from '@/components/gridCell.vue'
export default  {
  components: { 
    gridCell
  },
  setup () {
    const hrefImg = []
    return {
      hrefImg,
      gridCell,
    }
  }
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