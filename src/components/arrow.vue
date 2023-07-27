<template>
<a href="#top">
  <i id="arrow" class="fas fa-chevron-circle-up"></i>
</a>
  
</template>

<script>
export default {

}
</script>

<style>
#arrow{
  font-size: 70px;
  color: rgba(230, 151, 209, 0.719);
  position: fixed;
  bottom: 0;
  right: 30px;
  z-index: 20;
  transition: 300ms;
  border-radius: 50%;
  box-shadow: 0px 0px 30px -10px white;
  margin-bottom: 50px;
  transition: 300ms;
}
#arrow:hover,#arrow:focus{
  color: rgba(248, 211, 89, 0.795);
}
@media screen and (max-width: 777px){
  #arrow{
    display: none;
  }

}
</style>