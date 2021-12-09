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
  color: #f4b183;
  position: fixed;
  bottom: 0;
  right: 30px;
  z-index: 20;
  transition: 300ms;
  border: 1px solid #f4b183;
  border-radius: 50%;
  box-shadow: 0px 0px 30px -10px white;
  margin-bottom: 50px;
  transition: 300ms;
}
#arrow:hover,#arrow:focus{
  color: #f4b083b0;
}
@media screen and (max-width: 777px){
  #arrow{
    display: none;
  }

}
</style>