<template>
  <img 
    :style="{ filter: `drop-shadow(0 0 0.75rem ${color})` }"
    id="img-home"
    src="@/assets/img/home.png"
    alt="home"
    @click.stop="$emit('top')"
  />
</template>

<script>
export default {
  props: {
    color: { default: "crimson" },
  },
};
</script>

<style lang="scss" scoped>
#img-home {
  position: absolute;
  margin-top: 20px;
  width: 15vmin;
  left: 30px;
  filter: drop-shadow((0 0 0.85rem #9a14f3));
}
</style>