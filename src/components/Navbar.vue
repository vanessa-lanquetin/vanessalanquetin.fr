<template>
  <div class="header-container">
    <div class="overlay" @click="closeSidebar()"></div>
    <div class="trigger" @click="openSidebar()">
      <i class="fas fa-bars"></i>
    </div>
    <div id="header" >
      <router-link to="/">
        <img id="logo" src="@/assets/img/logo.jpg" alt="logo" />
      </router-link>
    </div>  
    <div class="links" @click="closeSidebar()">
      <div id="header-left">
        <router-link to="/cv">CV</router-link>      
        <router-link to="/dessins">DESSINS</router-link>      
      </div>
      <div id="header-right">
        <router-link to="/projets">PROJETS</router-link>      
        <router-link to="/contact">CONTACT</router-link>      
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  setup() {
    const closeSidebar = () => {
      const $header = document.querySelector(".header-container");
      $header.classList.remove("open");
    }
    const openSidebar = () => {
      const $header = document.querySelector(".header-container");
      $header.classList.add("open");
    }
    return {
      closeSidebar,
      openSidebar,
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  margin-bottom: 90px;
  .overlay {
    width: 0;
    height: 100vh;
    background: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 300ms;
  }
  #header{
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #f8edc9;
    background-color: rgba(242, 236, 216, 0.5);
    position: relative;
    img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 2px solid #f8edc9;
    }
  }
  .links {
    display: flex;
    justify-content: space-between;
    margin-bottom: 75px;

    a {
      display: inline-block;
      padding: 10px 60px;
      width: 120px;
      text-align: center;
      font-size: 1.7em;
      color: #A58DB0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    #header-left, #header-right {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
  .trigger {
    display: none;
  }
}




@media screen and (max-width: 1200px) {
  .header-container {
    margin-bottom: 146px;
    .links {
      position: fixed;
      top: 0;
      left: 0;
      flex-direction: column;
      height: 100vh;
      border-right: 1px solid #f8edc9;
      box-shadow: 0 0 10px 0 #e4e4e4;
      background-color: #fff;
      justify-content: flex-start;
      width: 0;
      transition: 300ms;
      overflow: hidden;
      a:hover {
        background-color: rgba(0,0,0,0.05);
        transition: 300ms;
      }
    }
    &.open {
      .links {
        z-index: 1;
        width: 200px;
        #header-left, #header-right{
          display: flex;
          flex-direction: column;
          width: 100%;
        }
      }
      .overlay {
        display: flex;
        width: 100vw;
      }
    }
    .trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 10px;
      top: 50px;
      font-size: 40px;
      transition: 300ms;
      z-index: 1;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      cursor: pointer;
      color: rgba(0,0,0,0.5);
      &:hover {
        background: rgba(0,0,0,0.1);
      }
    }
  }
}

</style>