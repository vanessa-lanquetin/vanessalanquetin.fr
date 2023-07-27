<template>
  <div>
    <Project />
    <!-- <Carrousel :projectId="project.id" /> -->
  </div>
</template>

<script>
import Project from '../components/Project.vue';
// import Carrousel from '../components/Carrousel.vue';
import projectData from '../assets/datas/data'; // Importez les données du projet

export default {
  components: { Project},
  data() {
    return {
      project: {}
    };
  },
  created() {
    this.project = projectData.find(project => project.id === this.$route.params.projectId) || {};
  }
}
</script>
