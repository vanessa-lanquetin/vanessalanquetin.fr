<template>
  <router-view/>
</template>

<script>
export default {
  setup() {
/*     onMounted(() => {

      ScrollReveal().reveal(".sec-02 .image, .sec-03 .image", {
        delay: 100,
        origin: "top",
      });
      ScrollReveal().reveal(".sec-04 ", {
        delay: 200,
        origin: "left",
        interval: 200,
      });
      ScrollReveal().reveal(".sec-05", {
        delay: 200,
        origin: "bottom",
        interval: 200,
      });
      }, 100);
    }) */
    return {
      
    }
  },
}
</script>

<style lang="scss">
@import '~@fortawesome/fontawesome-free/css/all.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* GLOBAL */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  opacity: 1;
}
body {
  background: #111222;
  color: white;
}
a {
  text-decoration: none;
  color: white;
}
li {
  list-style: none;
}
html {
  scroll-behavior: smooth;
}
section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 120px;
}
.container {
  width: 100%;
  margin: 0 150px;
}
.content {
  display: flex;
  justify-content: space-between;
}
.content .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.text-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 38px;
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
}
.text-blue {
  color: #10e2d7;
  font-style: italic;
}
h3 {
  margin: 0 0 10px 0;
  color: #fa3bd9;
}
#mouse {
  font-size: 1.7em;
  margin-bottom: 10px;
  padding-bottom: 30px;
  border-bottom: 1px white solid;
  width: 100%;
}
section {
  text-align: center;
}
.section-title {
  font-size: 3em;
  margin-bottom: 80px;
}
.link {
  border-bottom: solid 2px #fa3bd9;
}
.link:hover {
  font-weight: bold;
}

/* BARRE DE NAVIGATION */
#nav-list {
  width: 100%;
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: space-around;
}
.item-nav {
  font-size: 1.2em;
  border-bottom: 2px solid #10e2d7;
  transition: 100ms;
}
.item-nav:hover {
  font-size: 1.4em;
  font-weight: bold;
}
button {
  font-size: 0.8em;
  padding: 10px 20px;
  border-radius: 1em;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  cursor: pointer;
  transition: 300ms;
  margin-top: 10px;
  box-shadow: 0 0 5px 2px rgba(206, 206, 206, 0.1);
}
.button:hover {
  transform: scale(1.1);
}

/* @media screen and (max-width:px){
  
} */
@media screen and (max-width:519px){
  h3{
    font-size: 1.3em;
  }
  .section-title{
    font-size: 2.2em;
  }
} 
@media screen and (max-width:300px){
body{
  font-size: 0.7em;
}
} 
</style>
