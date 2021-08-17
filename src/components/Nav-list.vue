<template>
    <ul id="nav-list" >
      <li><a class="item-nav" href="#presentation">Présentation</a></li>
      <li><a class="item-nav" href="#informations">Informations</a></li>
      <li><a class="item-nav" href="#formations">Formations</a></li>
      <li><a class="item-nav" href="#hobbies">Centres d'intérêts</a></li>
      <li><a class="item-nav" href="#contact">Contact</a></li>
    </ul> 
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#nav-list{
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.item-nav{
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    background-color: rgba(255, 255, 255, 0.191);
    width: fit-content;
    border-radius: 20px;
    border: 1px solid rgba(251, 251, 251, 0.445);
    box-shadow: 1px 1px 1px 1px rgba(255, 255, 255, 0.883);
    color: white;
    font-size: 2em;
    text-decoration: none;
    font-family:"Mali",serif;
    cursor: pointer;
    transition: 300ms;
    &:hover {
      transform: scale(1.1);  
  }
}
@media screen and(max-width: 1188px) {
  #nav-list{
    flex-wrap: wrap;
    justify-content: center;
    
  }
  .item-nav{
    font-size: 1.8em;
    margin: 10px;
  }
}
@media screen and(max-width: 499px){
  .item-nav{
    font-size: 1.2em;
  }
}
</style>