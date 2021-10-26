<template>
<a href="#nav">
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
  color: #fff;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 20;
  transition: 300ms;
}
  #arrow:hover,#arrow:focus{
    color: #10e2d7;
  }
@media screen and (max-width: 777px){
  #arrow{
    display: none;
  }

}
</style>