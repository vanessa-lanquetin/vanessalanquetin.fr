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
  color: #fff;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 20;
  transition: 300ms;
  border: 1px solid grey;
  border-radius: 50%;
  box-shadow: 0px 0px 30px -10px white;
  margin-bottom: 50px;
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