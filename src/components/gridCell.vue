<template>
  <div class="cell" :class="{greyscale}">
    <img :src="img" alt="">
  </div>
</template>

<script>
export default {
  props: {
    img: {default: ''},
    greyscale: {default: false}
  },
}
</script>

<style lang="scss" scoped>
.cell{
  height:auto;
  border: 2px solid #B2A8B7;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &.greyscale{img {filter: grayscale(100%);}}
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>

