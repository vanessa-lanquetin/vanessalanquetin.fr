<template>
  <div>
    <Project />
    <Carrousel v-if="images?.length" :images='images' class="carousel"/>
  </div>
</template>

<script setup>
import Project from '../components/Project.vue';
import Carrousel from '../components/Carrousel.vue';
import projectData from '../assets/datas/data'; // Importez les données du projet
import { computed, onMounted, ref } from 'vue';
import {useRoute} from 'vue-router'
const route = useRoute()

/** @type {import('vue').Ref<typeof projectData[number] | undefined>} */
  const project = ref()

const images = computed(() => {
  return project.value?.gallery || []
})

onMounted(() => {
  project.value = projectData.find(project => project.id === route.params.projectId);
})
</script>

<style lang="scss" scoped>
.carousel {
  width: 90%;
}
</style>