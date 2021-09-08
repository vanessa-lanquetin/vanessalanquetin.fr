<template>
  <router-view/>
</template>

<style lang="scss">
@import url(~@/assets/css/reset.css);
body{
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family:"Handlee",serif;
  text-align: justify;
}
@media screen and(max-width: 699px) {
  body{
    text-align: center;
  }
}
html {
background-image: linear-gradient(to top, #dbf5f4 80%, rgb(87, 190, 186) 100%);
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
@font-face {
  font-family:"Mali" ;
  src: url(~@/assets/fonts/Mali/Mali-ExtraLightItalic.ttf) format("truetype");
}
</style>
