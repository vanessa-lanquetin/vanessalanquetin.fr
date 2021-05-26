<template>
  <div class="last-posts-root">
    <h1>Derniers posts:</h1>
      <ul id="containt-LastPosts"> 
        <li>Nouveau projet du 11/11/1111</li>
        <li>Dernier dessin du 11/11/1111</li>
        <li>Update du CV le 11/11/1111</li>
        <li>Update Projet n°3 le 11/11/1111</li>        
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.last-posts-root {
  border: 3px solid #F2ECD8;
  box-shadow: 0 0 20px 0 #e4e4e4;
  margin-right: 15px;

  h1{
  font-size: 30px;
  color: #A58DB0;
  text-decoration: underline;
  font-weight: normal;
  padding-left: 24px;

}
  #containt-LastPosts{
    padding-left: 40px;
    font-size: 22px;  
    color: #78748B;
    line-height: 30px;
    padding-bottom: 30px;
    
  }
}
</style>