<template>
<div id="container-nav">
  <div
    id="nav-bar"
    :style="{ filter: `drop-shadow(0 0 0.15rem ${color})` }"
  ></div>  
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
#nav-bar {
  display: flex;
  background-color: #ffffff;
  height: 430px;
  width: 15px;
  border-radius: 30px;
}
@media screen and (max-width: 380px) {
    #nav-bar {
    opacity: 0;
  }
}
  #container-nav{
    justify-content: center;
    align-items: center;
    display: flex;
  }
</style>