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
  background-color: #ffffffc0;
  height: 15px;
  width: 1205px;
  border-radius: 30px;
  margin-top: 109px;
}

@media screen and (max-width: 16z0px) {
  #nav-bar{
    max-width: 90%;
  } 
  #container-nav{
        margin-right: 10%;
  }
}
</style>