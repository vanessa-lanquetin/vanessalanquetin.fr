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
background: rgb(204,129,198);
background: linear-gradient(180deg, rgba(204,129,198,1) 0%, rgba(187,242,255,1) 22%, rgba(253,234,254,1) 33%, rgba(253,234,254,1) 47%, rgba(253,234,254,1) 60%, rgba(187,242,255,1) 74%, rgba(204,129,198,1) 100%);
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
