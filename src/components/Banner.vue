<template>
  <div class="banner-root">
    <img :src="project.imgBanniere" alt="">
    <div class="content">
      <h1>{{ project.titre }}</h1>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import projects from '../assets/datas/data';
import { useRoute } from 'vue-router';
const route = useRoute();

const project = computed(() => projects.find(project => (
  project.id === route.params.projectId
)))

</script>

<style scoped lang="scss">
.banner-root {
  position: relative;
  height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(50%) blur(1px);
  }
  .content {
    z-index: 1;
    position: relative;
    color: white;
    h1 {
      color: white;
    }
  }
}
</style>