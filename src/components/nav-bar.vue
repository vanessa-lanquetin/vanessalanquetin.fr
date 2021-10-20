<template>
  <nav id="nav">
    <a class="container-item" href="">
      <i class="fas fa-graduation-cap"></i>
      <div class="nav-title-item">CV</div>
    </a>
    <a class="container-item" href="">
      <i class="far fa-heart"></i>
      <div class="nav-title-item">Lettre de motivation</div>
    </a>
    <a class="container-item" href="">
      <i class="fas fa-desktop"></i>
      <div class="nav-title-item">Portfolio</div>
    </a>
    <router-link class="container-item" :to="{name: 'contact'}">
      <i class="fas fa-address-book"></i>
      <div class="nav-title-item">Contact</div>
    </router-link>
  </nav>
</template>

<script>
</script>

<style lang="scss" scoped>
nav {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  width: 100%;
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: space-around;
}
#nav-list-mobile {
  display: none;
}
.container-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  padding: 10px;
}
.item-nav {
  font-size: 1.2em;
  border-bottom: 2px solid #10e2d7;
  transition: 100ms;

  &:hover {
    font-size: 1.4em;
    font-weight: bold;
  }
}
@media screen and (max-width: 777px) {
  .container-item div {
    display: none;
  }
  .container-item {
    border-bottom: none;
  }
  nav {
    background: rgba(59, 59, 59, 0.993);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    bottom: 0;
    position: fixed;
    z-index: 20;
  }
  .container-item i {
    font-size: 1.4em;
    padding: 5px;
  }
}
</style>