<template>
  <router-view/>
</template>

<style lang="scss">
@import url(~@/assets/css/reset.css);
body{
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-family:"Handlee",serif;
  text-align: justify;
}
html {
  background: linear-gradient(135deg, rgba(246,210,66,1) 5%, rgba(252,128,174,1) 76%, rgba(216,128,252,1) 100%);
}
@font-face {
  font-family:"MonteCarlo-Regular" ;
  src: url(~@/assets/fonts/MonteCarlo/MonteCarlo-Regular.ttf) format("truetype");
}
@font-face{
  font-family:"Handlee" ;
  src: url(~@/assets/fonts/Handlee/Handlee-Regular.ttf) format("truetype");
}
@font-face {
  font-family:"Monofett" ;
  src: url(~@/assets/fonts/Monofett/Monofett-Regular.ttf) format("truetype");
}
</style>
