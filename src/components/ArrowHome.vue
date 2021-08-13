<template>
  <div id="container-arrow">
    <a href="#home"><img src="@/assets/img/chevron-haut.png" alt="flèche"></a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  img{
    width:80px;
  }
  #container-arrow{
  position: fixed;
  width: 25px;
  height: 25px;
  bottom: 90px;
  right: 140px;  
  cursor: pointer;
  transition:300ms;
  &:hover {
    transform: scale(1.1);
  }
}
@media screen and(max-width:1157px){
  #container-arrow{
    display: none;
  }
  
}
</style>