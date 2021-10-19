<template>
  <div class="nav" v-scroll-reveal="{preset: 'left'}">
    <ul id="nav-list">
      <li><a class="item-nav" href="#presentation">Présentation</a></li>
      <li><a class="item-nav" href="#competences">Compétences</a></li>
      <li><a class="item-nav" href="#formations">Formations</a></li>
      <li><a class="item-nav" href="#hobbies">Centres d'intérêts</a></li>
      <li><a class="item-nav" href="#contact">Contact</a></li>
    </ul>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
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

  &:hover {
    font-size: 1.4em;
    font-weight: bold;
  }
}
</style>