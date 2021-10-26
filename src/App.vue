<template>
<div id="app-root">
  <nav-bar/>
  <div id="app-content">
    <router-view/>
  </div>
</div>
</template>

<script>
import navBar from './components/nav-bar.vue'
export default {
  components: { navBar },
  setup() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    return {}
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
  text-align: center;
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
h2 {
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


/* @media screen and (max-width:px){
  
} */
@media screen and (max-width:519px){
  h2{
    font-size: 1.3em;
  }
  .section-title{
    font-size: 1.8em;
  }
  section{
    margin-bottom: 30px;
  }
} 
@media screen and (max-width:300px){
body{
  font-size: 0.7em;
}
} 
</style>


<style lang="scss" scoped>
#app-root {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
#app-content {
  height: calc(var(--vh, 1vh) * 100);
  overflow: auto;
  flex-grow: 1;
}
@media screen and (max-width: 777px) {
  #app-root {
    flex-direction: column-reverse;
  }
}
</style>