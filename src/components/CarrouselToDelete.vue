<template>
  <div>
    <div v-if="showCarousel && gallery.length > 1" class="carousel">
      <span class="arrow left" @click="previousSlide">
        <i class="fa fa-chevron-left"></i>
      </span>
      <div v-for="(image, index) in visibleImages" :key="index" class="slide">
        <!-- Contenu de chaque slide du carrousel -->
        <img :src="image" alt="Slide Image" />
      </div>
      <span class="arrow right" @click="nextSlide">
        <i class="fa fa-chevron-right"></i>
      </span>
    </div>
    <div v-else-if="showCarousel && gallery.length === 1" class="carousel">
      <div class="slide">
        <img :src="gallery[0]" alt="Slide Image" />
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import projects from '../assets/datas/data';

const route = useRoute();

const project = computed(() => {
  const projectId = route.params.projectId;
  return projects.find(project => project.id === projectId) || {};
});

const state = reactive({
  currentIndex: 0,
});

const gallery = computed(() => project.value.gallery || []);
const showCarousel = computed(() => gallery.value.length > 0);

const visibleImages = computed(() => {
  const totalImages = gallery.value.length;
  const start = state.currentIndex;
  const end = (state.currentIndex + 2) % totalImages;
  if (end >= start) {
    return gallery.value.slice(start, end + 1);
  } else {
    return [...gallery.value.slice(start), ...gallery.value.slice(0, end + 1)];
  }
});

function previousSlide() {
  state.currentIndex = (state.currentIndex - 1 + gallery.value.length) % gallery.value.length;
}

function nextSlide() {
  state.currentIndex = (state.currentIndex + 1) % gallery.value.length;
}
</script>

<style scoped lang="scss">
.carousel {
  margin: 20px auto;
  width: 80%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.slide {
  flex: 1;
  display: flex;
  justify-content: center;
}

img {
  object-fit: contain;
  object-position: top;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  height: 280px;
  border: 1px solid rgba(0, 0, 0, 0.74);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.arrow,
.arrow i {
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
    transition: 300ms transform;
  }
}

@media (max-width: 980px) {
  .arrow{
    display: none;
  }
  .carousel {
    flex-direction: column;
    gap: 20px;
    margin: auto auto 80px auto;
    height: auto;
    img{
      max-width: 500px;
    }
  }
}
</style>
