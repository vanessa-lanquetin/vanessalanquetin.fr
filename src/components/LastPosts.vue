<template>
  <div class="last-posts-root">
    <h1>Derniers posts:</h1>
      <div id="containt-LastPosts"> 
        <div>Nouveau projet du 11/11/1111</div>
        <div>Dernier dessin du 11/11/1111</div>
        <div>Update du CV le 11/11/1111</div>
        <div>Update Projet n°3 le 11/11/1111</div>
        
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.last-posts-root {
  border: 3px solid #F2ECD8;
  box-shadow: 0 0 10px 0 #e4e4e4;

  h1{
  font-size: 30px;
  color: #A58DB0;
  text-decoration: underline;
  font-weight: normal;
  padding-left: 10px;

}
  #containt-LastPosts{
    padding-left: 18px;
    font-size: 20px;  
    color: #78748B;
    line-height: 30px;
  }
}
</style>